import Link from "next/link";

import { featuredProjects, footerLinks, navigationLinks, siteMeta } from "@/content/site";

export default function Footer() {
  return (
    <footer className="bg-black px-6 py-16 text-white md:px-10 lg:px-14">
      <div className="mx-auto flex max-w-7xl flex-col gap-14">
        <div className="flex flex-col gap-8 border-b border-white/15 pb-12 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.2em] text-white/55">Связаться</p>
            <h2 className="mt-5 text-4xl leading-[0.95] md:text-6xl">
              Видео, в котором останется не только картинка, но и чувство момента.
            </h2>
          </div>

          <div className="flex flex-col gap-3 text-lg text-white/70">
            <a href={`mailto:${siteMeta.email}`} className="transition-colors hover:text-white">
              {siteMeta.email}
            </a>
            <a href={`tel:${siteMeta.phone.replace(/[^\d+]/g, "")}`} className="transition-colors hover:text-white">
              {siteMeta.phone}
            </a>
            <p>{siteMeta.city}</p>
          </div>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-white/55">Обо мне</p>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/72">{siteMeta.intro}</p>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-white/55">Навигация</p>
            <div className="mt-4 flex flex-col gap-3">
              {navigationLinks.map((link) => (
                <Link key={link.path} href={link.path} className="w-max text-lg transition-colors hover:text-white/60">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-white/55">Выборка проектов</p>
            <div className="mt-4 flex flex-col gap-4">
              {featuredProjects.map((project) => (
                <div key={project.slug} className="border-b border-white/10 pb-4 last:border-b-0 last:pb-0">
                  <p className="text-lg">{project.title}</p>
                  <p className="mt-1 text-sm uppercase tracking-[0.16em] text-white/45">
                    {project.category} / {project.location}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 border-t border-white/15 pt-8 text-sm uppercase tracking-[0.16em] text-white/50 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-4">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                className="transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          <p>
            {siteMeta.name} / {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
