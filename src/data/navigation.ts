import { routes, type AppRoute } from "@/lib/routes";

export type NavigationItem = {
  description: string;
  eyebrow: string;
  href: AppRoute;
  label: string;
};

export const navigationItems: NavigationItem[] = [
  {
    description: "Landing page with hero, project preview, and editorial notes.",
    eyebrow: "00",
    href: routes.home,
    label: "Home"
  },
  {
    description: "Grid of placeholder project entries for future case studies.",
    eyebrow: "01",
    href: routes.projects,
    label: "Projects"
  },
  {
    description: "Process notes, working method, and production structure.",
    eyebrow: "02",
    href: routes.process,
    label: "Process"
  },
  {
    description: "Editorial notes, updates, and short release-style entries.",
    eyebrow: "03",
    href: routes.news,
    label: "News"
  },
  {
    description: "Neutral contact scaffold ready for inquiries and future details.",
    eyebrow: "04",
    href: routes.contact,
    label: "Contact"
  }
];
