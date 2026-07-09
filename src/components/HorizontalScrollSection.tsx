"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import { featuredProjects } from "@/content/site";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScrollSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const sections = sectionsRef.current;
    if (!sections) return;

    const ctx = gsap.context(() => {
      const getDistance = () => sections.scrollWidth - window.innerWidth;

      gsap.to(sections, {
        x: () => -Math.max(getDistance(), 0),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: () => `+=${Math.max(sections.scrollWidth, window.innerWidth)}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="h-screen overflow-hidden bg-[#0b0b0b]">
      <div ref={sectionsRef} className="flex h-full w-max bg-[#0b0b0b]">
        {featuredProjects.map((project, index) => (
          <Panel key={project.slug} index={index} {...project} />
        ))}
      </div>
    </section>
  );
}

type PanelProps = (typeof featuredProjects)[number] & {
  index: number;
};

function Panel({ index, title, category, location, year, tags, description }: PanelProps) {
  return (
    <div className="flex h-screen min-w-screen items-center px-6 py-14 md:px-10 lg:px-14">
      <div className="grid w-full max-w-7xl gap-8 lg:grid-cols-[0.8fr_1fr_0.8fr] lg:items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.16em] text-white/45">Проект {String(index + 1).padStart(2, "0")}</p>
          <h2 className="mt-4 text-4xl text-white md:text-6xl">{title}</h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-white/70">{description}</p>
        </div>

        <div className="flex aspect-[4/5] items-end rounded-[2rem] bg-[linear-gradient(180deg,#2b2b2b_0%,#101010_100%)] p-8">
          <div>
            <p className="text-sm uppercase tracking-[0.16em] text-white/45">{category}</p>
            <p className="mt-4 max-w-sm text-2xl leading-tight text-white">
              Атмосфера, пластика движения и интонация момента важнее шаблонной картинки.
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-end text-white">
          <div className="flex flex-wrap gap-3">
            {tags.map((tag) => (
              <span key={tag} className="rounded-full border border-white/14 px-4 py-2 text-sm uppercase tracking-[0.12em] text-white/60">
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-8 grid gap-6 text-lg text-white/72">
            <div>
              <p className="text-sm uppercase tracking-[0.16em] text-white/45">Локация</p>
              <p className="mt-2">{location}</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.16em] text-white/45">Год</p>
              <p className="mt-2">{year}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
