// ===================================================================
// TashCare — frontend
// ===================================================================
(function () {
  'use strict';

  // -----------------------------------------------------------------
  // Translations
  // -----------------------------------------------------------------
  const T = {
    ru: {
      pageTitle: 'TashCare — Волонтерское сообщество Ташкента',
      navAbout: 'О нас', navPillars: 'Направления', navGame: 'Эко-игра', navShop: 'Магазин', navJoin: 'Стать волонтером',

      heroBadge: 'Волонтерское сообщество • Ташкент',
      heroTitle: 'Делаем Ташкент <em>добрее</em> и&nbsp;<span class="mark">зеленее</span>',
      heroSubtitle: 'TashCare объединяет неравнодушных жителей столицы: высадка деревьев с движением «Yashil Makon», помощь приютам для животных, благотворительные акции и официальные справки для школьников и студентов.',
      btnRegisterHero: 'Стать волонтером',
      btnChannelHero: 'Telegram канал',
      stat1Label: 'деревьев высажено с Yashil Makon',
      stat2Label: 'бесплатные справки учащимся',
      stat3Label: 'поддержка приютов и добрых дел',
      chip1: 'эко-акции по выходным',
      chip2Title: '«Второй Шанс»',
      chip2: 'помощь приюту',

      mq1: 'Высадка деревьев', mq2: 'Помощь приютам', mq3: 'Справки для учащихся', mq4: 'Добрые дела',

      spotlightBadge: 'Канал @tashcareuz',
      spotlightTitle: 'Сообщество людей, которые меняют город',
      spotlightQuote: '«Добро пожаловать в наше волонтерское сообщество! Здесь мы объединяем людей, которые хотят делать добрые дела, помогать окружающим и менять мир к лучшему.»',
      meta1: 'Экологические проекты и высадка деревьев с «Yashil Makon»',
      meta2: 'Помощь приютам для бездомных животных («Второй Шанс»)',
      meta3: 'Официальные справки для школьников и студентов',
      meta4: 'Адресная помощь пожилым людям и семьям',
      btnJoinTgChannel: 'Перейти в канал',
      postSubheader: 'официальный канал',
      postTag: 'Эко-акция',
      postSnippet: 'Приглашаем на высадку деревьев вместе с «Yashil Makon»! Школьникам и студентам — официальные справки. Регистрация: @Amisha_SSlando (Амирбек). Присоединяйтесь к доброму делу! 🌱',
      postBtn: 'Открыть в Telegram',

      pillarsKicker: 'Направления',
      pillarsTitle: 'Чем мы занимаемся',
      pillarsSubtitle: 'Реальные проекты, в которых может принять участие каждый житель Ташкента.',
      pillar1Title: 'Эко-клуб и Yashil Makon',
      pillar1Desc: 'Масштабная высадка саженцев, субботники и озеленение парков и дворов столицы вместе с национальным движением «Yashil Makon».',
      pillar2Title: 'Помощь приютам',
      pillar2Desc: 'Корма, ветеринарная помощь и руки для приютов — в том числе «Второй Шанс».',
      pillar3Title: 'Справки для учащихся',
      pillar3Desc: 'Подтверждающие справки и благодарности школьникам и студентам за участие.',
      pillar4Title: 'Социальная помощь',
      pillar4Desc: 'Адресная поддержка ветеранов, многодетных семей и людей в трудной жизненной ситуации: продукты, вещи и человеческое тепло.',

      regKicker: 'Регистрация',
      regTitle: 'Получите пропуск волонтера',
      regSubtitle: 'Укажите ваш Telegram username — координаторы свяжутся с вами и пригласят на ближайшие акции.',
      regStep1: 'Введите свой Telegram username',
      regStep2: 'Откройте бота @Tashcare_user_bot',
      regStep3: 'Получайте анонсы и приходите на акции',
      passLabel: 'Пропуск волонтера',
      passHolder: 'Владелец',
      passCity: 'Ташкент',
      passStatusPending: 'Ожидает',
      passStatusActive: 'Активен',
      labelUsername: 'Ваш Telegram username',
      inputPlaceholder: 'username',
      btnSubmit: 'Получить',
      submitting: 'Отправка…',
      formHelper: 'Username видят только администраторы сообщества.',
      successMessage: 'Готово! Вы зарегистрированы. Откройте нашего бота, чтобы получать свежие новости.',
      openBotBtn: 'Открыть Telegram-бота',
      emptyUsernameError: 'Пожалуйста, укажите ваш Telegram username.',
      formatError: 'Username: от 3 до 32 символов — латиница, цифры и _.',
      generalError: 'Не удалось подключиться к серверу. Попробуйте чуть позже.',

      gameKicker: 'Эко-игра',
      gameTitle: 'Убери мусор — сохрани парки Ташкента',
      gameSubtitle: 'Перетащи мусор с поляны в подходящий ящик (или нажми на предмет, а затем на ящик). Каждый верно отсортированный предмет — <strong>+1 TashCoin</strong>.',
      gameBalanceLabel: 'Баланс',
      gameStatTrash: 'Мусора на поляне',
      gameStatCleaned: 'Собрано всего',
      gameStatCleanliness: 'Чистота парка',
      btnRespawn: 'Новый мусор',
      arenaTag: 'Tashkent EcoPark',
      arenaTip: 'Тащи мусор в ящик 👇',
      cleanDone: 'Поляна чистая! ✨',
      binPlasticTitle: 'Пластик', binPlasticHint: 'Бутылки, пакеты',
      binGlassTitle: 'Стекло и металл', binGlassHint: 'Бутылки, банки',
      binPaperTitle: 'Бумага и прочее', binPaperHint: 'Стаканы, обертки',
      wrongBin: 'Не тот ящик! Нужен: {bin}',
      sorted: 'Отлично!',

      shopKicker: 'Награды',
      shopTitle: 'Магазин волонтерских наград',
      shopSubtitle: 'Обменивайте заработанные TashCoin на мерч сообщества и эко-награды.',
      shopYouHave: 'У вас',
      shopItem1Cat: 'Мерч', shopItem1Title: 'Футболка TashCare', shopItem1Desc: 'Хлопковая футболка сообщества с логотипом.',
      shopItem2Cat: 'Мерч', shopItem2Title: 'Кружка TashCare', shopItem2Desc: 'Керамическая кружка для чая и кофе с эко-дизайном.',
      shopItem3Cat: 'Мерч', shopItem3Title: 'Кепка TashCare', shopItem3Desc: 'Кепка с вышитым логотипом и регулируемым ремешком.',
      shopItem4Cat: 'Канцелярия', shopItem4Title: 'Эко-ручка TashCare', shopItem4Desc: 'Ручка из переработанного крафт-картона.',
      shopItem5Cat: 'Мерч', shopItem5Title: 'Стикерпак TashCare', shopItem5Desc: 'Виниловые наклейки для ноутбука, бутылки и чехла.',
      shopItem6Cat: 'Эко-вклад', shopItem6Title: '1 кг мусора', shopItem6Desc: 'Сертификат сдачи 1 кг раздельного мусора на переработку.',
      btnExchange: 'Обменять',
      btnConfirm: 'Точно?',
      needMore: 'Не хватает {n} TashCoin. Убери еще мусора на поляне! 🌿',

      modalTitle: 'Вы обменяли: {item}',
      modalCharged: 'С баланса списано {n} TashCoin.',
      modalScreenshotHeading: 'Сделайте скриншот и отправьте @Amisha_SSlando',
      modalScreenshotSub: 'Координатор проверит код и договорится с вами о выдаче приза в Ташкенте.',
      modalItemLabel: 'Награда',
      modalCoordLabel: 'Координатор',
      modalUserLabel: 'Ваш Telegram',
      modalStatusLabel: 'Статус',
      modalStatusPending: 'Ожидает выдачи',
      modalCodeLabel: 'Код выдачи',
      modalBtnSend: 'Написать @Amisha_SSlando',
      modalCloseBtn: 'Закрыть',
      notSpecified: 'не указан',
      copy: 'Копировать', copied: 'Скопировано!',

      bannerTitle: 'Будьте в курсе всех акций',
      bannerSubtitle: 'Анонсы выездов, фотоотчеты, опросы и теплая атмосфера единомышленников — в нашем Telegram-канале.',
      bannerBtn: 'Открыть @tashcareuz',
      footerTagline: 'Волонтерское сообщество Ташкента. Сажаем деревья, помогаем животным и людям.',
      footerNav: 'Навигация', footerSocial: 'Мы в сети',
      footerCity: 'Ташкент, Узбекистан',
      footerRights: 'Все права защищены.'
    },

    uz: {
      pageTitle: 'TashCare — Toshkent ko\'ngillilar jamoasi',
      navAbout: 'Biz haqimizda', navPillars: 'Yo\'nalishlar', navGame: 'Eko-o\'yin', navShop: 'Do\'kon', navJoin: 'Ko\'ngilli bo\'lish',

      heroBadge: 'Ko\'ngillilar jamoasi • Toshkent',
      heroTitle: 'Toshkentni <em>mehribonroq</em> va&nbsp;<span class="mark">yashilroq</span> qilamiz',
      heroSubtitle: 'TashCare poytaxtning faol insonlarini birlashtiradi: «Yashil Makon» bilan daraxt ekish, hayvonlar boshpanalariga ko\'mak, xayriya aksiyalari va o\'quvchilar uchun rasmiy ma\'lumotnomalar.',
      btnRegisterHero: 'Ko\'ngilli bo\'lish',
      btnChannelHero: 'Telegram kanal',
      stat1Label: 'Yashil Makon bilan ekilgan daraxtlar',
      stat2Label: 'o\'quvchilar uchun bepul ma\'lumotnoma',
      stat3Label: 'boshpanalarga ko\'mak va ezgu ishlar',
      chip1: 'har dam olish kuni eko-aksiyalar',
      chip2Title: '«Ikkinchi Imkon»',
      chip2: 'boshpanaga yordam',

      mq1: 'Daraxt ekish', mq2: 'Boshpanalarga yordam', mq3: 'O\'quvchilarga ma\'lumotnoma', mq4: 'Ezgu ishlar',

      spotlightBadge: '@tashcareuz kanali',
      spotlightTitle: 'Shaharni o\'zgartirayotgan insonlar jamoasi',
      spotlightQuote: '«Bizning ko\'ngillilar jamoamizga xush kelibsiz! Bu yerda ezgu ishlar qilishni, atrofdagilarga yordam berishni va dunyoni yaxshi tomonga o\'zgartirishni istagan insonlarni birlashtiramiz.»',
      meta1: '«Yashil Makon» bilan ekologik loyihalar va daraxt ekish',
      meta2: 'Boshpanasiz hayvonlarga ko\'mak («Ikkinchi Imkon»)',
      meta3: 'O\'quvchi va talabalar uchun rasmiy ma\'lumotnomalar',
      meta4: 'Keksalar va oilalarga manzilli yordam',
      btnJoinTgChannel: 'Kanalga o\'tish',
      postSubheader: 'rasmiy kanal',
      postTag: 'Eko-aksiya',
      postSnippet: '«Yashil Makon» bilan birgalikda daraxt ekishga taklif qilamiz! O\'quvchi va talabalarga rasmiy ma\'lumotnomalar beriladi. Ro\'yxatdan o\'tish: @Amisha_SSlando (Amirbek). Ezgu ishga qo\'shiling! 🌱',
      postBtn: 'Telegramda ochish',

      pillarsKicker: 'Yo\'nalishlar',
      pillarsTitle: 'Biz nima qilamiz',
      pillarsSubtitle: 'Toshkentning har bir aholisi ishtirok eta oladigan haqiqiy loyihalar.',
      pillar1Title: 'Eko-klub va Yashil Makon',
      pillar1Desc: 'Milliy «Yashil Makon» harakati bilan birgalikda ko\'chat ekish, hasharlar va poytaxt parklari hamda hovlilarini ko\'kalamzorlashtirish.',
      pillar2Title: 'Boshpanalarga yordam',
      pillar2Desc: 'Ozuqa, veterinariya yordami va boshpanalarga, jumladan «Ikkinchi Imkon»ga ko\'mak.',
      pillar3Title: 'O\'quvchilar uchun ma\'lumotnoma',
      pillar3Desc: 'Ishtirok uchun o\'quvchi va talabalarga tasdiqlovchi ma\'lumotnomalar va tashakkurnomalar.',
      pillar4Title: 'Ijtimoiy ko\'mak',
      pillar4Desc: 'Faxriylar, ko\'p bolali oilalar va qiyin vaziyatdagi insonlarga manzilli yordam: oziq-ovqat, kiyim va insoniy iliqlik.',

      regKicker: 'Ro\'yxatdan o\'tish',
      regTitle: 'Ko\'ngilli propuskini oling',
      regSubtitle: 'Telegram username-ingizni kiriting — koordinatorlar siz bilan bog\'lanib, yaqin aksiyalarga taklif qilishadi.',
      regStep1: 'Telegram username-ingizni kiriting',
      regStep2: '@Tashcare_user_bot botini oching',
      regStep3: 'E\'lonlarni oling va aksiyalarga keling',
      passLabel: 'Ko\'ngilli propuski',
      passHolder: 'Egasi',
      passCity: 'Toshkent',
      passStatusPending: 'Kutilmoqda',
      passStatusActive: 'Faol',
      labelUsername: 'Telegram username-ingiz',
      inputPlaceholder: 'username',
      btnSubmit: 'Olish',
      submitting: 'Yuborilmoqda…',
      formHelper: 'Username faqat jamoa ma\'murlariga ko\'rinadi.',
      successMessage: 'Tayyor! Siz ro\'yxatdan o\'tdingiz. Yangiliklarni olish uchun botimizni oching.',
      openBotBtn: 'Telegram botni ochish',
      emptyUsernameError: 'Iltimos, Telegram username-ingizni kiriting.',
      formatError: 'Username: 3–32 belgi — lotin harflari, raqamlar va _.',
      generalError: 'Serverga ulanib bo\'lmadi. Keyinroq urinib ko\'ring.',

      gameKicker: 'Eko-o\'yin',
      gameTitle: 'Chiqindini yig\'ing — Toshkent parklarini asrang',
      gameSubtitle: 'Chiqindini maydondan mos qutiga torting (yoki buyumni, keyin qutini bosing). Har bir to\'g\'ri saralangan buyum — <strong>+1 TashCoin</strong>.',
      gameBalanceLabel: 'Balans',
      gameStatTrash: 'Maydondagi chiqindi',
      gameStatCleaned: 'Jami yig\'ilgan',
      gameStatCleanliness: 'Park tozaligi',
      btnRespawn: 'Yangi chiqindi',
      arenaTag: 'Toshkent EcoPark',
      arenaTip: 'Chiqindini qutiga torting 👇',
      cleanDone: 'Maydon toza! ✨',
      binPlasticTitle: 'Plastik', binPlasticHint: 'Butilkalar, paketlar',
      binGlassTitle: 'Shisha va metall', binGlassHint: 'Butilkalar, bankalar',
      binPaperTitle: 'Qog\'oz va boshqa', binPaperHint: 'Stakanlar, o\'ramlar',
      wrongBin: 'Noto\'g\'ri quti! Kerak: {bin}',
      sorted: 'Zo\'r!',

      shopKicker: 'Sovrinlar',
      shopTitle: 'Ko\'ngillilar sovrinlar do\'koni',
      shopSubtitle: 'To\'plangan TashCoin tangalarini jamoa merchi va eko-sovrinlarga almashtiring.',
      shopYouHave: 'Sizda',
      shopItem1Cat: 'Merch', shopItem1Title: 'TashCare futbolkasi', shopItem1Desc: 'Logotipli paxta jamoa futbolkasi.',
      shopItem2Cat: 'Merch', shopItem2Title: 'TashCare krujkasi', shopItem2Desc: 'Eko-dizayndagi choy va kofe uchun sopol krujka.',
      shopItem3Cat: 'Merch', shopItem3Title: 'TashCare kepkasi', shopItem3Desc: 'Kashtalangan logotipli, sozlanadigan kepka.',
      shopItem4Cat: 'Kanselyariya', shopItem4Title: 'TashCare eko-ruchkasi', shopItem4Desc: 'Qayta ishlangan kraft kartondan ruchka.',
      shopItem5Cat: 'Merch', shopItem5Title: 'TashCare stikerlari', shopItem5Desc: 'Noutbuk, butilka va g\'ilof uchun vinil stikerlar.',
      shopItem6Cat: 'Eko-hissa', shopItem6Title: '1 kg chiqindi', shopItem6Desc: '1 kg saralangan chiqindini qayta ishlashga topshirish sertifikati.',
      btnExchange: 'Almashtirish',
      btnConfirm: 'Aniqmi?',
      needMore: 'Yana {n} TashCoin yetishmayapti. Maydonda ko\'proq chiqindi yig\'ing! 🌿',

      modalTitle: 'Siz almashtirdingiz: {item}',
      modalCharged: 'Balansdan {n} TashCoin yechildi.',
      modalScreenshotHeading: 'Skrinshot qiling va @Amisha_SSlando ga yuboring',
      modalScreenshotSub: 'Koordinator kodni tekshiradi va Toshkentda sovrinni topshirish haqida kelishadi.',
      modalItemLabel: 'Sovrin',
      modalCoordLabel: 'Koordinator',
      modalUserLabel: 'Telegramingiz',
      modalStatusLabel: 'Holat',
      modalStatusPending: 'Berilishi kutilmoqda',
      modalCodeLabel: 'Berish kodi',
      modalBtnSend: '@Amisha_SSlando ga yozish',
      modalCloseBtn: 'Yopish',
      notSpecified: 'ko\'rsatilmagan',
      copy: 'Nusxalash', copied: 'Nusxalandi!',

      bannerTitle: 'Barcha aksiyalardan xabardor bo\'ling',
      bannerSubtitle: 'Hashar e\'lonlari, fotohisobotlar, so\'rovnomalar va hamfikrlar — Telegram kanalimizda.',
      bannerBtn: '@tashcareuz ni ochish',
      footerTagline: 'Toshkent ko\'ngillilar jamoasi. Daraxt ekamiz, hayvonlar va insonlarga yordam beramiz.',
      footerNav: 'Navigatsiya', footerSocial: 'Ijtimoiy tarmoqlar',
      footerCity: 'Toshkent, O\'zbekiston',
      footerRights: 'Barcha huquqlar himoyalangan.'
    },

    en: {
      pageTitle: 'TashCare — Tashkent Volunteering Community',
      navAbout: 'About', navPillars: 'What we do', navGame: 'Eco-game', navShop: 'Shop', navJoin: 'Volunteer',

      heroBadge: 'Volunteering community • Tashkent',
      heroTitle: 'Making Tashkent <em>kinder</em> &amp;&nbsp;<span class="mark">greener</span>',
      heroSubtitle: 'TashCare unites caring people across the capital: tree planting with «Yashil Makon», animal shelter support, charity drives and official volunteer certificates for students.',
      btnRegisterHero: 'Become a volunteer',
      btnChannelHero: 'Telegram channel',
      stat1Label: 'trees planted with Yashil Makon',
      stat2Label: 'free certificates for students',
      stat3Label: 'shelter support & good deeds',
      chip1: 'eco-drives every weekend',
      chip2Title: '«Second Chance»',
      chip2: 'animal shelter aid',

      mq1: 'Tree planting', mq2: 'Shelter support', mq3: 'Student certificates', mq4: 'Good deeds',

      spotlightBadge: 'Channel @tashcareuz',
      spotlightTitle: 'A community of people changing the city',
      spotlightQuote: '«Welcome to our volunteering community! Here we unite people who want to do good deeds, help others and make the world a better place.»',
      meta1: 'Eco projects & tree planting with «Yashil Makon»',
      meta2: 'Support for animal shelters («Second Chance»)',
      meta3: 'Official certificates for school & university students',
      meta4: 'Direct help for elderly people and families',
      btnJoinTgChannel: 'Open the channel',
      postSubheader: 'official channel',
      postTag: 'Eco-drive',
      postSnippet: 'Join our tree planting with «Yashil Makon»! Official certificates for school and university students. Sign up with @Amisha_SSlando (Amirbek). Be part of something good! 🌱',
      postBtn: 'Open in Telegram',

      pillarsKicker: 'What we do',
      pillarsTitle: 'Our main activities',
      pillarsSubtitle: 'Real projects anyone in Tashkent can take part in.',
      pillar1Title: 'Eco-club & Yashil Makon',
      pillar1Desc: 'Large-scale tree planting, clean-ups and greening of Tashkent parks and courtyards together with the national «Yashil Makon» movement.',
      pillar2Title: 'Animal shelters',
      pillar2Desc: 'Food, vet care and helping hands for local shelters, including «Second Chance».',
      pillar3Title: 'Student certificates',
      pillar3Desc: 'Official participation letters and certificates for school and university students.',
      pillar4Title: 'Community aid',
      pillar4Desc: 'Targeted support for veterans, large families and people in hardship: food, essentials and human warmth.',

      regKicker: 'Sign up',
      regTitle: 'Get your volunteer pass',
      regSubtitle: 'Enter your Telegram username — our coordinators will reach out and invite you to upcoming drives.',
      regStep1: 'Enter your Telegram username',
      regStep2: 'Open the bot @Tashcare_user_bot',
      regStep3: 'Get announcements and join the drives',
      passLabel: 'Volunteer pass',
      passHolder: 'Holder',
      passCity: 'Tashkent',
      passStatusPending: 'Pending',
      passStatusActive: 'Active',
      labelUsername: 'Your Telegram username',
      inputPlaceholder: 'username',
      btnSubmit: 'Get pass',
      submitting: 'Sending…',
      formHelper: 'Your username is visible only to community admins.',
      successMessage: 'Done! You\'re registered. Open our bot to get the latest news.',
      openBotBtn: 'Open Telegram bot',
      emptyUsernameError: 'Please enter your Telegram username.',
      formatError: 'Username: 3–32 characters — letters, numbers and _ only.',
      generalError: 'Could not reach the server. Please try again later.',

      gameKicker: 'Eco-game',
      gameTitle: 'Clean the park, save Tashkent\'s green',
      gameSubtitle: 'Drag trash from the meadow into the right bin (or tap an item, then a bin). Every correctly sorted item earns <strong>+1 TashCoin</strong>.',
      gameBalanceLabel: 'Balance',
      gameStatTrash: 'Trash in meadow',
      gameStatCleaned: 'Total collected',
      gameStatCleanliness: 'Park cleanliness',
      btnRespawn: 'New trash',
      arenaTag: 'Tashkent EcoPark',
      arenaTip: 'Drag trash into a bin 👇',
      cleanDone: 'Meadow is clean! ✨',
      binPlasticTitle: 'Plastic', binPlasticHint: 'Bottles, bags',
      binGlassTitle: 'Glass & metal', binGlassHint: 'Bottles, cans',
      binPaperTitle: 'Paper & other', binPaperHint: 'Cups, wrappers',
      wrongBin: 'Wrong bin! It goes in: {bin}',
      sorted: 'Nice!',

      shopKicker: 'Rewards',
      shopTitle: 'Volunteer reward shop',
      shopSubtitle: 'Exchange your TashCoins for community merch and eco rewards.',
      shopYouHave: 'You have',
      shopItem1Cat: 'Merch', shopItem1Title: 'TashCare T-shirt', shopItem1Desc: 'Cotton community T-shirt with the TashCare logo.',
      shopItem2Cat: 'Merch', shopItem2Title: 'TashCare mug', shopItem2Desc: 'Ceramic mug for tea or coffee with an eco design.',
      shopItem3Cat: 'Merch', shopItem3Title: 'TashCare cap', shopItem3Desc: 'Cap with embroidered logo and adjustable strap.',
      shopItem4Cat: 'Stationery', shopItem4Title: 'TashCare eco-pen', shopItem4Desc: 'Pen made from recycled kraft board.',
      shopItem5Cat: 'Merch', shopItem5Title: 'TashCare sticker pack', shopItem5Desc: 'Vinyl stickers for laptops, bottles and phone cases.',
      shopItem6Cat: 'Eco-action', shopItem6Title: '1 kg of trash', shopItem6Desc: 'Certificate for handing in 1 kg of sorted recyclables.',
      btnExchange: 'Redeem',
      btnConfirm: 'Sure?',
      needMore: 'You need {n} more TashCoin. Clean up more trash in the park! 🌿',

      modalTitle: 'You redeemed: {item}',
      modalCharged: '{n} TashCoin charged from your balance.',
      modalScreenshotHeading: 'Take a screenshot and send it to @Amisha_SSlando',
      modalScreenshotSub: 'The coordinator will verify the code and arrange the prize pickup in Tashkent.',
      modalItemLabel: 'Reward',
      modalCoordLabel: 'Coordinator',
      modalUserLabel: 'Your Telegram',
      modalStatusLabel: 'Status',
      modalStatusPending: 'Pending pickup',
      modalCodeLabel: 'Pickup code',
      modalBtnSend: 'Message @Amisha_SSlando',
      modalCloseBtn: 'Close',
      notSpecified: 'not specified',
      copy: 'Copy', copied: 'Copied!',

      bannerTitle: 'Never miss a drive',
      bannerSubtitle: 'Announcements, photo reports, polls and a warm community of like-minded people — on our Telegram channel.',
      bannerBtn: 'Open @tashcareuz',
      footerTagline: 'Tashkent\'s volunteering community. We plant trees and help animals and people.',
      footerNav: 'Navigate', footerSocial: 'Follow us',
      footerCity: 'Tashkent, Uzbekistan',
      footerRights: 'All rights reserved.'
    }
  };

  // -----------------------------------------------------------------
  // Data
  // -----------------------------------------------------------------
  const TRASH = [
    { type: 'plastic-bottle', bin: 'plastic', c: 'c-blue', name: { ru: 'Пластиковая бутылка', uz: 'Plastik butilka', en: 'Plastic bottle' },
      svg: '<svg viewBox="0 0 48 48"><rect x="19" y="4" width="10" height="6" rx="1.5" fill="#1d4ed8"/><path d="M17 10h14v4l3 5v21a4 4 0 0 1-4 4H18a4 4 0 0 1-4-4V19l3-5Z" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="2.4" stroke-linejoin="round"/><rect x="14" y="24" width="20" height="9" fill="#3b82f6"/></svg>' },
    { type: 'plastic-bag', bin: 'plastic', c: 'c-blue', name: { ru: 'Пакет', uz: 'Paket', en: 'Plastic bag' },
      svg: '<svg viewBox="0 0 48 48"><path d="M10 16h28l-2 24a4 4 0 0 1-4 4H16a4 4 0 0 1-4-4Z" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2.4" stroke-linejoin="round"/><path d="M17 16v-3a7 7 0 0 1 14 0v3" fill="none" stroke="#1d4ed8" stroke-width="2.4" stroke-linecap="round"/><path d="M18 26c2 4 10 4 12 0" fill="none" stroke="#3b82f6" stroke-width="2.4" stroke-linecap="round"/></svg>' },
    { type: 'glass-bottle', bin: 'glass-metal', c: 'c-green', name: { ru: 'Стеклянная бутылка', uz: 'Shisha butilka', en: 'Glass bottle' },
      svg: '<svg viewBox="0 0 48 48"><path d="M21 3h6v9l5 7v21a4 4 0 0 1-4 4h-8a4 4 0 0 1-4-4V19l5-7Z" fill="#86efac" stroke="#15803d" stroke-width="2.4" stroke-linejoin="round"/><rect x="16" y="24" width="16" height="10" rx="1" fill="#fffdf6" stroke="#15803d" stroke-width="2"/><path d="M19 10V6" stroke="#fff" stroke-width="2" stroke-linecap="round" opacity=".7"/></svg>' },
    { type: 'soda-can', bin: 'glass-metal', c: 'c-green', name: { ru: 'Жестяная банка', uz: 'Metall banka', en: 'Soda can' },
      svg: '<svg viewBox="0 0 48 48"><path d="M13 9h22v31a4 4 0 0 1-4 4H17a4 4 0 0 1-4-4Z" fill="#d1d5db" stroke="#15803d" stroke-width="2.4" stroke-linejoin="round"/><ellipse cx="24" cy="9" rx="11" ry="4" fill="#e5e7eb" stroke="#15803d" stroke-width="2.4"/><rect x="13" y="18" width="22" height="14" fill="#22a06b"/><path d="M19 25h10" stroke="#fff" stroke-width="2.4" stroke-linecap="round"/></svg>' },
    { type: 'coffee-cup', bin: 'paper-other', c: 'c-yellow', name: { ru: 'Бумажный стакан', uz: 'Qog\'oz stakan', en: 'Paper cup' },
      svg: '<svg viewBox="0 0 48 48"><path d="M11 12h26l-3 30a3 3 0 0 1-3 2H17a3 3 0 0 1-3-2Z" fill="#fde68a" stroke="#b45309" stroke-width="2.4" stroke-linejoin="round"/><rect x="9" y="7" width="30" height="6" rx="2" fill="#fffdf6" stroke="#b45309" stroke-width="2.4"/><rect x="13" y="22" width="22" height="9" fill="#a16207" opacity=".85"/></svg>' },
    { type: 'snack-wrapper', bin: 'paper-other', c: 'c-yellow', name: { ru: 'Фантик', uz: 'Konfet o\'rami', en: 'Snack wrapper' },
      svg: '<svg viewBox="0 0 48 48"><path d="M4 16l8 4v8l-8 4 4-8Z" fill="#fbbf24" stroke="#b45309" stroke-width="2.2" stroke-linejoin="round"/><path d="M44 16l-8 4v8l8 4-4-8Z" fill="#fbbf24" stroke="#b45309" stroke-width="2.2" stroke-linejoin="round"/><rect x="12" y="17" width="24" height="14" rx="5" fill="#f59e0b" stroke="#b45309" stroke-width="2.4"/><circle cx="24" cy="24" r="3.5" fill="#fffdf6"/></svg>' }
  ];

  const BIN_KEYS = { 'plastic': 'binPlasticTitle', 'glass-metal': 'binGlassTitle', 'paper-other': 'binPaperTitle' };

  // Prices must match VERIFIED_CATALOG on the server
  const PRODUCTS = [
    { id: 'tshirt', n: 1, price: 7500, bg: '#d4f25c',
      svg: '<svg viewBox="0 0 120 110"><path d="M40 8 14 20 4 44l16 7 6-10v61h68V41l6 10 16-7-10-24L80 8c-4 8-11 12-20 12S44 16 40 8Z" fill="#fffdf6" stroke="#0f3d2e" stroke-width="3" stroke-linejoin="round"/><path d="M48 52c0-10 6-15 15-15 0 9-5 15-15 15Z" fill="#2f8f5b"/><path d="M48 52l8-8" stroke="#0f3d2e" stroke-width="2" stroke-linecap="round"/><text x="60" y="74" text-anchor="middle" font-family="Unbounded,sans-serif" font-size="9" font-weight="700" fill="#0f3d2e">TASHCARE</text></svg>' },
    { id: 'mug', n: 2, price: 5000, bg: '#ffd9c2',
      svg: '<svg viewBox="0 0 120 110"><path d="M88 40h8a14 14 0 0 1 0 28h-8" fill="none" stroke="#0f3d2e" stroke-width="7"/><path d="M88 40h8a14 14 0 0 1 0 28h-8" fill="none" stroke="#fffdf6" stroke-width="3"/><path d="M22 26h68v58a14 14 0 0 1-14 14H36a14 14 0 0 1-14-14Z" fill="#fffdf6" stroke="#0f3d2e" stroke-width="3"/><path d="M22 26h68v8H22Z" fill="#e8673c"/><path d="M46 70c0-12 7-18 18-18 0 11-6 18-18 18Z" fill="#2f8f5b"/><path d="M42 6c0 6 6 6 6 12M56 4c0 6 6 6 6 12M70 6c0 6 6 6 6 12" stroke="#0f3d2e" stroke-width="3" stroke-linecap="round" fill="none" opacity=".4"/></svg>' },
    { id: 'cap', n: 3, price: 4000, bg: '#c9e3ff',
      svg: '<svg viewBox="0 0 120 110"><path d="M18 70c0-28 18-46 42-46s42 18 42 46Z" fill="#0f3d2e"/><path d="M60 24v46M38 30c6 12 8 26 8 40M82 30c-6 12-8 26-8 40" stroke="#16503c" stroke-width="2.5"/><circle cx="60" cy="24" r="4" fill="#d4f25c"/><path d="M10 70h100c2 0 3 2 2 4-6 10-28 16-52 16S14 84 8 74c-1-2 0-4 2-4Z" fill="#16503c" stroke="#0f3d2e" stroke-width="3"/><path d="M50 56c0-8 5-12 12-12 0 7-4 12-12 12Z" fill="#d4f25c"/></svg>' },
    { id: 'pen', n: 4, price: 3000, bg: '#f3e3b5',
      svg: '<svg viewBox="0 0 120 110"><g transform="rotate(-38 60 55)"><rect x="18" y="45" width="74" height="20" rx="4" fill="#c99a5b" stroke="#0f3d2e" stroke-width="3"/><path d="M92 45l18 10-18 10Z" fill="#fffdf6" stroke="#0f3d2e" stroke-width="3" stroke-linejoin="round"/><path d="M104 52l6 3-6 3Z" fill="#0f3d2e"/><rect x="10" y="45" width="12" height="20" rx="3" fill="#2f8f5b" stroke="#0f3d2e" stroke-width="3"/><path d="M30 34h30v14" fill="none" stroke="#0f3d2e" stroke-width="3" stroke-linecap="round"/><path d="M40 55h40" stroke="#0f3d2e" stroke-width="2" stroke-dasharray="3 4" opacity=".5"/></g></svg>' },
    { id: 'stickers', n: 5, price: 2000, bg: '#e4d5ff',
      svg: '<svg viewBox="0 0 120 110"><circle cx="40" cy="44" r="26" fill="#d4f25c" stroke="#0f3d2e" stroke-width="3"/><path d="M28 52c0-12 8-18 20-18 0 12-8 18-20 18Z" fill="#0f3d2e"/><g transform="rotate(12 82 64)"><path d="M82 30l7 15 16 2-12 11 3 16-14-8-14 8 3-16-12-11 16-2Z" fill="#ffb547" stroke="#0f3d2e" stroke-width="3" stroke-linejoin="round"/></g><rect x="34" y="70" width="44" height="26" rx="13" fill="#fffdf6" stroke="#0f3d2e" stroke-width="3" transform="rotate(-8 56 83)"/><text x="56" y="88" text-anchor="middle" font-family="Unbounded,sans-serif" font-size="10" font-weight="700" fill="#0f3d2e" transform="rotate(-8 56 83)">eco!</text></svg>' },
    { id: 'waste1kg', n: 6, price: 100, bg: '#c4ebd2',
      svg: '<svg viewBox="0 0 120 110"><path d="M34 34h52l8 58a8 8 0 0 1-8 9H34a8 8 0 0 1-8-9Z" fill="#2f8f5b" stroke="#0f3d2e" stroke-width="3" stroke-linejoin="round"/><path d="M42 34c0-12 4-22 8-22M78 34c0-12-4-22-8-22M50 12c4 6 16 6 20 0" fill="none" stroke="#0f3d2e" stroke-width="3" stroke-linecap="round"/><circle cx="60" cy="66" r="20" fill="#fffdf6" stroke="#0f3d2e" stroke-width="3"/><text x="60" y="71" text-anchor="middle" font-family="Unbounded,sans-serif" font-size="13" font-weight="700" fill="#0f3d2e">1kg</text></svg>' }
  ];

  // -----------------------------------------------------------------
  // Helpers
  // -----------------------------------------------------------------
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const fmt = (n) => Number(n).toLocaleString('ru-RU');
  const fill = (str, vars) => str.replace(/\{(\w+)\}/g, (_, k) => (vars[k] !== undefined ? vars[k] : ''));
  const API = window.location.protocol === 'file:' ? 'http://localhost:3000' : '';
  const USERNAME_RE = /^[a-zA-Z0-9_]{3,32}$/;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  };

  let lang = store.get('tashcare_lang');
  if (!T[lang]) lang = 'ru';
  const t = (k) => (T[lang] && T[lang][k] !== undefined ? T[lang][k] : T.ru[k] || '');

  // -----------------------------------------------------------------
  // Coins (same keys + signature scheme as before, so balances carry over)
  // -----------------------------------------------------------------
  const COIN_KEY = 'tashcare_coins';
  const CLEANED_KEY = 'tashcare_cleaned_count';
  const BINS_KEY = 'tashcare_bin_counts';
  const ORDERS_KEY = 'tashcare_redeem_orders';
  const SIG_KEY = 'tashcare_coin_sig';
  const SALT = 'tashcare_sec_salt_2026_9x!kL';

  function sig(coins, cleaned) {
    let h = 0x811c9dc5;
    const s = `${coins}:${cleaned}:${SALT}`;
    for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 0x01000193); }
    return (h >>> 0).toString(16);
  }
  function getCleaned() { const v = parseInt(store.get(CLEANED_KEY), 10); return isNaN(v) ? 0 : Math.max(0, v); }
  function getCoins() {
    const v = parseInt(store.get(COIN_KEY), 10);
    const coins = isNaN(v) ? 0 : Math.max(0, v);
    if (coins > 0 && store.get(SIG_KEY) !== sig(coins, getCleaned())) {
      store.set(COIN_KEY, '0');
      store.set(SIG_KEY, sig(0, getCleaned()));
      return 0;
    }
    return coins;
  }
  function setCoins(coins, cleaned) {
    store.set(COIN_KEY, String(coins));
    store.set(CLEANED_KEY, String(cleaned));
    store.set(SIG_KEY, sig(coins, cleaned));
  }
  function addCoins(n) { setCoins(getCoins() + n, getCleaned() + n); renderCoins(true); }
  function spendCoins(n) {
    const c = getCoins();
    if (c < n) return false;
    setCoins(c - n, getCleaned());
    renderCoins(true);
    return true;
  }
  function getBins() { try { return JSON.parse(store.get(BINS_KEY) || '{}') || {}; } catch (e) { return {}; } }
  function bumpBin(type) { const b = getBins(); b[type] = (b[type] || 0) + 1; store.set(BINS_KEY, JSON.stringify(b)); }

  function renderCoins(animate) {
    const coins = getCoins();
    $$('[data-coins]').forEach((el) => { el.textContent = fmt(coins); });
    const cleanedEl = $('#parkCleanVal');
    if (cleanedEl) cleanedEl.textContent = fmt(getCleaned());
    const b = getBins();
    $('#binPlasticCount').textContent = fmt(b['plastic'] || 0);
    $('#binGlassCount').textContent = fmt(b['glass-metal'] || 0);
    $('#binPaperCount').textContent = fmt(b['paper-other'] || 0);
    if (animate) {
      $$('.coin-pill, .wallet').forEach((el) => { el.classList.remove('bump'); void el.offsetWidth; el.classList.add('bump'); });
    }
    updateShopState();
  }

  // -----------------------------------------------------------------
  // Toasts
  // -----------------------------------------------------------------
  function toast(msg, icon = 'i-alert') {
    const box = $('#toasts');
    const el = document.createElement('div');
    el.className = 'toast';
    el.innerHTML = `<svg class="ico"><use href="#${icon}"/></svg><span></span>`;
    el.querySelector('span').textContent = msg;
    box.appendChild(el);
    setTimeout(() => { el.classList.add('out'); setTimeout(() => el.remove(), 300); }, 3200);
  }

  // -----------------------------------------------------------------
  // Theme
  // -----------------------------------------------------------------
  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    store.set('tashcare_theme', theme);
    const meta = $('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', theme === 'dark' ? '#07130e' : '#0f3d2e');
  }
  $$('.theme-toggle').forEach((b) => b.addEventListener('click', () => {
    setTheme(document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
  }));

  // -----------------------------------------------------------------
  // Language
  // -----------------------------------------------------------------
  function applyLang(next) {
    lang = T[next] ? next : 'ru';
    store.set('tashcare_lang', lang);
    document.documentElement.lang = lang;
    document.title = t('pageTitle');
    $$('[data-i18n]').forEach((el) => {
      const v = T[lang][el.getAttribute('data-i18n')];
      if (v !== undefined) el.innerHTML = v;
    });
    $$('[data-i18n-placeholder]').forEach((el) => {
      const v = T[lang][el.getAttribute('data-i18n-placeholder')];
      if (v !== undefined) el.setAttribute('placeholder', v);
    });
    $$('[data-lang]').forEach((b) => b.classList.toggle('active', b.dataset.lang === lang));
    $$('.trash').forEach((el) => {
      const d = TRASH.find((x) => x.type === el.dataset.type);
      if (d) { el.querySelector('.tname').textContent = d.name[lang]; el.setAttribute('aria-label', d.name[lang]); }
    });
    renderShop();
    refreshPass();
  }
  $$('[data-lang]').forEach((b) => b.addEventListener('click', () => applyLang(b.dataset.lang)));

  // -----------------------------------------------------------------
  // Nav: hide on scroll, active link, drawer
  // -----------------------------------------------------------------
  const nav = $('#nav');
  let lastY = window.scrollY;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    const drawerOpen = $('#drawer').classList.contains('open');
    nav.classList.toggle('hide', !drawerOpen && y > lastY && y > 300 && !draggingNow);
    lastY = y;
  }, { passive: true });

  const navLinks = $$('.nav-links a');
  const sectionObs = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        navLinks.forEach((a) => a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id));
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  ['about', 'pillars', 'join', 'game', 'shop'].forEach((id) => { const s = document.getElementById(id); if (s) sectionObs.observe(s); });

  const burger = $('#burger');
  const drawer = $('#drawer');
  function setDrawer(open) {
    drawer.classList.toggle('open', open);
    drawer.setAttribute('aria-hidden', String(!open));
    burger.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
    nav.classList.remove('hide');
  }
  burger.addEventListener('click', () => setDrawer(!drawer.classList.contains('open')));
  $$('.drawer a').forEach((a) => a.addEventListener('click', () => setDrawer(false)));
  window.addEventListener('resize', () => { if (window.innerWidth > 1100 && drawer.classList.contains('open')) setDrawer(false); });

  // -----------------------------------------------------------------
  // Reveal on scroll + count-up
  // -----------------------------------------------------------------
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const siblings = $$('.reveal', el.parentElement);
      const idx = Math.max(0, siblings.indexOf(el));
      el.style.transitionDelay = Math.min(idx, 5) * 70 + 'ms';
      el.classList.add('in');
      revealObs.unobserve(el);
      $$('[data-count]', el).forEach(countUp);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  $$('.reveal').forEach((el) => revealObs.observe(el));

  function countUp(el) {
    const target = parseInt(el.dataset.count, 10);
    if (reduceMotion) { el.textContent = target; return; }
    const start = performance.now();
    const dur = 1600;
    const step = (now) => {
      const p = Math.min(1, (now - start) / dur);
      el.textContent = Math.round(target * (1 - Math.pow(1 - p, 4)));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  // -----------------------------------------------------------------
  // Volunteer pass + registration
  // -----------------------------------------------------------------
  const regForm = $('#regForm');
  const input = $('#usernameInput');
  const submitBtn = $('#submitBtn');
  const passName = $('#passName');
  const alertBox = $('#alertBox');

  function passIdFor(name) {
    let h = 0;
    for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) >>> 0;
    return 'TC-' + String(1000 + (h % 9000));
  }
  function refreshPass() {
    const typed = input.value.trim().replace(/^@/, '');
    const saved = store.get('tashcare_registered_user');
    const name = typed || saved || '';
    passName.textContent = '@' + (name || 'username');
    passName.classList.toggle('empty', !name);
    $('#passId').textContent = name ? passIdFor(name.toLowerCase()) : 'TC-0000';
    const active = !!saved && (!typed || typed.toLowerCase() === saved.toLowerCase());
    const st = $('#passStatus');
    st.textContent = active ? t('passStatusActive') : t('passStatusPending');
    st.classList.toggle('ok', active);
  }
  input.addEventListener('input', () => {
    input.value = input.value.replace(/\s/g, '');
    refreshPass();
  });

  function showNotice(type, msg, withBot) {
    alertBox.hidden = false;
    alertBox.className = 'notice ' + (type === 'ok' ? 'ok' : 'err');
    $('#alertIcon use').setAttribute('href', type === 'ok' ? '#i-check' : '#i-alert');
    $('#alertMessage').textContent = msg;
    const act = $('#alertAction');
    act.innerHTML = '';
    if (withBot) {
      const a = document.createElement('a');
      a.href = 'https://t.me/Tashcare_user_bot';
      a.target = '_blank'; a.rel = 'noopener noreferrer';
      a.innerHTML = '<svg class="ico"><use href="#i-tg"/></svg><span></span>';
      a.querySelector('span').textContent = t('openBotBtn');
      act.appendChild(a);
    }
  }
  function fieldError(msg) {
    showNotice('err', msg);
    const f = $('.field');
    f.classList.remove('shake'); void f.offsetWidth; f.classList.add('shake');
    input.focus();
  }

  regForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    alertBox.hidden = true;
    const name = input.value.trim().replace(/^@/, '');
    if (!name) return fieldError(t('emptyUsernameError'));
    if (!USERNAME_RE.test(name)) return fieldError(t('formatError'));

    const label = $('#submitBtnText');
    submitBtn.disabled = true;
    label.innerHTML = `<span class="spinner"></span> ${t('submitting')}`;
    try {
      const res = await fetch(`${API}/api/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: name, _gotcha: $('#_gotcha').value })
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.success) {
        store.set('tashcare_registered_user', name);
        input.value = '';
        refreshPass();
        showNotice('ok', t('successMessage'), true);
      } else {
        showNotice('err', data.error || t('generalError'));
      }
    } catch (err) {
      showNotice('err', t('generalError'));
    } finally {
      submitBtn.disabled = false;
      label.textContent = t('btnSubmit');
    }
  });

  // -----------------------------------------------------------------
  // Eco game
  // -----------------------------------------------------------------
  const meadow = $('#parkArena');
  const layer = $('#trashContainer');
  const binsDock = $('#parkBinsDock');
  const bins = $$('.bin', binsDock);
  const MAX_ON_FIELD = 10;
  let selected = null;
  let draggingNow = false;
  let refillTimer = null;

  // --- sounds (WebAudio, no files) ---
  let ctx = null;
  function tone(type, f1, f2, dur, vol) {
    try {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      if (!ctx) ctx = new AC();
      if (ctx.state === 'suspended') ctx.resume();
      const now = ctx.currentTime;
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.type = type;
      o.frequency.setValueAtTime(f1, now);
      o.frequency.exponentialRampToValueAtTime(f2, now + dur * 0.4);
      g.gain.setValueAtTime(vol, now);
      g.gain.exponentialRampToValueAtTime(0.001, now + dur);
      o.connect(g); g.connect(ctx.destination);
      o.start(now); o.stop(now + dur);
    } catch (e) {}
  }
  const chime = () => { tone('sine', 660, 990, 0.3, 0.18); setTimeout(() => tone('sine', 990, 1320, 0.25, 0.1), 70); };
  const buzz = () => tone('sawtooth', 170, 90, 0.28, 0.12);

  function updateFieldStats() {
    const count = layer.children.length - layer.querySelectorAll('.gone').length;
    $('#trashCountVal').textContent = count;
    const pct = Math.round(Math.max(0, Math.min(1, 1 - count / MAX_ON_FIELD)) * 100);
    $('#cleanlinessVal').textContent = pct + '%';
    $('#cleanMeter').style.width = pct + '%';
    return count;
  }

  function pickSpot() {
    const existing = $$('.trash:not(.gone)', layer).map((el) => [parseFloat(el.style.left), parseFloat(el.style.top)]);
    let best = null; let bestD = -1;
    for (let i = 0; i < 14; i++) {
      const x = 9 + Math.random() * 82;
      const y = 22 + Math.random() * 58;
      const d = existing.reduce((m, [ex, ey]) => Math.min(m, Math.hypot(ex - x, (ey - y) * 0.6)), 999);
      if (d > bestD) { bestD = d; best = [x, y]; }
      if (d > 16) break;
    }
    return best;
  }

  function spawnOne() {
    const d = TRASH[Math.floor(Math.random() * TRASH.length)];
    const el = document.createElement('div');
    el.className = 'trash ' + d.c;
    el.dataset.type = d.type;
    el.setAttribute('role', 'button');
    el.setAttribute('tabindex', '0');
    el.setAttribute('aria-label', d.name[lang]);
    el.innerHTML = d.svg + '<span class="tname"></span>';
    el.querySelector('.tname').textContent = d.name[lang];
    const [x, y] = pickSpot();
    el.style.left = x + '%';
    el.style.top = y + '%';
    el.style.setProperty('--rot', (Math.random() * 40 - 20).toFixed(1) + 'deg');
    el.style.animationDelay = (Math.random() * 0.25).toFixed(2) + 's';
    attachDrag(el, d);
    el.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); select(selected === el ? null : el); }
    });
    layer.appendChild(el);
  }

  function spawnBatch(n = 8) {
    clearTimeout(refillTimer);
    layer.innerHTML = '';
    select(null);
    $('#cleanBanner').hidden = true;
    for (let i = 0; i < n; i++) spawnOne();
    updateFieldStats();
  }

  function select(el) {
    if (selected) selected.classList.remove('selected');
    selected = el;
    if (el) el.classList.add('selected');
    binsDock.classList.toggle('awaiting', !!el);
  }

  function binAt(x, y) {
    return bins.find((b) => {
      const r = b.getBoundingClientRect();
      return x >= r.left - 14 && x <= r.right + 14 && y >= r.top - 18 && y <= r.bottom + 14;
    }) || null;
  }

  function attachDrag(el, d) {
    el.addEventListener('pointerdown', (e) => {
      if (e.button !== undefined && e.button !== 0) return;
      if (el.classList.contains('gone')) return;
      e.preventDefault();
      el.setPointerCapture && el.setPointerCapture(e.pointerId);
      const sx = e.clientX; const sy = e.clientY;
      let moved = false;
      let hot = null;

      const move = (ev) => {
        const dx = ev.clientX - sx; const dy = ev.clientY - sy;
        if (!moved && Math.hypot(dx, dy) < 6) return;
        if (!moved) {
          moved = true; draggingNow = true;
          select(null);
          el.classList.add('dragging');
          binsDock.classList.add('awaiting');
        }
        el.style.setProperty('--dx', dx + 'px');
        el.style.setProperty('--dy', dy + 'px');
        const b = binAt(ev.clientX, ev.clientY);
        if (b !== hot) { if (hot) hot.classList.remove('hot'); hot = b; if (hot) hot.classList.add('hot'); }
        // auto-scroll a little when dragging near viewport bottom on small screens
        if (ev.clientY > window.innerHeight - 40) window.scrollBy(0, 8);
      };

      const up = (ev) => {
        el.removeEventListener('pointermove', move);
        el.removeEventListener('pointerup', up);
        el.removeEventListener('pointercancel', up);
        draggingNow = false;
        if (hot) hot.classList.remove('hot');
        binsDock.classList.remove('awaiting');
        el.classList.remove('dragging');

        if (!moved) { select(selected === el ? null : el); return; }

        const target = ev.type === 'pointercancel' ? null : binAt(ev.clientX, ev.clientY);
        if (target) { tryDrop(el, d, target); return; }

        // drop back onto the meadow at the new spot (clamped)
        const mr = meadow.getBoundingClientRect();
        const er = el.getBoundingClientRect();
        const cx = ((er.left + er.width / 2 - mr.left) / mr.width) * 100;
        const cy = ((er.top + er.height / 2 - mr.top) / mr.height) * 100;
        if (cx < 4 || cx > 96 || cy < 8 || cy > 94) {
          resetOffset(el);
        } else {
          el.style.transition = 'none';
          el.style.left = cx + '%';
          el.style.top = cy + '%';
          el.style.setProperty('--dx', '0px');
          el.style.setProperty('--dy', '0px');
          void el.offsetWidth;
          el.style.transition = '';
        }
      };

      el.addEventListener('pointermove', move);
      el.addEventListener('pointerup', up);
      el.addEventListener('pointercancel', up);
    });
  }

  function resetOffset(el) {
    el.style.setProperty('--dx', '0px');
    el.style.setProperty('--dy', '0px');
  }

  function tryDrop(el, d, bin) {
    if (d.bin !== bin.dataset.bin) {
      buzz();
      bin.classList.remove('nope'); void bin.offsetWidth; bin.classList.add('nope');
      setTimeout(() => bin.classList.remove('nope'), 600);
      const msg = document.createElement('div');
      msg.className = 'fx-nope';
      msg.textContent = '✕ ' + fill(t('wrongBin'), { bin: t(BIN_KEYS[d.bin]) });
      bin.appendChild(msg);
      setTimeout(() => msg.remove(), 1800);
      resetOffset(el);
      select(null);
      return;
    }

    // success: fly into the bin
    select(null);
    const br = bin.getBoundingClientRect();
    const er = el.getBoundingClientRect();
    const curDx = parseFloat(el.style.getPropertyValue('--dx')) || 0;
    const curDy = parseFloat(el.style.getPropertyValue('--dy')) || 0;
    const binCx = br.left + Math.min(46, br.width / 2);
    const binCy = br.top + br.height / 2;
    el.style.setProperty('--dx', curDx + (binCx - (er.left + er.width / 2)) + 'px');
    el.style.setProperty('--dy', curDy + (binCy - (er.top + er.height / 2)) + 'px');
    el.classList.add('gone');
    bin.classList.add('hot');
    setTimeout(() => {
      bin.classList.remove('hot');
      bin.classList.remove('gulp'); void bin.offsetWidth; bin.classList.add('gulp');
    }, 260);

    chime();
    bumpBin(d.bin);
    addCoins(1);

    const fx = document.createElement('div');
    fx.className = 'fx-coin';
    fx.innerHTML = '+1 <svg><use href="#i-coin"/></svg><span></span>';
    fx.querySelector('span').textContent = t('sorted');
    const card = $('#arenaCard').getBoundingClientRect();
    fx.style.left = (br.left - card.left + br.width / 2) + 'px';
    fx.style.top = (br.top - card.top - 30) + 'px';
    $('#arenaCard').appendChild(fx);
    setTimeout(() => fx.remove(), 1000);

    setTimeout(() => {
      el.remove();
      const left = updateFieldStats();
      if (left === 0) {
        $('#cleanBanner').hidden = false;
        refillTimer = setTimeout(() => spawnBatch(8), 2200);
      }
    }, 380);
    updateFieldStats();
  }

  // tap-to-select then tap a bin (mobile / keyboard friendly)
  bins.forEach((b) => {
    const go = () => {
      if (!selected) return;
      const d = TRASH.find((x) => x.type === selected.dataset.type);
      tryDrop(selected, d, b);
    };
    b.addEventListener('click', go);
    b.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go(); } });
  });
  meadow.addEventListener('pointerdown', (e) => { if (e.target === meadow || e.target.closest('.meadow-deco')) select(null); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') select(null); });

  $('#respawnTrashBtn').addEventListener('click', () => spawnBatch(8));

  // -----------------------------------------------------------------
  // Shop
  // -----------------------------------------------------------------
  const grid = $('#shopGrid');
  const confirmTimers = {};

  function renderShop() {
    grid.innerHTML = PRODUCTS.map((p) => `
      <article class="product" data-id="${p.id}">
        <div class="product-art" style="--pc:${p.bg}">
          <span class="product-cat">${t('shopItem' + p.n + 'Cat')}</span>
          ${p.svg}
        </div>
        <div class="product-body">
          <h3>${t('shopItem' + p.n + 'Title')}</h3>
          <p>${t('shopItem' + p.n + 'Desc')}</p>
          <div class="product-progress"><i></i></div>
          <div class="product-foot">
            <span class="price"><svg class="coin"><use href="#i-coin"/></svg>${fmt(p.price)}</span>
            <button type="button" class="btn" data-buy="${p.id}">${t('btnExchange')}</button>
          </div>
        </div>
      </article>`).join('');
    updateShopState();
  }

  function updateShopState() {
    const coins = getCoins();
    $$('.product', grid).forEach((card) => {
      const p = PRODUCTS.find((x) => x.id === card.dataset.id);
      card.classList.toggle('can', coins >= p.price);
      card.querySelector('.product-progress i').style.width = Math.min(100, (coins / p.price) * 100) + '%';
    });
  }

  grid.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-buy]');
    if (!btn) return;
    const p = PRODUCTS.find((x) => x.id === btn.dataset.buy);
    const coins = getCoins();
    if (coins < p.price) {
      toast(fill(t('needMore'), { n: fmt(p.price - coins) }));
      const card = btn.closest('.product');
      card.animate([{ transform: 'translateX(0)' }, { transform: 'translateX(-6px)' }, { transform: 'translateX(6px)' }, { transform: 'translateX(0)' }], { duration: 320 });
      return;
    }
    // two-step confirm so coins aren't spent by accident
    if (!btn.classList.contains('confirm')) {
      btn.classList.add('confirm');
      btn.textContent = t('btnConfirm');
      clearTimeout(confirmTimers[p.id]);
      confirmTimers[p.id] = setTimeout(() => { btn.classList.remove('confirm'); btn.textContent = t('btnExchange'); }, 3000);
      return;
    }
    clearTimeout(confirmTimers[p.id]);
    btn.classList.remove('confirm');
    btn.textContent = t('btnExchange');
    buy(p);
  });

  function buy(p) {
    if (!spendCoins(p.price)) return;
    const code = `TC-${Math.floor(1000 + Math.random() * 9000)}-${Math.floor(1000 + Math.random() * 9000)}`;
    const user = store.get('tashcare_registered_user') || input.value.trim().replace(/^@/, '');
    const title = t('shopItem' + p.n + 'Title');
    const serverTitle = T.ru['shopItem' + p.n + 'Title'];

    try {
      const orders = JSON.parse(store.get(ORDERS_KEY) || '[]');
      const list = Array.isArray(orders) ? orders : [];
      list.push({ id: p.id, title: serverTitle, price: p.price, code, username: user, date: new Date().toISOString() });
      store.set(ORDERS_KEY, JSON.stringify(list));
    } catch (e) {}

    fetch(`${API}/api/redeem-order`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ itemId: p.id, title: serverTitle, price: p.price, code, username: user })
    }).catch(() => {});

    $('#shopModalTitle').textContent = fill(t('modalTitle'), { item: title });
    $('#shopModalSubtitle').textContent = fill(t('modalCharged'), { n: fmt(p.price) });
    $('#modalItemVal').textContent = title;
    $('#modalUserVal').textContent = user ? '@' + user : t('notSpecified');
    $('#voucherCodeDisplay').textContent = code;
    $('#copyVoucherTxt').textContent = t('copy');
    openModal();
  }

  // -----------------------------------------------------------------
  // Modal
  // -----------------------------------------------------------------
  const modal = $('#shopModal');
  let lastFocus = null;
  function openModal() {
    lastFocus = document.activeElement;
    modal.hidden = false;
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    setTimeout(() => $('.modal-x', modal).focus(), 50);
  }
  function closeModal() {
    modal.hidden = true;
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastFocus) lastFocus.focus();
  }
  $$('[data-close]', modal).forEach((el) => el.addEventListener('click', closeModal));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !modal.hidden) closeModal(); });

  $('#copyVoucherBtn').addEventListener('click', () => {
    const code = $('#voucherCodeDisplay').textContent.trim();
    const done = () => {
      $('#copyVoucherTxt').textContent = t('copied');
      setTimeout(() => { $('#copyVoucherTxt').textContent = t('copy'); }, 2000);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(code).then(done).catch(() => {});
    } else {
      const tmp = document.createElement('textarea');
      tmp.value = code; document.body.appendChild(tmp); tmp.select();
      try { document.execCommand('copy'); done(); } catch (e) {}
      tmp.remove();
    }
  });

  // -----------------------------------------------------------------
  // Init
  // -----------------------------------------------------------------
  $('#year').textContent = new Date().getFullYear();
  $('#passYear').textContent = new Date().getFullYear();
  applyLang(lang);
  renderCoins(false);
  spawnBatch(8);
})();
