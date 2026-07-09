"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { MenuDrawer } from "@/components/navigation/MenuDrawer";
import { MenuToggle } from "@/components/navigation/MenuToggle";
import { TransitionLink } from "@/components/shared/PageTransitionShell";
import { routes } from "@/lib/routes";

export function SiteHeader() {
  const pathname = usePathname();
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const openNavigation = () => {
    setIsOpen(true);
  };

  const closeNavigation = () => {
    setIsOpen(false);
  };

  const toggleNavigation = () => {
    if (isOpen) {
      closeNavigation();

      return;
    }

    openNavigation();
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="px-4 pt-4 sm:px-6 sm:pt-6 lg:px-8 lg:pt-8">
          <div className="page-container flex items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <TransitionLink
                aria-label="Go to homepage"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-[color:rgba(255,254,247,0.86)] text-[0.72rem] uppercase tracking-[0.3em] backdrop-blur"
                href={routes.home}
              >
                VV
              </TransitionLink>
              <div className="min-w-0">
                <p className="eyebrow text-[0.7rem]">Verteletskiy Video</p>
              </div>
            </div>

            <MenuToggle
              buttonRef={buttonRef}
              isOpen={isOpen}
              onClick={toggleNavigation}
            />
          </div>
        </div>
      </header>

      <MenuDrawer
        isOpen={isOpen}
        onClose={closeNavigation}
        toggleRef={buttonRef}
      />
    </>
  );
}
