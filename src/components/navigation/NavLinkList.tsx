"use client";

import { usePathname } from "next/navigation";

import { TransitionLink } from "@/components/shared/PageTransitionShell";
import { navigationItems } from "@/data/navigation";

type NavLinkListProps = {
  onNavigate: () => void;
};

export function NavLinkList({ onNavigate }: NavLinkListProps) {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary" className="grid gap-3" role="navigation">
      {navigationItems.map((item) => {
        const isCurrent = pathname === item.href;

        return (
          <TransitionLink
            aria-current={isCurrent ? "page" : undefined}
            className="group grid grid-cols-[36px_1fr] items-end gap-3 border-b border-border pb-2 font-display text-[clamp(1.7rem,4.6vw,3.4rem)] font-[300] tracking-editorial outline-none"
            data-nav-link=""
            href={item.href}
            key={item.href}
            onBeforeNavigate={onNavigate}
          >
            <span className="pb-1 text-[0.58rem] uppercase tracking-[0.2em] text-muted">
              {item.eyebrow}
            </span>
            <span className="motion-safe-fade translate-x-0 group-hover:translate-x-2 group-focus-visible:translate-x-2">
              {item.label}
            </span>
          </TransitionLink>
        );
      })}
    </nav>
  );
}
