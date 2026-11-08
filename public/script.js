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
    footerRights: 'Все права защищены.'
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
    footerRights: 'All rights reserved.'
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
    footerRights: 'Barcha huquqlar himoyalangan.'
  }
};

// Global state
let currentLang = localStorage.getItem('tashcare_lang') || 'ru';
let currentTheme = localStorage.getItem('tashcare_theme') || 'light';

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
function updateLanguage(lang) {
  if (!TRANSLATIONS[lang]) lang = 'ru';
  currentLang = lang;
  localStorage.setItem('tashcare_lang', lang);
  if (langSelect) langSelect.value = lang;

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
}

if (langSelect) {
  langSelect.addEventListener('change', (e) => {
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

const COIN_STORAGE_KEY = 'tashcare_coins';
const STAT_CLEANED_KEY = 'tashcare_cleaned_count';
const ORDERS_STORAGE_KEY = 'tashcare_redeem_orders';

// DOM Elements for Routing & Game
const landingView = document.getElementById('landingView');
const gameView = document.getElementById('gameView');
const gameNavBtn = document.getElementById('gameNavBtn');
const gameMobileNavBtn = document.getElementById('gameMobileNavBtn');
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

// Trash SVG Icons (Pure SVG - Rule 5 compliant)
const TRASH_TYPES = [
  {
    type: 'plastic-bottle',
    name: 'Пластиковая бутылка',
    svg: `<svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="#0284c7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M10 2h4v3h-4z"/>
      <path d="M8 5h8v2l-1 2v11a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V9L8 7V5z"/>
      <line x1="8" y1="12" x2="16" y2="12"/>
      <line x1="8" y1="16" x2="16" y2="16"/>
    </svg>`
  },
  {
    type: 'soda-can',
    name: 'Жестяная банка',
    svg: `<svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <ellipse cx="12" cy="5" rx="6" ry="3"/>
      <path d="M6 5v14c0 1.66 2.69 3 6 3s6-1.34 6-3V5"/>
      <path d="M6 12c0 1.66 2.69 3 6 3s6-1.34 6-3"/>
    </svg>`
  },
  {
    type: 'coffee-cup',
    name: 'Одноразовый стаканчик',
    svg: `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#b45309" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M18 8h1a4 4 0 0 1 0 8h-1"/>
      <path d="M4 8h14v9a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8z"/>
      <line x1="6" y1="2" x2="6" y2="5"/>
      <line x1="10" y1="2" x2="10" y2="5"/>
      <line x1="14" y1="2" x2="14" y2="5"/>
    </svg>`
  },
  {
    type: 'plastic-bag',
    name: 'Пластиковый пакет',
    svg: `<svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="#64748b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M6 8l-2 12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2L18 8"/>
      <path d="M9 8V5a3 3 0 0 1 6 0v3"/>
      <path d="M10 12a2 2 0 0 0 4 0"/>
    </svg>`
  },
  {
    type: 'glass-bottle',
    name: 'Стеклянная бутылка',
    svg: `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M11 2h2v4l2 3v11a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V9l2-3V2z"/>
      <line x1="11" y1="13" x2="13" y2="13"/>
    </svg>`
  },
  {
    type: 'snack-wrapper',
    name: 'Фантик от конфет',
    svg: `<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#d97706" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polygon points="12 2 15 8 21 9 17 14 18 20 12 17 6 20 7 14 3 9 9 8 12 2"/>
    </svg>`
  }
];

// Web Audio API Synthesizer for collect chime
let audioCtx = null;
function playCollectChime() {
  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    if (!audioCtx) {
      audioCtx = new AudioContextClass();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

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
    // Audio context may be restricted by autoplay policy until gesture
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

function updateCoinDisplays() {
  const coins = getStoredCoins();
  const cleaned = getCleanedCount();

  if (gameCoinBalance) gameCoinBalance.textContent = coins.toLocaleString();
  if (navCoinPill) navCoinPill.textContent = `${coins} 🪙`;
  if (mobileCoinPill) mobileCoinPill.textContent = coins;
  if (drawerCoinBadge) drawerCoinBadge.textContent = `${coins} 🪙`;
  if (parkCleanVal) parkCleanVal.textContent = cleaned.toLocaleString();
}

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

// Router between Landing Page and Mini-Game View
function switchView(target) {
  const isGame = target === 'game' || window.location.hash === '#game';

  if (isGame) {
    if (landingView) landingView.style.display = 'none';
    if (gameView) {
      gameView.style.display = 'block';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    if (gameNavBtn) gameNavBtn.classList.add('active');

    // Ensure initial trash is on the field
    if (trashContainer && trashContainer.children.length === 0) {
      spawnInitialTrash(8);
    }
  } else {
    if (gameView) gameView.style.display = 'none';
    if (landingView) landingView.style.display = 'block';
    if (gameNavBtn) gameNavBtn.classList.remove('active');
  }

  // Close mobile drawer on navigation
  if (typeof closeDrawer === 'function') {
    closeDrawer();
  }
}

window.addEventListener('hashchange', () => {
  switchView(window.location.hash === '#game' ? 'game' : 'landing');
});

// Home links
if (brandLogoLink) {
  brandLogoLink.addEventListener('click', (e) => {
    if (window.location.hash === '#game') {
      e.preventDefault();
      window.location.hash = '';
      switchView('landing');
    }
  });
}

if (btnBackHome) {
  btnBackHome.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.hash = '';
    switchView('landing');
  });
}

// Park Trash Game Mechanics
function updateCleanlinessProgress() {
  const cleaned = getCleanedCount();
  const pct = Math.min(100, Math.round((cleaned / (cleaned + 10)) * 100));
  if (cleanlinessVal) cleanlinessVal.textContent = `${pct}%`;
  if (trashCountVal && trashContainer) {
    trashCountVal.textContent = trashContainer.children.length;
  }
}

function spawnTrashItem() {
  if (!trashContainer) return;

  const itemData = TRASH_TYPES[Math.floor(Math.random() * TRASH_TYPES.length)];
  const itemEl = document.createElement('div');
  itemEl.className = 'trash-item';
  itemEl.setAttribute('role', 'button');
  itemEl.setAttribute('tabindex', '0');
  itemEl.setAttribute('title', `Убрать: ${itemData.name} (+1 TashCoin)`);
  itemEl.innerHTML = itemData.svg;

  // Random position within safe arena bounds
  // (Left between 8% and 82%, Top between 14% and 74%)
  const left = Math.floor(8 + Math.random() * 74);
  const top = Math.floor(14 + Math.random() * 60);
  const rotation = Math.floor(-35 + Math.random() * 70);

  itemEl.style.left = `${left}%`;
  itemEl.style.top = `${top}%`;
  itemEl.style.transform = `rotate(${rotation}deg)`;

  const onCollect = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (itemEl.classList.contains('collected')) return;
    itemEl.classList.add('collected');

    // Play chime sound
    playCollectChime();

    // Spawn floating +1 indicator
    const rect = itemEl.getBoundingClientRect();
    const arenaRect = parkArena.getBoundingClientRect();
    const floatEl = document.createElement('div');
    floatEl.className = 'floating-coin-plus';
    floatEl.textContent = '+1 🪙';
    floatEl.style.left = `${rect.left - arenaRect.left + 12}px`;
    floatEl.style.top = `${rect.top - arenaRect.top - 6}px`;
    parkArena.appendChild(floatEl);

    setTimeout(() => {
      if (floatEl.parentNode) floatEl.remove();
    }, 800);

    // Add +1 coin
    addCoins(1);

    // Remove trash item from DOM after pop animation
    setTimeout(() => {
      if (itemEl.parentNode) itemEl.remove();
      updateCleanlinessProgress();

      // Automatically spawn a new piece of trash after a short delay
      setTimeout(() => {
        if (trashContainer && trashContainer.children.length < 12) {
          spawnTrashItem();
        }
      }, 1400);
    }, 320);
  };

  itemEl.addEventListener('click', onCollect);
  itemEl.addEventListener('touchstart', onCollect, { passive: false });
  itemEl.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      onCollect(e);
    }
  });

  trashContainer.appendChild(itemEl);
  updateCleanlinessProgress();
}

function spawnInitialTrash(count = 8) {
  if (!trashContainer) return;
  trashContainer.innerHTML = '';
  for (let i = 0; i < count; i++) {
    spawnTrashItem();
  }
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
    alert(`Вам не хватает ${diff} TashCoin! Уберите еще мусора на полянке, чтобы заработать недостающие коины.`);
    return;
  }

  // Deduct coins
  const success = spendCoins(price);
  if (!success) return;

  // Generate unique redemption promo voucher
  const randA = Math.floor(1000 + Math.random() * 9000);
  const randB = Math.floor(1000 + Math.random() * 9000);
  const voucherCode = `TC-${randA}-${randB}`;

  // Save order to history
  try {
    const orders = JSON.parse(localStorage.getItem(ORDERS_STORAGE_KEY) || '[]');
    orders.push({
      id: itemId,
      title,
      price,
      code: voucherCode,
      date: new Date().toISOString()
    });
    localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(orders));
  } catch (err) {
    console.error('Order save error:', err);
  }

  // Show modal
  if (shopModalTitle) shopModalTitle.textContent = `Вы обменяли: ${title}`;
  if (shopModalSubtitle) shopModalSubtitle.textContent = `С вашего баланса успешно списано ${price} TashCoin.`;
  if (voucherCodeDisplay) voucherCodeDisplay.textContent = voucherCode;

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

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      if (copyVoucherTxt) copyVoucherTxt.textContent = 'Скопировано!';
      setTimeout(() => {
        if (copyVoucherTxt) copyVoucherTxt.textContent = 'Копировать';
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
    if (copyVoucherTxt) copyVoucherTxt.textContent = 'Скопировано!';
    setTimeout(() => {
      if (copyVoucherTxt) copyVoucherTxt.textContent = 'Копировать';
    }, 2000);
  }
};

// Initialize coins and router on load
updateCoinDisplays();
updateCleanlinessProgress();

if (window.location.hash === '#game') {
  switchView('game');
}
