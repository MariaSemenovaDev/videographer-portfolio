"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import HorizontalScrollSection from "@/components/HorizontalScrollSection";

const reportageCards = [
  {
    title: "Event Recap",
    text: "Масштаб, ритм и атмосфера ивента.",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Backstage & Music",
    text: "Творческий процесс за кулисами.",
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Локальные бренды",
    text: "Презентация идей и пространств.",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1600&q=80",
  },
];

type HomePageClientProps = {
  siteMeta: {
    city: string;
    tagline: string;
  };
  featuredProjects: Array<{
    slug: string;
    title: string;
    category: string;
    year: string;
    location: string;
    tags: string[];
    description: string;
    image: string;
  }>;
};

export default function HomePageClient({
  siteMeta,
  featuredProjects,
}: HomePageClientProps) {
  const [scrollY, setScrollY] = useState(0);
  const aboutSectionRef = useRef<HTMLElement>(null);
  const weddingsRef = useRef<HTMLElement>(null);
  const reportageRef = useRef<HTMLElement>(null);

  const [isAboutAnimate, setIsAboutAnimate] = useState(false);
  const [isWeddingsAnimate, setIsWeddingsAnimate] = useState(false);
  const [isReportageAnimate, setIsReportageAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === aboutSectionRef.current) setIsAboutAnimate(entry.isIntersecting);
          if (entry.target === weddingsRef.current) setIsWeddingsAnimate(entry.isIntersecting);
          if (entry.target === reportageRef.current) setIsReportageAnimate(entry.isIntersecting);
        });
      },
      { threshold: 0.15 }
    );

    [aboutSectionRef, weddingsRef, reportageRef].forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const transformY = Math.min(scrollY, 400);

  return (
    <div>
      <section className="relative w-full overflow-hidden z-10">
        <div style={{ height: "150vh" }} className="relative w-full overflow-hidden">
          <video loop autoPlay muted playsInline src="showreel.mp4" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 w-full h-full text-white z-10 pointer-events-none">
            <div className="px-6 pt-[280px] md:px-10 md:pt-[400px] lg:px-14 pointer-events-auto">
              <p className="text-xl md:text-2xl font-medium tracking-wide drop-shadow-md text-white/90">{siteMeta.city}</p>
              <h2 className="mt-4 max-w-4xl text-4xl font-medium leading-[0.95] md:text-6xl lg:text-7xl drop-shadow-lg">{siteMeta.tagline}</h2>
            </div>
          </div>
        </div>

        <div style={{ transform: `translateY(-${transformY}px)`, transition: "transform 0.05s linear" }} className="fixed top-0 left-0 w-full z-20 mix-blend-screen bg-white p-4 pt-8 pb-8 backdrop-blur-2xl md:p-8 md:pt-14 md:pb-12">
          <h1 className="flex max-w-[7ch] flex-col text-black uppercase font-black leading-none tracking-[0.01em] text-5xl pr-4 [transform:scaleY(1.18)] [transform-origin:left_top] md:text-[6.5rem] lg:text-[8.5rem]">
            <span>ВЕРТЕЛЕЦКИЙ</span>
            <span className="-mt-[0.15em] md:-mt-[0.25em]">МАКСИМ</span>
          </h1>
        </div>
      </section>

      <section
        ref={aboutSectionRef}
        className="relative z-20 min-h-[90vh] bg-[#fffef7] py-28 overflow-hidden"
      >
        <div className="max-w-[1500px] mx-auto flex flex-col lg:flex-row items-start relative px-6 md:px-10 lg:px-24">
          <div className="w-full lg:w-[60%] relative z-20">
            <p className="text-[10px] uppercase tracking-[0.3em] text-black/30 mb-8 font-bold">Что я делаю</p>

            <h2 className="text-[clamp(3rem,8vw,7rem)] leading-[0.9] font-medium text-black overflow-hidden mb-16">
              {["Я работаю с кадром,", "светом, движением", "и монтажом"].map((line, i) => (
                <span key={i} className="block overflow-hidden">
                  <span
                    className={`block transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isAboutAnimate ? "translate-y-0 opacity-100 blur-none" : "translate-y-full opacity-0 blur-sm"
                    }`}
                    style={{ transitionDelay: `${i * 150}ms` }}
                  >
                    {line}
                  </span>
                </span>
              ))}
            </h2>

            <div className="w-full lg:w-[80%] border-t border-black/10 pt-12">
              <p className="text-sm uppercase tracking-[0.2em] text-black/40 mb-6 font-bold">Обо мне</p>
              <p className="text-xl md:text-2xl text-black/80 font-light leading-relaxed">
                Я глубоко убеждён, что в каждом кадре должна жить история. Мой подход — это поиск естественности в постановке и кинематографичности в репортаже. Я не просто фиксирую события, я создаю визуальный ритм, который заставляет зрителя чувствовать момент даже спустя годы.
              </p>
            </div>
          </div>

          <div
            className={`w-full lg:w-[45%] lg:absolute lg:right-0 lg:top-0 h-[600px] lg:h-full z-10 transition-all duration-[2000ms] ease-out ${
              isAboutAnimate ? "-translate-x-12 opacity-100" : "-translate-x-24 opacity-0"
            }`}
          >
            <div className="relative w-full h-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://sun9-2.userapi.com/s/v1/ig2/zSRKgZyvk6KUxq2yMG_LB41mMzsG6q8c7PfqW_fF1z_Atz5lUeFqoV-xrCg1LQnFb-2NDkelQVB-zrb5LwNr604H.jpg?quality=95&as=32x50,48x76,72x113,108x170,160x252,240x378,360x567,431x679&from=bu&u=KUIc-TjWbt3EBss7_tOLiAEIhD20touJh_wwm9Ww2S4&cs=431x0"
                alt="Максим Вертелецкий"
                className="w-full h-full object-cover object-[center_top]"
              />
            </div>
          </div>
        </div>
      </section>

      <HorizontalScrollSection featuredProjects={featuredProjects} />

      <section
        ref={weddingsRef}
        className="relative z-20 px-6 py-28 md:px-10 lg:px-14 border-t border-black/5 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=80')" }}
      >
        <div className="absolute inset-0 bg-[#fffef7]/80 backdrop-blur-[2px]"></div>

        <div className={`relative z-10 mx-auto max-w-7xl transition-all duration-[1000ms] ${isWeddingsAnimate ? "opacity-100" : "opacity-0 translate-y-10"}`}>
          <p className="text-sm uppercase tracking-[0.2em] text-black/60">Свадьба</p>
          <div className="mt-8 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
            <div className="max-w-4xl">
              <h2 className="text-4xl leading-[0.95] md:text-6xl lg:text-7xl tracking-tight text-black">
                Истории, которые <br /> хочется пересматривать.
              </h2>
              <p className="mt-8 max-w-2xl text-xl md:text-2xl font-light leading-relaxed text-black/80">
                Свадебные фильмы как полноценный кинематограф. Где важны не только красивые планы, но и живая интонация пары, атмосфера пространства и неуловимое движение внутри момента.
              </p>
            </div>
            <Link href="/weddings" className="group flex items-center justify-center gap-4 bg-black text-white px-8 py-5 rounded-full text-sm uppercase tracking-widest font-medium transition-all hover:bg-black/80 w-full sm:w-max">
              Смотреть свадебные фильмы →
            </Link>
          </div>
        </div>
      </section>

      <section ref={reportageRef} className="relative z-20 bg-black px-6 py-28 text-white md:px-10 lg:px-14">
        <div className={`transition-all duration-[1000ms] ${isReportageAnimate ? "opacity-100" : "opacity-0 translate-y-10"}`}>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
            <div className="max-w-4xl">
              <p className="text-sm uppercase tracking-[0.2em] text-white/45">Репортаж</p>
              <h2 className="mt-6 text-4xl leading-[0.95] md:text-6xl tracking-tight">Фиксация чистой энергии момента.</h2>
            </div>

            <Link
              href="/reportage"
              className="group flex items-center justify-center gap-4 border border-white/20 text-white px-8 py-5 rounded-full text-sm uppercase tracking-widest font-medium transition-all hover:bg-white hover:text-black w-full sm:w-max shrink-0"
            >
              Все репортажи <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reportageCards.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-8 flex flex-col justify-between min-h-[280px] bg-cover bg-center"
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(8,8,8,0.2) 0%, rgba(8,8,8,0.78) 100%), url('${item.image}')`,
                }}
              >
                <h3 className="text-2xl font-light">{item.title}</h3>
                <p className="mt-4 text-white/65">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
