"use client";

import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Link from "next/link";

import { featuredProjects } from "@/content/site";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScrollSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLDivElement>(null);
  const progressLineRef = useRef<HTMLDivElement>(null); // Реф для плавной линии

  // Оставляем стейт только для редкого переключения цифр [1/3]
  const [currentIndex, setCurrentIndex] = useState(1);

  useLayoutEffect(() => {
    const sections = sectionsRef.current;
    const progressLine = progressLineRef.current;
    if (!sections) return;

    const ctx = gsap.context(() => {
      const getDistance = () => sections.scrollWidth - window.innerWidth;

      // ТИМЛАЙН ДЛЯ СИНХРОНИЗАЦИИ СКРОЛЛА ЛЕНТЫ И ЛИНИИ
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: () => `+=${Math.max(sections.scrollWidth, window.innerWidth)}`,
          scrub: 0.1, // Минимальный шаг сглаживания (можно поставить true или 0.5 для инерции)
          pin: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            // Цифры переключаем здесь — это не нагружает систему
            const totalItems = featuredProjects.length;
            const activeIndex = Math.min(
                totalItems,
                Math.max(1, Math.ceil(self.progress * totalItems))
            );
            setCurrentIndex(activeIndex);
          },
        },
      });

      // 1. Анимация движения секций
      tl.to(sections, {
        x: () => -Math.max(getDistance(), 0),
        ease: "none",
      }, 0); // 0 значит, что анимации стартуют одновременно

      // 2. Анимация линии через GSAP (работает на уровне графического процессора)
      if (progressLine) {
        tl.to(progressLine, {
          scaleX: 1,
          ease: "none",
        }, 0);
      }

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
      <section ref={containerRef} className="relative h-screen overflow-hidden bg-[#0b0b0b] flex flex-col justify-between pt-14 pb-6 md:pb-8">
        {/* 1. ВЕРХНЯЯ ЧАСТЬ */}
        <div className="px-6 md:px-10 lg:px-14 z-30">
          <p className="text-sm uppercase tracking-[0.2em] text-white/40">Портфолио в движении</p>
        </div>

        {/* 2. ГОРИЗОНТАЛЬНАЯ ЛЕНТА СЛАЙДОВ */}
        <div ref={sectionsRef} className="absolute inset-0 flex h-full w-max bg-[#0b0b0b] items-center">
          {featuredProjects.map((project, index) => (
              <Panel key={project.slug} index={index} total={featuredProjects.length} {...project} />
          ))}
        </div>

        {/* 3. НИЖНЯЯ ЧАСТЬ: ИНДИКАТОР-ЛИНИЯ И СЧЕТЧИК */}
        <div className="w-full px-6 md:px-10 lg:px-14 mt-auto z-30 mb-2">
          {/* Базовая линия */}
          <div className="relative w-full h-[1px] bg-white/10 overflow-hidden">
            {/* Заполняющийся прогресс через scaleX (самый производительный метод анимации) */}
            <div
                ref={progressLineRef}
                className="absolute top-0 left-0 h-full w-full bg-white origin-left will-change-transform"
                style={{ transform: "scaleX(0)" }} // Изначально линия на нуле
            />
          </div>

          {/* Цифры и навигация */}
          <div className="flex justify-between items-center mt-4 text-xs font-mono tracking-widest text-white/50">
            <div>
              [{currentIndex}/{featuredProjects.length}]
            </div>
            <Link href="/projects" className="uppercase tracking-widest hover:text-white transition-colors flex items-center gap-1.5">
              Все проекты <span className="text-[10px]">↗</span>
            </Link>
          </div>
        </div>
      </section>
  );
}

type PanelProps = (typeof featuredProjects)[number] & {
  index: number;
  total: number;
};

function Panel({ index, title, category, location, year, tags, description }: PanelProps) {
  return (
      <div className="flex h-screen min-w-screen items-center px-6 py-20 md:px-10 lg:px-14">
        <div className="relative grid w-full max-w-7xl gap-8 lg:grid-cols-[0.8fr_1fr_0.8fr] lg:items-center">

          {/* ЛЕВАЯ КОЛОНКА (ТЕКСТ): Накладывается на кадр */}
          <div className="z-20 pointer-events-none lg:absolute lg:left-0 lg:max-w-xl lg:transform lg:translate-x-32 xl:translate-x-40 select-none">
            <p className="text-sm uppercase tracking-[0.16em] text-white/45">
              Проект {String(index + 1).padStart(2, "0")}
            </p>
            <h2 className="mt-4 text-4xl text-white md:text-6xl lg:text-7xl xl:text-8xl font-light tracking-tight mix-blend-difference leading-[0.95]">
              {title}
            </h2>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-white/60 hidden lg:block drop-shadow-md mix-blend-difference">
              {description}
            </p>
          </div>

          {/* ЦЕНТРАЛЬНАЯ КОЛОНКА: НАШ "КАДР" */}
          <div className="flex aspect-[4/5] md:aspect-[16/10] lg:aspect-[4/5] items-end rounded-[2rem] bg-[linear-gradient(180deg,#2b2b2b_0%,#101010_100%)] p-8 z-10 lg:col-start-2 relative overflow-hidden group border border-white/5">
            <div className="relative z-10">
              <p className="text-sm uppercase tracking-[0.16em] text-white/45">{category}</p>
              <p className="mt-4 max-w-sm text-xl md:text-2xl leading-tight text-white/90">
                Атмосфера, пластика движения и интонация момента важнее шаблонной картинки.
              </p>
            </div>
          </div>

          {/* ПРАВАЯ КОЛОНКА: ДЕТАЛИ */}
          <div className="flex flex-col justify-end text-white lg:pl-12 lg:transform lg:translate-x-12 z-20">
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