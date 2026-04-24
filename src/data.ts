import type { Profile } from "@/lib/locale.types.ts";
import { StackEnum } from "@/lib/types.ts";

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
    achievements: "Основные достижения",
    skills: "Мои навыки"
  },
  name: "Ожерельев Олег Валерьевич",
  email: "o.ozherelev.ict@gmail.com",
  github: "https://github.com/kolhov",
  location: "Казань. Готов к релокации или удалённой работе",
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
      url: "https://echopix.cz",
      responsible: "Fullstack-разработка веб-приложений (MEAN stack)",
      achievements: [
        "Спарсил все данные с WordPress сайта клиента для миграции в базу данных (Python, GraphQL)",
        "Участвовал в разработке коммуникационного модуля для киосков, установленных в разных городах Чехии (TypeScript, Node.js)",
      ],
      stack: [
        StackEnum.Python,
        StackEnum.TS,
        StackEnum.GraphQL,
        StackEnum.Node,
      ],
      icon: "Echopix",
    },
    {
      company: "ECHOpix, Krnov",
      position: "Junior fullstack разработчик",
      year: "4/2024 – 1/2025",
      months: "(10 месяцев)",
      url: "https://echopix.cz",
      responsible: "Fullstack-разработка веб-приложений (MEAN stack)",

      achievements: [
        "Работа над CMS для генерации сайтов и блогов с гибкой системой настройки контента и структуры сайта",
        "Electron приложение для городских киосков на базе Linux",
      ],
      stack: [
        StackEnum.TS,
        StackEnum.Angular,
        StackEnum.Tailwind,
        StackEnum.Electron,
        StackEnum.Express,
        StackEnum.MongoDB,
        StackEnum.GraphQL,
        StackEnum.Vitest,
        StackEnum.Docker,
      ],
      icon: "Echopix",
    },
    {
      company: "Эйдос-Медицина, Казань",
      position: "Frontend-разработчик",
      year: "9/2025 – 3/2026",
      months: "(7 месяцев)",
      url: "https://eidos-medicine.com",
      responsible:
        "Разработка frontend-решений для корпоративных систем (PDM, CRM, обучающие платформы)",
      achievements: [
        "Разработал компонент для предпросмотра файлов и 3D моделей",
        "Обеспечил плавную работу с большими данными, оптимизировав отрисовку таблиц с помощью виртуализации",
        "Реализовал сценарии проведения и записи тренировок, мониторинга действий обучающихся и анализа результатов для инструкторов",
        "Внедрил WebSocket для синхронизации в сложной системе записи занятий (мульти-роли), обеспечив автозапись занятий, консистентность данных и корректную работу при параллельных действиях нескольких преподавателей",
      ],
      stack: [
        StackEnum.TS,
        StackEnum.Vue,
        StackEnum.Pinia,
        StackEnum.Nuxt,
        StackEnum.SASS,
        StackEnum.Tanstack,
        StackEnum.ChartJS,
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
        StackEnum.TS,
        StackEnum.Vue,
        StackEnum.Pinia,
        StackEnum.Shadcn,
        StackEnum.Tailwind,
        StackEnum.Axios,
        StackEnum.Node,
        StackEnum.Express,
        StackEnum.Supabase,
        StackEnum.PostgreSQL,
      ],
    },
    {
      name: "Poe discord notify",
      github: "https://github.com/kolhov/poe-discord-notify",
      description:
        "Веб-воркер отслеживает положительные экономические изменения в игре Path of Exile (PoE) с помощью открытых API poe.ninja. При обнаружении положительных изменений автоматически публикует обновления в заданном канале Discord.",
      features: [],
      stack: [StackEnum.TS, StackEnum.Node],
    },
    {
      name: "Портфолио",
      github: "https://github.com/kolhov/CV",
      description: "",
      features: [],
      stack: [
        StackEnum.TS,
        StackEnum.Vue,
        StackEnum.Pinia,
        StackEnum.Tailwind,
        StackEnum.Shadcn,
      ],
    },
    {
      name: "Dashboard progress bar",
      github: "https://github.com/kolhov/round-progress-bar",
      demo: "https://kolhov.github.io/round-progress-bar/",
      description: "",
      features: [],
      stack: [StackEnum.TS, StackEnum.Vue],
    },
  ],
};

export default strings;
