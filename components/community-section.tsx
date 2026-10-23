"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion, type PanInfo } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/ui/reveal";
import { RiseText } from "@/components/ui/intro-text";
import { SectionLabel } from "@/components/ui/section-label";
import { cn } from "@/lib/utils";

const COMMUNITY_IMAGES = [
  { src: "/communitypic1.png", alt: "Riders on road" },
  { src: "/communitypic2.png", alt: "Group photo" },
  { src: "/communitypic3.png", alt: "Bikes on road" },
  { src: "/communitypic4.png", alt: "B&W riders" },
  { src: "/communitypic5.png", alt: "Meetup" },
];

const EASE = [0.22, 1, 0.36, 1] as const;
const SWIPE_THRESHOLD = 60; // px of drag before it counts as a swipe

const pad = (n: number) => String(n).padStart(2, "0");

// Slides in from the side it's heading towards
const slide = {
  enter: (direction: number) => ({ x: `${direction * 100}%` }),
  center: { x: "0%" },
  exit: (direction: number) => ({ x: `${direction * -100}%` }),
};

function CommunityCarousel() {
  const [[index, direction], setState] = useState([0, 0]);
  const reduceMotion = useReducedMotion();
  const count = COMMUNITY_IMAGES.length;

  const goTo = (next: number, dir: number) => setState([(next + count) % count, dir]);
  const paginate = (dir: number) => goTo(index + dir, dir);

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -SWIPE_THRESHOLD) paginate(1);
    else if (info.offset.x > SWIPE_THRESHOLD) paginate(-1);
  };

  const image = COMMUNITY_IMAGES[index];

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Community photos"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") paginate(-1);
        if (event.key === "ArrowRight") paginate(1);
      }}
      className="outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-night"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-card border border-line">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            variants={slide}
            initial={reduceMotion ? false : "enter"}
            animate="center"
            exit={reduceMotion ? undefined : "exit"}
            transition={{ duration: 0.7, ease: EASE }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
            className="absolute inset-0 cursor-grab active:cursor-grabbing"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              draggable={false}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="pointer-events-none object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-6 flex items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <span className="font-mono text-caption text-paper/70" aria-live="polite">
            {pad(index + 1)} / {pad(count)}
          </span>
          <div className="flex items-center gap-2">
            {COMMUNITY_IMAGES.map((item, i) => (
              <button
                key={item.src}
                type="button"
                aria-label={`Show photo ${i + 1}`}
                aria-current={i === index}
                onClick={() => goTo(i, i > index ? 1 : -1)}
                className={cn(
                  "h-1.5 rounded-full transition-[width,background-color] duration-500",
                  i === index ? "w-8 bg-accent" : "w-1.5 bg-paper/30 hover:bg-paper/60"
                )}
              />
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" aria-label="Previous photo" onClick={() => paginate(-1)}>
            <ArrowLeft />
          </Button>
          <Button variant="outline" size="icon" aria-label="Next photo" onClick={() => paginate(1)}>
            <ArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default function CommunitySection() {
  return (
    <section id="community" className="bg-night py-20 text-paper md:py-32">
      <div className="mx-auto grid w-full max-w-page grid-cols-1 items-center gap-12 px-6 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal>
            <SectionLabel index="04">About our</SectionLabel>
            <h2 className="mt-6 font-display text-heading-sm md:text-heading-lg">
              <RiseText text="Community" />
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-6 max-w-xl space-y-4 text-body text-paper/70">
              <p>
                Adrenaline Adventures is more than a platform, it&rsquo;s a growing community of riders, hikers, and
                explorers brought together by a shared love for adventure. From two wheels on open roads to footsteps
                on hidden trails, our community thrives on the spirit of exploration, connection, and shared
                experiences.
              </p>
              <p>
                We welcome everyone who seeks the outdoors, whether you&apos;re an experienced adventurer or just
                starting your journey. Through rides, hikes, rallies, and expeditions, we create spaces where people
                connect, support each other, and build lasting memories together.
              </p>
              <p>
                It&rsquo;s not just about the destination... it&rsquo;s about the people you meet and the stories you
                create along the way.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal className="lg:col-span-7" delay={0.2}>
          <CommunityCarousel />
        </Reveal>
      </div>
    </section>
  );
}
