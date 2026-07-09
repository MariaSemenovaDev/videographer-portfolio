import { routes } from "@/lib/routes";
import type { MediaAsset } from "@/lib/placeholders";

export type ProjectCard = {
  asset: MediaAsset;
  href: string;
  id: string;
  label: string;
  summary: string;
  title: string;
  year: string;
};

export const projectsSection = {
  description:
    "Шесть плейсхолдеров задают структуру для будущих фильмов, портретов и визуальных историй.",
  label: "Избранные проекты",
  title: "Сетка с острыми углами, готовая для авторских кадров и видеофрагментов."
} as const;

export const projectCards: ProjectCard[] = [
  {
    asset: {
      alt: "Плейсхолдер изображения для проекта 01",
      kind: "image",
      src: "/media/project-01.jpg"
    },
    href: routes.projects,
    id: "project-01",
    label: "Портрет / короткий формат",
    summary: "Здесь может появиться спокойная портретная работа с минимальным сопровождающим текстом.",
    title: "Проект Один",
    year: "2026"
  },
  {
    asset: {
      alt: "Плейсхолдер изображения для проекта 02",
      kind: "image",
      src: "/media/project-02.jpg"
    },
    href: routes.projects,
    id: "project-02",
    label: "Путешествие / наблюдение",
    summary: "Здесь может появиться история о месте, ритме и атмосфере.",
    title: "Проект Два",
    year: "2026"
  },
  {
    asset: {
      alt: "Плейсхолдер изображения для проекта 03",
      kind: "image",
      src: "/media/project-03.jpg"
    },
    href: routes.projects,
    id: "project-03",
    label: "Событие / вечерний свет",
    summary: "Здесь может появиться избирательный монтаж, построенный на ритме, людях и паузах.",
    title: "Проект Три",
    year: "2025"
  },
  {
    asset: {
      alt: "Плейсхолдер изображения для проекта 04",
      kind: "image",
      src: "/media/project-04.jpg"
    },
    href: routes.projects,
    id: "project-04",
    label: "Редакционный стиль / тишина",
    summary: "Здесь может появиться кейс, в котором настроение держат кадр, типографика и воздух.",
    title: "Проект Четыре",
    year: "2025"
  },
  {
    asset: {
      alt: "Плейсхолдер изображения для проекта 05",
      kind: "image",
      src: "/media/project-05.jpg"
    },
    href: routes.projects,
    id: "project-05",
    label: "Студия / детали",
    summary: "Здесь может появиться работа с плотной композицией, акцентом на руки, фактуры и поверхности.",
    title: "Проект Пять",
    year: "2024"
  },
  {
    asset: {
      alt: "Плейсхолдер изображения для проекта 06",
      kind: "image",
      src: "/media/project-06.jpg"
    },
    href: routes.projects,
    id: "project-06",
    label: "Финальный кадр / архив",
    summary: "Здесь может появиться завершающая карточка со ссылкой на расширенный архив проектов.",
    title: "Проект Шесть",
    year: "2024"
  }
];
