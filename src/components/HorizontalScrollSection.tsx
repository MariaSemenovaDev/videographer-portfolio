"use client";

import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

type FeaturedProject = {
  slug: string;
  title: string;
  category: string;
  year: string;
  location: string;
  tags: string[];
  description: string;
  image: string;
};

export default function HorizontalScrollSection({
  featuredProjects,
}: {
  featuredProjects: FeaturedProject[];
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLDivElement>(null);
  const progressLineRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(1);

  useLayoutEffect(() => {
    const sections = sectionsRef.current;
    const progressLine = progressLineRef.current;
    if (!sections) return;

    const ctx = gsap.context(() => {
      const getDistance = () => sections.scrollWidth - window.innerWidth;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: () => `+=${Math.max(sections.scrollWidth, window.innerWidth)}`,
          scrub: 0.1,
          pin: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            const totalItems = featuredProjects.length;
            const activeIndex = Math.min(
              totalItems,
              Math.max(1, Math.ceil(self.progress * totalItems))
            );
            setCurrentIndex(activeIndex);
          },
        },
      });

      tl.to(
        sections,
        {
          x: () => -Math.max(getDistance(), 0),
          ease: "none",
        },
        0
      );

      if (progressLine) {
        tl.to(
          progressLine,
          {
            scaleX: 1,
            ease: "none",
          },
          0
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, [featuredProjects.length]);

  return (
    <section ref={containerRef} className="relative flex h-screen flex-col justify-between overflow-hidden bg-[#0b0b0b] pt-14 pb-6 md:pb-8">
      <div className="z-30 px-6 md:px-10 lg:px-14">
        <p className="text-sm uppercase tracking-[0.2em] text-white/40">Свадебные истории</p>
      </div>

      <div ref={sectionsRef} className="absolute inset-0 flex h-full w-max items-center bg-[#0b0b0b]">
        {featuredProjects.map((project, index) => (
          <Panel key={project.slug} index={index} total={featuredProjects.length} {...project} />
        ))}
      </div>

      <div className="z-30 mt-auto mb-2 w-full px-6 md:px-10 lg:px-14">
        <div className="relative h-[1px] w-full overflow-hidden bg-white/10">
          <div
            ref={progressLineRef}
            className="absolute top-0 left-0 h-full w-full origin-left bg-white will-change-transform"
            style={{ transform: "scaleX(0)" }}
          />
        </div>

        <div className="mt-4 flex items-center justify-between text-xs font-mono tracking-widest text-white/50">
          <div>
            [{currentIndex}/{featuredProjects.length}]
          </div>
          <Link href="/weddings" className="flex items-center gap-1.5 uppercase tracking-widest transition-colors hover:text-white">
            Все свадьбы <span className="text-[10px]">↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

type PanelProps = FeaturedProject & {
  index: number;
  total: number;
};

function Panel({ index, title, category, location, year, tags, description, image }: PanelProps) {
  return (
    <div className="flex h-screen min-w-screen items-center px-6 py-20 md:px-10 lg:px-14">
      <div className="relative grid w-full max-w-7xl gap-8 lg:grid-cols-[0.8fr_1fr_0.8fr] lg:items-center">
        <div className="pointer-events-none z-20 select-none lg:absolute lg:left-0 lg:max-w-xl lg:translate-x-32 lg:transform xl:translate-x-40">
          <p className="text-sm uppercase tracking-[0.16em] text-white/45">
            История {String(index + 1).padStart(2, "0")}
          </p>
          <h2 className="mt-4 text-4xl font-light leading-[0.95] tracking-tight text-white mix-blend-difference md:text-6xl lg:text-7xl xl:text-8xl">
            {title}
          </h2>
          <p className="mt-6 hidden max-w-sm text-base leading-relaxed text-white/60 mix-blend-difference drop-shadow-md lg:block">
            {description}
          </p>
        </div>

        <div
          className="group relative z-10 flex aspect-[4/5] items-end overflow-hidden rounded-[2rem] border border-white/5 p-8 md:aspect-[16/10] lg:col-start-2 lg:aspect-[4/5]"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(8,8,8,0.1) 0%, rgba(8,8,8,0.55) 100%), url('${image}')`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="relative z-10">
            <p className="text-sm uppercase tracking-[0.16em] text-white/45">{category}</p>
            <p className="mt-4 max-w-sm text-xl leading-tight text-white/90 md:text-2xl">
              Атмосфера, пластика движения и интонация момента важнее шаблонной картинки.
            </p>
          </div>
        </div>

        <div className="z-20 flex flex-col justify-end text-white lg:translate-x-12 lg:transform lg:pl-12">
          <p className="mb-6 text-base leading-relaxed text-white/70 lg:hidden">
            {description}
          </p>

          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.12em] text-white/50">
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-2 gap-6 text-sm text-white/70 lg:grid-cols-1">
            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-white/45">Локация</p>
              <p className="mt-1 font-light">{location}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-white/45">Год</p>
              <p className="mt-1 font-light">{year}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
