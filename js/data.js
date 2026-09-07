/* ============================================================
   КОНТЕНТ САЙТА — правьте только этот файл
   Здесь живут: услуги, преимущества, опыт (JOBS), контакты
   и строки терминала. Разметка — index.html, логика — js/main.js.
   ============================================================ */

/* ============================================================
   CONFIG — редактируйте свои данные здесь
   ============================================================ */

const SERVICES = [
  {
    name: "Android-приложение под ключ",
    desc: "От идеи и прототипа до публикации в Google Play: архитектура, нативная разработка на Kotlin, тестирование, релиз и поддержка после запуска.",
    tags: ["Kotlin", "Jetpack Compose", "CI/CD", "Google Play"]
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
  }
];

const WHY = [
  { title: "Опыт в биг-техе", text: "Работал в крупной продуктовой команде с высокими стандартами кода, ревью и релизных процессов." },
  { title: "Многогранный опыт", text: "Fintech, mobility, health-tech, e-commerce — разные домены и разные классы задач под Android." },
  { title: "Работа напрямую", text: "Без менеджеров-прослоек: обсуждаем задачу, я сам оцениваю, разрабатываю и отчитываюсь о прогрессе." }
];

// пример данных — замените на реальные места работы и проекты
const JOBS = [
  {
    period: "2024 — сейчас", place: "RomanAn Dev (Freelance)", role: "Android & AI Solutions",
    summary: "Полный цикл разработки мобильных продуктов для стартапов и бизнеса, ускоренный AI-инструментами на этапе прототипирования и рутинного кода.",
    stack: ["Kotlin", "Jetpack Compose", "Claude API", "Firebase"],
    screens: [
      { caption: "Дашборд", from:"#ffb627", to:"#ff8a3d" },
      { caption: "Онбординг", from:"#2bd9a5", to:"#1a9e79" }
    ]
  },
  {
    period: "2023 — 2024", place: "NordPay", role: "Senior Android Developer",
    summary: "Финтех-приложение: биометрическая аутентификация, офлайн-транзакции и синхронизация состояния платежей.",
    stack: ["Kotlin", "Coroutines", "Room", "Retrofit"],
    screens: [
      { caption: "Оплата", from:"#6a5cff", to:"#3d2fbf" },
      { caption: "Биометрия", from:"#ffb627", to:"#c98600" }
    ]
  },
  {
    period: "2021 — 2023", place: "UrbanGo", role: "Android Developer",
    summary: "Приложение городской мобильности: карта в реальном времени, поиск транспорта поблизости, оптимизация энергопотребления GPS.",
    stack: ["Kotlin", "Google Maps SDK", "WorkManager"],
    screens: [
      { caption: "Карта", from:"#2bd9a5", to:"#12866a" },
      { caption: "Поездка", from:"#ffb627", to:"#e08f00" }
    ]
  },
  {
    period: "2020 — 2021", place: "MedTrack", role: "Android Developer",
    summary: "Health-tech трекер с интеграцией носимых устройств по Bluetooth LE и защищённым локальным хранением медицинских данных.",
    stack: ["Java/Kotlin", "BLE", "SQLCipher"],
    screens: [
      { caption: "Показатели", from:"#ff6f6f", to:"#b53a3a" },
      { caption: "Устройство", from:"#6a5cff", to:"#392c9e" }
    ]
  },
  {
    period: "2019 — 2020", place: "ShopWave", role: "Mobile Developer",
    summary: "E-commerce приложение: оплата в один клик, персонализированные push-уведомления, каталог с офлайн-кэшем.",
    stack: ["Kotlin", "Firebase", "MVVM"],
    screens: [
      { caption: "Каталог", from:"#ffb627", to:"#e08f00" },
      { caption: "Корзина", from:"#2bd9a5", to:"#199873" }
    ]
  },
  {
    period: "2018 — 2019", place: "BigTech Cloud Systems", role: "Android Engineer",
    summary: "Крупная кросс-функциональная команда: внутренний SDK, которым пользовались десятки продуктовых команд компании.",
    stack: ["Kotlin", "Dagger/Hilt", "Modular arch"],
    screens: [
      { caption: "SDK-панель", from:"#6a5cff", to:"#2f2277" },
      { caption: "Логи", from:"#b6aad0", to:"#6c608f" }
    ]
  },
  {
    period: "2017 — 2018", place: "StartLab", role: "Junior Android Developer",
    summary: "Первый коммерческий проект — приложение для мероприятий, первый релиз в Google Play.",
    stack: ["Java", "XML Layouts", "SQLite"],
    screens: [
      { caption: "Афиша", from:"#ff8a3d", to:"#c9581a" },
      { caption: "Билет", from:"#2bd9a5", to:"#1a9e79" }
    ]
  }
];

const CONTACTS = [
  { label: "Telegram · @romanan", href: "https://t.me/romanan" },
  { label: "email@romanan.dev", href: "mailto:email@romanan.dev" },
  { label: "GitHub", href: "https://github.com/romanan" }
];

const termLines = [
  { text: "$ whoami", cls: "muted-line" },
  { text: "roman_anchugov — android developer", cls: "" },
  { text: "", cls: "" },
  { text: "$ ls services/", cls: "muted-line" },
  { text: "android-app-turnkey/", cls: "accent" },
  { text: "technical-spec/", cls: "accent" },
  { text: "ai-assisted-dev/", cls: "accent" },
  { text: "", cls: "" },
  { text: "$ status", cls: "muted-line" },
  { text: "> открыт для новых проектов", cls: "" },
];
