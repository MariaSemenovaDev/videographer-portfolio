import Link from "next/link";

import { Reveal } from "@/components/shared/Reveal";
import { MediaFrame } from "@/components/shared/media-frame";
import { projectCards } from "@/data/projects";

export function ProjectGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {projectCards.slice(0, 3).map((project, index) => (
        <Reveal delay={index * 70} key={project.id}>
          <article className="grid h-full overflow-hidden border border-border bg-[color:rgba(255,252,246,0.56)]">
            <MediaFrame
              asset={project.asset}
              className="aspect-[4/5] w-full object-cover"
            />
            <div className="grid gap-5 p-5 sm:p-6">
              <div className="space-y-3">
                <p className="eyebrow">
                  {project.label} / {project.year}
                </p>
                <h3 className="section-title text-[clamp(1.8rem,3vw,2.65rem)]">
                  {project.title}
                </h3>
              </div>
              <p className="meta-text">{project.summary}</p>
              <div>
                <Link className="pill-button" href={project.href}>
                  Open Project
                </Link>
              </div>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
