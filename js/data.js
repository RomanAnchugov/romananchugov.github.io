/* ============================================================
   КОНТЕНТ САЙТА — правьте только этот файл
   TEXT — все текстовки страницы (навигация, hero, заголовки,
   подвал). Ниже — данные: SERVICES, WHY, JOBS, CONTACTS,
   termLines (терминал в hero).
   Разметка — index.html, логика — js/main.js, стили — css/styles.css
   ============================================================ */

const TEXT = {
  logo: {
    plain: "Roman",
    // сценарий: RomanAn → RomanAndroid (прикол) → Roman Anchugov → по кругу
    // text — что дописывается, holdMs — пауза, erase — стереть ли часть после паузы
    parts: [
      { text: "An",     holdMs: 1200, erase: false },
      { text: "droid",  holdMs: 1800, erase: true  },
      { text: "chugov", holdMs: 2600, erase: true  }
    ],
    typeMs: 130,
    eraseMs: 70
  },

  meta: {
    title: "Мобильная разработка под ключ",
    description: "Роман Анчугов — мобильный разработчик полного цикла. Приложения под ключ для iOS и Android, ТЗ для бизнеса, AI-assisted разработка."
  },

  nav: [
    { label: "услуги", href: "#services" },
    { label: "почему я", href: "#why" },
    { label: "опыт", href: "#experience" },
    { label: "контакты", href: "#contact" }
  ],

  hero: {
    eyebrow: "открыт для новых проектов",
    headline: [
      "Мобильные",
      "приложения",
      "под ключ —",
      "быстрее нормы."
    ],
    sub: "Роман Анчугов (RomanAn) — мобильный разработчик полного цикла. Проектирую, пишу код и довожу продукт до релиза на iOS и Android, ускоряя часть этапов нейросетями, но не в ущерб качеству.",
    cta: [
      { label: "Обсудить проект", href: "#contact", solid: true },
      { label: "Смотреть опыт", href: "#experience", solid: false }
    ]
  },

  sections: {
    services:   { title: "Услуги",          note: "да и вообще всё, что хотите" },
    why:        { title: "Почему я",        note: "" },
    experience: { title: "Опыт и проекты", note: "наведите курсор на пункт — появятся детали", sub: "Весь коммерческий опыт подтверждается записями в трудовой книжке. Никаких накруток и вранья." }
  },

  whyLead: "Работал внутри крупных продуктовых командах и веду проекты в одиночку — понимаю, как выглядит дисциплина большой компании и скорость фриланса, и совмещаю оба режима под задачу клиента.",

  contactTitle: "Есть идея приложения? Обсудим, что нужно, и во сколько это встанет.",

  editnote: "",

  footer: {
    left: "© {year} Роман Анчугов — RomanAn",
    right: "iOS · Android · Kotlin · Swift · AI-assisted development"
  }
};

const SERVICES = [
  {
    name: "Мобильное приложение под ключ",
    desc: "От идеи и прототипа до публикации в Google Play и App Store: архитектура, нативная разработка на Kotlin и Swift, кроссплатформенность через KMP, портирование Android→iOS с AI-инструментами, тестирование, релиз и поддержка.",
    tags: ["Kotlin", "Swift", "KMP", "App Store + Google Play", "CI/CD"]
  },
  {
    name: "Техническое задание для бизнеса",
    desc: "Превращаю идею в понятную для разработки структуру: экраны, логика, оценка сроков и бюджета, риски — документ, с которым можно идти к любой команде.",
    tags: ["ТЗ", "Архитектура", "Оценка сроков", "Roadmap"]
  },
  {
    name: "Реализация идей под ключ с AI",
    desc: "Использую нейросети как инструмент ускорения — быстрее собираю прототипы и рутинный код, оставляя за собой архитектурные решения и контроль качества.",
    tags: ["AI-assisted dev", "Прототипирование", "Backend", "MVP"]
  },
  {
    name: "Менторинг и карьерные консультации",
    desc: "Разбор резюме и портфолио, план роста, подготовка к собеседованиям. Персональное обучение для android-разработчика: от Kotlin и Jetpack Compose до архитектуры — с код-ревью и практикой на реальных задачах.",
    tags: ["резюме", "собеседования", "Kotlin", "Jetpack Compose", "код-ревью"]
  }
];

const WHY = [
  { title: "Опыт в биг-техе", text: "Работал в крупной продуктовой команде с высокими стандартами кода, ревью и релизных процессов." },
  { title: "Многогранный опыт", text: "Fintech, mobility, health-tech, e-commerce — разные домены и разные классы задач под iOS и Android." },
  { title: "Работа напрямую", text: "Без менеджеров-прослоек: обсуждаем задачу, я сам оцениваю, разрабатываю и отчитываюсь о прогрессе." }
];

// пример данных — замените на реальные места работы и проекты
const JOBS = [
  {
    period: "2024 — сейчас", place: "RomanAn Dev (Freelance)", role: "Mobile & AI Solutions",
    summary: "Полный цикл разработки мобильных продуктов для стартапов и бизнеса, ускоренный AI-инструментами на этапе прототипирования и рутинного кода.",
    stack: ["Kotlin", "Jetpack Compose", "Claude API", "Firebase"],
    screens: [
      { caption: "Дашборд", from:"#2e9e5b", to:"#1e6b3e" },
      { caption: "Онбординг", from:"#c9c1af", to:"#a89e88" }
    ]
  },
  {
    period: "2023 — 2024", place: "NordPay", role: "Senior Mobile Developer",
    summary: "Финтех-приложение: биометрическая аутентификация, офлайн-транзакции и синхронизация состояния платежей.",
    stack: ["Kotlin", "Coroutines", "Room", "Retrofit"],
    screens: [
      { caption: "Оплата", from:"#2a2620", to:"#16130e" },
      { caption: "Биометрия", from:"#2e9e5b", to:"#123f25" }
    ]
  },
  {
    period: "2021 — 2023", place: "UrbanGo", role: "Mobile Developer",
    summary: "Приложение городской мобильности: карта в реальном времени, поиск транспорта поблизости, оптимизация энергопотребления GPS.",
    stack: ["Kotlin", "Google Maps SDK", "WorkManager"],
    screens: [
      { caption: "Карта", from:"#1e6b3e", to:"#123f25" },
      { caption: "Поездка", from:"#c9c1af", to:"#8a8170" }
    ]
  },
  {
    period: "2020 — 2021", place: "MedTrack", role: "Mobile Developer",
    summary: "Health-tech трекер с интеграцией носимых устройств по Bluetooth LE и защищённым локальным хранением медицинских данных.",
    stack: ["Java/Kotlin", "BLE", "SQLCipher"],
    screens: [
      { caption: "Показатели", from:"#8a8170", to:"#5c5647" },
      { caption: "Устройство", from:"#2e9e5b", to:"#1e6b3e" }
    ]
  },
  {
    period: "2021 — 2023", place: "Т-Банк (Тинькофф)", role: "Mobile Developer",
    summary: "Разрабатывал Тинькофф Инвестиции. Был в Base команде. Разрабатывал основные экраны — портфель, покупка/продажа, стакан и т.д. Высоконагруженный экран: всё постоянно меняется каждую секунду и должен быть отказоустойчивым (т.к. тут деньги). Также разрабатывал сложные фичи по авто-инвестированию.",
    stack: ["Kotlin", "Dagger", "Compose", "MVVM/MVI"],
    screens: [
      { caption: "Портфель", src: "img/invest1.webp", pos: "center" },
      { caption: "Бумага и сделки", src: "img/invest2.png" }
    ]
  },
  {
    period: "2020 — 2021", place: "Rambler", role: "Mobile Engineer",
    summary: "С нуля разрабатывал новую Rambler.Афишу — приложение для покупки билетов на различные культурно-массовые мероприятия. Сейчас именно эта версия приложения в сторах. По факту с нуля разрабатывал всё приложение — лента, события, карта, подборки, профиль. Выбирал архитектуру, настраивал CI, писал первые тесты.",
    stack: ["Kotlin", "Dagger", "MVVM", "Arch components"],
    screens: [
      { caption: "Лента и события", src: "img/afisha1.webp", pos: "center" },
      { caption: "Карта мест", src: "img/afisha2.webp", pos: "center" }
    ]
  },
  {
    period: "2019 — 2020", place: "СберФуд", role: "Junior Mobile Developer",
    summary: "Первый коммерческий проект. Стартап внутри Сбера — приложение для ресторанов с баллами, скидками и другими акциями. Занимался разработкой основного приложения(карта, профиль, чекаут, оплата и тд.), а также многочисленных white-labels для различных ресторанных сетей (например, Cofix и Шоколадница).",
    stack: ["Java", "XML Layouts", "Google Maps", "MVI", "Cicerone"],
    screens: [
      { caption: "Бронь столика", src: "img/sberfood1.webp" },
      { caption: "Счёт и чаевые", src: "img/sberfood2.webp" },
      { caption: "Кошелёк бонусов", src: "img/sberfood3.webp" },
      { caption: "Разделение счёта", src: "img/sberfood4.webp" }
    ]
  }
];

const CONTACTS = [
  { label: "Telegram · @romananchugov", href: "https://t.me/romananchugov" },
  { label: "romagn@mail.ru", href: "mailto:romagn@mail.ru" },
  { label: "GitHub", href: "https://github.com/RomanAnchugov" }
];

const termLines = [
  { text: "$ roman --version", cls: "muted-line" },
  { text: "RomanAn v2026.9 — mobile developer", cls: "" },
  { text: "", cls: "" },
  { text: "$ roman --stack", cls: "muted-line" },
  { text: "kotlin · swift · kmp · ai-assisted", cls: "accent" },
  { text: "", cls: "" },
  { text: "$ roman --status", cls: "muted-line" },
  { text: "> открыт для новых проектов", cls: "" }
];
