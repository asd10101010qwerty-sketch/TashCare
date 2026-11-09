const { Telegraf } = require('telegraf');
const storage = require('./storage');

function createAdminBot(token, defaultAdminChatId, adminPassword, broadcastFunction) {
  if (!token) {
    throw new Error('Admin Bot token is required.');
  }

  const bot = new Telegraf(token);

  // Global error handler for Admin Bot
  bot.catch((err, ctx) => {
    console.error(`[AdminBot Error] for ${ctx.updateType}:`, err.message);
  });

  // Pure Escaping Helper to prevent Telegram HTML injection
  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // List of all authorized admin IDs (Strict Whitelist)
  const STRICT_ADMIN_IDS = Object.freeze(
    Array.from(new Set([
      '6546050709',
      '5026059343',
      '6712132603',
      '7539181730',
      ...String(defaultAdminChatId || '')
        .split(',')
        .map(s => s.trim())
        .filter(Boolean)
    ]))
  );

  const PASSWORD = String(adminPassword || 'waEnoi2-cBzL!9z').trim();

  // Helper to check authentication strictly against authorized IDs
  async function checkAdminAuth(chatId) {
    const strId = String(chatId);
    return STRICT_ADMIN_IDS.includes(strId);
  }

  // Strict Whitelist Middleware: The bot ONLY interacts with authorized admins!
  // Any stranger or non-admin user is completely ignored (no responses, no prompts, total silence).
  bot.use(async (ctx, next) => {
    const fromId = String(ctx.from?.id || ctx.chat?.id || '');

    if (!STRICT_ADMIN_IDS.includes(fromId)) {
      // Silently drop and ignore any update from non-admin users
      console.log(`[AdminBot Security] Dropped unauthorized access attempt from ID: ${fromId}`);
      return;
    }

    return next();
  });

  // Hide commands from public list and only register them for authorized admin chats
  try {
    bot.telegram.setMyCommands([], { scope: { type: 'default' } }).catch(() => {});
    STRICT_ADMIN_IDS.forEach(adminId => {
      bot.telegram.setMyCommands([
        { command: 'announcement', description: 'Сделать рассылку подписчикам' },
        { command: 'stats', description: 'Статистика волонтеров и бота' },
        { command: 'cancel', description: 'Отмена текущего действия' },
        { command: 'help', description: 'Справка по командам' }
      ], { scope: { type: 'chat', chat_id: adminId } }).catch(() => {});
    });
  } catch (err) {
    // Non-blocking
  }

  // Command /start: welcome the admin
  bot.start(async (ctx) => {
    try {
      const chatId = String(ctx.chat.id);
      await storage.setActiveAdminChatId(chatId);
      await ctx.reply(
        '👋 Добро пожаловать в панель администратора TashCare!\n\n' +
        '🔒 Бот работает в строго приватном режиме (для всех остальных пользователей он отключен и не отвечает).\n\n' +
        'Уведомления о новых волонтерах с сайта приходят в этот чат.\n\n' +
        'Доступные команды:\n' +
        '📢 /announcement — сделать рассылку всем подписчикам\n' +
        '📊 /stats — статистика волонтеров и подписчиков\n' +
        '❓ /help — справка по командам'
      );
    } catch (err) {
      console.error('Error handling /start in Admin Bot:', err.message);
    }
  });

  // Command /cancel: cancel ongoing action
  bot.command('cancel', async (ctx) => {
    try {
      const chatId = String(ctx.chat.id);
      const action = await storage.getPendingAction(chatId);
      if (action) {
        await storage.clearPendingAction(chatId);
        await ctx.reply('Действие отменено. Вы можете ввести /announcement снова, когда будете готовы.');
      } else {
        await ctx.reply('Нет активного действия для отмены.');
      }
    } catch (err) {
      console.error('Error handling /cancel in Admin Bot:', err.message);
    }
  });

  // Command /announcement: prompt for message or handle direct text
  bot.command('announcement', async (ctx) => {
    try {
      const chatId = String(ctx.chat.id);
      const isAuth = await checkAdminAuth(chatId);

      if (!isAuth) {
        await storage.setPendingAction(chatId, 'awaiting_password');
        await ctx.reply(
          'Доступ запрещен. Вы не авторизованы.\n' +
          'Пожалуйста, введите пароль администратора для входа:'
        );
        return;
      }

      // Check if message was provided directly with command: e.g. /announcement Hello everyone
      const rawText = ctx.message && ctx.message.text ? ctx.message.text : '';
      const parts = rawText.split(/\s+/);
      const directMessage = parts.slice(1).join(' ').trim();

      if (directMessage.length > 0) {
        // Direct broadcast
        await executeBroadcast(ctx, directMessage);
        return;
      }

      // Otherwise prompt requirement: "write message that you want to send."
      await storage.setPendingAction(chatId, 'awaiting_announcement');
      await ctx.reply('write message that you want to send.');
    } catch (err) {
      console.error('Error handling /announcement in Admin Bot:', err.message);
    }
  });

  // Helper to execute broadcast safely
  async function executeBroadcast(ctx, text) {
    await ctx.reply('Рассылка сообщения всем подписчикам запущена...');

    if (typeof broadcastFunction === 'function') {
      const result = await broadcastFunction(text);
      let reportMsg = 
        `Рассылка завершена.\n\n` +
        `Всего подписчиков: ${result.total}\n` +
        `Успешно доставлено: ${result.sent}\n` +
        `Ошибок доставки: ${result.failed}`;

      if (result.total === 0) {
        reportMsg += 
          `\n\n⚠️ В базе 0 подписчиков! Чтобы получать рассылку, пользователи (и вы сами для проверки) должны открыть бота @Tashcare_user_bot и нажать кнопку «Старт» (/start).`;
      }

      await ctx.reply(reportMsg);
    } else {
      await ctx.reply('Служба рассылки временно недоступна.');
    }
  }

  // Command /stats
  bot.command('stats', async (ctx) => {
    try {
      const chatId = String(ctx.chat.id);
      const isAuth = await checkAdminAuth(chatId);

      if (!isAuth) {
        await storage.setPendingAction(chatId, 'awaiting_password');
        await ctx.reply('Доступ запрещен. Сначала авторизуйтесь, введя пароль администратора:');
        return;
      }

      const users = await storage.getUsers();
      const subscribers = await storage.getSubscribers();
      const state = await storage.getState();

      const statsText = 
`Статистика TashCare:

• Зарегистрированных волонтеров на сайте: ${users.length}
• Подписчиков User Bot: ${subscribers.length}
• Администраторы: ${STRICT_ADMIN_IDS.join(', ')}

Последние регистрации:
${users.slice(-5).reverse().map((u, i) => `${i + 1}. @${u.username} (${new Date(u.registeredAt).toLocaleDateString()})`).join('\n') || 'Нет данных'}`;

      await ctx.reply(statsText);
    } catch (err) {
      console.error('Error handling /stats in Admin Bot:', err.message);
    }
  });

  // Command /help
  bot.help(async (ctx) => {
    try {
      const helpMsg = 
`Команды Admin Bot:

/start - Начать авторизацию и ввести пароль
/announcement - Подготовить рассылку для подписчиков бота
/stats - Посмотреть статистику пользователей
/cancel - Отменить текущее действие
/help - Показать эту справку`;
      await ctx.reply(helpMsg);
    } catch (err) {
      console.error('Error handling /help in Admin Bot:', err.message);
    }
  });

  // Text message handler
  bot.on('text', async (ctx) => {
    try {
      const chatId = String(ctx.chat.id);
      const text = ctx.message.text.trim();

      // Commands like /start, /announcement, /stats are handled by their own handlers
      if (text.startsWith('/')) {
        return;
      }

      const action = await storage.getPendingAction(chatId);
      const isAuth = await checkAdminAuth(chatId);

      // 1. Handling password input
      if (action === 'awaiting_password' || (!isAuth && text === PASSWORD)) {
        if (text === PASSWORD) {
          await storage.clearPendingAction(chatId);
          await storage.setActiveAdminChatId(chatId);

          await ctx.reply(
            'Доступ разрешен.\n\n' +
            'Вы успешно авторизованы как администратор TashCare. ' +
            'Теперь вы будете получать уведомления при каждой новой регистрации волонтера на сайте.\n\n' +
            'Для рассылки сообщения всем подписчикам введите команду: /announcement'
          );
          console.log(`[AdminBot] Admin authenticated successfully. Chat ID: ${chatId}`);
        } else {
          await ctx.reply('Неверный пароль. Попробуйте еще раз:');
        }
        return;
      }

      // 2. Handling announcement broadcast input
      if (action === 'awaiting_announcement') {
        if (!isAuth) {
          await storage.setPendingAction(chatId, 'awaiting_password');
          await ctx.reply('Сессия не авторизована. Введите пароль:');
          return;
        }

        await storage.clearPendingAction(chatId);
        await executeBroadcast(ctx, text);
        return;
      }

      // 3. Regular text from authenticated admin
      if (isAuth) {
        await ctx.reply('Используйте команду /announcement для рассылки или /stats для просмотра статистики.');
        return;
      }

      // 4. Any other text from unauthenticated user: do nothing
      return;
    } catch (err) {
      console.error('Error processing text in Admin Bot:', err.message);
    }
  });

  // Callback Query Handlers for Orders
  bot.action(/^claim_order:(.+)$/, async (ctx) => {
    try {
      const fromId = String(ctx.from?.id || '');
      if (!STRICT_ADMIN_IDS.includes(fromId)) {
        return ctx.answerCbQuery('⛔ Доступ запрещен. Вы не являетесь администратором.');
      }

      const code = ctx.match[1];
      const existing = await storage.getOrderByCode(code);
      if (existing && existing.status === 'completed') {
        return ctx.answerCbQuery('⚠️ Эта награда уже была выдана ранее!');
      }

      const adminName = ctx.from.username ? `@${escapeHtml(ctx.from.username)}` : escapeHtml(ctx.from.first_name || fromId);
      await storage.markOrderCompleted(code, adminName);

      const oldText = ctx.callbackQuery.message?.text || '';
      const dateStr = new Date().toLocaleString();

      const updatedText = oldText + `\n\n✅ <b>ВЫДАНО (Готово)</b>\n👤 Выдал: ${adminName}\n⏰ Время: ${dateStr}`;

      try {
        await ctx.editMessageText(updatedText, {
          parse_mode: 'HTML',
          reply_markup: {
            inline_keyboard: [
              [{ text: `✅ Выдано (${adminName})`, callback_data: 'order_already_done' }]
            ]
          }
        });
      } catch (editErr) {
        console.warn('[AdminBot] Notice editing order message text:', editErr.message);
      }

      await ctx.answerCbQuery('✅ Награда успешно отмечена как выданная!');
      console.log(`[AdminBot] Order ${code} marked as completed by admin ${adminName}`);
    } catch (err) {
      console.error('[AdminBot] Error claiming order:', err.message);
      await ctx.answerCbQuery('Произошла ошибка при обновлении статуса.').catch(() => {});
    }
  });

  bot.action('order_already_done', async (ctx) => {
    await ctx.answerCbQuery('Эта награда уже была выдана волонтеру. ✅').catch(() => {});
  });

  // Function to notify all active and authorized admins when a user registers on the website
  async function notifyAdminNewUser(username, metadata = {}) {
    const cleanUser = escapeHtml((username || '').replace(/^@/, '').trim());
    const safeId = escapeHtml(metadata.id || 'N/A');
    const dateStr = new Date().toLocaleString();

    const notificationHtml = 
`<b>Новая регистрация волонтера на сайте</b>

Пользователь: @${cleanUser}
ID: <code>${safeId}</code>
Дата: ${dateStr}

Ссылка: https://t.me/${cleanUser}`;

    let sentCount = 0;
    for (const adminId of STRICT_ADMIN_IDS) {
      try {
        await bot.telegram.sendMessage(adminId, notificationHtml, {
          parse_mode: 'HTML',
          reply_markup: {
            inline_keyboard: [
              [{ text: `Открыть @${cleanUser}`, url: `https://t.me/${cleanUser}` }]
            ]
          }
        });
        sentCount++;
        console.log(`[AdminBot] Notified admin (${adminId}) of new user @${cleanUser}`);
      } catch (err) {
        if (err.message && err.message.includes('chat not found')) {
          console.warn(`[AdminBot] Admin (${adminId}) hasn't pressed /start on @Tashcare_bot yet.`);
        } else {
          console.error(`[AdminBot] Failed to notify admin ${adminId}:`, err.message);
        }
      }
    }
    return sentCount > 0;
  }

  // Function to notify all active and authorized admins when a user redeems a shop reward
  async function notifyAdminNewOrder(orderData) {
    const rawUser = (orderData.username || '').replace(/^@/, '').trim();
    const cleanUser = escapeHtml(rawUser);
    const safeUser = cleanUser ? `@${cleanUser}` : 'Не указан';
    const dateStr = orderData.date ? new Date(orderData.date).toLocaleString() : new Date().toLocaleString();
    const safeTitle = escapeHtml(orderData.title || '');
    const safePrice = Number(orderData.price || 0).toLocaleString();
    const code = escapeHtml(orderData.code || '');

    const messageHtml = 
`🛍️ <b>Новая покупка в магазине наград TashCare!</b>

📦 <b>Товар:</b> ${safeTitle}
💰 <b>Цена:</b> ${safePrice} TashCoin
🔑 <b>Код выдачи:</b> <code>${code}</code>
👤 <b>Волонтер:</b> ${safeUser}
📅 <b>Дата покупки:</b> ${dateStr}

Статус: ⏳ <i>Ожидает выдачи</i>

<i>Нажмите кнопку «✅ Готово» ниже, когда выдадите приз волонтеру:</i>`;

    const inlineKeyboard = [
      [{ text: '✅ Готово', callback_data: `claim_order:${code}` }]
    ];
    if (cleanUser) {
      inlineKeyboard.push([{ text: `Открыть профиль @${cleanUser}`, url: `https://t.me/${cleanUser}` }]);
    }

    let sentCount = 0;
    for (const adminId of STRICT_ADMIN_IDS) {
      try {
        await bot.telegram.sendMessage(adminId, messageHtml, {
          parse_mode: 'HTML',
          reply_markup: {
            inline_keyboard: inlineKeyboard
          }
        });
        sentCount++;
        console.log(`[AdminBot] Order notification sent to admin (${adminId}) for code ${code}`);
      } catch (err) {
        if (err.message && err.message.includes('chat not found')) {
          console.warn(`[AdminBot] Admin (${adminId}) hasn't pressed /start on @Tashcare_bot yet.`);
        } else {
          console.error(`[AdminBot] Failed to send order notification to admin ${adminId}:`, err.message);
        }
      }
    }
    return sentCount > 0;
  }

  return {
    bot,
    notifyAdminNewUser,
    notifyAdminNewOrder
  };
}

module.exports = { createAdminBot };
