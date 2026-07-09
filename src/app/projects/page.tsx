import { PageTransitionShell } from "@/components/shared/PageTransitionShell";
import { MediaFrame } from "@/components/shared/media-frame";
import { projectCards, projectsSection } from "@/data/projects";

export default function ProjectsPage() {
  const [featuredProject, ...gridProjects] = projectCards;

  return (
    <PageTransitionShell>
      <main className="page-container px-4 pb-20 pt-28 sm:px-6 sm:pt-36 lg:px-8">
        <section className="grid gap-8 border-b border-border pb-10 lg:grid-cols-[minmax(0,1fr)_minmax(300px,0.8fr)]">
          <div className="space-y-4">
            <p className="eyebrow">{projectsSection.label}</p>
            <h1 className="display-title max-w-[11ch] text-[clamp(3rem,7vw,5.8rem)]">
              {projectsSection.title}
            </h1>
          </div>
          <p className="meta-text max-w-lg lg:justify-self-end">
            {projectsSection.description}
          </p>
        </section>

        <section className="grid gap-4 py-10">
          <article className="grid overflow-hidden border border-border lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)]">
            <MediaFrame
              asset={featuredProject.asset}
              className="h-full min-h-[22rem] w-full object-cover"
            />
            <div className="grid gap-5 bg-[color:rgba(255,252,246,0.58)] p-6 sm:p-8">
              <p className="eyebrow">
                {featuredProject.label} / {featuredProject.year}
              </p>
              <h2 className="section-title text-[clamp(2rem,4vw,3.35rem)]">
                {featuredProject.title}
              </h2>
              <p className="meta-text max-w-md">{featuredProject.summary}</p>
            </div>
          </article>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {gridProjects.map((project, index) => (
              <article
                className="grid overflow-hidden border border-border"
                key={project.id}
                style={{
                  background:
                    index === 1
                      ? "color-mix(in srgb, var(--color-powder-blue, #a5c8eb) 16%, var(--color-bone-white, #fffef7) 84%)"
                      : "rgba(255,252,246,0.56)"
                }}
              >
                <MediaFrame
                  asset={project.asset}
                  className="aspect-[4/5] w-full object-cover"
                />
                <div className="space-y-4 p-5 sm:p-6">
                  <p className="eyebrow">
                    {project.label} / {project.year}
                  </p>
                  <h2 className="section-title text-[clamp(1.8rem,3vw,2.4rem)]">
                    {project.title}
                  </h2>
                  <p className="meta-text">{project.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </PageTransitionShell>
  );
}
