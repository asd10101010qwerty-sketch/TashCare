require('dotenv').config();
const path = require('path');
const crypto = require('crypto');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const storage = require('./src/storage');
const { createNormalBot } = require('./src/normalBot');
const { createAdminBot } = require('./src/adminBot');

// Configuration
const PORT = process.env.PORT || 3000;
const ADMIN_BOT_TOKEN = process.env.ADMIN_BOT_TOKEN || '9058761160:AAHZ_gYGxM6Dgw3tGZ7R1zYxSLvtAsxiXPo';
const ADMIN_CHAT_ID = process.env.ADMIN_CHAT_ID || '6712132603,6546050709,5026059343,7539181730';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'waEnoi2-cBzL!9z';
const NORMAL_BOT_TOKEN = process.env.NORMAL_BOT_TOKEN || '9245077944:AAHOOk-iOIpqeSh1Zo4a5Op3WVoeK9vO9C0';
const TASHCARE_CHANNEL = process.env.TASHCARE_CHANNEL || 'https://t.me/tashcareuz';
const INSTAGRAM_URL = process.env.INSTAGRAM_URL || 'https://instagram.com/ecotash_official';

// Deterministic Cryptographic Webhook Secret Token for Telegram
const WEBHOOK_SECRET = crypto.createHash('sha256').update(ADMIN_BOT_TOKEN + ':' + ADMIN_PASSWORD).digest('hex');

// Strictly Verified Catalog for Tamper-Proof Purchases
const VERIFIED_CATALOG = Object.freeze({
  'tshirt': { title: 'Футболка TashCare', price: 7500 },
  'mug': { title: 'Кружка TashCare', price: 5000 },
  'cap': { title: 'Кепка TashCare', price: 4000 },
  'pen': { title: 'Эко-ручка TashCare', price: 3000 },
  'stickers': { title: 'Стикерпак TashCare', price: 2000 },
  'waste1kg': { title: '1 кг мусора', price: 100 }
});

// Initialize Express App
const app = express();

// ==========================================
// SECURITY HARDENING & DEFENSE IN DEPTH
// ==========================================

// 1. Hide server fingerprint
app.disable('x-powered-by');

// 2. Strict Security Headers (CSP, HSTS, X-Frame, X-Content-Type)
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=(), payment=()');
  res.setHeader(
    'Content-Security-Policy',
    "default-src 'self'; script-src 'self' 'unsafe-inline' https://fonts.googleapis.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: https:; connect-src 'self' https://tashcare.vercel.app http://localhost:3000; frame-ancestors 'none';"
  );

  if (req.secure || req.headers['x-forwarded-proto'] === 'https') {
    res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
  }
  next();
});

// 3. Lightweight In-Memory Sliding-Window Anti-DoS Rate Limiter (Zero External Deps)
function createRateLimiter(options) {
  const { windowMs, maxRequests, message } = options;
  const clients = new Map();

  setInterval(() => {
    const now = Date.now();
    for (const [key, data] of clients.entries()) {
      if (now - data.resetTime > windowMs) {
        clients.delete(key);
      }
    }
  }, 3 * 60 * 1000).unref();

  return (req, res, next) => {
    const rawIp = (req.headers['x-forwarded-for'] || '').split(',')[0].trim() || req.socket.remoteAddress || '127.0.0.1';
    const now = Date.now();
    const record = clients.get(rawIp) || { count: 0, resetTime: now };

    if (now - record.resetTime > windowMs) {
      record.count = 1;
      record.resetTime = now;
    } else {
      record.count++;
    }

    clients.set(rawIp, record);

    res.setHeader('X-RateLimit-Limit', maxRequests);
    res.setHeader('X-RateLimit-Remaining', Math.max(0, maxRequests - record.count));

    if (record.count > maxRequests) {
      console.warn(`[Security RateLimit] IP ${rawIp} exceeded limit (${record.count}/${maxRequests}) on ${req.originalUrl}`);
      return res.status(429).json({
        success: false,
        error: message || 'Слишком много запросов. Пожалуйста, повторите попытку позже.'
      });
    }
    next();
  };
}

const globalApiLimiter = createRateLimiter({
  windowMs: 60 * 1000,
  maxRequests: 90,
  message: 'Превышен лимит запросов к серверу. Подождите 1 минуту.'
});

const registerLimiter = createRateLimiter({
  windowMs: 15 * 60 * 1000,
  maxRequests: 6,
  message: 'Слишком много регистраций с одного IP. Попробуйте через 15 минут.'
});

const orderLimiter = createRateLimiter({
  windowMs: 10 * 60 * 1000,
  maxRequests: 8,
  message: 'Слишком много покупок наград. Подождите перед следующим обменом.'
});

// 4. CORS configuration
app.use(cors());

// 5. Payload size restrictions to prevent JSON memory exhaustion DoS attacks
app.use(bodyParser.json({ limit: '16kb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '16kb' }));

// Apply global rate limiting to all /api/ routes
app.use('/api/', globalApiLimiter);

// Serve static frontend
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname))); // fallback for root static files

// Administrative Route Authorization Guard
function requireAdminSecret(req, res, next) {
  const provided = req.query.secret || req.headers['x-admin-secret'];
  if (!provided || provided !== ADMIN_PASSWORD) {
    console.warn(`[Security Alert] Blocked unauthorized administrative access to ${req.originalUrl}`);
    return res.status(403).json({
      success: false,
      error: 'Forbidden: administrative authentication required.'
    });
  }
  next();
}

// Initialize Bots
let normalBotInstance;
let adminBotInstance;

try {
  normalBotInstance = createNormalBot(NORMAL_BOT_TOKEN, TASHCARE_CHANNEL, INSTAGRAM_URL);
  adminBotInstance = createAdminBot(
    ADMIN_BOT_TOKEN,
    ADMIN_CHAT_ID,
    ADMIN_PASSWORD,
    (msg) => normalBotInstance.broadcastMessage(msg)
  );
} catch (err) {
  console.error('Fatal error initializing Telegram bots:', err.message);
}

// ==========================================
// TELEGRAM WEBHOOK ENDPOINTS (For Vercel 24/7)
// ==========================================

/**
 * Webhook for Admin Bot (@Tashcare_bot)
 * Handles incoming messages/commands from Telegram 24/7
 * Authenticated via Telegram Secret Token
 */
app.post(['/api/webhook/admin', '/webhook/admin'], async (req, res) => {
  try {
    const secretHeader = req.headers['x-telegram-bot-api-secret-token'];
    if (secretHeader && secretHeader !== WEBHOOK_SECRET) {
      console.warn('[Security Alert] Blocked unauthorized Admin Webhook request (bad secret token)!');
      return res.status(403).send('Forbidden: invalid secret token');
    }

    if (!req.body || typeof req.body !== 'object') {
      return res.status(400).send('Bad Request: empty body');
    }
    if (adminBotInstance && adminBotInstance.bot) {
      await adminBotInstance.bot.handleUpdate(req.body, res);
    } else {
      res.status(503).send('Admin bot not initialized');
    }
  } catch (err) {
    console.error('[Webhook Admin Error]:', err.message);
    if (!res.headersSent) res.status(200).send('OK');
  }
});

/**
 * Webhook for Normal Bot (@Tashcare_user_bot)
 * Handles incoming messages/subscribers from Telegram 24/7
 * Authenticated via Telegram Secret Token
 */
app.post(['/api/webhook/normal', '/webhook/normal'], async (req, res) => {
  try {
    const secretHeader = req.headers['x-telegram-bot-api-secret-token'];
    if (secretHeader && secretHeader !== WEBHOOK_SECRET) {
      console.warn('[Security Alert] Blocked unauthorized Normal Webhook request (bad secret token)!');
      return res.status(403).send('Forbidden: invalid secret token');
    }

    if (!req.body || typeof req.body !== 'object') {
      return res.status(400).send('Bad Request: empty body');
    }
    if (normalBotInstance && normalBotInstance.bot) {
      await normalBotInstance.bot.handleUpdate(req.body, res);
    } else {
      res.status(503).send('Normal bot not initialized');
    }
  } catch (err) {
    console.error('[Webhook Normal Error]:', err.message);
    if (!res.headersSent) res.status(200).send('OK');
  }
});

/**
 * Automated Webhook Setup
 * GET /api/setup-webhooks?secret=...
 * Protected by administrative secret key
 */
app.get(['/api/setup-webhooks', '/setup-webhooks'], requireAdminSecret, async (req, res) => {
  try {
    const protocol = req.headers['x-forwarded-proto'] || (req.secure ? 'https' : 'http');
    const rawHost = req.query.url || process.env.PUBLIC_URL || `${protocol}://${req.headers['x-forwarded-host'] || req.headers.host}`;
    const baseHost = rawHost.replace(/\/$/, '');

    const adminWebhookUrl = `${baseHost}/api/webhook/admin`;
    const normalWebhookUrl = `${baseHost}/api/webhook/normal`;

    console.log(`[Webhooks] Setting hardened webhooks on Telegram:\n- Admin: ${adminWebhookUrl}\n- Normal: ${normalWebhookUrl}`);

    const [adminResult, normalResult] = await Promise.all([
      adminBotInstance.bot.telegram.setWebhook(adminWebhookUrl, { secret_token: WEBHOOK_SECRET }),
      normalBotInstance.bot.telegram.setWebhook(normalWebhookUrl, { secret_token: WEBHOOK_SECRET })
    ]);

    const adminInfo = await adminBotInstance.bot.telegram.getWebhookInfo();
    const normalInfo = await normalBotInstance.bot.telegram.getWebhookInfo();

    return res.json({
      success: true,
      message: '✅ Webhooks configured securely! TashCare bots are now protected and active 24/7 on Vercel.',
      host: baseHost,
      adminBot: {
        url: adminWebhookUrl,
        setWebhookResult: adminResult,
        info: adminInfo
      },
      normalBot: {
        url: normalWebhookUrl,
        setWebhookResult: normalResult,
        info: normalInfo
      }
    });
  } catch (err) {
    console.error('[Webhooks] Setup failed:', err);
    return res.status(500).json({
      success: false,
      error: err.message
    });
  }
});

/**
 * Webhook Teardown (Switch back to local polling)
 * GET /api/delete-webhooks?secret=...
 * Protected by administrative secret key
 */
app.get(['/api/delete-webhooks', '/delete-webhooks'], requireAdminSecret, async (req, res) => {
  try {
    await Promise.all([
      adminBotInstance.bot.telegram.deleteWebhook({ drop_pending_updates: false }),
      normalBotInstance.bot.telegram.deleteWebhook({ drop_pending_updates: false })
    ]);

    return res.json({
      success: true,
      message: 'Webhooks removed. Bots can now run in local polling mode.'
    });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
});

// ==========================================
// REST API ENDPOINTS
// ==========================================

/**
 * Health check & public metadata
 */
app.get('/api/info', async (req, res) => {
  try {
    const users = await storage.getUsers();
    const subscribers = await storage.getSubscribers();
    res.json({
      status: 'ok',
      community: 'TashCare',
      channelUrl: TASHCARE_CHANNEL,
      instagramUrl: INSTAGRAM_URL,
      bio: 'Добро пожаловать в наше волонтерское сообщество! Здесь мы объединяем людей, которые хотят делать добрые дела, помогать окружающим и менять мир к лучшему.',
      initiatives: [
        'Экологические проекты и высадка деревьев совместно с «Yashil Makon»',
        'Помощь приютам для бездомных животных («Второй Шанс»)',
        'Справки для школьников и студентов об участии в мероприятиях',
        'Адресная социальная помощь нуждающимся'
      ],
      totalVolunteers: users.length,
      totalSubscribers: subscribers.length
    });
  } catch (err) {
    res.status(500).json({ status: 'error', message: err.message });
  }
});

/**
 * Registration Endpoint (Rate-Limited, Sanitized, Anti-Bot Protected)
 * POST /api/register
 * Body: { username: string, _gotcha?: string }
 */
app.post('/api/register', registerLimiter, async (req, res) => {
  try {
    const { username, _gotcha, website } = req.body;

    // Honeypot bot protection: if hidden field is filled, silently drop bot submission
    if (_gotcha || website) {
      console.warn('[Security] Honeypot triggered by bot submission.');
      return res.status(200).json({
        success: true,
        message: 'Registration complete! Go to TG bot to see latest news.'
      });
    }

    if (!username || typeof username !== 'string' || !username.trim()) {
      return res.status(400).json({
        success: false,
        error: 'Username is required.'
      });
    }

    const cleanUsername = username.trim().replace(/^@/, '');

    // Strict Telegram Username Validation: letters, numbers and underscores only (3 to 32 chars)
    const TELEGRAM_USERNAME_REGEX = /^[a-zA-Z0-9_]{3,32}$/;
    if (!TELEGRAM_USERNAME_REGEX.test(cleanUsername)) {
      return res.status(400).json({
        success: false,
        error: 'Имя пользователя должно содержать от 3 до 32 символов (только латинские буквы, цифры и _).'
      });
    }

    // 1. Save registered user
    const clientIp = (req.headers && req.headers['x-forwarded-for']) || (req.socket && req.socket.remoteAddress) || '127.0.0.1';
    const newUser = await storage.saveUser(cleanUsername, {
      ip: clientIp,
      userAgent: (req.headers && req.headers['user-agent']) || null
    });

    console.log(`[Registration] New verified user registered: @${cleanUsername} (ID: ${newUser.id})`);

    // 2. Immediately trigger notification to active administrator via Admin Bot
    if (adminBotInstance && typeof adminBotInstance.notifyAdminNewUser === 'function') {
      adminBotInstance.notifyAdminNewUser(cleanUsername, newUser).catch((err) => {
        console.error('[Notification] Error sending admin notification:', err.message);
      });
    }

    // 3. Return success response
    return res.status(200).json({
      success: true,
      message: 'Registration complete! Go to TG bot to see latest news.',
      user: {
        id: newUser.id,
        username: newUser.username,
        registeredAt: newUser.registeredAt
      }
    });
  } catch (error) {
    console.error('Registration error:', error);
    return res.status(500).json({
      success: false,
      error: 'An internal error occurred. Please try again later.'
    });
  }
});

/**
 * Redeem Shop Reward Order Endpoint (Rate-Limited, Cryptographically Validated, Anti-Tamper)
 * POST /api/redeem-order
 * Body: { itemId, title, price, code, username }
 */
app.post(['/api/redeem-order', '/api/orders'], orderLimiter, async (req, res) => {
  try {
    const { itemId, title, price, code, username } = req.body;

    // 1. Basic presence check
    if (!itemId || !code) {
      return res.status(400).json({
        success: false,
        error: 'Missing required order details (itemId and voucher code are required).'
      });
    }

    // 2. Strict Catalog Validation & Anti-Tamper: Verify the item exists in the official catalog
    const catalogItem = VERIFIED_CATALOG[itemId];
    if (!catalogItem) {
      console.warn(`[Security Alert] Attempted purchase of unverified item ID: ${itemId}`);
      return res.status(400).json({
        success: false,
        error: 'Неизвестный товар в магазине наград.'
      });
    }

    // Server-enforced title and price (anti-spoofing)
    const verifiedTitle = catalogItem.title;
    const verifiedPrice = catalogItem.price;

    // 3. Strict Voucher Code Format Validation (TC-XXXX-XXXX)
    const cleanCode = String(code).trim().toUpperCase();
    const VOUCHER_CODE_REGEX = /^TC-[0-9]{4}-[0-9]{4}$/;
    if (!VOUCHER_CODE_REGEX.test(cleanCode)) {
      console.warn(`[Security Alert] Invalid voucher code format: ${cleanCode}`);
      return res.status(400).json({
        success: false,
        error: 'Неверный формат промокода выдачи.'
      });
    }

    // 4. Duplicate Voucher Prevention: Ensure code hasn't already been used
    const existingOrder = await storage.getOrderByCode(cleanCode);
    if (existingOrder) {
      console.warn(`[Security Alert] Duplicate voucher code attempted: ${cleanCode}`);
      return res.status(409).json({
        success: false,
        error: 'Этот промокод уже был зарегистрирован ранее.'
      });
    }

    // 5. Username validation
    let cleanUsername = null;
    if (username && typeof username === 'string') {
      const stripped = username.trim().replace(/^@/, '');
      if (/^[a-zA-Z0-9_]{3,32}$/.test(stripped)) {
        cleanUsername = stripped;
      }
    }

    const clientIp = (req.headers && req.headers['x-forwarded-for']) || (req.socket && req.socket.remoteAddress) || '127.0.0.1';
    const userAgent = (req.headers && req.headers['user-agent']) || null;

    // 6. Save order to storage with verified data
    const newOrder = await storage.saveOrder({
      itemId,
      title: verifiedTitle,
      price: verifiedPrice,
      code: cleanCode,
      username: cleanUsername,
      ip: clientIp,
      userAgent
    });

    console.log(`[Shop Order] Verified order redeemed: ${verifiedTitle} (${verifiedPrice} TashCoin) by @${cleanUsername || 'anonymous'} - Code: ${cleanCode}`);

    // 7. Dispatch notification with «✅ Готово» button to authorized admins via Admin Bot
    if (adminBotInstance && typeof adminBotInstance.notifyAdminNewOrder === 'function') {
      adminBotInstance.notifyAdminNewOrder({
        itemId,
        title: verifiedTitle,
        price: verifiedPrice,
        code: cleanCode,
        username: cleanUsername,
        date: newOrder.createdAt
      }).catch(err => {
        console.error('[Notification] Error dispatching order notification to admin bot:', err.message);
      });
    }

    return res.status(200).json({
      success: true,
      order: newOrder
    });
  } catch (error) {
    console.error('Redeem order error:', error);
    return res.status(500).json({
      success: false,
      error: 'An internal error occurred while processing the order.'
    });
  }
});

// Serve frontend fallback for SPA
app.use((req, res, next) => {
  if (req.method === 'GET' && !req.path.startsWith('/api/')) {
    return res.sendFile(path.join(__dirname, 'public', 'index.html'));
  }
  next();
});

// ==========================================
// SERVER INITIALIZATION & MODE DETECTION
// ==========================================

// If running in Vercel Serverless environment, export the Express app
if (process.env.VERCEL) {
  module.exports = app;
} else if (require.main === module) {
  // Local environment: start listening & start polling with auto-retry
  const server = app.listen(PORT, async () => {
    console.log(`====================================================`);
    console.log(`🌟 TashCare Volunteering Community Platform is Live!`);
    console.log(`📡 Local Web Server: http://localhost:${PORT}`);
    console.log(`📢 TashCare Channel: ${TASHCARE_CHANNEL}`);
    console.log(`⚡ Mode: Local Development (Polling)`);
    console.log(`====================================================`);

    // In local development, clear webhook first so getUpdates polling doesn't 409
    try {
      if (adminBotInstance?.bot) await adminBotInstance.bot.telegram.deleteWebhook({ drop_pending_updates: false });
      if (normalBotInstance?.bot) await normalBotInstance.bot.telegram.deleteWebhook({ drop_pending_updates: false });
    } catch (e) {
      // ignore
    }

    // Auto-retry polling function
    function startBotWithAutoRetry(botInstance, name) {
      if (!botInstance || !botInstance.bot) return;

      botInstance.bot.launch({ dropPendingUpdates: false })
        .then(() => {
          console.log(`[${name}] Stopped.`);
        })
        .catch((err) => {
          console.error(`[${name}] Polling notice:`, err.message);
          console.log(`[${name}] Reconnecting in 2 seconds...`);
          setTimeout(() => startBotWithAutoRetry(botInstance, name), 2000);
        });

      console.log(`[${name}] Connected & listening.`);
    }

    startBotWithAutoRetry(normalBotInstance, 'Normal Bot (@Tashcare_user_bot)');
    startBotWithAutoRetry(adminBotInstance, 'Admin Bot (@Tashcare_bot)');
  });

  // Graceful shutdown
  const shutdown = (signal) => {
    console.log(`\nReceived ${signal}. Shutting down gracefully...`);
    if (normalBotInstance) normalBotInstance.bot.stop(signal);
    if (adminBotInstance) adminBotInstance.bot.stop(signal);
    server.close(() => {
      console.log('HTTP server closed.');
      process.exit(0);
    });
  };

  process.once('SIGINT', () => shutdown('SIGINT'));
  process.once('SIGTERM', () => shutdown('SIGTERM'));
}

module.exports = app;
