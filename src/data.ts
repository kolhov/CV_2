import type { Profile } from "@/lib/locale.types.ts";
import { StackEnum } from "@/lib/types.ts";
import Frontend from "./components/icons/ui/Frontend.vue";
import Pallete from "./components/icons/ui/Pallete.vue";
import Speedometr from "./components/icons/ui/Speedometr.vue";

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
    achievements: "Основные достижения",
    skills: "Мои навыки",
    about: "Обо мне",
  },
  about: {
    about:
      "Имею 2 года коммерческого опыта разработки SPA и корпоративных систем. Специализируюсь на Vue/Nuxt/React и TypeScript. Имею опыт работы с высоконагруженными интерфейсами, 3D-визуализацией и обучающими платформами. Быстро осваиваю новые технологии, уделяю внимание производительности и качеству кода.",
    profession: "Веб-разработчик",
    available: "Открыт к предложениям",
    description: "Создаю современные и эффективные веб‑приложения",
    projects: "Мои проекты",
    contact: "Написать мне",
    accents: [
      {
        title: "Чистый код",
        description: "Написание поддерживаемого и масштабируемого кода",
        icon: Frontend,
      },
      {
        title: "Ориентация на пользователя",
        description: "Приоритет пользовательского опыта и доступности",
        icon: Pallete,
      },
      {
        title: "Производительность",
        description: "Оптимизация приложений для скорости и эффективности",
        icon: Speedometr,
      },
    ],
  },
  name: "Ожерельев Олег",
  contacts: {
    callMe: "Свяжитесь со мной",
    telegram: ["Telegram", "kolhov"],
    location: ["Где я", "Казань. Готов к релокации или удалённой работе"],
    email: ["Почта", "o.ozherelev.ict@gmail.com"],
    github: ["Github", "https://github.com/kolhov"],
  },
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
      name: "Облачное хранилище файлов",
      github: "https://github.com/kolhov/cloud-storage",
      image: "cloud1.png",
      gif: "cloud2.gif",
      description:
        "Полностью функциональный fullstack монорепозиторий. Supabase используется для аутентификации и базы данных, файлы хранятся на Node.js сервере",
      features: [
        "Объектное хранилище",
        "Построение иерархии папок на основе мемоизации с линейной временной сложностью O(n)",
        "Прямое скачивание файлов с использованием одноразовых токенов",
        "Шеринг файлов и папок через уникальную ссылку",
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
      image: "poe1.png",
      gif: "poe2.gif",
      description:
        "Веб-воркер отслеживает позитивные экономические изменения в Path of Exile и автоматически публикует обновления в Discord",
      features: [
        "Тонкая настройка выбора разделов экономики",
        "Задание порогового значения для реагирования на ценовой рост",
        "Подгрузка иллюстраций предметов",
        "Конвертация цен в разные валюты",
      ],
      stack: [StackEnum.TS, StackEnum.Node],
    },
    {
      name: "Портфолио",
      github: "https://github.com/kolhov/CV_2",
      image: "port1.png",
      description: "Сайт-визитка реализован без использования UI-библиотек",
      features: [
        "Никаких внешних UI библиотек",
        "Только CSS, SCSS и JavaScript",
      ],
      stack: [StackEnum.TS, StackEnum.Vue, StackEnum.SASS],
    },
    {
      name: "Dashboard progress bar",
      github: "https://github.com/kolhov/round-progress-bar",
      image: "dpb0.png",
      gif: "dpb.gif",
      demo: "https://kolhov.github.io/round-progress-bar/",
      description: "Vue-компонент: круговая шкала прогресса на основе SVG",
      features: [
        "Отладочный сайт, обеспечивающий проверку всех сценариев работы компонента",
        "Два режима визуализации: кольцевой и дашборд",
        "Система для оповещений об ошибках и предупреждений",
        "Интерфейс полностью анимирован",
      ],
      stack: [StackEnum.TS, StackEnum.Vue],
    },
  ],
};

export default strings;
