const { Telegraf } = require('telegraf');
const storage = require('./storage');

function createNormalBot(token, channelUrl = 'https://t.me/tashcareuz') {
  if (!token) {
    throw new Error('Normal Bot token is required.');
  }

  const bot = new Telegraf(token);

  // Global error handler for Normal Bot
  bot.catch((err, ctx) => {
    console.error(`[NormalBot Error] for ${ctx.updateType}:`, err.message);
  });

  // Command /start
  bot.start(async (ctx) => {
    try {
      const user = ctx.from;
      await storage.addSubscriber(ctx.chat.id, user);
      console.log(`[NormalBot] ✅ New subscriber added: ${ctx.chat.id} (@${user.username || 'no_username'})`);

      const firstName = user.first_name || 'друг';
      const welcomeText = 
`Привет, ${firstName}!

Добро пожаловать в официальный бот волонтерского сообщества TashCare.

Здесь мы делимся новостями и анонсами волонтерских инициатив в Ташкенте:
• Экологические проекты и высадка деревьев совместно с «Yashil Makon»
• Помощь приютам для бездомных животных (приют «Второй Шанс»)
• Социальные акции, адресная помощь и забота о городе
• Поддержка для школьников и студентов: выдача официальных справок за участие в мероприятиях

Официальный Telegram-канал сообщества:
${channelUrl}

Введите /help, чтобы просмотреть список доступных команд.`;

      await ctx.reply(welcomeText, {
        reply_markup: {
          inline_keyboard: [
            [{ text: 'Подписаться на канал TashCare', url: channelUrl }]
          ]
        }
      });
    } catch (err) {
      console.error('Error handling /start in Normal Bot:', err.message);
    }
  });

  // Command /help
  bot.help(async (ctx) => {
    try {
      const helpText = 
`Меню TashCare Bot:

/start - Подписаться на анонсы и новости TashCare
/about - Информация о проектах и направлениях
/contacts - Контакты координаторов
/help - Справка

Официальный канал: ${channelUrl}`;
      await ctx.reply(helpText);
    } catch (err) {
      console.error('Error handling /help in Normal Bot:', err.message);
    }
  });

  // Command /about
  bot.command('about', async (ctx) => {
    try {
      const aboutText = 
`О сообществе TashCare:

Наша миссия:
Объединять жителей Ташкента вокруг экологических, социальных и благотворительных инициатив.

Ключевые направления:
1. Эко-клуб и проект «Yashil Makon» - посадка деревьев, уборка парков и озеленение города.
2. Помощь животным - поддержка приютов («Второй Шанс»), закупка кормов и уход.
3. Социальная помощь - адресная поддержка нуждающихся семей и пожилых людей.
4. Молодежные инициативы - совместные мероприятия и волонтерские тренинги.

Для школьников и студентов:
Предоставляются официальные справки об участии в волонтерских мероприятиях для школы или университета.`;

      await ctx.reply(aboutText, {
        reply_markup: {
          inline_keyboard: [
            [{ text: 'Перейти в канал TashCare', url: channelUrl }]
          ]
        }
      });
    } catch (err) {
      console.error('Error handling /about in Normal Bot:', err.message);
    }
  });

  // Command /contacts
  bot.command('contacts', async (ctx) => {
    try {
      const contactsText = 
`Контакты сообщества TashCare:

Официальный Telegram-канал: ${channelUrl}
Координатор регистрации: @Amisha_SSlando (Амирбек)`;
      await ctx.reply(contactsText);
    } catch (err) {
      console.error('Error handling /contacts in Normal Bot:', err.message);
    }
  });

  // Keep subscriber active on any incoming message
  bot.on('message', async (ctx, next) => {
    try {
      if (ctx.chat && ctx.chat.type === 'private') {
        await storage.addSubscriber(ctx.chat.id, ctx.from);
      }
    } catch (err) {
      console.error('Error recording subscriber message:', err.message);
    }
    return next();
  });

  // Broadcast function to send messages to all subscribers
  async function broadcastMessage(text) {
    const subscribers = await storage.getSubscribers();
    let sentCount = 0;
    let failedCount = 0;

    console.log(`[NormalBot] 📢 Starting broadcast to ${subscribers.length} subscribers...`);

    for (const sub of subscribers) {
      try {
        await bot.telegram.sendMessage(sub.chatId, text, {
          parse_mode: 'HTML',
          disable_web_page_preview: false
        }).catch(async () => {
          // Retry without HTML if HTML parsing failed
          await bot.telegram.sendMessage(sub.chatId, text);
        });
        sentCount++;
        console.log(`[NormalBot] ✅ Message delivered to subscriber ${sub.chatId}`);
      } catch (err) {
        console.error(`[NormalBot] ❌ Failed to send broadcast to ${sub.chatId}:`, err.message);
        failedCount++;
      }
    }

    return {
      total: subscribers.length,
      sent: sentCount,
      failed: failedCount
    };
  }

  return {
    bot,
    broadcastMessage
  };
}

module.exports = { createNormalBot };
