"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import Reveal from "@/components/ui/reveal";
import { SectionLabel, Tag } from "@/components/ui/section-label";

const EVENTS = [
  {
    id: 1,
    title: "WEEKEND ESCAPE",
    category: "One Day / Group Bike Ride",
    image: "/eventcard1.png",
  },
  {
    id: 2,
    title: "MALTERRA RALLY",
    category: "One Day / Car Rally",
    image: "/eventcard2.png",
  },
  {
    id: 3,
    title: "GO HIKE",
    category: "Multi- Day / Hiking Camp",
    image: "/eventcard3.png",
  },
  {
    id: 4,
    title: "COASTAL RIDE",
    category: "Two Day / Solo Ride",
    image: "/eventcard1.png",
  },
  {
    id: 5,
    title: "HIMALAYAN PASS",
    category: "Five Day / Expedition",
    image: "/eventcard2.png",
  },
];

export default function FeaturedEvents() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [visibleEnd, setVisibleEnd] = useState(0);

  // Track how far the right edge of the viewport has travelled along the rail
  const handleScroll = useCallback(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const { scrollLeft, scrollWidth, clientWidth } = container;
    setVisibleEnd(((scrollLeft + clientWidth) / scrollWidth) * 100);
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    handleScroll();
    container.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      container.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [handleScroll]);

  const scroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (!container) return;
    container.scrollBy({
      left: direction === "left" ? -container.clientWidth : container.clientWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-stone py-20 text-ink md:py-32">
      <div className="mx-auto w-full max-w-page px-6">
        <Reveal className="mb-12 grid gap-10 md:mb-16 md:grid-cols-2">
          <div>
            <SectionLabel index="02" tone="light">
              Explore our
            </SectionLabel>
            <h2 className="mt-6 font-display text-heading-sm md:text-heading-lg">Featured Events</h2>
          </div>
          <p className="self-end text-body text-ink/70">
            Adventures that spark your spirit from quick rides to multi-day journeys, each experience blends thrill,
            culture, and community. More than trips, they&apos;re stories you&apos;ll carry forever.
          </p>
        </Reveal>

        <div ref={scrollContainerRef} className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto pb-10">
          {EVENTS.map((event) => (
            <Link
              key={event.id}
              href="/events"
              className="group flex min-w-full snap-start flex-col rounded-card bg-paper p-3 md:min-w-[calc(33.333%-14px)]"
            >
              <div className="relative aspect-[4/4.2] overflow-hidden rounded-xl">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  sizes="(min-width: 768px) 400px, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex items-end justify-between gap-4 px-3 pb-3 pt-6">
                <div>
                  <Tag tone="light">{event.category}</Tag>
                  <h3 className="mt-3 font-display text-subheading">{event.title}</h3>
                </div>
                <span className={buttonVariants({ variant: "accent", size: "icon" })}>
                  <ArrowRight />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-8 md:gap-12">
          <div className="flex gap-2">
            <Button variant="outline-ink" size="icon" onClick={() => scroll("left")} aria-label="Previous cards">
              <ChevronLeft />
            </Button>
            <Button variant="outline-ink" size="icon" onClick={() => scroll("right")} aria-label="Next cards">
              <ChevronRight />
            </Button>
          </div>

          <div className="relative h-px flex-1 bg-ink/10">
            <div
              className="absolute inset-y-0 left-0 bg-night transition-[width] duration-300"
              style={{ width: `${visibleEnd}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
