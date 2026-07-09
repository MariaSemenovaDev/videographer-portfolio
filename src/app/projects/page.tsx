import { MediaFrame } from "@/components/shared/media-frame";
import { projectCards, projectsSection } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main className="page-container pb-20 pt-28 sm:pt-36">
      <section className="space-y-4 border-b border-border pb-10">
        <p className="eyebrow">{projectsSection.label}</p>
        <h1 className="section-title max-w-4xl">{projectsSection.title}</h1>
        <p className="meta-text max-w-2xl">{projectsSection.description}</p>
      </section>

      <section className="grid gap-4 py-10 md:grid-cols-2 xl:grid-cols-3">
        {projectCards.map((project) => (
          <article className="surface-panel overflow-hidden" key={project.id}>
            <MediaFrame asset={project.asset} />
            <div className="space-y-4 p-5">
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
      </section>
    </main>
  );
}
