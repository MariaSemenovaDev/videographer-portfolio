import { routes } from "@/lib/routes";

export const siteContent = {
  contact: {
    ctaLabel: "Контакты",
    ctaRoute: routes.contact,
    email: "hello@example.com",
    intro:
      "Эта страница подготовлена для будущих заявок, деталей съёмки и аккуратного контактного сценария.",
    title: "Страница контактов подготовлена для будущих обращений."
  },
  home: {
    about:
      "Эта основа собрана для спокойного авторского портфолио. В ней заранее оставлено место для будущих фильмов, кадров и редакционных композиций без зависимости от отсутствующих ассетов.",
    ctaLabel: "Смотреть проекты",
    ctaRoute: routes.projects,
    featuredNote:
      "Плейсхолдеры остаются нейтральными, пока к проекту не будут добавлены реальные изображения и видеоматериалы.",
    hero: {
      asset: {
        alt: "Плейсхолдер постера для главного экрана",
        kind: "video",
        src: "/media/hero-poster.webm"
      },
      caption: "Избранные фильмы, тишина, движение и свободное пространство.",
      eyebrow: "Авторское видеопортфолио",
      metadata: ["Тёплый светлый фон", "Лёгкая типографика", "Минимальный интерфейс"],
      secondaryAsset: {
        alt: "Плейсхолдер шоурила для главного экрана",
        kind: "video",
        src: "/media/home-background.webm"
      },
      summary:
        "Спокойная основа портфолио для фильмов, портретов, заметок о процессе и избранных работ.",
      title: "Основа для историй в движении, выразительных кадров и будущих материалов."
    },
    sections: {
      news: "Заметки",
      process: "Процесс",
      projects: "Избранные проекты"
    }
  },
  navigation: {
    drawerEyebrow: "Navigation",
    drawerNote:
      "All sections use typed placeholder content and documented media paths until original assets are added."
  },
  seo: {
    description:
      "Editorial portfolio scaffold with typed content, placeholder media handling, and room for future films and still imagery.",
    title: "Editorial Portfolio"
  }
} as const;
