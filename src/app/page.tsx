import Link from "next/link";

import { MediaFrame } from "@/components/shared/media-frame";
import { newsItems, newsSection } from "@/data/news";
import { processSection, processSteps } from "@/data/process";
import { projectCards, projectsSection } from "@/data/projects";
import { siteContent } from "@/data/site";

export default function HomePage() {
  const { hero } = siteContent.home;

  return (
    <main className="page-container pb-20 pt-28 sm:pt-36">
      <section className="grid gap-6 border-b border-border pb-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)]">
        <div className="section-stack">
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1 className="display-title max-w-5xl">{hero.title}</h1>
          <p className="max-w-xl text-base leading-7 text-muted">
            {hero.summary}
          </p>
          <div className="flex flex-wrap gap-3">
            {hero.metadata.map((item) => (
              <span className="pill-button" key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-4">
          <MediaFrame asset={hero.asset} />
          <div className="surface-panel p-5">
            <p className="eyebrow">О главном экране</p>
            <p className="meta-text mt-6">{hero.caption}</p>
            <p className="meta-text mt-3">{siteContent.home.featuredNote}</p>
          </div>
        </div>
      </section>

      <section className="grid gap-4 border-b border-border py-12 lg:grid-cols-[minmax(280px,0.8fr)_minmax(0,1.2fr)]">
        <div className="space-y-4">
          <p className="eyebrow">{siteContent.home.sections.process}</p>
          <h2 className="section-title">Подготовлено для движения, медиа и будущих переходов.</h2>
          <p className="meta-text max-w-md">{siteContent.home.about}</p>
          <Link className="pill-button" href={siteContent.home.ctaRoute}>
            {siteContent.home.ctaLabel}
          </Link>
        </div>
        <MediaFrame asset={hero.secondaryAsset} />
      </section>

      <section className="py-12">
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-4">
            <p className="eyebrow">{projectsSection.label}</p>
            <h2 className="section-title">{projectsSection.title}</h2>
          </div>
          <p className="meta-text max-w-xl">{projectsSection.description}</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {projectCards.slice(0, 3).map((project) => (
            <article className="surface-panel overflow-hidden" key={project.id}>
              <MediaFrame asset={project.asset} />
              <div className="space-y-4 p-5">
                <p className="eyebrow">
                  {project.label} / {project.year}
                </p>
                <h3 className="section-title text-[clamp(1.75rem,3vw,2.5rem)]">
                  {project.title}
                </h3>
                <p className="meta-text">{project.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-4 border-t border-border py-12 lg:grid-cols-2">
        <div className="surface-panel p-6">
          <p className="eyebrow">{newsSection.label}</p>
          <h2 className="section-title mt-8">{newsSection.title}</h2>
          <p className="meta-text mt-6">{newsSection.description}</p>
          <div className="mt-10 grid gap-4">
            {newsItems.slice(0, 2).map((item) => (
              <article className="border-t border-border pt-4" key={item.id}>
                <p className="eyebrow">{item.label}</p>
                <h3 className="section-title mt-4 text-[clamp(1.5rem,2.2vw,2rem)]">
                  {item.title}
                </h3>
                <p className="meta-text mt-4">{item.summary}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="surface-panel p-6">
          <p className="eyebrow">{processSection.label}</p>
          <h2 className="section-title mt-8">{processSection.title}</h2>
          <div className="mt-10 grid gap-4">
            {processSteps.slice(0, 3).map((step) => (
              <article className="border-t border-border pt-4" key={step.id}>
                <p className="eyebrow">{step.label}</p>
                <h3 className="section-title mt-4 text-[clamp(1.5rem,2.2vw,2rem)]">
                  {step.title}
                </h3>
                <p className="meta-text mt-4">{step.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
