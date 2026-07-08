"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { navigationItems } from "@/data/navigation";

type NavigationDrawerProps = {
  isOpen: boolean;
  onNavigate: () => void;
};

export function NavigationDrawer({
  isOpen,
  onNavigate
}: NavigationDrawerProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const itemsRef = useRef<Array<HTMLAnchorElement | null>>([]);

  useGSAP(
    () => {
      if (!rootRef.current || !panelRef.current) {
        return;
      }

      const links = itemsRef.current.filter(
        (item): item is HTMLAnchorElement => item !== null
      );

      if (isOpen) {
        gsap.set(rootRef.current, {
          pointerEvents: "auto"
        });

        gsap
          .timeline()
          .to(rootRef.current, {
            autoAlpha: 1,
            duration: 0.25,
            ease: "power2.out"
          })
          .fromTo(
            panelRef.current,
            {
              yPercent: -100
            },
            {
              yPercent: 0,
              duration: 0.8,
              ease: "power4.out"
            },
            0
          )
          .fromTo(
            links,
            {
              y: 32,
              opacity: 0
            },
            {
              y: 0,
              opacity: 1,
              duration: 0.5,
              stagger: 0.06,
              ease: "power3.out"
            },
            0.24
          );

        return;
      }

      gsap
        .timeline({
          onComplete: () => {
            if (rootRef.current) {
              gsap.set(rootRef.current, { pointerEvents: "none" });
            }
          }
        })
        .to(links, {
          y: -12,
          opacity: 0,
          duration: 0.18,
          stagger: 0.03,
          ease: "power2.in"
        })
        .to(
          panelRef.current,
          {
            yPercent: -100,
            duration: 0.55,
            ease: "power4.inOut"
          },
          0.02
        )
        .to(
          rootRef.current,
          {
            autoAlpha: 0,
            duration: 0.2,
            ease: "power2.in"
          },
          0.16
        );
    },
    { dependencies: [isOpen] }
  );

  return (
    <div
      aria-hidden={!isOpen}
      className="pointer-events-none fixed inset-0 z-40 opacity-0"
      ref={rootRef}
    >
      <div className="absolute inset-0 bg-black/18 backdrop-blur-[2px]" />
      <div
        className="absolute inset-x-0 top-0 border-b border-border bg-canvas px-6 pb-10 pt-28 sm:px-10"
        id="site-navigation-drawer"
        ref={panelRef}
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-12">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <p className="max-w-sm text-sm uppercase tracking-[0.24em] text-muted">
              navigation
            </p>
            <p className="max-w-md text-sm text-muted">
              Placeholder blocks remain intentional until real content and
              assets are provided. прикреплённые файлы: не указаны
            </p>
          </div>

          <nav className="grid gap-4" role="navigation">
            {navigationItems.map((item, index) => (
              <Link
                className="group grid grid-cols-[44px_1fr] items-end gap-4 border-b border-border pb-4 font-display text-4xl tracking-editorial sm:text-6xl"
                href={item.href}
                key={item.href}
                onClick={onNavigate}
                ref={(element) => {
                  itemsRef.current[index] = element;
                }}
              >
                <span className="pb-2 text-xs font-sans uppercase tracking-[0.24em] text-muted">
                  {item.eyebrow}
                </span>
                <span className="transition-transform duration-300 group-hover:translate-x-2">
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
