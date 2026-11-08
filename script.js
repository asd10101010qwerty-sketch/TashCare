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
const langSelect = document.getElementById('langSelect');
const regForm = document.getElementById('regForm');
const usernameInput = document.getElementById('usernameInput');
const submitBtn = document.getElementById('submitBtn');
const submitBtnText = document.getElementById('submitBtnText');
const alertBox = document.getElementById('alertBox');
const alertIcon = document.getElementById('alertIcon');
const alertMessage = document.getElementById('alertMessage');
const alertAction = document.getElementById('alertAction');

// --- THEME MANAGEMENT ---
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('tashcare_theme', theme);
  currentTheme = theme;
  if (theme === 'dark') {
    themeToggleBtn.innerHTML = ICONS.sun;
    themeToggleBtn.setAttribute('title', 'Switch to Light Mode');
    themeToggleBtn.setAttribute('aria-label', 'Switch to Light Mode');
  } else {
    themeToggleBtn.innerHTML = ICONS.moon;
    themeToggleBtn.setAttribute('title', 'Switch to Dark Mode');
    themeToggleBtn.setAttribute('aria-label', 'Switch to Dark Mode');
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

themeToggleBtn.addEventListener('click', toggleTheme);

// --- MULTI-LANGUAGE MANAGEMENT ---
function updateLanguage(lang) {
  if (!TRANSLATIONS[lang]) lang = 'ru';
  currentLang = lang;
  localStorage.setItem('tashcare_lang', lang);
  langSelect.value = lang;

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
  if (alertBox.style.display !== 'none' && alertBox.classList.contains('alert-success')) {
    alertMessage.textContent = t.successMessage;
  }
}

langSelect.addEventListener('change', (e) => {
  updateLanguage(e.target.value);
});

// Initialize Language
updateLanguage(currentLang);

// --- SCROLL REVEAL OBSERVER ---
const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.12,
  rootMargin: '0px 0px -40px 0px'
});

document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
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
