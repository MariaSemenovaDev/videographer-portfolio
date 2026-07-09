export const routes = {
  home: "/",
  projects: "/projects",
  process: "/process",
  news: "/news",
  contact: "/contact"
} as const;

export type AppRoute = (typeof routes)[keyof typeof routes];
