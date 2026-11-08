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

  const DEFAULT_ADMIN_ID = String(defaultAdminChatId || '7234943242');
  const PASSWORD = String(adminPassword || 'waEnoi2-cBzL!9z').trim();

  // Helper to check authentication
  async function checkAdminAuth(chatId) {
    return await storage.isChatAdmin(chatId, DEFAULT_ADMIN_ID);
  }

  // Command /start: ask for password
  bot.start(async (ctx) => {
    try {
      const chatId = String(ctx.chat.id);
      await storage.setPendingAction(chatId, 'awaiting_password');
      await ctx.reply(
        'TashCare Admin Portal\n\n' +
        'Пожалуйста, введите пароль администратора для авторизации:'
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
      const state = await storage.getState(DEFAULT_ADMIN_ID);

      const statsText = 
`Статистика TashCare:

• Зарегистрированных волонтеров на сайте: ${users.length}
• Подписчиков User Bot: ${subscribers.length}
• Активный Admin Chat ID: ${state.activeAdminChatId}

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

      // 4. Any other text from unauthenticated user
      await ctx.reply('Для авторизации введите команду /start');
    } catch (err) {
      console.error('Error processing text in Admin Bot:', err.message);
    }
  });

  // Function to notify active admin when a user registers on the website
  async function notifyAdminNewUser(username, metadata = {}) {
    const state = await storage.getState(DEFAULT_ADMIN_ID);
    const activeAdminId = state.activeAdminChatId || DEFAULT_ADMIN_ID;
    const cleanUser = username.replace(/^@/, '').trim();
    const safeUser = cleanUser.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const dateStr = new Date().toLocaleString();

    const notificationHtml = 
`<b>Новая регистрация волонтера на сайте</b>

Пользователь: @${safeUser}
ID: <code>${metadata.id || 'N/A'}</code>
Дата: ${dateStr}

Ссылка: https://t.me/${safeUser}`;

    try {
      await bot.telegram.sendMessage(activeAdminId, notificationHtml, {
        parse_mode: 'HTML',
        reply_markup: {
          inline_keyboard: [
            [{ text: `Открыть @${cleanUser}`, url: `https://t.me/${cleanUser}` }]
          ]
        }
      });
      console.log(`[AdminBot] Notified admin (${activeAdminId}) of new user @${cleanUser}`);
      return true;
    } catch (err) {
      if (err.message && err.message.includes('chat not found')) {
        console.warn(
          `[AdminBot] Admin (${activeAdminId}) hasn't pressed /start on @Tashcare_bot yet.`
        );
      } else {
        console.error(`[AdminBot] Failed to notify admin ${activeAdminId}:`, err.message);
      }
      return false;
    }
  }

  return {
    bot,
    notifyAdminNewUser
  };
}

module.exports = { createAdminBot };
