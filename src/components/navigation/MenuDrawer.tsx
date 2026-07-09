"use client";

import { useEffect, useRef, useState, type RefObject } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { NavLinkList } from "@/components/navigation/NavLinkList";

gsap.registerPlugin(useGSAP);

type MenuDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  toggleRef: RefObject<HTMLButtonElement>;
};

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);

    return () => {
      mediaQuery.removeEventListener("change", updatePreference);
    };
  }, []);

  return prefersReducedMotion;
}

export function MenuDrawer({
  isOpen,
  onClose,
  toggleRef
}: MenuDrawerProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useGSAP(
    () => {
      const root = rootRef.current;
      const panel = panelRef.current;

      if (!root || !panel) {
        return;
      }

      const links = gsap.utils.toArray<HTMLElement>("[data-nav-link]", root);
      const durationScale = prefersReducedMotion ? 0.01 : 1;
      const linkOffset = prefersReducedMotion ? 0 : 28;
      const panelOffset = prefersReducedMotion ? 0 : -8;

      const focusFirstLink = () => {
        links[0]?.focus();
      };

      const restoreFocus = () => {
        toggleRef.current?.focus();
      };

      gsap.set(root, {
        autoAlpha: 0,
        pointerEvents: "none"
      });
      gsap.set(panel, {
        yPercent: panelOffset
      });
      gsap.set(links, {
        autoAlpha: prefersReducedMotion ? 1 : 0,
        y: linkOffset
      });

      const timeline = gsap.timeline({
        paused: true,
        defaults: {
          ease: prefersReducedMotion ? "none" : "power3.out"
        },
        onStart: () => {
          gsap.set(root, { pointerEvents: "auto" });
        },
        onComplete: focusFirstLink,
        onReverseComplete: () => {
          gsap.set(root, { pointerEvents: "none" });
          restoreFocus();
        }
      });

      timeline
        .to(
          root,
          {
            autoAlpha: 1,
            duration: 0.22 * durationScale
          },
          0
        )
        .to(
          panel,
          {
            yPercent: 0,
            duration: 0.72 * durationScale,
            ease: prefersReducedMotion ? "none" : "power4.out"
          },
          0
        )
        .to(
          links,
          {
            autoAlpha: 1,
            duration: 0.4 * durationScale,
            stagger: prefersReducedMotion ? 0 : 0.06,
            y: 0
          },
          prefersReducedMotion ? 0 : 0.18
        );

      timelineRef.current = timeline;

      return () => {
        timelineRef.current = null;
      };
    },
    {
      dependencies: [prefersReducedMotion],
      scope: rootRef
    }
  );

  useEffect(() => {
    const timeline = timelineRef.current;

    if (!timeline) {
      return;
    }

    if (isOpen) {
      timeline.play();

      return;
    }

    if (timeline.progress() > 0) {
      timeline.reverse();
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const { body, documentElement } = document;
    const previousOverflow = body.style.overflow;
    const previousPaddingRight = body.style.paddingRight;
    const scrollBarCompensation =
      window.innerWidth - documentElement.clientWidth;

    body.style.overflow = "hidden";

    if (scrollBarCompensation > 0) {
      body.style.paddingRight = `${scrollBarCompensation}px`;
    }

    return () => {
      body.style.overflow = previousOverflow;
      body.style.paddingRight = previousPaddingRight;
    };
  }, [isOpen]);

  return (
    <div
      aria-hidden={!isOpen}
      className="pointer-events-none fixed inset-0 z-40 opacity-0"
      ref={rootRef}
    >
      <button
        aria-label="Close navigation drawer"
        className="absolute inset-0 cursor-default bg-black/25 backdrop-blur-[3px]"
        onClick={onClose}
        tabIndex={isOpen ? 0 : -1}
        type="button"
      />

      <div
        aria-labelledby="site-menu-title"
        aria-modal="true"
        className="absolute inset-x-0 top-0 max-h-dvh overflow-y-auto border-b border-border bg-canvas px-4 pb-5 pt-14 sm:px-6 sm:pt-18 lg:px-8"
        id="site-menu-drawer"
        ref={panelRef}
        role="dialog"
      >
        <div className="page-container">
          <div className="grid gap-4">
            <div className="grid gap-2 border-b border-border pb-3 sm:grid-cols-[minmax(0,1fr)_minmax(220px,0.72fr)] sm:items-start">
              <div className="space-y-1">
                <p className="eyebrow">Navigation</p>
              </div>

            </div>

            <NavLinkList onNavigate={onClose} />
          </div>
        </div>
      </div>
    </div>
  );
}
