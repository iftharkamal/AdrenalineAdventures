"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import CardNav, { type CardNavItem } from "@/components/ui/card-nav";

const cardNavItems: CardNavItem[] = [
  {
    label: "Home",
    href: "/",
    ariaLabel: "Home",
  },
  {
    label: "About Us",
    href: "/about-us",
    ariaLabel: "About Us",
  },
  {
    label: "Events",
    href: "/events",
    ariaLabel: "Events",
  },
  {
    label: "Contact Us",
    href: "/contact-us",
    ariaLabel: "Contact Us",
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 5);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isAboutUs = pathname === "/about-us";
  
  // Base color logic:
  // About Us page: more dark initially, much lighter when scrolled
  // Other pages: transparent initially, semi-transparent grey when scrolled
  let baseColor = "transparent";
  if (isAboutUs) {
    baseColor = isScrolled ? "rgba(73, 72, 72, 0.54)" : "rgba(0, 0, 0, 0.85)";
  } else {
    baseColor = isScrolled ? "#aaa6a673" : "transparent";
  }

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 transition-all duration-500",
      )}
    > 
      <div
        className={cn(
          "mx-auto flex w-full max-w-7xl justify-center px-4 transition-all duration-300",
          isScrolled ? "py-3" : "py-6"
        )}
      >
        <CardNav
          logoSrc="/logo.png"
          logoAlt="Adrenaline Adventures"
          items={cardNavItems}
          className="mx-auto"
          ease="circ.out"
          baseColor={baseColor}
          menuColor="#ffffffff"
        />
      </div>
    </header>
  );
}
