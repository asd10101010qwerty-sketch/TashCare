require('dotenv').config();
const path = require('path');
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

// Initialize Express App
const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static frontend
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname))); // fallback for root static files

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
 */
app.post(['/api/webhook/admin', '/webhook/admin'], async (req, res) => {
  try {
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
 */
app.post(['/api/webhook/normal', '/webhook/normal'], async (req, res) => {
  try {
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
 * GET /api/setup-webhooks
 * Call this URL once after deploying to Vercel to activate 24/7 webhook mode!
 */
app.get(['/api/setup-webhooks', '/setup-webhooks'], async (req, res) => {
  try {
    const protocol = req.headers['x-forwarded-proto'] || (req.secure ? 'https' : 'http');
    const rawHost = req.query.url || process.env.PUBLIC_URL || `${protocol}://${req.headers['x-forwarded-host'] || req.headers.host}`;
    const baseHost = rawHost.replace(/\/$/, '');

    const adminWebhookUrl = `${baseHost}/api/webhook/admin`;
    const normalWebhookUrl = `${baseHost}/api/webhook/normal`;

    console.log(`[Webhooks] Setting webhooks on Telegram:\n- Admin: ${adminWebhookUrl}\n- Normal: ${normalWebhookUrl}`);

    const [adminResult, normalResult] = await Promise.all([
      adminBotInstance.bot.telegram.setWebhook(adminWebhookUrl),
      normalBotInstance.bot.telegram.setWebhook(normalWebhookUrl)
    ]);

    const adminInfo = await adminBotInstance.bot.telegram.getWebhookInfo();
    const normalInfo = await normalBotInstance.bot.telegram.getWebhookInfo();

    return res.json({
      success: true,
      message: '✅ Webhooks configured successfully! TashCare bots are now active 24/7 on Vercel.',
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
 * GET /api/delete-webhooks
 */
app.get(['/api/delete-webhooks', '/delete-webhooks'], async (req, res) => {
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
      totalSubscribers: subscribers.length,
      isVercel: storage.isVercel,
      hasRedis: storage.hasRedis
    });
  } catch (err) {
    res.status(500).json({ status: 'error', message: err.message });
  }
});

/**
 * Registration Endpoint
 * POST /api/register
 * Body: { username: string }
 */
app.post('/api/register', async (req, res) => {
  try {
    const { username } = req.body;

    if (!username || typeof username !== 'string' || !username.trim()) {
      return res.status(400).json({
        success: false,
        error: 'Username is required.'
      });
    }

    const cleanUsername = username.trim().replace(/^@/, '');
    if (cleanUsername.length < 3 || cleanUsername.length > 32) {
      return res.status(400).json({
        success: false,
        error: 'Username should be between 3 and 32 characters.'
      });
    }

    // 1. Save registered user
    const clientIp = (req.headers && req.headers['x-forwarded-for']) || (req.socket && req.socket.remoteAddress) || '127.0.0.1';
    const newUser = await storage.saveUser(cleanUsername, {
      ip: clientIp,
      userAgent: (req.headers && req.headers['user-agent']) || null
    });

    console.log(`[Registration] New user registered: @${cleanUsername} (ID: ${newUser.id})`);

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
