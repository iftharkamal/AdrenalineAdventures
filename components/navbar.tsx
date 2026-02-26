"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "/about-us" },
  { label: "EVENTS", href: "/events" },
  { label: "CONTACT US", href: "/contact-us" },
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

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 transition-all duration-500",
        isScrolled && "bg-neutral-950/10 backdrop-blur-md shadow-lg shadow-black/10"
      )}
    >
      <div
        className={cn(
          "mx-auto flex w-full max-w-6xl items-center justify-between px-4 transition-all duration-400",
          isScrolled ? "py-3" : "py-6"
        )}
      >
        {/* Logo: Icon + Text (Responsive scaling) */}
        <Link href="/" className="flex items-end gap-2 md:gap-3 group transition-all">
          <div className="relative h-9 w-7 sm:h-11 sm:w-9 md:h-12 md:w-10 lg:h-14 lg:w-12 transition-all">
            <Image
              src="/logo.png"
              alt="Adrenaline Adventures logo icon"
              fill
              sizes="(min-width: 1024px) 48px, (min-width: 768px) 40px, 36px"
              className="object-contain"
              priority
            />
          </div>
          <div className="hidden sm:flex flex-col justify-end pb-0.5">
            <h1 className="font-formula1-bold text-white leading-[0.9] tracking-wider transition-all
              sm:text-sm md:text-lg lg:text-xl  whitespace-nowrap">
              Adrenaline Adventures
            </h1>
            <p className="text-white/40 font-light font-encode-sans-expanded tracking-[0.1em] transition-all
              text-[7px] md:text-[9px] lg:text-[11px] whitespace-nowrap mt-0.5">
              Curated adventures, Crafted memories
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <div
            className={cn(
              "flex items-center rounded-2xl transition-all duration-300",
              "gap-4 lg:gap-8 px-4 lg:px-8 py-2.5 lg:py-3.5",
              "text-[10px] lg:text-[13px] text-white/80",
              isScrolled
                ? ""
                : "bg-neutral-900/50 shadow-lg shadow-black/10"
            )}
          >
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "px-2 py-2 transition hover:text-white font-formula1 tracking-widest whitespace-nowrap",
                    isActive && "rounded-xl bg-white/10 px-4 lg:px-5 py-2 lg:py-2.5 text-white"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10"
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="border-white/10 bg-neutral-950 text-white"
            >
              <SheetHeader className="text-left">
                <SheetTitle className="text-white font-formula1-bold">Menu</SheetTitle>
              </SheetHeader>
              <div className="mt-8 flex flex-col gap-4 text-sm">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <SheetClose asChild key={item.label}>
                      <Link
                        href={item.href}
                        className={cn(
                          "rounded-lg px-3 py-2 text-white/80 transition hover:bg-white/10 hover:text-white font-formula1 tracking-wider",
                          isActive && "bg-white/10 text-white"
                        )}
                      >
                        {item.label}
                      </Link>
                    </SheetClose>
                  );
                })}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
