"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
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
  { label: "HOME", href: "#home" },
  { label: "ABOUT US", href: "#about" },
  { label: "EVENTS", href: "#events" },
  { label: "CONTACT US", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

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
          "mx-auto flex w-full max-w-6xl items-center justify-between  transition-all duration-400",
          isScrolled ? "py-3" : "py-6"
        )}
      >
        <div className="flex items-center gap-3">
          <div className="relative h-10 w-20 sm:h-12 sm:w-24 lg:h-14 lg:w-70">
            <Image
              src="/logo.png"
              alt="Adrenaline Adventures logo"
              fill
              sizes="(min-width: 1024px) 112px, (min-width: 640px) 96px, 80px"
              className="object-contain"
              priority
            />
          </div>
        </div>

        <nav className="hidden md:block">
          <div
            className={cn(
              "flex items-center gap-6 rounded-2xl px-6 py-3 text-sm text-white/80 transition",
              isScrolled
                ? ""
                : "bg-neutral-900/50 shadow-lg shadow-black/10"
            )}
          >
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className={
                  index === 0
                    ? "rounded-xl bg-white/10 px-4 py-2 text-white"
                    : "px-2 py-2 transition hover:text-white"
                }
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>

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
                <SheetTitle className="text-white">Menu</SheetTitle>
              </SheetHeader>
              <div className="mt-8 flex flex-col gap-4 text-sm">
                {navItems.map((item) => (
                  <SheetClose asChild key={item.label}>
                    <a
                      href={item.href}
                      className="rounded-lg px-3 py-2 text-white/80 transition hover:bg-white/10 hover:text-white"
                    >
                      {item.label}
                    </a>
                  </SheetClose>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
