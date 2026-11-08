# 🧩 TashCare Volunteering Community Platform

Full-stack web application and dual Telegram Bot integration built for the official **TashCare 🧩** volunteering community in Tashkent ([https://t.me/tashcareuz](https://t.me/tashcareuz)).

---

## 🌟 About TashCare 🧩 Community

> *"🌍 Добро пожаловать в наше волонтёрское сообщество! Здесь мы объединяем людей, которые хотят делать добрые дела, помогать окружающим и менять мир к лучшему."*

TashCare is an active grassroots volunteering and charity community in Tashkent, Uzbekistan. Key initiatives include:
- 🌳 **«Yashil Makon» Eco-Drives**: Joint tree planting campaigns, park cleanups, and urban greening across Tashkent in cooperation with the national environmental movement *Yashil Makon*.
- 🐾 **Animal Shelter Support**: Regular supply runs, medical aid, and hands-on help for local Tashkent animal shelters (including shelter *«Второй Шанс»* / `@vtoroyshansuz`).
- 🏫 **Official Participation Certificates**: Providing official verification letters and certificates for school and university students taking part in community volunteering events.
- 🛍️ **Youth Community & Geek-Shop**: TashCare's pop-culture club and merchandise shop ([@geekshopuzz](https://t.me/geekshopuzz)) offering badges, pins, and collectibles supporting community causes.
- 📩 **Coordination**: Led by community coordinator Amirbek ([@Amisha_SSlando](https://t.me/Amisha_SSlando)).

---

## ⚡ 24/7 Работа на Vercel (Telegram Webhooks)

### Почему Vercel требует Webhook вместо Polling?
Vercel — это **Serverless-платформа** (бессерверная среда). Обычный метод `bot.launch()` (long polling) держит постоянное соединение, из-за чего на Vercel бот засыпает через 10–15 секунд после отсутствия запросов.

### Как сделана работа 24/7:
1. **Telegram Webhooks**: Мы настроили серверные эндпоинты:
   - `POST /api/webhook/admin` — моментальный прием сообщений для `@Tashcare_bot`
   - `POST /api/webhook/normal` — моментальный прием сообщений для `@Tashcare_user_bot`
   В момент, когда пользователь нажимает кнопку или пишет боту, сам Telegram за доли миллисекунды отправляет HTTP POST-запрос на ваш Vercel. Vercel мгновенно просыпается, обрабатывает команду и отвечает пользователю. Бот **никогда не спит и работает 24/7 абсолютно бесплатно**.
2. **Многошаговые команды (`/announcement`)**: Состояния ввода сообщений и авторизация администратора сохраняются в хранилище, поэтому рассылки работают без сбоев на любых серверных инстансах.
3. **Хранилище данных**:
   - **Локально**: данные сохраняются в `data/`.
   - **На Vercel**: поддерживается **Upstash Redis / Vercel KV** (бесплатное облачное хранилище, 10 000 команд в день). Если переменные не заданы, приложение использует кэш и папку `/tmp/tashcare_data` без падений `EROFS`.

---

## 🚀 Пошаговая инструкция: Деплой на Vercel за 2 минуты

### Шаг 1. Загрузите проект на GitHub
Создайте репозиторий на GitHub и отправьте в него код:
```bash
git init
git add .
git commit -m "TashCare 24/7 Platform"
git branch -M main
git remote add origin <ВАШ_GITHUB_URL>
git push -u origin main
```

### Шаг 2. Импортируйте проект в Vercel
1. Перейдите на [vercel.com](https://vercel.com) и нажмите **Add New Project**.
2. Выберите ваш GitHub-репозиторий.
3. В разделе **Environment Variables** добавьте следующие переменные:
   - `ADMIN_BOT_TOKEN` = `9058761160:AAHZ_gYGxM6Dgw3tGZ7R1zYxSLvtAsxiXPo`
   - `ADMIN_CHAT_ID` = `7234943242`
   - `ADMIN_PASSWORD` = `waEnoi2-cBzL!9z`
   - `NORMAL_BOT_TOKEN` = `9245077944:AAHOOk-iOIpqeSh1Zo4a5Op3WVoeK9vO9C0`
   - `TASHCARE_CHANNEL` = `https://t.me/tashcareuz`
4. *(Рекомендуется для вечного сохранения подписчиков)*:
   В панели Vercel перейдите в **Storage** ➔ **Create Database** ➔ **KV / Upstash Redis** и подключите базу к проекту. Переменные `KV_REST_API_URL` и `KV_REST_API_TOKEN` добавятся автоматически!
5. Нажмите **Deploy**.

### Шаг 3. Активация вебхуков в 1 клик
После успешного деплоя Vercel выдаст вам домен (например, `https://tashcare.vercel.app`).
Просто откройте в браузере ссылку:
👉 **`https://<ваш-домен-vercel>.vercel.app/api/setup-webhooks`**

Вы увидите ответ:
```json
{
  "success": true,
  "message": "✅ Webhooks configured successfully! TashCare bots are now active 24/7 on Vercel."
}
```
**Готово!** Оба бота переведены в режим 24/7 и отвечают мгновенно.

---

## 💻 Локальный запуск на компьютере (Local Dev)

Если вы хотите запустить проект локально на своем компьютере:
```bash
npm run dev
```
Сервер автоматически очистит вебхуки и запустит ботов в режиме локального поллинга.
Сайт будет доступен по адресу: [http://localhost:3000](http://localhost:3000).

---

## 🤖 Telegram Боты

- **👑 Admin Bot**: `@Tashcare_bot`
  - Токен: `9058761160:AAHZ_gYGxM6Dgw3tGZ7R1zYxSLvtAsxiXPo`
  - Пароль: `waEnoi2-cBzL!9z`
  - ID администратора по умолчанию: `7234943242` (@Sprint383)
  - Команды: `/start`, `/announcement`, `/stats`, `/cancel`, `/help`
  - Мгновенные уведомления о каждой регистрации волонтера на сайте.
  - Рассылка новостей всем подписчикам User Bot.

- **🤖 Normal Bot**: `@Tashcare_user_bot`
  - Токен: `9245077944:AAHOOk-iOIpqeSh1Zo4a5Op3WVoeK9vO9C0`
  - Автоматически приветствует волонтеров и рассказывает об эко-проектах TashCare.
  - Сохраняет подписчиков и принимает рассылки от администраторов.
  - Команды: `/start`, `/about`, `/contacts`, `/help`.
