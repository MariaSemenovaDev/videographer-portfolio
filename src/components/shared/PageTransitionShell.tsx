"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type AnchorHTMLAttributes,
  type PropsWithChildren,
  type ReactNode
} from "react";
import { usePathname, useRouter } from "next/navigation";

import type { AppRoute } from "@/lib/routes";
import { cn } from "@/lib/cn";

gsap.registerPlugin(useGSAP);

type RouteTransitionContextValue = {
  isTransitioning: boolean;
  navigate: (
    href: AppRoute,
    options?: {
      onBeforeNavigate?: () => void | Promise<void>;
    }
  ) => Promise<void>;
};

const RouteTransitionContext =
  createContext<RouteTransitionContextValue | null>(null);

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

function animateTimeline(timeline: gsap.core.Timeline) {
  return new Promise<void>((resolve) => {
    timeline.eventCallback("onComplete", () => resolve());
  });
}

export function PageTransitionProvider({
  children
}: PropsWithChildren) {
  const pathname = usePathname();
  const router = useRouter();
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const pendingPathRef = useRef<AppRoute | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useGSAP(
    () => {
      if (!overlayRef.current || !panelRef.current) {
        return;
      }

      gsap.set(overlayRef.current, {
        autoAlpha: 0,
        pointerEvents: "none"
      });
      gsap.set(panelRef.current, {
        clipPath: "inset(100% 0 0 0)"
      });
    },
    { dependencies: [prefersReducedMotion], scope: overlayRef }
  );

  const navigate = useCallback<RouteTransitionContextValue["navigate"]>(
    async (href, options) => {
      if (href === pathname) {
        await options?.onBeforeNavigate?.();

        return;
      }

      if (isTransitioning || !overlayRef.current || !panelRef.current) {
        return;
      }

      await options?.onBeforeNavigate?.();

      pendingPathRef.current = href;
      setIsTransitioning(true);

      if (prefersReducedMotion) {
        router.push(href);

        return;
      }

      const timeline = gsap.timeline({
        defaults: {
          ease: "power4.inOut"
        }
      });

      gsap.set(overlayRef.current, {
        autoAlpha: 1,
        pointerEvents: "auto"
      });

      timeline.to(panelRef.current, {
        clipPath: "inset(0% 0 0 0)",
        duration: 0.56
      });

      await animateTimeline(timeline);

      router.push(href);
    },
    [isTransitioning, pathname, prefersReducedMotion, router]
  );

  useEffect(() => {
    if (!overlayRef.current || !panelRef.current) {
      return;
    }

    if (pendingPathRef.current === null) {
      return;
    }

    if (prefersReducedMotion) {
      gsap.set(overlayRef.current, {
        autoAlpha: 0,
        pointerEvents: "none"
      });
      setIsTransitioning(false);
      pendingPathRef.current = null;

      return;
    }

    const timeline = gsap.timeline({
      defaults: {
        ease: "power4.inOut"
      },
      onComplete: () => {
        if (!overlayRef.current) {
          return;
        }

        gsap.set(overlayRef.current, {
          autoAlpha: 0,
          pointerEvents: "none"
        });
        setIsTransitioning(false);
        pendingPathRef.current = null;
      }
    });

    timeline.to(panelRef.current, {
      clipPath: "inset(0 0 100% 0)",
      duration: 0.64,
      delay: 0.08
    });
  }, [pathname, prefersReducedMotion]);

  return (
    <RouteTransitionContext.Provider value={{ isTransitioning, navigate }}>
      {children}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-30"
        ref={overlayRef}
      >
        <div
          className="h-full w-full bg-[color:rgba(16,23,49,0.92)]"
          ref={panelRef}
        />
      </div>
    </RouteTransitionContext.Provider>
  );
}

export function useRouteTransition() {
  const context = useContext(RouteTransitionContext);

  if (!context) {
    throw new Error(
      "useRouteTransition must be used within a PageTransitionProvider."
    );
  }

  return context;
}

type TransitionLinkProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "href"
> & {
  children: ReactNode;
  href: AppRoute;
  onBeforeNavigate?: () => void | Promise<void>;
};

export function TransitionLink({
  children,
  href,
  onBeforeNavigate,
  onClick,
  target,
  ...props
}: TransitionLinkProps) {
  const pathname = usePathname();
  const { navigate } = useRouteTransition();

  const handleClick = async (event: React.MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);

    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      target === "_blank"
    ) {
      return;
    }

    event.preventDefault();

    if (href === pathname) {
      await onBeforeNavigate?.();

      return;
    }

    await navigate(href, { onBeforeNavigate });
  };

  return (
    <a href={href} onClick={handleClick} target={target} {...props}>
      {children}
    </a>
  );
}

type PageTransitionShellProps = {
  children: ReactNode;
  className?: string;
};

export function PageTransitionShell({
  children,
  className
}: PageTransitionShellProps) {
  const pathname = usePathname();
  const rootRef = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useGSAP(
    () => {
      if (!rootRef.current) {
        return;
      }

      gsap.fromTo(
        rootRef.current,
        {
          autoAlpha: 0,
          clipPath: prefersReducedMotion ? "inset(0 0 0 0)" : "inset(0 0 14% 0)",
          y: prefersReducedMotion ? 0 : 28
        },
        {
          autoAlpha: 1,
          clearProps: "transform",
          clipPath: "inset(0 0 0 0)",
          duration: prefersReducedMotion ? 0.01 : 0.8,
          ease: prefersReducedMotion ? "none" : "power3.out",
          y: 0
        }
      );
    },
    {
      dependencies: [pathname, prefersReducedMotion],
      scope: rootRef
    }
  );

  return (
    <div className={cn("will-change-transform", className)} ref={rootRef}>
      {children}
    </div>
  );
}
