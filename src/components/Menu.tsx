'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';

import { footerLinks, navigationLinks, siteMeta } from '@/content/site';

const menuDescriptions: Record<string, string> = {
  '/': 'Главная страница с шоу-рилом, подборкой работ и ключевыми акцентами.',
  '/weddings': 'Подборка свадебных фильмов с акцентом на атмосферу дня, интонацию пары и живую драматургию.',
  '/reportage': 'Репортажные видео для событий, концертов, запусков и мероприятий, где важны ритм и присутствие.',
  '/services': 'Форматы работы: свадебные фильмы, репортажные ролики, love story и другие варианты съёмки.',
  '/contact': 'Контакты для бронирования даты, обсуждения идеи или запроса стоимости.',
};

export default function Menu() {
  const pathname = usePathname();

  return <MenuContent key={pathname} pathname={pathname} />;
}

function MenuContent({ pathname }: { pathname: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  useGSAP(() => {
    gsap.set('.menu-link-item-holder', { y: 90 });
    gsap.set('.menu-meta-item', { y: 30, opacity: 0 });

    tl.current = gsap
      .timeline({ paused: true })
      .to('.menu-overlay', {
        duration: 1.1,
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        ease: 'power4.inOut',
      })
      .to(
        '.menu-link-item-holder',
        {
          y: 0,
          duration: 0.95,
          stagger: 0.08,
          ease: 'power4.out',
        },
        '-=0.6'
      )
      .to(
        '.menu-meta-item',
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          stagger: 0.06,
          ease: 'power2.out',
        },
        '-=0.65'
      );
  }, { scope: containerRef });

  useEffect(() => {
    if (isMenuOpen) {
      tl.current?.play();
    } else {
      tl.current?.reverse();
    }
  }, [isMenuOpen]);

  return (
    <div ref={containerRef} className="relative z-999 w-full text-white">
      <div className="fixed inset-x-0 top-0 flex items-center justify-between bg-white p-4 md:p-8">
        <Link
          href="/"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-sm font-medium uppercase text-white"
        >
          {siteMeta.shortName}
        </Link>

        <button
          onClick={toggleMenu}
          className="cursor-pointer rounded-full border border-black bg-black px-6 py-3 text-sm font-medium uppercase text-white transition-colors hover:bg-white hover:text-black"
        >
          Меню
        </button>
      </div>

      <div className="menu-overlay fixed inset-0 z-20 bg-[#080808] px-6 py-6 text-white [clip-path:polygon(0_0,100%_0,100%_0,0_0)] md:px-8 md:py-8">
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-white/45">Портфолио</p>
              <p className="mt-2 text-lg">{siteMeta.name}</p>
            </div>

            <button
              onClick={toggleMenu}
              className="cursor-pointer rounded-full border border-white/30 px-6 py-3 text-sm font-medium uppercase text-white transition-colors hover:bg-white hover:text-black"
            >
              Закрыть
            </button>
          </div>

          <div className="mt-16 grid flex-1 gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div className="flex flex-col justify-between">
              <div className="space-y-4 group">
                {navigationLinks.map((link) => {
                  const isActive = pathname === link.path;

                  return (
                    <div key={link.path} className="w-max overflow-hidden">
                      <div className="menu-link-item-holder relative">
                        <Link
                          href={link.path}
                          className={`block text-4xl leading-[0.88] tracking-[-0.03em] transition-colors duration-500 md:text-[78px] ${
                            isActive ? 'text-white' : 'text-white group-hover:text-white/35 hover:!text-white'
                          }`}
                        >
                          {link.label}
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-10 grid gap-8 md:grid-cols-2">
                <div className="menu-meta-item">
                  <p className="text-xs uppercase tracking-[0.22em] text-white/45">Контакты</p>
                  <div className="mt-3 flex flex-col gap-2 text-lg text-white/75">
                    <a href={`mailto:${siteMeta.email}`} className="transition-colors hover:text-white">
                      {siteMeta.email}
                    </a>
                    <a
                      href={`tel:${siteMeta.phone.replace(/[^\d+]/g, '')}`}
                      className="transition-colors hover:text-white"
                    >
                      {siteMeta.phone}
                    </a>
                    <p>{siteMeta.city}</p>
                  </div>
                </div>

                <div className="menu-meta-item">
                  <p className="text-xs uppercase tracking-[0.22em] text-white/45">Ссылки</p>
                  <div className="mt-3 flex flex-wrap gap-3 text-lg text-white/75">
                    {footerLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target={link.href.startsWith('http') ? '_blank' : undefined}
                        rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                        className="transition-colors hover:text-white"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="menu-meta-item flex flex-col justify-between rounded-[2rem] border border-white/12 bg-white/4 p-6 backdrop-blur-xl md:p-8">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-white/45">О разделе</p>
                <p className="mt-4 max-w-md text-2xl leading-tight">
                  {menuDescriptions[pathname] ?? siteMeta.intro}
                </p>
              </div>

              <div className="mt-10">
                <p className="text-xs uppercase tracking-[0.22em] text-white/45">Запрос</p>
                <p className="mt-3 max-w-md text-base leading-relaxed text-white/70">
                  Если у вас есть идея, дата съёмки или задача для бренда, можно написать сразу и обсудить формат, сроки и бюджет.
                </p>
                <Link
                  href="/contact"
                  className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-sm font-medium uppercase text-black transition-colors hover:bg-white/80"
                >
                  Обсудить проект
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
