"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useLenis } from "lenis/react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Events", href: "/events" },
];

const ctaLink = { label: "Contact Us", href: "/contact-us" };

const contactEmail = "adrenalineadventuresindia@gmail.com";

// Pages whose top section is light, where the cream logo needs a dark backing
const lightTopPages = ["/about-us"];

function Logo({ solid }: { solid: boolean }) {
  return (
    <Link
      href="/"
      aria-label="Adrenaline Adventures home"
      className={cn(
        "flex items-center gap-3 rounded-xl px-3 py-2 transition-colors duration-300",
        solid ? "bg-abyssal-ink/85 backdrop-blur-md" : "bg-transparent"
      )}
    >
      <Image src="/logo.png" alt="" width={40} height={40} className="h-8 w-auto object-contain md:h-9" />
      <span className="flex flex-col items-start gap-0.5 leading-[1.2]">
        <span className="font-display text-[13px] text-paper md:text-[16px]">Adrenaline Adventures</span>
        <span className="hidden font-mono text-[9px] uppercase text-paper/60 sm:block md:text-[10px]">
          Curated adventures, Crafted memories
        </span>
      </span>
    </Link>
  );
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    const handleScroll = () => {
      // Always visible at the very top
      if (window.scrollY < 5) {
        setIsVisible(true);
        setIsScrolled(false);
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        return;
      }

      setIsScrolled(true);
      setIsVisible(true);

      // Clear existing timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // Hide after 3 seconds of inactivity
      timeoutRef.current = setTimeout(() => {
        setIsVisible(false);
      }, 3000);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  // Freeze the page behind the mobile menu and let Escape close it
  useEffect(() => {
    if (!isMenuOpen) return;
    lenis?.stop();
    document.documentElement.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      lenis?.start();
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen, lenis]);

  const closeMenu = () => setIsMenuOpen(false);
  const isLogoSolid = isScrolled || lightTopPages.includes(pathname);

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 transition-transform duration-500",
        !isVisible && !isMenuOpen && "-translate-y-full"
      )}
    >
      {/* Desktop: free-standing logo + compact link pill */}
      <div
        className={cn(
          "mx-auto hidden w-full max-w-7xl items-center justify-between px-6 transition-[padding] duration-300 md:flex lg:px-8",
          isScrolled ? "py-3" : "py-6"
        )}
      >
        <div className="-ml-3">
          <Logo solid={isLogoSolid} />
        </div>

        <nav
          aria-label="Main"
          className="flex items-center gap-1 rounded-xl border border-lichen bg-bone-white/85 p-1 backdrop-blur-md"
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "flex h-10 items-center rounded-lg px-4 font-mono text-caption uppercase transition-colors duration-200 lg:px-5",
                  isActive ? "bg-bioluminescent-lime text-abyssal-ink" : "text-graphite hover:text-abyssal-ink"
                )}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href={ctaLink.href}
            aria-current={pathname === ctaLink.href ? "page" : undefined}
            className={buttonVariants({ variant: "solid", className: "ml-1 lg:px-5" })}
          >
            {ctaLink.label}
          </Link>
        </nav>
      </div>

      {/* Mobile: logo card with menu toggle */}
      <div className="relative z-50 px-3 pt-3 md:hidden">
        <div
          className={cn(
            "flex h-14 items-center justify-between rounded-xl pr-2 transition-colors duration-300",
            isLogoSolid || isMenuOpen ? "bg-abyssal-ink/85 backdrop-blur-md" : "bg-transparent"
          )}
        >
          <div onClick={closeMenu}>
            <Logo solid={false} />
          </div>
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            className={cn(
              "flex size-10 items-center justify-center rounded-lg border text-paper transition-colors duration-200",
              isMenuOpen ? "border-bioluminescent-lime" : "border-graphite bg-abyssal-ink/40 backdrop-blur-md"
            )}
          >
            {isMenuOpen ? <X className="h-5 w-5" strokeWidth={1.5} /> : <Menu className="h-5 w-5" strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* Mobile: full-screen menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-40 flex flex-col bg-abyssal-ink md:hidden"
          >
            {/* Contour lines backdrop */}
            <svg
              className="pointer-events-none absolute inset-0 h-full w-full text-graphite/60"
              viewBox="0 0 400 800"
              preserveAspectRatio="xMidYMid slice"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              aria-hidden="true"
            >
              <path d="M-40 120 C 120 40, 260 220, 440 90" />
              <path d="M-40 260 C 80 360, 300 160, 440 300" />
              <path d="M-40 520 C 140 420, 240 640, 440 500" />
              <path d="M-40 700 C 100 620, 320 800, 440 660" />
              <path d="M260 -40 C 180 200, 420 420, 300 840" />
            </svg>

            <nav aria-label="Mobile" className="relative flex flex-1 flex-col items-center justify-center gap-1">
              {[...navLinks, ctaLink].map((link, index) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.08 + index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      href={link.href}
                      onClick={closeMenu}
                      aria-current={isActive ? "page" : undefined}
                      className={cn(
                        "block py-1 font-display text-[40px] leading-tight tracking-[-0.02em] transition-colors",
                        isActive ? "text-bioluminescent-lime" : "text-paper"
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            <motion.a
              href={`mailto:${contactEmail}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.35 }}
              className="relative mx-auto mb-10 break-all px-6 text-center text-base text-paper/80 underline decoration-graphite underline-offset-4"
            >
              {contactEmail}
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
