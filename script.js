// ===================================================================
// TashCare Platform - Interactive Frontend Script
// ===================================================================

const ICONS = {
  sun: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`,
  moon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`,
  check: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
  alert: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>`
};

const TRANSLATIONS = {
  ru: {
    heroBadge: 'Официальное волонтерское сообщество • Ташкент',
    heroTitle: 'Вместе делаем Ташкент <span class="highlight">добрее и чище</span>',
    heroSubtitle: 'TashCare объединяет неравнодушных жителей столицы: совместная высадка деревьев с движением «Yashil Makon», помощь приютам для животных, благотворительные акции и официальные справки для школьников и студентов.',
    btnRegisterHero: 'Стать волонтером',
    btnChannelHero: 'Telegram Канал',
    stat1Number: '500+',
    stat1Label: 'Деревьев высажено с Yashil Makon',
    stat2Number: '100%',
    stat2Label: 'Бесплатные справки учащимся',
    stat3Number: '24/7',
    stat3Label: 'Поддержка приютов и добрых дел',
    regBadge: 'Электронный пропуск волонтера',
    regTitle: 'Регистрация волонтера',
    regSubtitle: 'Укажите ваш Telegram username для связи и участия в волонтерских проектах TashCare.',
    labelUsername: 'Put YOUR username:',
    inputPlaceholder: 'username (без @)',
    btnSubmit: 'Зарегистрироваться',
    submitting: 'Отправка...',
    formHelper: 'Ваш username будет доступен только активным администраторам сообщества.',
    successMessage: 'Регистрация завершена! Перейдите в TG бот, чтобы увидеть свежие новости.',
    openBotBtn: 'Перейти в Telegram Bot',
    emptyUsernameError: 'Пожалуйста, укажите ваш Telegram username.',
    shortUsernameError: 'Имя пользователя должно содержать не менее 3 символов.',
    generalError: 'Не удалось подключиться к серверу. Попробуйте снова чуть позже.',

    // Channel Spotlight
    spotlightBadge: 'Канал сообщества @tashcareuz',
    spotlightTitle: 'О волонтерском сообществе TashCare',
    spotlightQuote: '«Добро пожаловать в наше волонтерское сообщество! Здесь мы объединяем людей, которые хотят делать добрые дела, помогать окружающим и менять мир к лучшему.»',
    meta1: 'Экологические проекты и высадка деревьев совместно с «Yashil Makon»',
    meta2: 'Помощь приютам для бездомных животных (приют «Второй Шанс»)',
    meta3: 'Официальные справки и сертификаты для школьников и студентов',
    meta4: 'Адресная социальная помощь пожилым людям и семьям',
    btnJoinTgChannel: 'Перейти в канал @tashcareuz',

    // Preview post
    postHeader: 'TashCare',
    postSubheader: 'Официальный канал сообщества',
    postTag: 'Экологическая инициатива',
    postSnippet: 'Приглашаем принять участие в высадке деревьев совместно с организацией «Yashil Makon»! Для школьников и студентов предоставляются официальные справки. Регистрация участников: @Amisha_SSlando (Амирбек). Присоединяйтесь к доброму делу!',
    postBtn: 'Открыть пост в Telegram',

    // Initiatives
    pillarsTitle: 'Ключевые направления деятельности',
    pillarsSubtitle: 'Реальные проекты, в которых каждый житель Ташкента может принять участие.',
    pillar1Title: 'Эко-клуб и Yashil Makon',
    pillar1Desc: 'Масштабная высадка саженцев, субботники и озеленение столичных парков и дворов.',
    pillar2Title: 'Помощь приютам животных',
    pillar2Desc: 'Закупка кормов, ветеринарная помощь и поддержка приютов (в том числе «Второй Шанс»).',
    pillar3Title: 'Справки для учащихся',
    pillar3Desc: 'Выдача подтверждающих справок и благодарностей для школьников и студентов за участие.',
    pillar4Title: 'Социальная помощь',
    pillar4Desc: 'Адресная поддержка ветеранов, многодетных семей и людей в трудной жизненной ситуации.',

    bannerTitle: 'Подпишитесь на канал TashCare',
    bannerSubtitle: 'Официальные анонсы выездов, фотоотчеты, опросы и теплая атмосфера единомышленников.',
    bannerBtn: 'Открыть канал @tashcareuz',
    navChannel: 'Telegram Канал',
    footerRights: 'Все права защищены.',

    // Eco Game & Shop Translations
    gameNavLabel: 'Игра',
    btnBackHome: 'Наверх к сообществу',
    gameBalanceLabel: 'Баланс:',
    gameBadge: 'Эко-игра TashCare • Сортируй мусор',
    gameTitle: 'Убери мусор — сохрани парки Ташкента!',
    gameSubtitle: 'Зажимай и перетаскивай мусор с поляны прямо в подходящий ящик внизу. За каждый утилизированный предмет ты получаешь <strong>+1 TashCoin</strong>. Трать накопленные коины в магазине наград прямо под игрой!',
    gameStatTrash: 'Мусора на поляне',
    gameStatCleaned: 'Собрано предметов',
    gameStatCleanliness: 'Чистота парка',
    btnRespawn: 'Новый мусор',
    arenaTag: 'Парковая зона «Tashkent EcoPark»',
    arenaTip: 'Зажми мусор и тащи его в ящик внизу 👇',
    binsDockTitle: 'Ящики раздельного сбора (тащите мусор сюда):',

    binPlasticTag: '🔵 Синий ящик',
    binPlasticTitle: 'Пластик',
    binPlasticHint: 'Бутылки, пакеты',

    binGlassTag: '🟢 Зеленый ящик',
    binGlassTitle: 'Стекло & Металл',
    binGlassHint: 'Бутылки, банки',

    binPaperTag: '🟡 Желтый ящик',
    binPaperTitle: 'Бумага & Прочее',
    binPaperHint: 'Стаканы, фантики',

    binDropTarget: 'Бросай сюда',

    shopBadge: 'Награды за эко-коины',
    shopTitle: 'Магазин волонтерских наград',
    shopSubtitle: 'Обменивайте заработанные TashCoin на памятный мерч, полезные эко-товары и именные справки. <em>(Цены и список товаров настраиваются администратором).</em>',

    shopItem1Cat: 'Эко-Мерч',
    shopItem1Title: 'Футболка TashCare',
    shopItem1Desc: 'Фирменная хлопковая футболка сообщества из 100% органического эко-хлопка с логотипом.',

    shopItem2Cat: 'Посуда & Мерч',
    shopItem2Title: 'Кружка TashCare',
    shopItem2Desc: 'Качественная керамическая кружка для чая и кофе с фирменным эко-дизайном сообщества.',

    shopItem3Cat: 'Канцелярия',
    shopItem3Title: 'Эко-ручка TashCare',
    shopItem3Desc: 'Экологичная шариковая ручка из переработанного крафт-картона и биоразлагаемых материалов.',

    shopItem4Cat: 'Эко-Мерч',
    shopItem4Title: 'Стикерпак TashCare',
    shopItem4Desc: 'Набор глянцевых влагостойких виниловых наклеек TashCare для ноутбука, бутылки и чехла.',

    shopItem5Cat: 'Эко-Вклад',
    shopItem5Title: '1 кг мусора',
    shopItem5Desc: 'Сертификат сдачи 1 кг раздельного мусора на переработку и вклад в очистку парков Ташкента.',

    btnExchange: 'Обменять',
    modalSuccessTitle: 'Награда успешно оформлена!',
    modalSuccessDesc: 'Вы обменяли коины на',
    modalContactDesc: 'Для получения награды покажите этот код нашему координатору <strong>@Amisha_SSlando</strong> в Telegram для согласования получения приза в Ташкенте.',
    modalCloseBtn: 'Понятно, закрыть',
    modalScreenshotHeading: 'Теперь заскриньте и киньте @Amisha_SSlando',
    modalScreenshotSub: 'Сделайте скриншот этого окна и скиньте нашему координатору @Amisha_SSlando в Telegram для получения приза.',
    modalItemLabel: 'Товар / Награда:',
    modalCoordLabel: 'Координатор:',
    modalUserLabel: 'Ваш Telegram:',
    modalStatusLabel: 'Статус:',
    modalStatusPending: 'Ожидает выдачи',
    modalBtnSend: 'Кинуть @Amisha_SSlando'
  },
  en: {
    heroBadge: 'Official Volunteering Community • Tashkent',
    heroTitle: 'Empowering Volunteers, <span class="highlight">Transforming Tashkent</span>',
    heroSubtitle: 'TashCare unites passionate people in Tashkent: tree-planting eco-drives with Yashil Makon, animal shelter support, community aid, and student volunteer certificates.',
    btnRegisterHero: 'Register as Volunteer',
    btnChannelHero: 'Join Telegram Channel',
    stat1Number: '500+',
    stat1Label: 'Trees Planted with Yashil Makon',
    stat2Number: '100%',
    stat2Label: 'Free Student Certificates',
    stat3Number: '24/7',
    stat3Label: 'Animal Shelter Aid & Community Care',
    regBadge: 'Volunteer Pass Application',
    regTitle: 'Volunteer Registration',
    regSubtitle: 'Enter your Telegram username to connect with the TashCare volunteer community.',
    labelUsername: 'Put YOUR username:',
    inputPlaceholder: 'username (without @)',
    btnSubmit: 'Register as Volunteer',
    submitting: 'Submitting...',
    formHelper: 'Your username will be shared only with active community administrators.',
    successMessage: 'Registration complete! Go to TG bot to see latest news.',
    openBotBtn: 'Open Telegram Bot',
    emptyUsernameError: 'Please enter your Telegram username.',
    shortUsernameError: 'Username must be at least 3 characters long.',
    generalError: 'Could not connect to the server. Please try again later.',

    // Channel Spotlight
    spotlightBadge: 'Official Channel @tashcareuz',
    spotlightTitle: 'Inside the TashCare Community',
    spotlightQuote: '«Welcome to our volunteering community! Here we unite people who want to do good deeds, help others, and make Tashkent a greener and kinder city.»',
    meta1: 'Tree planting campaigns in collaboration with «Yashil Makon»',
    meta2: 'Shelter assistance & care for rescued animals (Vtoroy Shans)',
    meta3: 'Official certificates & excuse letters for school and university students',
    meta4: 'Direct community assistance for families and elders in need',
    btnJoinTgChannel: 'Visit @tashcareuz on Telegram',

    // Preview post
    postHeader: 'TashCare',
    postSubheader: 'Official Community Updates',
    postTag: 'Ecological Action',
    postSnippet: 'Tree Planting Campaign! In partnership with the nationwide ecological organization «Yashil Makon», we are planting trees across Tashkent. Official certificates provided for all participants! Join our channel to register with coordinator @Amisha_SSlando.',
    postBtn: 'Open Post in Telegram',

    // Initiatives
    pillarsTitle: 'Our Main Activities in Tashkent',
    pillarsSubtitle: 'Real initiatives organized by our team and community volunteers.',
    pillar1Title: 'Yashil Makon Eco-Drives',
    pillar1Desc: 'Joint tree planting, greening avenues, park cleanups, and ecological drives across Tashkent districts.',
    pillar2Title: 'Animal Shelters & Rescue',
    pillar2Desc: 'Food deliveries, medical support, and hands-on help for local Tashkent animal shelters like «Vtoroy Shans».',
    pillar3Title: 'Student Volunteering',
    pillar3Desc: 'Official certificates and participation letters for school and university students to validate their volunteering.',
    pillar4Title: 'Community Aid',
    pillar4Desc: 'Targeted social support, essential supplies, and warmth for families and elderly residents.',

    bannerTitle: 'Stay Updated with TashCare',
    bannerSubtitle: 'Follow announcements, view live photo reports from weekend drives, and chat with local volunteers.',
    bannerBtn: 'Open @tashcareuz Channel',
    navChannel: 'Telegram Channel',
    footerRights: 'All rights reserved.',

    // Eco Game & Shop Translations
    gameNavLabel: 'Game',
    btnBackHome: 'Back to Community',
    gameBalanceLabel: 'Balance:',
    gameBadge: 'TashCare Eco-Game • Sort Trash',
    gameTitle: 'Clean Up Tashkent Parks & Earn Coins!',
    gameSubtitle: 'Hold and drag trash items from the park meadow directly into the correct recycling bin below. Each recycled item earns <strong>+1 TashCoin</strong>. Spend your coins on exclusive rewards in the shop!',
    gameStatTrash: 'Trash in Meadow',
    gameStatCleaned: 'Items Cleaned',
    gameStatCleanliness: 'Park Cleanliness',
    btnRespawn: 'Spawn Trash',
    arenaTag: 'Park Area «Tashkent EcoPark»',
    arenaTip: 'Hold trash and drag it into the matching bin below 👇',
    binsDockTitle: 'Recycling Bins (drag and drop trash here):',

    binPlasticTag: '🔵 Blue Bin',
    binPlasticTitle: 'Plastic',
    binPlasticHint: 'Bottles, bags',

    binGlassTag: '🟢 Green Bin',
    binGlassTitle: 'Glass & Metal',
    binGlassHint: 'Bottles, cans',

    binPaperTag: '🟡 Yellow Bin',
    binPaperTitle: 'Paper & Other',
    binPaperHint: 'Cups, wrappers',

    binDropTarget: 'Drop here',

    shopBadge: 'Eco-Coin Rewards',
    shopTitle: 'Volunteer Reward Shop',
    shopSubtitle: 'Exchange your earned TashCoins for exclusive community merch, eco-friendly goods, and official certificates.',

    shopItem1Cat: 'Eco-Merch',
    shopItem1Title: 'TashCare T-Shirt',
    shopItem1Desc: 'Official 100% organic eco-cotton branded community T-shirt with TashCare logo.',

    shopItem2Cat: 'Ceramics & Merch',
    shopItem2Title: 'TashCare Ceramic Mug',
    shopItem2Desc: 'High-quality ceramic mug for coffee or tea with official TashCare eco-design.',

    shopItem3Cat: 'Eco-Stationery',
    shopItem3Title: 'TashCare Eco-Pen',
    shopItem3Desc: 'Eco-friendly ballpoint pen made from recycled kraft paper and biodegradable materials.',

    shopItem4Cat: 'Eco-Merch',
    shopItem4Title: 'TashCare Sticker Pack',
    shopItem4Desc: 'Set of waterproof glossy vinyl stickers for laptops, bottles, and phone cases.',

    shopItem5Cat: 'Eco-Action',
    shopItem5Title: '1 kg of Trash',
    shopItem5Desc: 'Official credit voucher for submitting 1 kg of sorted recyclable trash from Tashkent parks.',

    btnExchange: 'Redeem',
    modalSuccessTitle: 'Reward Claimed Successfully!',
    modalSuccessDesc: 'You have exchanged coins for',
    modalContactDesc: 'To claim your reward, show this code to our coordinator <strong>@Amisha_SSlando</strong> on Telegram to arrange pickup in Tashkent.',
    modalCloseBtn: 'Got it, close',
    modalScreenshotHeading: 'Now take a screenshot and send to @Amisha_SSlando',
    modalScreenshotSub: 'Take a screenshot of this window and send it to coordinator @Amisha_SSlando on Telegram to claim your prize.',
    modalItemLabel: 'Item / Reward:',
    modalCoordLabel: 'Coordinator:',
    modalUserLabel: 'Your Telegram:',
    modalStatusLabel: 'Status:',
    modalStatusPending: 'Pending claim',
    modalBtnSend: 'Send to @Amisha_SSlando'
  },
  uz: {
    heroBadge: 'Rasmiy ko\'ngillilar jamoasi • Toshkent',
    heroTitle: 'Toshkentni birgalikda <span class="highlight">yanada yaxshiroq</span> qilamiz',
    heroSubtitle: 'TashCare Toshkentdagi faol insonlarni birlashtiradi: «Yashil Makon» bilan daraxt ekish, hayvonlar boshpanalariga ko\'mak va talabalar uchun rasmiy ma\'lumotnomalar.',
    btnRegisterHero: 'Ko\'ngilli bo\'lish',
    btnChannelHero: 'Telegram Kanal',
    stat1Number: '500+',
    stat1Label: 'Yashil Makon bilan ekilgan daraxtlar',
    stat2Number: '100%',
    stat2Label: 'O\'quvchilar uchun bepul ma\'lumotnoma',
    stat3Number: '24/7',
    stat3Label: 'Boshpanalarga ko\'mak va ezgu ishlar',
    regBadge: 'Ko\'ngilli a\'zolik arizasi',
    regTitle: 'Ko\'ngillilar ro\'yxatdan o\'tishi',
    regSubtitle: 'TashCare loyihalarida ishtirok etish uchun Telegram username-ingizni kiriting.',
    labelUsername: 'Put YOUR username:',
    inputPlaceholder: 'username (@ siz)',
    btnSubmit: 'Ro\'yxatdan o\'tish',
    submitting: 'Yuborilmoqda...',
    formHelper: 'Sizning username faqat faol ma\'murlarimizga xabar qilinadi.',
    successMessage: 'Ro\'yxatdan o\'tish muvaffaqiyatli yakunlandi! So\'nggi yangiliklarni ko\'rish uchun TG botiga o\'ting.',
    openBotBtn: 'Telegram Botni ochish',
    emptyUsernameError: 'Iltimos, Telegram username-ingizni kiriting.',
    shortUsernameError: 'Username kamida 3 ta belgidan iborat bo\'lishi kerak.',
    generalError: 'Serverga ulanib bo\'lmadi. Iltimos, keyinroq qayta urinib ko\'ring.',

    // Channel Spotlight
    spotlightBadge: 'Rasmiy kanal @tashcareuz',
    spotlightTitle: 'TashCare jamoasi haqida',
    spotlightQuote: '«Bizning ko\'ngillilar jamoamizga xush kelibsiz! Bu yerda biz ezgu ishlar qilishni, atrofimizdagilarga yordam berishni va dunyoni yaxshi tomonga o\'zgartirishni istagan insonlarni birlashtiramiz.»',
    meta1: '«Yashil Makon» tashkiloti bilan hamkorlikda daraxt ekish tadbirlari',
    meta2: 'Boshpanasiz hayvonlarga ko\'mak («Ikkinchi Imkon» boshpanasi)',
    meta3: 'Maktab va universitet o\'quvchilari uchun rasmiy ma\'lumotnomalar',
    meta4: 'Keksalar va kam ta\'minlangan oilalarga ijtimoiy ko\'mak',
    btnJoinTgChannel: '@tashcareuz kanaliga o\'tish',

    // Preview post
    postHeader: 'TashCare',
    postSubheader: 'Rasmiy kanal yangiliklari',
    postTag: 'Ekologik aksiya',
    postSnippet: '«Yashil Makon» tashkiloti bilan birgalikda daraxt ekish tadbiriga barchani taklif qilamiz! O\'quvchi va talabalar uchun rasmiy ma\'lumotnomalar beriladi. Ro\'yxatdan o\'tish: @Amisha_SSlando (Amirbek). Ezgu ishning bir qismi bo\'ling!',
    postBtn: 'Telegramda postni ochish',

    // Initiatives
    pillarsTitle: 'Bizning asosiy faoliyatimiz',
    pillarsSubtitle: 'Toshkent shahrida o\'tkaziladigan xayriya va ekologik tashabbuslar.',
    pillar1Title: 'Yashil Makon va Eko-klub',
    pillar1Desc: 'Daraxt ko\'chatlarini ekish, hasharotlar va poytaxt parklarini ko\'kalamzorlashtirish.',
    pillar2Title: 'Hayvonlarga g\'amxo\'rlik',
    pillar2Desc: 'Boshpanalarga ozuqa yetkazib berish, davolash va yordam ko\'rsatish.',
    pillar3Title: 'O\'quvchilar uchun sertifikatlar',
    pillar3Desc: 'Ko\'ngillilik faoliyati uchun maktab va oliygohlarga taqdim etiladigan rasmiy ma\'lumotnomalar.',
    pillar4Title: 'Ijtimoiy ko\'mak',
    pillar4Desc: 'Yordamga muhtoj keksalar va oilalarga manzilli oziq-ovqat va moddiy yordam.',

    bannerTitle: 'TashCare kanaliga obuna bo\'ling',
    bannerSubtitle: 'Barcha yangiliklar, hashar e\'lonlari va hisobotlar Telegram kanalimizda.',
    bannerBtn: '@tashcareuz kanalini ochish',
    navChannel: 'Telegram Kanal',
    footerRights: 'Barcha huquqlar himoyalangan.',

    // Eco Game & Shop Translations
    gameNavLabel: 'O\'yin',
    btnBackHome: 'Tepaga / Jamiyatga',
    gameBalanceLabel: 'Balans:',
    gameBadge: 'TashCare Eko-o\'yini • Chiqindilarni saralash',
    gameTitle: 'Chiqindilarni tozalang va parklarni asrang!',
    gameSubtitle: 'Maydondagi chiqindilarni ushlab, quyidagi to\'g\'ri qutiga tortib tashlang. Har bir saralangan buyum uchun <strong>+1 TashCoin</strong> olasiz. Tangalarni sovrinlar do\'konida sarflang!',
    gameStatTrash: 'Maydondagi chiqindi',
    gameStatCleaned: 'Yig\'ilgan buyumlar',
    gameStatCleanliness: 'Park tozaligi',
    btnRespawn: 'Yangi chiqindi',
    arenaTag: '«Toshkent EkoPark» hududi',
    arenaTip: 'Chiqindini ushlab, pastdagi qutiga torting 👇',
    binsDockTitle: 'Saralash qutilari (chiqindini shu yerga tashlang):',

    binPlasticTag: '🔵 Ko\'k quti',
    binPlasticTitle: 'Plastik',
    binPlasticHint: 'Butilkalar, paketlar',

    binGlassTag: '🟢 Yashil quti',
    binGlassTitle: 'Shisha va Metall',
    binGlassHint: 'Butilkalar, bankalar',

    binPaperTag: '🟡 Sariq quti',
    binPaperTitle: 'Qog\'oz va Boshqa',
    binPaperHint: 'Stakanlar, o\'ramlar',

    binDropTarget: 'Shu yerga tashlang',

    shopBadge: 'Eko-tanga sovrinlari',
    shopTitle: 'Ko\'ngillilar sovrinlar do\'koni',
    shopSubtitle: 'To\'plangan TashCoin tangalarini esdalik sovg\'alar, eko-mahsulotlar va rasmiy ma\'lumotnomalarga almashtiring.',

    shopItem1Cat: 'Eko-Merch',
    shopItem1Title: 'TashCare futbolkasi',
    shopItem1Desc: 'TashCare logotipi tushirilgan 100% tabiiy organik paxtadan tikilgan jamoaviy futbolka.',

    shopItem2Cat: 'Idish-tovoq',
    shopItem2Title: 'TashCare krujkasi',
    shopItem2Desc: 'TashCare ramzi tushirilgan choy va kofe uchun sifatli sopol krujka.',

    shopItem3Cat: 'Kanselyariya',
    shopItem3Title: 'TashCare eko-ruchkasi',
    shopItem3Desc: 'Qayta ishlangan kraft qog\'oz va bio-parchalanuvchi materiallardan tayyorlangan sharikli ruchka.',

    shopItem4Cat: 'Eko-Merch',
    shopItem4Title: 'TashCare stikerlar to\'plami',
    shopItem4Desc: 'Noutbuk, telefon va termoslar uchun suvga chidamli yorqin stikerlar to\'plami.',

    shopItem5Cat: 'Eko-Hissa',
    shopItem5Title: '1 kg chiqindi',
    shopItem5Desc: 'Toshkent parklaridan 1 kg saralangan chiqindini qayta ishlashga topshirish sertifikati.',

    btnExchange: 'Almashtirish',
    modalSuccessTitle: 'Sovrin muvaffaqiyatli rasmiylashtirildi!',
    modalSuccessDesc: 'Siz tangalaringizni quyidagiga almashtirdingiz:',
    modalContactDesc: 'Sovrinni olish uchun ushbu kodni Telegram orqali koordinatormiz <strong>@Amisha_SSlando</strong> ga yuboring.',
    modalCloseBtn: 'Tushunarli, yopish',
    modalScreenshotHeading: 'Endi skrinshot qiling va @Amisha_SSlando ga tashlang',
    modalScreenshotSub: 'Ushbu oynani skrinshot qiling va sovg\'ani olish uchun koordinator @Amisha_SSlando ga yuboring.',
    modalItemLabel: 'Sovrin:',
    modalCoordLabel: 'Koordinator:',
    modalUserLabel: 'Sizning Telegramingiz:',
    modalStatusLabel: 'Holat:',
    modalStatusPending: 'Berilishi kutilmoqda',
    modalBtnSend: '@Amisha_SSlando ga tashlash'
  }
};

// Global state
let currentLang = localStorage.getItem('tashcare_lang') || 'ru';
let currentTheme = localStorage.getItem('tashcare_theme') || 'light';

const COIN_STORAGE_KEY = 'tashcare_coins';
const STAT_CLEANED_KEY = 'tashcare_cleaned_count';
const BINS_STORAGE_KEY = 'tashcare_bin_counts';
const ORDERS_STORAGE_KEY = 'tashcare_redeem_orders';

// DOM Elements for Routing & Game
const landingView = document.getElementById('landingView');
const gameView = document.getElementById('game') || document.getElementById('gameView');
const gameNavBtn = document.getElementById('gameNavBtn');
const gameMobileNavBtn = document.getElementById('gameMobileNavBtn');
const drawerGameLink = document.getElementById('drawerGameLink');
const brandLogoLink = document.getElementById('brandLogoLink');
const btnBackHome = document.getElementById('btnBackHome');

// Coin and stats displays
const gameCoinBalance = document.getElementById('gameCoinBalance');
const navCoinPill = document.getElementById('navCoinPill');
const mobileCoinPill = document.getElementById('mobileCoinPill');
const drawerCoinBadge = document.getElementById('drawerCoinBadge');

const trashCountVal = document.getElementById('trashCountVal');
const parkCleanVal = document.getElementById('parkCleanVal');
const cleanlinessVal = document.getElementById('cleanlinessVal');
const respawnTrashBtn = document.getElementById('respawnTrashBtn');
const parkArena = document.getElementById('parkArena');
const trashContainer = document.getElementById('trashContainer');

// Shop & Modal elements
const shopModal = document.getElementById('shopModal');
const shopModalTitle = document.getElementById('shopModalTitle');
const shopModalSubtitle = document.getElementById('shopModalSubtitle');
const voucherCodeDisplay = document.getElementById('voucherCodeDisplay');
const copyVoucherBtn = document.getElementById('copyVoucherBtn');
const copyVoucherTxt = document.getElementById('copyVoucherTxt');

// Trash Items with Categories & Pure SVGs (Rule 5 compliant)
const TRASH_TYPES = [
  // 🔵 Blue: Plastic
  {
    type: 'plastic-bottle',
    nameRu: 'Пластиковая бутылка',
    nameEn: 'Plastic Bottle',
    nameUz: 'Plastik shisha',
    bin: 'plastic',
    color: 'blue',
    badgeRu: '🔵 Синий (Пластик)',
    badgeEn: '🔵 Blue (Plastic)',
    badgeUz: '🔵 Ko\'k (Plastik)',
    svg: `<svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="#0284c7" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M10 2h4v3h-4z"/>
      <path d="M8 5h8v2l-1 2v11a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V9L8 7V5z"/>
      <line x1="8" y1="12" x2="16" y2="12"/>
      <line x1="8" y1="16" x2="16" y2="16"/>
    </svg>`
  },
  {
    type: 'plastic-bag',
    nameRu: 'Пластиковый пакет',
    nameEn: 'Plastic Bag',
    nameUz: 'Polietilen paket',
    bin: 'plastic',
    color: 'blue',
    badgeRu: '🔵 Синий (Пакет)',
    badgeEn: '🔵 Blue (Bag)',
    badgeUz: '🔵 Ko\'k (Paket)',
    svg: `<svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="#0284c7" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M6 8l-2 12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2L18 8"/>
      <path d="M9 8V5a3 3 0 0 1 6 0v3"/>
      <path d="M10 12a2 2 0 0 0 4 0"/>
    </svg>`
  },
  // 🟢 Green: Glass & Metal
  {
    type: 'glass-bottle',
    nameRu: 'Стеклянная бутылка',
    nameEn: 'Glass Bottle',
    nameUz: 'Shisha butilka',
    bin: 'glass-metal',
    color: 'green',
    badgeRu: '🟢 Зеленый (Стекло)',
    badgeEn: '🟢 Green (Glass)',
    badgeUz: '🟢 Yashil (Shisha)',
    svg: `<svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M11 2h2v4l2 3v11a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V9l2-3V2z"/>
      <line x1="11" y1="13" x2="13" y2="13"/>
    </svg>`
  },
  {
    type: 'soda-can',
    nameRu: 'Жестяная банка',
    nameEn: 'Soda Can',
    nameUz: 'Konserva bankasi',
    bin: 'glass-metal',
    color: 'green',
    badgeRu: '🟢 Зеленый (Банка)',
    badgeEn: '🟢 Green (Can)',
    badgeUz: '🟢 Yashil (Banka)',
    svg: `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <ellipse cx="12" cy="5" rx="6" ry="3"/>
      <path d="M6 5v14c0 1.66 2.69 3 6 3s6-1.34 6-3V5"/>
      <line x1="6" y1="12" x2="18" y2="12"/>
    </svg>`
  },
  // 🟡 Yellow: Paper & Other
  {
    type: 'coffee-cup',
    nameRu: 'Бумажный стаканчик',
    nameEn: 'Paper Coffee Cup',
    nameUz: 'Qog\'oz stakan',
    bin: 'paper-other',
    color: 'yellow',
    badgeRu: '🟡 Желтый (Бумага)',
    badgeEn: '🟡 Yellow (Paper)',
    badgeUz: '🟡 Sariq (Qog\'oz)',
    svg: `<svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="#d97706" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M18 8h1a4 4 0 0 1 0 8h-1"/>
      <path d="M4 8h14v9a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8z"/>
      <line x1="6" y1="2" x2="6" y2="5"/>
      <line x1="10" y1="2" x2="10" y2="5"/>
      <line x1="14" y1="2" x2="14" y2="5"/>
    </svg>`
  },
  {
    type: 'snack-wrapper',
    nameRu: 'Обертка / Фантик',
    nameEn: 'Snack Wrapper',
    nameUz: 'Konfet o\'rami',
    bin: 'paper-other',
    color: 'yellow',
    badgeRu: '🟡 Желтый (Обертка)',
    badgeEn: '🟡 Yellow (Wrapper)',
    badgeUz: '🟡 Sariq (O\'ram)',
    svg: `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#d97706" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <polygon points="12 2 15 8 21 9 17 14 18 20 12 17 6 20 7 14 3 9 9 8 12 2"/>
    </svg>`
  }
];

// Pure SVG Coin HTML for consistent crisp rendering (Rule 5 compliant)
const COIN_SVG_HTML = `<svg class="coin-svg" width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" fill="url(#coinGrad)" stroke="#b45309" stroke-width="1.5"/><circle cx="12" cy="12" r="7.5" fill="none" stroke="#fef3c7" stroke-width="1" stroke-dasharray="2 1.5"/><path d="M12 7v10M9 9.5h5a1.5 1.5 0 0 1 0 3H10a1.5 1.5 0 0 0 0 3h5" stroke="#78350f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

// Web Audio API Synthesizer for collect chime & wrong bin buzzer
let audioCtx = null;
function playCollectChime() {
  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    if (!audioCtx) audioCtx = new AudioContextClass();
    if (audioCtx.state === 'suspended') audioCtx.resume();

    const now = audioCtx.currentTime;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = 'sine';
    // Friendly rising chime (587Hz D5 -> 880Hz A5)
    osc.frequency.setValueAtTime(587.33, now);
    osc.frequency.exponentialRampToValueAtTime(880.00, now + 0.12);

    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.32);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start(now);
    osc.stop(now + 0.32);
  } catch (e) {
    // Audio context may be restricted by browser policy
  }
}

function playErrorBuzzer() {
  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    if (!audioCtx) audioCtx = new AudioContextClass();
    if (audioCtx.state === 'suspended') audioCtx.resume();

    const now = audioCtx.currentTime;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(160, now);
    osc.frequency.linearRampToValueAtTime(85, now + 0.28);

    gain.gain.setValueAtTime(0.22, now);
    gain.gain.linearRampToValueAtTime(0.001, now + 0.28);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start(now);
    osc.stop(now + 0.28);
  } catch (e) {
    // Audio context may be restricted by browser policy
  }
}

// Coins state helpers
function getStoredCoins() {
  const val = parseInt(localStorage.getItem(COIN_STORAGE_KEY), 10);
  return isNaN(val) ? 0 : Math.max(0, val);
}

function getCleanedCount() {
  const val = parseInt(localStorage.getItem(STAT_CLEANED_KEY), 10);
  return isNaN(val) ? 0 : Math.max(0, val);
}

function getBinCounts() {
  try {
    return JSON.parse(localStorage.getItem(BINS_STORAGE_KEY) || '{}');
  } catch (e) {
    return {};
  }
}

function incrementBinCount(binType) {
  const counts = getBinCounts();
  counts[binType] = (counts[binType] || 0) + 1;
  localStorage.setItem(BINS_STORAGE_KEY, JSON.stringify(counts));
  updateBinDisplays();
}

function updateBinDisplays() {
  const counts = getBinCounts();
  const plasticCount = document.getElementById('binPlasticCount');
  const glassCount = document.getElementById('binGlassCount');
  const paperCount = document.getElementById('binPaperCount');

  if (plasticCount) plasticCount.textContent = (counts['plastic'] || 0).toLocaleString();
  if (glassCount) glassCount.textContent = (counts['glass-metal'] || 0).toLocaleString();
  if (paperCount) paperCount.textContent = (counts['paper-other'] || 0).toLocaleString();
}

function updateCoinDisplays() {
  const coins = getStoredCoins();
  const cleaned = getCleanedCount();

  if (gameCoinBalance) gameCoinBalance.textContent = coins.toLocaleString();
  if (navCoinPill) navCoinPill.innerHTML = `${coins.toLocaleString()} ${COIN_SVG_HTML}`;
  if (mobileCoinPill) mobileCoinPill.textContent = coins.toLocaleString();
  if (drawerCoinBadge) drawerCoinBadge.innerHTML = `${coins.toLocaleString()} ${COIN_SVG_HTML}`;
  if (parkCleanVal) parkCleanVal.textContent = cleaned.toLocaleString();
  updateBinDisplays();
}


// DOM Elements
const themeToggleBtn = document.getElementById('themeToggleBtn');
const themeToggleMobileBtn = document.getElementById('themeToggleMobileBtn');
const langSelect = document.getElementById('langSelect');
const regForm = document.getElementById('regForm');
const usernameInput = document.getElementById('usernameInput');
const submitBtn = document.getElementById('submitBtn');
const submitBtnText = document.getElementById('submitBtnText');
const alertBox = document.getElementById('alertBox');
const alertIcon = document.getElementById('alertIcon');
const alertMessage = document.getElementById('alertMessage');
const alertAction = document.getElementById('alertAction');

// Mobile Drawer Elements
const hamburgerBtn = document.getElementById('hamburgerBtn');
const mobileDrawer = document.getElementById('mobileDrawer');
const drawerBackdrop = document.getElementById('drawerBackdrop');
const closeDrawerBtn = document.getElementById('closeDrawerBtn');
const drawerRegLink = document.getElementById('drawerRegLink');
const drawerLangBtns = document.querySelectorAll('.drawer-lang-btn');

// --- THEME MANAGEMENT ---
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('tashcare_theme', theme);
  currentTheme = theme;
  const icon = theme === 'dark' ? ICONS.sun : ICONS.moon;
  const title = theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode';

  if (themeToggleBtn) {
    themeToggleBtn.innerHTML = icon;
    themeToggleBtn.setAttribute('title', title);
    themeToggleBtn.setAttribute('aria-label', title);
  }
  if (themeToggleMobileBtn) {
    themeToggleMobileBtn.innerHTML = icon;
    themeToggleMobileBtn.setAttribute('title', title);
    themeToggleMobileBtn.setAttribute('aria-label', title);
  }
}

function toggleTheme() {
  const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
  applyTheme(nextTheme);
}

// Check system preference if no stored theme
if (!localStorage.getItem('tashcare_theme')) {
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(prefersDark ? 'dark' : 'light');
} else {
  applyTheme(currentTheme);
}

if (themeToggleBtn) themeToggleBtn.addEventListener('click', toggleTheme);
if (themeToggleMobileBtn) themeToggleMobileBtn.addEventListener('click', toggleTheme);

// --- MOBILE DRAWER MANAGEMENT ---
function openDrawer() {
  if (!mobileDrawer) return;
  mobileDrawer.classList.add('open');
  mobileDrawer.setAttribute('aria-hidden', 'false');
  if (hamburgerBtn) {
    hamburgerBtn.classList.add('active');
    hamburgerBtn.setAttribute('aria-expanded', 'true');
  }
  document.body.style.overflow = 'hidden';
}

function closeDrawer() {
  if (!mobileDrawer) return;
  mobileDrawer.classList.remove('open');
  mobileDrawer.setAttribute('aria-hidden', 'true');
  if (hamburgerBtn) {
    hamburgerBtn.classList.remove('active');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
  }
  document.body.style.overflow = '';
}

if (hamburgerBtn) {
  hamburgerBtn.addEventListener('click', () => {
    if (mobileDrawer.classList.contains('open')) {
      closeDrawer();
    } else {
      openDrawer();
    }
  });
}

if (closeDrawerBtn) closeDrawerBtn.addEventListener('click', closeDrawer);
if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeDrawer);

if (drawerRegLink) {
  drawerRegLink.addEventListener('click', () => {
    closeDrawer();
  });
}

// --- MULTI-LANGUAGE MANAGEMENT ---
const gameLangSelect = document.getElementById('gameLangSelect');

function getTrashName(itemData, lang) {
  if (lang === 'en') return itemData.nameEn || itemData.name;
  if (lang === 'uz') return itemData.nameUz || itemData.name;
  return itemData.nameRu || itemData.name;
}

function getBadgeText(itemData, lang) {
  if (lang === 'en') return itemData.badgeEn || 'Blue';
  if (lang === 'uz') return itemData.badgeUz || 'Ko\'k';
  return itemData.badgeRu || 'Синий';
}

function updateLanguage(lang) {
  if (!TRANSLATIONS[lang]) lang = 'ru';
  currentLang = lang;
  localStorage.setItem('tashcare_lang', lang);
  if (langSelect) langSelect.value = lang;
  if (gameLangSelect) gameLangSelect.value = lang;

  // Sync drawer buttons active state
  drawerLangBtns.forEach(btn => {
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  const t = TRANSLATIONS[lang];

  // Update text nodes with data-i18n attributes
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) {
      el.innerHTML = t[key];
    }
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key]) {
      el.placeholder = t[key];
    }
  });

  // Update active alert message if present
  if (alertBox && alertBox.style.display !== 'none' && alertBox.classList.contains('alert-success')) {
    alertMessage.textContent = t.successMessage;
  }

  // Update existing trash items on meadow so badges match new language immediately!
  document.querySelectorAll('.trash-item').forEach(itemEl => {
    const itemType = itemEl.dataset.type;
    const itemData = TRASH_TYPES.find(item => item.type === itemType);
    const badgeEl = itemEl.querySelector('.trash-color-badge');
    if (itemData && badgeEl) {
      badgeEl.textContent = getBadgeText(itemData, lang);
      itemEl.setAttribute('title', `${lang === 'en' ? 'Drag and drop' : (lang === 'uz' ? 'Tortib tashlang' : 'Зажми и тащи')}: ${getTrashName(itemData, lang)}`);
    }
  });

  // Update coin displays to keep SVG coin intact
  updateCoinDisplays();
}

if (langSelect) {
  langSelect.addEventListener('change', (e) => {
    updateLanguage(e.target.value);
  });
}

if (gameLangSelect) {
  gameLangSelect.addEventListener('change', (e) => {
    updateLanguage(e.target.value);
  });
}

drawerLangBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const lang = btn.getAttribute('data-lang');
    updateLanguage(lang);
  });
});

// Initialize Language
updateLanguage(currentLang);

// --- SCROLL REVEAL OBSERVER ---
// Immediately reveal hero elements so they are never blank
document.querySelectorAll('.hero .reveal-on-scroll').forEach(el => {
  el.classList.add('revealed');
});

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.08,
  rootMargin: '0px 0px -20px 0px'
});

document.querySelectorAll('.reveal-on-scroll:not(.revealed)').forEach((el) => {
  revealObserver.observe(el);
});

// --- REGISTRATION FORM HANDLING ---
function showAlert(type, message, showBotLink = false) {
  alertBox.style.display = 'block';
  alertBox.className = `alert-box alert-${type}`;
  alertIcon.innerHTML = type === 'success' ? ICONS.check : ICONS.alert;
  alertMessage.textContent = message;

  if (showBotLink) {
    const t = TRANSLATIONS[currentLang];
    alertAction.innerHTML = `
      <a href="https://t.me/Tashcare_user_bot" target="_blank" rel="noopener noreferrer" class="btn-bot-link">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.75-.55 2.92-1.27 4.86-2.11 5.83-2.52 2.77-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
        </svg>
        <span>${t.openBotBtn}</span>
      </a>
    `;
  } else {
    alertAction.innerHTML = '';
  }

  alertBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function clearAlert() {
  alertBox.style.display = 'none';
  alertBox.className = 'alert-box';
  alertIcon.innerHTML = '';
  alertMessage.textContent = '';
  alertAction.innerHTML = '';
}

regForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  clearAlert();

  const rawUsername = usernameInput.value.trim();
  const cleanUsername = rawUsername.replace(/^@/, '').trim();
  const t = TRANSLATIONS[currentLang];

  if (!cleanUsername) {
    showAlert('error', t.emptyUsernameError);
    usernameInput.focus();
    return;
  }

  if (cleanUsername.length < 3) {
    showAlert('error', t.shortUsernameError);
    usernameInput.focus();
    return;
  }

  // Set loading state
  submitBtn.classList.add('loading');
  submitBtn.disabled = true;
  submitBtnText.innerHTML = `<span class="spinner"></span> ${t.submitting}`;

  try {
    const apiBase = window.location.protocol === 'file:' ? 'http://localhost:3000' : '';
    const response = await fetch(`${apiBase}/api/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username: cleanUsername })
    });

    const data = await response.json();

    if (response.ok && data.success) {
      usernameInput.value = '';
      localStorage.setItem('tashcare_registered_user', cleanUsername);
      // Display required clear success message in the selected language
      showAlert('success', t.successMessage, true);
    } else {
      showAlert('error', data.error || t.generalError);
    }
  } catch (err) {
    console.error('Fetch error:', err);
    showAlert('error', t.generalError);
  } finally {
    submitBtn.classList.remove('loading');
    submitBtn.disabled = false;
    submitBtnText.textContent = t.btnSubmit;
  }
});

// ===================================================================
// Eco Trash Cleanup Mini-Game & Coin Shop Logic
// ===================================================================

function addCoins(amount = 1) {
  const current = getStoredCoins();
  const next = current + amount;
  localStorage.setItem(COIN_STORAGE_KEY, next.toString());

  const cleaned = getCleanedCount() + amount;
  localStorage.setItem(STAT_CLEANED_KEY, cleaned.toString());

  updateCoinDisplays();
  updateCleanlinessProgress();
}

function spendCoins(amount) {
  const current = getStoredCoins();
  if (current < amount) return false;
  const next = current - amount;
  localStorage.setItem(COIN_STORAGE_KEY, next.toString());
  updateCoinDisplays();
  return true;
}

// Router between Landing Page and Mini-Game View (smooth scroll without hiding main website)
function scrollToGame() {
  const gameElem = document.getElementById('game') || document.getElementById('gameView');
  if (gameElem) {
    if (gameElem.style.display === 'none') {
      gameElem.style.display = 'block';
    }
    gameElem.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  if (gameNavBtn) gameNavBtn.classList.add('active');
  if (trashContainer && trashContainer.children.length === 0) {
    spawnInitialTrash(8);
  }
  if (typeof closeDrawer === 'function') {
    closeDrawer();
  }
}

function scrollToHome() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  if (gameNavBtn) gameNavBtn.classList.remove('active');
  if (typeof closeDrawer === 'function') {
    closeDrawer();
  }
}

function switchView(target) {
  const isGame = target === 'game' || window.location.hash === '#game';
  if (isGame) {
    scrollToGame();
  } else {
    scrollToHome();
  }
}

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#game') {
    scrollToGame();
  } else {
    scrollToHome();
  }
});

// Home links
if (brandLogoLink) {
  brandLogoLink.addEventListener('click', (e) => {
    e.preventDefault();
    history.pushState(null, '', window.location.pathname);
    scrollToHome();
  });
}

if (btnBackHome) {
  btnBackHome.addEventListener('click', (e) => {
    e.preventDefault();
    history.pushState(null, '', window.location.pathname);
    scrollToHome();
  });
}

// Game navigation buttons
[gameNavBtn, gameMobileNavBtn, drawerGameLink].forEach(btn => {
  if (btn) {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      history.pushState(null, '', '#game');
      scrollToGame();
    });
  }
});

// Park Trash Game Mechanics
function updateCleanlinessProgress() {
  const cleaned = getCleanedCount();
  const pct = Math.min(100, Math.round((cleaned / (cleaned + 10)) * 100));
  if (cleanlinessVal) cleanlinessVal.textContent = `${pct}%`;
  if (trashCountVal && trashContainer) {
    trashCountVal.textContent = trashContainer.children.length;
  }
}

// Drag & Drop Trash Item Creator with Colors and Badges
function spawnTrashItem() {
  const container = trashContainer || document.getElementById('trashContainer');
  if (!container) return;

  const itemData = TRASH_TYPES[Math.floor(Math.random() * TRASH_TYPES.length)];
  const itemEl = document.createElement('div');
  itemEl.className = 'trash-item';
  itemEl.dataset.type = itemData.type;
  itemEl.setAttribute('role', 'button');
  itemEl.setAttribute('tabindex', '0');
  itemEl.setAttribute('title', `${currentLang === 'en' ? 'Drag and drop' : (currentLang === 'uz' ? 'Tortib tashlang' : 'Зажми и тащи')}: ${getTrashName(itemData, currentLang)}`);

  itemEl.innerHTML = `
    <div class="trash-svg-wrapper">
      ${itemData.svg}
    </div>
    <div class="trash-color-badge badge-${itemData.color}">
      ${getBadgeText(itemData, currentLang)}
    </div>
  `;

  // Random position within safe arena grass bounds
  const left = Math.floor(6 + Math.random() * 76);
  const top = Math.floor(10 + Math.random() * 52);
  const rotation = Math.floor(-25 + Math.random() * 50);

  itemEl.style.left = `${left}%`;
  itemEl.style.top = `${top}%`;
  itemEl.style.transform = `rotate(${rotation}deg)`;

  let isDragging = false;
  let offsetX = 38;
  let offsetY = 34;

  const onPointerDown = (e) => {
    if (itemEl.classList.contains('sucked-in')) return;
    if (e.button !== undefined && e.button !== 0) return; // Primary pointer only

    e.preventDefault();
    e.stopPropagation();

    isDragging = true;
    itemEl.classList.add('dragging');

    // Show awaiting glow on all bins
    const bins = document.querySelectorAll('.drop-zone-bin');
    bins.forEach(b => b.classList.add('awaiting-drop'));

    const itemRect = itemEl.getBoundingClientRect();
    offsetX = e.clientX - itemRect.left;
    offsetY = e.clientY - itemRect.top;

    const arena = parkArena || document.getElementById('parkArena');
    const arenaRect = arena ? arena.getBoundingClientRect() : { left: 0, top: 0, width: 600, height: 360 };

    const updatePosition = (clientX, clientY) => {
      const posX = clientX - arenaRect.left - offsetX;
      const posY = clientY - arenaRect.top - offsetY;

      itemEl.style.left = `${posX}px`;
      itemEl.style.top = `${posY}px`;

      // Check collision with drop bins
      let hovered = null;
      bins.forEach(bin => {
        const r = bin.getBoundingClientRect();
        if (clientX >= r.left - 12 && clientX <= r.right + 12 &&
            clientY >= r.top - 12 && clientY <= r.bottom + 15) {
          hovered = bin;
        }
      });

      bins.forEach(bin => {
        if (bin === hovered) bin.classList.add('bin-hovered');
        else bin.classList.remove('bin-hovered');
      });
    };

    updatePosition(e.clientX, e.clientY);

    const onPointerMove = (moveEvt) => {
      if (!isDragging) return;
      moveEvt.preventDefault();
      updatePosition(moveEvt.clientX, moveEvt.clientY);
    };

    const onPointerUp = (upEvt) => {
      if (!isDragging) return;
      isDragging = false;
      itemEl.classList.remove('dragging');

      // Clear bin highlights
      bins.forEach(b => {
        b.classList.remove('awaiting-drop');
        b.classList.remove('bin-hovered');
      });

      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('pointercancel', onPointerUp);

      // Check if dropped onto any bin
      let targetBin = null;
      bins.forEach(bin => {
        const r = bin.getBoundingClientRect();
        if (upEvt.clientX >= r.left - 15 && upEvt.clientX <= r.right + 15 &&
            upEvt.clientY >= r.top - 15 && upEvt.clientY <= r.bottom + 20) {
          targetBin = bin;
        }
      });

      if (targetBin) {
        // STRICT FILTER: If item category doesn't match target bin, REJECT!
        if (itemData.bin !== targetBin.dataset.bin) {
          handleWrongBin(itemEl, itemData, targetBin, left, top);
        } else {
          handleItemRecycled(itemEl, itemData, targetBin);
        }
      } else {
        // Released outside bins: ensure it stays on visible grass
        const currentArena = parkArena || document.getElementById('parkArena');
        const currentArenaRect = currentArena ? currentArena.getBoundingClientRect() : { left: 0, top: 0, width: 600, height: 360 };
        const curX = upEvt.clientX - currentArenaRect.left;
        const curY = upEvt.clientY - currentArenaRect.top;

        if (curX < 15 || curX > currentArenaRect.width - 50 || curY < 15 || curY > currentArenaRect.height - 50) {
          // Reset to safe inner bounds
          itemEl.style.left = `${left}%`;
          itemEl.style.top = `${top}%`;
        } else {
          itemEl.style.left = `${curX - offsetX}px`;
          itemEl.style.top = `${curY - offsetY}px`;
        }
      }
    };

    window.addEventListener('pointermove', onPointerMove, { passive: false });
    window.addEventListener('pointerup', onPointerUp);
    window.addEventListener('pointercancel', onPointerUp);
  };

  itemEl.addEventListener('pointerdown', onPointerDown);

  container.appendChild(itemEl);
  updateCleanlinessProgress();
}

// Handle dropping an item into the wrong bin (Strict Rejection)
function handleWrongBin(itemEl, itemData, targetBin, startLeft, startTop) {
  // 1. Play wrong bin buzzer sound
  playErrorBuzzer();

  // 2. Shake bin with red border & glow
  targetBin.classList.add('bin-rejected');
  setTimeout(() => {
    targetBin.classList.remove('bin-rejected');
  }, 500);

  // 3. Floating wrong bin error banner
  let targetColorText = '';
  if (itemData.bin === 'plastic') {
    targetColorText = currentLang === 'en' ? 'Blue Bin (Plastic) 🔵' : (currentLang === 'uz' ? 'Ko\'k quti (Plastik) 🔵' : 'Синий ящик (Пластик) 🔵');
  } else if (itemData.bin === 'glass-metal') {
    targetColorText = currentLang === 'en' ? 'Green Bin (Glass/Metal) 🟢' : (currentLang === 'uz' ? 'Yashil quti (Shisha/Bankalar) 🟢' : 'Зеленый ящик (Стекло/Банки) 🟢');
  } else {
    targetColorText = currentLang === 'en' ? 'Yellow Bin (Paper/Other) 🟡' : (currentLang === 'uz' ? 'Sariq quti (Qog\'oz/Boshqa) 🟡' : 'Желтый ящик (Бумага/Прочее) 🟡');
  }

  const alertMsg = currentLang === 'en'
    ? `❌ Wrong bin! Needs: ${targetColorText}`
    : (currentLang === 'uz'
      ? `❌ Noto'g'ri quti! Kerak: ${targetColorText}`
      : `❌ Не тот ящик! Нужен: ${targetColorText}`);

  const floatAlert = document.createElement('div');
  floatAlert.className = 'floating-alert-wrong';
  floatAlert.textContent = alertMsg;
  targetBin.appendChild(floatAlert);

  setTimeout(() => {
    if (floatAlert.parentNode) floatAlert.remove();
  }, 1600);

  // 4. Smoothly spring item back to original meadow grass position
  itemEl.style.transition = 'all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)';
  itemEl.style.left = `${startLeft}%`;
  itemEl.style.top = `${startTop}%`;
  setTimeout(() => {
    itemEl.style.transition = '';
  }, 400);
}

// Handle dropping an item into the correct bin (Success)
function handleItemRecycled(itemEl, itemData, targetBin) {
  if (itemEl.classList.contains('sucked-in')) return;
  itemEl.classList.add('sucked-in');

  // Trigger bounce animation on bin
  targetBin.classList.add('bin-swallow');
  setTimeout(() => {
    targetBin.classList.remove('bin-swallow');
  }, 450);

  // Play audio chime
  playCollectChime();

  // Increment bin specific count
  const binType = targetBin.dataset.bin;
  incrementBinCount(binType);

  // Spawn floating coin animation out of the bin with SVG coin
  const arenaCard = document.querySelector('.park-arena-card');
  if (arenaCard) {
    const binRect = targetBin.getBoundingClientRect();
    const cardRect = arenaCard.getBoundingClientRect();
    const floatEl = document.createElement('div');
    floatEl.className = 'floating-coin-plus';

    const successText = currentLang === 'en' ? 'Sorted!' : (currentLang === 'uz' ? 'To\'g\'ri!' : 'Идеально!');
    floatEl.innerHTML = `+1 ${COIN_SVG_HTML} <span style="margin-left: 2px;">${successText}</span>`;

    floatEl.style.left = `${binRect.left - cardRect.left + (binRect.width / 2) - 45}px`;
    floatEl.style.top = `${binRect.top - cardRect.top - 16}px`;

    arenaCard.appendChild(floatEl);
    setTimeout(() => {
      if (floatEl.parentNode) floatEl.remove();
    }, 850);
  }

  // Add +1 TashCoin
  addCoins(1);

  // Remove trash DOM node after suck-in animation
  setTimeout(() => {
    if (itemEl.parentNode) itemEl.remove();
    updateCleanlinessProgress();

    // Spawn replacement trash on grass after a brief pause
    setTimeout(() => {
      if (trashContainer && trashContainer.children.length < 10) {
        spawnTrashItem();
      }
    }, 1200);
  }, 320);
}

function spawnInitialTrash(count = 8) {
  const container = trashContainer || document.getElementById('trashContainer');
  if (!container) return;
  container.innerHTML = '';
  for (let i = 0; i < count; i++) {
    spawnTrashItem();
  }
  updateCleanlinessProgress();
}

if (respawnTrashBtn) {
  respawnTrashBtn.addEventListener('click', () => {
    spawnInitialTrash(8);
  });
}

// Coin Shop Handlers
window.handleShopBuy = function(itemId, price, title) {
  const currentCoins = getStoredCoins();

  if (currentCoins < price) {
    const diff = price - currentCoins;
    const msg = currentLang === 'en'
      ? `You need ${diff.toLocaleString()} more TashCoin! Clean up more trash in the park meadow to earn coins.`
      : (currentLang === 'uz'
        ? `Sizga yana ${diff.toLocaleString()} ta TashCoin yetishmayapti! Tangalar yig'ish uchun parkdagi chiqindilarni tozalang.`
        : `Вам не хватает ${diff.toLocaleString()} TashCoin! Уберите еще мусора на полянке, чтобы заработать недостающие коины.`);
    alert(msg);
    return;
  }

  // Deduct coins
  const success = spendCoins(price);
  if (!success) return;

  // Generate unique redemption promo voucher
  const randA = Math.floor(1000 + Math.random() * 9000);
  const randB = Math.floor(1000 + Math.random() * 9000);
  const voucherCode = `TC-${randA}-${randB}`;

  // Retrieve user's registered username from localStorage or input
  const storedUser = localStorage.getItem('tashcare_registered_user') || (usernameInput ? usernameInput.value.trim().replace(/^@/, '') : '');

  // Save order to history
  try {
    let orders = [];
    const parsed = JSON.parse(localStorage.getItem(ORDERS_STORAGE_KEY) || '[]');
    if (Array.isArray(parsed)) orders = parsed;
    orders.push({
      id: itemId,
      title,
      price,
      code: voucherCode,
      username: storedUser,
      date: new Date().toISOString()
    });
    localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(orders));
  } catch (err) {
    console.error('Order save error:', err);
  }

  // Dispatch order to server and Telegram Admin Bot with voucher code and Ready button
  try {
    const apiBase = window.location.protocol === 'file:' ? 'http://localhost:3000' : '';
    fetch(`${apiBase}/api/redeem-order`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        itemId,
        title,
        price,
        code: voucherCode,
        username: storedUser
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log('[Shop] Order notification delivered to Admin Bot:', data);
      })
      .catch(err => {
        console.warn('[Shop] Notice syncing order to server:', err);
      });
  } catch (syncErr) {
    console.warn('[Shop] Order sync skipped:', syncErr);
  }

  // Show modal with localized header
  if (shopModalTitle) {
    const heading = currentLang === 'en' ? `You redeemed: ${title}` : (currentLang === 'uz' ? `Siz almashtirdingiz: ${title}` : `Вы обменяли: ${title}`);
    shopModalTitle.textContent = heading;
  }
  if (shopModalSubtitle) {
    const sub = currentLang === 'en' ? `Successfully charged ${price.toLocaleString()} TashCoin from your balance.` : (currentLang === 'uz' ? `Balansingizdan ${price.toLocaleString()} TashCoin muvaffaqiyatli yechildi.` : `С вашего баланса успешно списано ${price.toLocaleString()} TashCoin.`);
    shopModalSubtitle.textContent = sub;
  }
  if (voucherCodeDisplay) voucherCodeDisplay.textContent = voucherCode;

  // Set item title and details in modal
  const modalItemVal = document.getElementById('modalItemVal');
  if (modalItemVal) modalItemVal.textContent = title;

  const modalUserVal = document.getElementById('modalUserVal');
  if (modalUserVal) {
    modalUserVal.textContent = storedUser ? `@${storedUser}` : (currentLang === 'en' ? '(Not specified)' : (currentLang === 'uz' ? '(Ko\'rsatilmagan)' : '(Не указан)'));
  }

  // Localize modal text
  const t = TRANSLATIONS[currentLang];
  const modalScreenshotHeading = document.getElementById('modalScreenshotHeading');
  if (modalScreenshotHeading && t.modalScreenshotHeading) modalScreenshotHeading.textContent = t.modalScreenshotHeading;

  const modalScreenshotSub = document.getElementById('modalScreenshotSub');
  if (modalScreenshotSub && t.modalScreenshotSub) modalScreenshotSub.textContent = t.modalScreenshotSub;

  const modalItemLabel = document.getElementById('modalItemLabel');
  if (modalItemLabel && t.modalItemLabel) modalItemLabel.textContent = t.modalItemLabel;

  const modalCoordLabel = document.getElementById('modalCoordLabel');
  if (modalCoordLabel && t.modalCoordLabel) modalCoordLabel.textContent = t.modalCoordLabel;

  const modalUserLabel = document.getElementById('modalUserLabel');
  if (modalUserLabel && t.modalUserLabel) modalUserLabel.textContent = t.modalUserLabel;

  const modalStatusLabel = document.getElementById('modalStatusLabel');
  if (modalStatusLabel && t.modalStatusLabel) modalStatusLabel.textContent = t.modalStatusLabel;

  const modalStatusVal = document.getElementById('modalStatusVal');
  if (modalStatusVal && t.modalStatusPending) modalStatusVal.textContent = t.modalStatusPending;

  const btnModalTgText = document.getElementById('btnModalTgText');
  if (btnModalTgText && t.modalBtnSend) btnModalTgText.textContent = t.modalBtnSend;

  if (shopModal) {
    shopModal.style.display = 'flex';
    shopModal.setAttribute('aria-hidden', 'false');
  }
};

window.closeShopModal = function() {
  if (shopModal) {
    shopModal.style.display = 'none';
    shopModal.setAttribute('aria-hidden', 'true');
  }
};

window.copyVoucherCode = function() {
  if (!voucherCodeDisplay) return;
  const text = voucherCodeDisplay.textContent.trim();
  const copiedLabel = currentLang === 'en' ? 'Copied!' : (currentLang === 'uz' ? 'Nusxalandi!' : 'Скопировано!');
  const defaultLabel = currentLang === 'en' ? 'Copy' : (currentLang === 'uz' ? 'Nusxalash' : 'Копировать');

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      if (copyVoucherTxt) copyVoucherTxt.textContent = copiedLabel;
      setTimeout(() => {
        if (copyVoucherTxt) copyVoucherTxt.textContent = defaultLabel;
      }, 2000);
    });
  } else {
    // Fallback
    const input = document.createElement('input');
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    input.remove();
    if (copyVoucherTxt) copyVoucherTxt.textContent = copiedLabel;
    setTimeout(() => {
      if (copyVoucherTxt) copyVoucherTxt.textContent = defaultLabel;
    }, 2000);
  }
};

// Ensure trash and coins are initialized under all lifecycle conditions
function ensureGameInitialized() {
  updateCoinDisplays();
  updateCleanlinessProgress();

  const container = trashContainer || document.getElementById('trashContainer');
  if (container && container.children.length === 0) {
    spawnInitialTrash(8);
  }
}

// 1. Immediate call
ensureGameInitialized();

// 2. DOMContentLoaded call
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', ensureGameInitialized);
} else {
  ensureGameInitialized();
}

// 3. Window load call
window.addEventListener('load', ensureGameInitialized);

if (window.location.hash === '#game') {
  setTimeout(() => {
    scrollToGame();
  }, 150);
}
