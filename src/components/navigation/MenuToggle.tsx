"use client";

import type { RefObject } from "react";

import { PillButton } from "@/components/shared/pill-button";

type MenuToggleProps = {
  buttonRef: RefObject<HTMLButtonElement>;
  isOpen: boolean;
  onClick: () => void;
};

export function MenuToggle({
  buttonRef,
  isOpen,
  onClick
}: MenuToggleProps) {
  return (
    <PillButton
      aria-controls="site-menu-drawer"
      aria-expanded={isOpen}
      aria-haspopup="dialog"
      aria-label={isOpen ? "Close site navigation" : "Open site navigation"}
      className="min-w-28"
      onClick={onClick}
      ref={buttonRef}
      type="button"
    >
      {isOpen ? "Close" : "Menu"}
    </PillButton>
  );
}
