"use client"; // Обязательно добавляем для работы с useEffect и useState

import { useEffect, useState } from "react";
import HorizontalScrollSection from "@/components/HorizontalScrollSection";
import { CameraIcon, TimelineIcon, ViewfinderIcon } from "@/components/icons";
import { featuredProjects, journalEntries, siteMeta } from "@/content/site";

const stats = [
  {
    value: "5+",
    text: "лет работы с кадром, светом, движением и монтажом.",
    icon: CameraIcon,
  },
  {
    value: "100+",
    text: "историй, собранных в атмосферные видео и короткие фильмы.",
    icon: ViewfinderIcon,
  },
  {
    value: "20+",
    text: "проектов для людей, брендов и событий с вниманием к деталям.",
    icon: TimelineIcon,
  },
];

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  // ==========================================
  // НАСТРОЙКА ВЫСОТЫ ВИДЕО
  const videoHeight = "150vh";

  // НАСТРОЙКА ОТСТУПА ТЕКСТА ПОД ПЛАШКУ (в пикселях):
  // Увеличил дефолтный отступ до 580, так как мы дали плашке больше высоты ради буквы Й
  const marginTopMobile = 280;
  const marginTopDesktop = 400;
  // ==========================================

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Скорость уезда белой плашки с именем (скроется за первые 400px)
  const transformY = Math.min(scrollY, 400);

  return (
      <div>
        {/* ПЕРВЫЙ ЭКРАН */}
        <section className="relative w-full overflow-hidden z-10">

          {/* ВИДЕО-КОНТЕЙНЕР */}
          <div style={{ height: videoHeight }} className="relative w-full overflow-hidden">
            <video
                loop
                autoPlay
                muted
                playsInline
                src="showreel.mp4"
                className="absolute inset-0 h-full w-full object-cover"
            />

            {/* ТАГЛАЙН И ИНТРО */}
            <div className="absolute inset-0 w-full h-full text-white z-10 pointer-events-none">

              {/* Контейнер с нашими кастомными отступами */}
              <div
                  style={{
                    "--pt-mobile": `${marginTopMobile}px`,
                    "--pt-desktop": `${marginTopDesktop}px`,
                  } as React.CSSProperties}
                  className="px-6 pt-[var(--pt-mobile)] md:px-10 md:pt-[var(--pt-desktop)] lg:px-14 pointer-events-auto"
              >
                <p className="text-xl md:text-2xl font-medium tracking-wide drop-shadow-md text-white/90">
                  {siteMeta.city}
                </p>
                <h2 className="mt-4 max-w-4xl text-4xl font-medium leading-[0.95] md:text-6xl lg:text-7xl drop-shadow-lg">
                  {siteMeta.tagline}
                </h2>
              </div>

            </div>
          </div>

          {/* ВЕРХНЯЯ ПЛАШКА (ВЕРТЕЛЕЦКИЙ МАКСИМ) */}
          <div
              style={{
                transform: `translateY(-${transformY}px)`,
                transition: "transform 0.05s linear"
              }}
              // Добавили хороший pt-12 (на десктопах) для гарантированного запаса сверху
              className="fixed top-0 left-0 w-full z-20 mix-blend-screen bg-white p-4 pt-8 pb-8 backdrop-blur-2xl md:p-8 md:pt-14 md:pb-12"
          >

            <h1 className="flex max-w-[7ch] flex-col text-black uppercase font-black leading-none tracking-[0.01em] text-5xl pr-4 [transform:scaleY(1.18)] [transform-origin:left_top] md:text-[6.5rem] lg:text-[8.5rem]">
              <span>ВЕРТЕЛЕЦКИЙ</span>
              {/* -mt-[0.18em] подтягивает имя вверх к фамилии, имитируя плотный leading, но без обрезки шрифта */}
              <span className="-mt-[0.15em] md:-mt-[0.25em]">МАКСИМ</span>
            </h1>
          </div>

        </section>

        {/* СЛЕДУЮЩИЕ СЕКЦИИ */}
        <section className="relative z-20 min-h-screen bg-[#fffef7] px-6 py-24 md:px-10 lg:px-14">
          <p className="text-xl uppercase">Что я делаю</p>
          <h2 className="mt-8 flex flex-col text-4xl leading-[1] md:text-6xl">
            <span>Я работаю с кадром, светом,</span>
            <span>движением и монтажом.</span>
            <span>Снимаю людей, события и бренды,</span>
            <span>превращая важные моменты</span>
            <span>в живое атмосферное кино.</span>
          </h2>

          <div className="mx-auto mt-20 max-w-5xl text-2xl text-black/60">
            <p>{siteMeta.intro}</p>

            <div className="mt-18 grid gap-10 lg:grid-cols-3">
              {stats.map((item) => {
                const Icon = item.icon;

                return (
                    <div key={item.value} className="flex max-w-sm flex-col gap-2 text-black">
                      <div className="flex gap-2">
                  <span className="size-15">
                    <Icon />
                  </span>
                        <span className="text-6xl">{item.value}</span>
                      </div>
                      <p className="mt-8 text-xl text-black/60">{item.text}</p>
                    </div>
                );
              })}
            </div>
          </div>
        </section>

        <HorizontalScrollSection />

        <section className="relative z-20 bg-[#f3efe8] px-6 py-24 md:px-10 lg:px-14">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xl uppercase">Избранные проекты</p>
              <h2 className="mt-6 text-4xl leading-[0.96] md:text-6xl">
                Работаю с историями, в которых важны люди, характер и ощущение времени.
              </h2>
            </div>

            <div className="grid gap-6">
              {featuredProjects.map((project) => (
                  <article key={project.slug} className="rounded-[2rem] bg-white p-8">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <p className="text-sm uppercase tracking-[0.16em] text-black/45">
                          {project.category} / {project.year}
                        </p>
                        <h3 className="mt-3 text-3xl">{project.title}</h3>
                      </div>
                      <p className="text-sm uppercase tracking-[0.16em] text-black/45">{project.location}</p>
                    </div>
                    <p className="mt-6 max-w-2xl text-lg leading-relaxed text-black/65">{project.description}</p>
                    <div className="mt-6 flex flex-wrap gap-3">
                      {project.tags.map((tag) => (
                          <span key={tag} className="rounded-full border border-black/10 px-4 py-2 text-sm uppercase tracking-[0.12em] text-black/55">
                      {tag}
                    </span>
                      ))}
                    </div>
                  </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative z-20 bg-black px-6 py-24 text-white md:px-10 lg:px-14">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-xl uppercase text-white/55">Журнал</p>
                <h2 className="mt-5 max-w-3xl text-4xl leading-[0.96] md:text-6xl">
                  Наблюдения о съёмке, монтаже и том, как рождается атмосферное видео.
                </h2>
              </div>
            </div>

            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {journalEntries.map((entry) => (
                  <article key={entry.title} className="rounded-[2rem] border border-white/10 bg-white/4 p-8 backdrop-blur-sm">
                    <p className="text-sm uppercase tracking-[0.16em] text-white/45">{entry.type}</p>
                    <h3 className="mt-4 text-2xl leading-tight">{entry.title}</h3>
                    <p className="mt-5 text-base leading-relaxed text-white/70">{entry.text}</p>
                  </article>
              ))}
            </div>
          </div>
        </section>
      </div>
  );
}