export type CaseStudy = {
  slug: string;
  title: string;
  category: string;
  accent: string;
  summary: string;
  description: string;
  poster: string;
  images: string[];
  height: "tall" | "wide" | "square";
  sections: {
    label: string;
    text: string;
  }[];
};

export const cases: CaseStudy[] = [
  {
    slug: "concerts-in-ufa",
    title: "Концерты в Уфе",
    category: "Афиши",
    accent: "#FF3B30",
    summary: "Серия афиш и постов для музыкального паблика с агрессивной концертной эстетикой.",
    description:
      "Черный фон, красный акцент, плотная типографика и коллажи артистов собирают визуальный язык концертных анонсов.",
    poster: "/works/vadim-concert-poster.png",
    images: [
      "/works/vadim-concert-poster.png",
      "/works/vadim-concert-schedule.png",
      "/works/vadim-release-post.png",
      "/works/vadim-mic-post.png",
      "/works/vadim-musicants-post.png"
    ],
    height: "tall",
    sections: [
      { label: "Задача", text: "Сделать музыкальные анонсы заметными в ленте и сохранить единый характер паблика." },
      { label: "Исследование", text: "В основу легли концертные плакаты, гранж-текстуры и динамика музыкальных обложек." },
      { label: "Концепция", text: "Красный акцент работает как сигнал, а крупная типографика создает ощущение громкости." },
      { label: "Итоговый дизайн", text: "Постер расписания, афиша месяца и несколько постов для разных рубрик." },
      { label: "Результат", text: "Получилась серия, которую легко продолжать новыми артистами и датами." }
    ]
  },
  {
    slug: "ficus-vpn",
    title: "Ficus VPN",
    category: "Соцсети",
    accent: "#9BC449",
    summary: "Оформление Telegram-бота и информационных экранов для VPN-сервиса.",
    description:
      "Проект строится на живом зеленом цвете, мягкой геометрии и простых информационных карточках.",
    poster: "/works/ficus-welcome.png",
    images: [
      "/works/ficus-welcome.png",
      "/works/ficus-tariffs.png",
      "/works/ficus-help.png",
      "/works/ficus-avatar.png",
      "/works/ficus-support-avatar.png"
    ],
    height: "square",
    sections: [
      { label: "Задача", text: "Сделать визуал сервиса дружелюбным и понятным для пользователей Telegram." },
      { label: "Исследование", text: "Фокус был на простоте инструкций, тарифов и узнаваемости аватаров бота." },
      { label: "Концепция", text: "Зеленый бренд-цвет, темная база и округлая типографика создают технологичный, но мягкий тон." },
      { label: "Итоговый дизайн", text: "Аватары, приветственный экран, тарифы и карточка помощи." },
      { label: "Результат", text: "Сервис получил цельную визуальную систему для коммуникации внутри бота." }
    ]
  },
  {
    slug: "improv-events",
    title: "Импровизация",
    category: "Афиши",
    accent: "#F5E600",
    summary: "Афиши для отчетников, мастер-классов и студенческих improv-событий.",
    description:
      "Серия соединяет театральное настроение, яркий цвет, крупные заголовки и выразительные фото.",
    poster: "/works/masha-improv-poster.png",
    images: [
      "/works/masha-improv-poster.png",
      "/works/masha-masterclass.png",
      "/works/masha-report-poster.png",
      "/works/masha-student-improv.png"
    ],
    height: "wide",
    sections: [
      { label: "Задача", text: "Создать афиши для разных форматов импровизационных мероприятий." },
      { label: "Исследование", text: "Визуальный язык опирается на сцену, эмоцию зрителя и контраст афиши." },
      { label: "Концепция", text: "Каждая афиша держит отдельный характер события, но сохраняет драматичную подачу." },
      { label: "Итоговый дизайн", text: "Анонсы отчетника, мастер-класса и студенческой импровизации." },
      { label: "Результат", text: "Материалы работают как самостоятельные постеры и как единая event-линейка." }
    ]
  },
  {
    slug: "presentation-design",
    title: "AI презентации",
    category: "Презентации",
    accent: "#B48CFF",
    summary: "Дизайн презентаций для технологических и AI-проектов.",
    description:
      "Pitch deck должен быстро объяснять сложную идею, поэтому структура, ритм и визуальная иерархия работают вместе.",
    poster: "/presentations/presentation-1.pdf.png",
    images: [
      "/presentations/presentation-1.pdf.png",
      "/presentations/presentation-2.pdf.png",
      "/presentations/presentation-3.pdf.png"
    ],
    height: "tall",
    sections: [
      { label: "Задача", text: "Упаковать сложные технологические проекты в понятные презентации." },
      { label: "Исследование", text: "Разобраны сценарии pitch deck: проблема, решение, рынок, продукт и эффект." },
      { label: "Концепция", text: "Каждый слайд отвечает на один вопрос и поддерживает фокус на идее." },
      { label: "Итоговый дизайн", text: "Структура, визуальный стиль, схемы, диаграммы и ключевые слайды." },
      { label: "Результат", text: "Презентации выглядят сильнее и проще объясняют ценность проектов." }
    ]
  }
];

export const presentationProjects = [
  {
    title: "Металлургический AI стартап",
    text: "AI-система для анализа производственных данных, рисков и оптимизации процессов.",
    accent: "#D7FF42",
    image: "/presentations/presentation-1.pdf.png",
    href: "/presentations/presentation-1.pdf"
  },
  {
    title: "Роботизированный жарочный пост",
    text: "Питч продукта на стыке robotics, foodtech и автоматизации операционных задач.",
    accent: "#51D6FF",
    image: "/presentations/presentation-2.pdf.png",
    href: "/presentations/presentation-2.pdf"
  },
  {
    title: "Правовая AI система",
    text: "Презентация сервиса, который помогает работать с документами и юридическими сценариями.",
    accent: "#FF5C39",
    image: "/presentations/presentation-3.pdf.png",
    href: "/presentations/presentation-3.pdf"
  }
];

export const galleryItems = cases.flatMap((item) =>
  item.images.map((image, index) => ({
    title: index === 0 ? item.title : `${item.title} / ${index + 1}`,
    image,
    accent: item.accent
  }))
);

export const skills = [
  ["Figma", "92%"],
  ["Photoshop", "86%"],
  ["Illustrator", "78%"],
  ["AI Tools", "90%"],
  ["Brand Design", "84%"],
  ["Social Media Design", "88%"],
  ["Presentation Design", "94%"]
] as const;
