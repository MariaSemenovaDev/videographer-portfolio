import type { Route } from "next";

export const siteMeta = {
  name: "Вертелецкий Максим",
  shortName: "VM",
  city: "Россия, Ростов-на-Дону",
  tagline: "Съёмка, монтаж и искусство видеть главное.",
  intro:
    "Я создаю видео не по шаблону, а вокруг человека, события или идеи. Помогаю брендам, парам и творческим проектам звучать визуально сильнее через кадр, свет, движение и монтаж.",
  email: "hello@maxvert.ru",
  phone: "+7 (999) 123-45-67",
  telegram: "https://t.me/maxvert",
  instagram: "https://instagram.com/maxvert",
};

export const navigationLinks: Array<{ path: Route; label: string }> = [
  { path: "/", label: "Главная" },
  { path: "/projects", label: "Проекты" },
  { path: "/process", label: "Процесс" },
  { path: "/news", label: "Журнал" },
  { path: "/contact", label: "Контакты" },
];

export const footerLinks = [
  { href: siteMeta.telegram, label: "Telegram" },
  { href: siteMeta.instagram, label: "Instagram" },
  { href: `mailto:${siteMeta.email}`, label: "Email" },
  { href: `tel:${siteMeta.phone.replace(/[^\d+]/g, "")}`, label: "Телефон" },
];

export const featuredProjects = [
  {
    slug: "wedding-film",
    title: "Свадебный фильм",
    category: "Событие",
    year: "2026",
    location: "Ростов-на-Дону",
    tags: ["wedding", "cinematic", "love story"],
    description:
      "Фильм о дне, где важны не только красивые планы, но и живая интонация пары, атмосфера пространства и движение внутри момента.",
  },
  {
    slug: "brand-portrait",
    title: "Портрет бренда",
    category: "Бренд",
    year: "2026",
    location: "Краснодар",
    tags: ["brand", "portrait", "social"],
    description:
      "Имиджевое видео для локального бренда с акцентом на фактуру продукта, ритм монтажа и характер команды.",
  },
  {
    slug: "event-recap",
    title: "Event recap",
    category: "Событие",
    year: "2025",
    location: "Сочи",
    tags: ["event", "recap", "atmosphere"],
    description:
      "Короткий динамичный фильм о событии, который сохраняет не только программу, но и общее ощущение присутствия.",
  },
];

export const processSteps = [
  {
    title: "Бриф и задача",
    text: "Обсуждаем формат, настроение, площадку, сроки и то, какой эффект должно дать видео.",
  },
  {
    title: "Подготовка",
    text: "Собираю референсы, продумываю драматургию, свет, точки съёмки, тайминг и ключевые сцены.",
  },
  {
    title: "Съёмка",
    text: "Работаю с вниманием к живому моменту, пластике движения, людям в кадре и атмосфере пространства.",
  },
  {
    title: "Монтаж",
    text: "Собираю историю через ритм, музыку, цвет и паузы, чтобы ролик был не набором кадров, а цельным фильмом.",
  },
];

export const journalEntries = [
  {
    title: "Как сделать свадебный фильм живым, а не постановочным",
    type: "Заметка",
    text: "О наблюдении, паузах и том, почему самые сильные кадры часто происходят между запланированными сценами.",
  },
  {
    title: "Почему брендам нужен не просто рилс, а визуальный характер",
    type: "Разбор",
    text: "О том, как кадр, свет и монтаж помогают бренду звучать собраннее и дороже без лишнего шума.",
  },
  {
    title: "Что я учитываю перед съёмкой события",
    type: "Процесс",
    text: "Локация, движение гостей, свет, звук, ритм программы и запасные сценарии на случай изменений.",
  },
];
