"use client";

import { PillButton } from "@/components/shared/pill-button";

type MenuToggleProps = {
  isOpen: boolean;
  onClick: () => void;
};

export function MenuToggle({ isOpen, onClick }: MenuToggleProps) {
  return (
    <PillButton
      aria-controls="site-navigation-drawer"
      aria-expanded={isOpen}
      aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
      className="fixed right-5 top-5 z-50 min-w-28 sm:right-8 sm:top-8"
      onClick={onClick}
      type="button"
    >
      {isOpen ? "Close" : "Menu"}
    </PillButton>
  );
}
