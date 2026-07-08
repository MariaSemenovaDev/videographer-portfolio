"use client";

import { useState } from "react";

import { MenuToggle } from "@/components/navigation/menu-toggle";
import { NavigationDrawer } from "@/components/navigation/navigation-drawer";

export function SiteNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavigation = () => {
    setIsOpen((current) => !current);
  };

  const closeNavigation = () => {
    setIsOpen(false);
  };

  return (
    <>
      <MenuToggle isOpen={isOpen} onClick={toggleNavigation} />
      <NavigationDrawer isOpen={isOpen} onNavigate={closeNavigation} />
    </>
  );
}
