import type { Profile } from "@/lib/locale.types.ts";

export const strings: Profile = {
  page: {
    intro: "Интро",
    work: "Опыт работы",
    education: "Образование",
    courses: "Дополнительное образование",
    projects: "Проекты",
    contacts: "Контакты",
    pdf: "Скачать PDF",
    gitAd: "Больше на моём GitHub",
    telegram: "Telegram: @faantanka",
    achievements: 'Основные достижения'
  },
  name: "Ожерельев Олег Валерьевич",
  email: "o.ozherelev.ict@gmail.com",
  github: "https://github.com/kolhov",
  location: "Казань. Готов к релокации или удалённой работе.",
  uni: {
    name: "Силезский университет, Чехия",
    year: "2022 – 2025",
    program: "Бакалаврская программа: Современная информатика",
    specialization:
      "Специализация: Информационные и коммуникационные технологии",
  },
  courses: [
    "[Udemy] Полный курс разработчика игр на C# Unity 2D",
    "[ITVDN] C# для профессионалов",
    "[ITVDN] .NET разработчик",
    "Quinten Joran - Создание реальных веб-приложений с Vue.js – 2023",
    "Vue.js Master Class 2024",
  ],
  jobs: [
    {
      company: "ECHOpix, Krnov",
      position: "Стажёр-разработчик",
      year: "11/2023 – 4/2024",
      months: "(6 месяцев)",
      responsible: "Fullstack-разработка веб-приложений (MEAN stack)",
      achievements: [
        "Спарсил все данные с WordPress сайта клиента для миграции в базу данных (Python, GraphQL)",
        "Участвовал в разработке коммуникационного модуля для киосков, установленных в разных городах Чехии (TypeScript, Node.js)",
      ],
      stack: ["Python", "TypeScript", "GraphQL", "Node.js"],
      icon: "Echopix",
    },
    {
      company: "ECHOpix, Krnov",
      position: "Junior fullstack разработчик",
      year: "4/2024 – 1/2025",
      months: "(9 месяцев)",
      responsible:
        "Fullstack-разработка веб-приложений (MEAN stack)",

      achievements: [
        "Коробочное решение генератора сайтов/блогов управляемого через CMS",
        "Собственная CMS система с гибкой настройкой отображения контента и самого сайта/киоска.",
        "MW для городских киосков",
        "Electron приложение для городских киосков на базе Linux",
      ],
      stack: [
        "TypeScript",
        "Angular",
        "Tailwind",
        "Electron",
        "ExpressJs",
        "MongoDB",
        "GraphQL",
        "Vitest",
        "Docker",
      ],
      icon: "Echopix",
    },
    {
      company: "Эйдос-Медицина, Казань",
      position: "Frontend-разработчик",
      year: "9/2025 – 2/2026",
      months: "(6 месяцев)",
      responsible:
        "Разработка frontend-решений для корпоративных систем (PDM, CRM, обучающие платформы)",
      achievements: [
        "PDM-система: Создание интерфейсов для управления жизненным циклом изделий и инженерными данными",
        "PDM-система: Разработал компонент для предпросмотра файлов и 3D моделей",
        "PDM-система: Обеспечил плавную работу с большими данными, оптимизировав отрисовку таблиц с помощью виртуализации",
        "CRM-система: Разработка интерфейсов для управления взаимодействием с заказчиками и коммерческими процессами",
        "Платформа симуляционного центра: Разработка пользовательских интерфейсов для системы управления обучением на роботах-симуляторах пациентов",
        "Платформа симуляционного центра: Реализовал сценарии проведения и записи тренировок, мониторинга действий обучающихся и анализа результатов для инструкторов",
      ],
      stack: [
        "TypeScript",
        "Vue.js",
        "Nuxt",
        "SCSS",
        "Three.js",
        "Chart.js",
        "Tanstack Query",
        "Tanstack Virtual",
      ],
      icon: "Eidos",
    },
  ],
  projects: [
    {
      name: "Облачное объектное хранилище",
      github: "https://github.com/kolhov/cloud-storage",
      description:
        "Полностью функциональный fullstack монорепозиторий. Supabase используется для аутентификации и базы данных, файлы хранятся на сервере Express.js API, фронтенд — Vue 3 SPA.",
      features: [
        "Объектное хранилище",
        "Дерево папок, созданное с использованием мемоизации с временной сложностью O(n)",
        "Прямое скачивание файлов с использованием одноразовых токенов",
        "Возможность делиться файлами по ссылке",
        "Рекурсивная загрузка папок с сохранением иерархии",
        "Реактивный поиск по файлам и папкам",
      ],
      stack: [
        "TypeScript",
        "Vue",
        "Pinia",
        "Shadcn UI",
        "Tailwind",
        "Axios",
        "Node.js",
        "Express.js",
        "Supabase",
        "PostgreSQL",
      ],
    },
    {
      name: "Poe discord notify",
      github: "https://github.com/kolhov/poe-discord-notify",
      description:
        "Веб-воркер отслеживает положительные экономические изменения в игре Path of Exile (PoE) с помощью открытых API poe.ninja. При обнаружении положительных изменений автоматически публикует обновления в заданном канале Discord.",
      features: [],
      stack: ["TypeScript", "Node.js"],
    },
    {
      name: "Портфолио",
      github: "https://github.com/kolhov/CV",
      description: "",
      features: [],
      stack: ["TypeScript", "Vue", "Pinia", "Shadcn UI", "Tailwind"],
    },
    {
      name: "Dashboard progress bar",
      github: "https://github.com/kolhov/round-progress-bar",
      demo: "https://kolhov.github.io/round-progress-bar/",
      description: "",
      features: [],
      stack: ["TypeScript", "Vue", "SVG"],
    },
  ],
};

export default strings;
