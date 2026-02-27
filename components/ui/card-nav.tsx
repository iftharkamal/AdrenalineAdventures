"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useLayoutEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

type CardNavLink = {
  label: string;
  href: string;
  ariaLabel?: string;
};

export type CardNavItem = {
  label: string;
  href?: string;
  ariaLabel?: string;
  bgColor?: string;
  textColor?: string;
  links?: CardNavLink[];
};

type CardNavProps = {
  logoSrc: string;
  logoAlt?: string;
  items: CardNavItem[];
  className?: string;
  ease?: string;
  baseColor?: string;
  menuColor?: string;
};

export default function CardNav({
  logoSrc,
  logoAlt = "Logo",
  items,
  className,
  ease = "power3.out",
  baseColor = "#fff",
  menuColor = "#000",
}: CardNavProps) {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);
  const cardsRef = useRef<Array<HTMLDivElement | null>>([]);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const pathname = usePathname();

  const calculateHeight = useCallback(() => {
    const navEl = navRef.current;
    if (!navEl) return 260;

    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (isMobile) {
      const contentEl = navEl.querySelector(".card-nav-content") as HTMLDivElement | null;
      if (contentEl) {
        const wasVisible = contentEl.style.visibility;
        const wasPointerEvents = contentEl.style.pointerEvents;
        const wasPosition = contentEl.style.position;
        const wasHeight = contentEl.style.height;

        contentEl.style.visibility = "visible";
        contentEl.style.pointerEvents = "auto";
        contentEl.style.position = "static";
        contentEl.style.height = "auto";

        void contentEl.offsetHeight;

        const topBar = 60;
        const padding = 16;
        const contentHeight = contentEl.scrollHeight;

        contentEl.style.visibility = wasVisible;
        contentEl.style.pointerEvents = wasPointerEvents;
        contentEl.style.position = wasPosition;
        contentEl.style.height = wasHeight;

        return topBar + contentHeight + padding;
      }
    }
    return 260;
  }, []);

  const createTimeline = useCallback(() => {
    const navEl = navRef.current;
    if (!navEl) return null;

    const cards = cardsRef.current.filter(Boolean);
    gsap.set(navEl, { height: 60, overflow: "hidden" });
    gsap.set(cards, { y: 50, opacity: 0 });

    const tl = gsap.timeline({ paused: true });
    tl.to(navEl, { height: calculateHeight, duration: 0.4, ease });
    tl.to(cards, { y: 0, opacity: 1, duration: 0.4, ease, stagger: 0.08 }, "-=0.1");
    return tl;
  }, [calculateHeight, ease]);

  useLayoutEffect(() => {
    const tl = createTimeline();
    tlRef.current = tl;

    return () => {
      tl?.kill();
      tlRef.current = null;
    };
  }, [createTimeline, items]);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (!tlRef.current) return;

      if (isExpanded) {
        gsap.set(navRef.current, { height: calculateHeight() });
        tlRef.current.kill();
        const newTl = createTimeline();
        if (newTl) {
          newTl.progress(1);
          tlRef.current = newTl;
        }
      } else {
        tlRef.current.kill();
        tlRef.current = createTimeline();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [createTimeline, isExpanded, items, calculateHeight]);

  const closeMenu = () => {
    const tl = tlRef.current;
    if (!tl || !isExpanded) return;
    setIsHamburgerOpen(false);
    tl.eventCallback("onReverseComplete", () => setIsExpanded(false));
    tl.reverse();
  };

  const toggleMenu = () => {
    const tl = tlRef.current;
    if (!tl) return;

    if (!isExpanded) {
      setIsHamburgerOpen(true);
      setIsExpanded(true);
      tl.play(0);
      return;
    }

    closeMenu();
  };

  const setCardRef = (index: number) => (element: HTMLDivElement | null) => {
    cardsRef.current[index] = element;
  };

  return (
    <div className={cn("w-full max-w-[1200px] box-border relative", className)}>
      <nav
        ref={navRef}
        className="block h-[60px] overflow-hidden rounded-xl border border-white/10 p-0 shadow-md will-change-[height] bg-transparent"
        style={{ backgroundColor: baseColor }}
      >
        <div className="absolute inset-x-0 top-0 z-[2] flex h-[60px] items-center justify-between px-4 md:px-6">
          {/* Logo Section - Left on desktop and mobile */}
          <div 
            className="flex cursor-pointer items-center gap-3 transition-opacity hover:opacity-80"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            role="button"
            aria-label="Scroll to top"
          >
            <Image src={logoSrc} alt={logoAlt} width={40} height={40} className="h-8 md:h-10 w-auto object-contain" />
            <div className="flex flex-col items-start leading-[1.1]">
              <span className="font-formula1 text-[15px] md:text-[20px] tracking-wider text-white">Adrenaline Adventures</span>
              <span className="font-inter text-[9px] md:text-[11px] font-light tracking-[0.1em] text-white/70">Curated adventures, Crafted memories</span>
            </div>
          </div>

          {/* Desktop Center Links - Use items as primary navigation */}
          <div className="hidden items-center justify-end gap-8 md:flex flex-1">
            {items.map((item) => {
              const isActive = item.href ? pathname === item.href : false;
              if (item.href) {
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={cn(
                      "text-[15px] font-medium tracking-wide transition-colors duration-300 hover:text-[#ff8c00]",
                      isActive ? "text-[#ff8c00]" : "text-white/80"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              }
              return (
                <button
                  key={item.label}
                  onClick={toggleMenu}
                  className="text-[15px] font-medium tracking-wide text-white/80 transition-colors duration-300 hover:text-[#ff8c00]"
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Right Side - Empty on desktop (no card items anymore) / Hamburger (Mobile) */}
          <div className="flex items-center gap-2">
            {/* Mobile: Hamburger trigger */}
            <div
                className="group flex h-[40px] w-[40px] cursor-pointer flex-col items-center justify-center gap-[6px] rounded-full bg-white/5 md:hidden"
                onClick={toggleMenu}
                role="button"
                aria-label={isExpanded ? "Close menu" : "Open menu"}
                tabIndex={0}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    toggleMenu();
                  }
                }}
                style={{ color: menuColor }}
              >
                <div
                  className={cn(
                    "h-[2px] w-[20px] bg-white transition-[transform,opacity] duration-300 ease-linear [transform-origin:50%_50%] group-hover:opacity-75",
                    isHamburgerOpen && "translate-y-[4px] rotate-45"
                  )}
                />
                <div
                  className={cn(
                    "h-[2px] w-[20px] bg-white transition-[transform,opacity] duration-300 ease-linear [transform-origin:50%_50%] group-hover:opacity-75",
                    isHamburgerOpen && "-translate-y-[4px] -rotate-45"
                  )}
                />
            </div>
          </div>
        </div>

        {/* Expanded Content */}
        <div
          className={cn(
            "card-nav-content absolute bottom-0 left-0 right-0 top-[60px] z-[1] flex flex-col items-stretch justify-start gap-2 p-2 md:flex-row md:items-end md:gap-[12px]",
            isExpanded ? "visible pointer-events-auto" : "invisible pointer-events-none"
          )}
          aria-hidden={!isExpanded}
        >
          {items.map((item, index) => {
            // Case 1: Expandable Category (has links)
            if (item.links && item.links.length > 0) {
              return (
                <div
                  key={`${item.label}-${index}`}
                  className="relative flex h-auto min-h-[60px] min-w-0 flex-[1_1_auto] select-none flex-col gap-2 rounded-[calc(0.75rem-0.2rem)] p-[12px_16px] md:h-full md:min-h-0 md:flex-[1_1_0%]"
                  ref={setCardRef(index)}
                  style={{ backgroundColor: item.bgColor || "#111", color: item.textColor || "#fff" }}
                >
                  <div className="text-[18px] font-normal tracking-[-0.5px] md:text-[22px]">{item.label}</div>
                  <div className="mt-auto flex flex-col gap-[2px]">
                    {item.links.map((link, linkIndex) => (
                      <Link
                        key={`${link.label}-${linkIndex}`}
                        href={link.href}
                        aria-label={link.ariaLabel ?? link.label}
                        className="inline-flex items-center gap-[6px] text-[15px] no-underline transition-opacity duration-300 hover:opacity-75 md:text-[16px]"
                        onClick={closeMenu}
                      >
                        <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            // Case 2: Simple Link (mobile view)
            if (item.href) {
                const isActive = pathname === item.href;
                return (
                    <Link
                        key={item.label}
                        href={item.href}
                        className={cn(
                            "flex h-[60px] items-center px-4 text-[18px] font-normal transition-colors md:hidden rounded-[calc(0.75rem-0.2rem)]",
                            isActive ? "bg-[#ff8c00] text-white" : "bg-white/5 text-white/80"
                        )}
                        onClick={closeMenu}
                    >
                        {item.label}
                    </Link>
                );
            }

            return null;
          })}
        </div>
      </nav>
    </div>
  );
}
