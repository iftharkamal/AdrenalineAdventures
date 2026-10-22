"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import {
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { cn } from "@/lib/utils";
import { CtaButtonContent, ctaButtonClass } from "@/components/ui/cta-button";
import { BlockText } from "@/components/ui/intro-text";

const EASE = [0.22, 1, 0.36, 1] as const;
const EASE_IN_OUT = [0.76, 0, 0.24, 1] as const;

// The hero opens from a pill-shaped dot in the centre into an inset box, then scroll expands it full-bleed
const INTRO_DELAY = 0.3; // s
const INTRO_DURATION = 1.4; // s
const CONTENT_DELAY = INTRO_DELAY + INTRO_DURATION * 0.75; // copy starts rising as the box settles
const BOX_INSET = 15; // px, resting gap around the box
const BOX_RADIUS = 24; // px, resting corner radius
const EXPAND_DISTANCE = 50; // px of scroll over which the box goes full-bleed, measured from the reference

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const intro = useMotionValue(reduceMotion ? 1 : 0);

  const { scrollY } = useScroll();
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  // Full-bleed within the first few pixels of scroll, and back to the inset box on the way up
  const expandLinear = useTransform(scrollY, [0, EXPAND_DISTANCE], [0, 1], { clamp: true });
  const expandSpring = useSpring(expandLinear, { stiffness: 400, damping: 40 });
  const expand = reduceMotion ? expandLinear : expandSpring;

  const clipPath = useTransform([intro, expand], ([p, e]: number[]) => {
    // Inset shrinks from 50% (a dot) to the resting gap, so the box keeps the viewport's proportions
    const gap = p * BOX_INSET * (1 - e);
    const edge = (1 - p) * 50;
    // Oversized radius is clamped by the browser, which keeps the small box a full pill
    const radius = (BOX_RADIUS + 500 * (1 - p) ** 2) * (1 - e);
    return `inset(calc(${edge}% + ${gap}px) calc(${edge}% + ${gap}px) round ${radius}px)`;
  });

  const imageScale = useTransform([intro, expand], ([p, e]: number[]) => 1.15 - 0.12 * p - 0.03 * e);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  useEffect(() => {
    if (reduceMotion) {
      intro.set(1);
      return;
    }
    const controls = animate(intro, 1, { duration: INTRO_DURATION, delay: INTRO_DELAY, ease: EASE_IN_OUT });
    return () => controls.stop();
  }, [intro, reduceMotion]);

  // Lines slide up out of a mask, staggered after the box has opened
  const rise = (delay: number) => ({
    initial: reduceMotion ? false : { y: "110%" },
    animate: { y: "0%" },
    transition: { duration: 0.9, delay: CONTENT_DELAY + delay, ease: EASE },
  });

  return (
    <section ref={sectionRef} id="home" className="relative h-screen min-h-160 w-full bg-stone">
      <motion.div className="absolute inset-0 overflow-hidden bg-night" style={{ clipPath }}>
        <motion.div className="absolute inset-0" style={{ scale: imageScale, y: imageY }}>
          {/* Slow drift stands in for the reference's looping video background */}
          <motion.div
            className="absolute inset-0"
            animate={reduceMotion ? undefined : { scale: [1, 1.06, 1], x: ["0%", "-1.5%", "0%"] }}
            transition={{ duration: 24, ease: "easeInOut", repeat: Infinity }}
          >
            <Image
              src="/landingImage.png"
              alt="Cyclists riding on a trail at sunset"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        </motion.div>
        <div className="absolute inset-0 bg-night/45" aria-hidden="true" />

        <div className="relative z-10 flex h-full w-full flex-col justify-end px-6 pb-10 pt-36 md:px-10 md:pb-14 md:pt-48 lg:px-15">
          {/* Heading and subheading read as one block, so they sit tight together; the heading gets the full width */}
          <h1 className="overflow-hidden pb-[0.08em] font-display text-[44px] leading-none tracking-[-0.02em] text-paper min-[400px]:text-[52px] sm:text-heading-lg md:text-display lg:text-display-xl">
            <motion.span className="block" {...rise(0)}>
              {/* Non-breaking space keeps "AD AD." on one line */}
              This is AD{" "}AD.
            </motion.span>
          </h1>

          <div className="mt-2 flex flex-col gap-8 md:mt-3 md:flex-row md:items-end md:justify-between">
            <p className="max-w-xl text-body-lg text-paper/85 md:text-subheading">
              <BlockText text="Born from the spirit of exploration." delay={CONTENT_DELAY + 0.2} stagger={0.06} />
            </p>
            <motion.a
              href="#about"
              className={cn(ctaButtonClass, "self-start md:self-auto")}
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: CONTENT_DELAY + 0.3, ease: EASE }}
            >
              <CtaButtonContent tone="outline">Discover AD AD</CtaButtonContent>
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
