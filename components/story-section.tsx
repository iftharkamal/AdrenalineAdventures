"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { CtaButtonContent, ctaButtonClass } from "@/components/ui/cta-button";

type Slide = {
  label: string;
  text: string;
  cta?: { label: string; href: string };
};

const SLIDES: Slide[] = [
  {
    label: "Our mission",
    text: "Adrenaline Adventures is an emerging Indian adventure travel company creating unique experiences for foreign and domestic travellers in India. We offer exciting type of adventure packages all designed to let travellers experience the rich culture of India in an adventurous way. Our company aims to provide unique, unforgettable travel experiences for adventure enthusiasts around the world.",
  },
  {
    label: "Why AD AD",
    text: "We set out to create adventure rides that truly capture the spirit of exploration — journeys that reflect our passion for the open road and the world beyond it. Each route is designed in collaboration with expert local guides to bring out the culture, challenge, and character of every destination.",
    cta: { label: "Find out more", href: "/about-us" },
  },
];

const FADE = 0.05; // crossfade width between slides, as a share of the whole section
const HOLD = 0.25; // share of each slide kept fully lit before handing over
const SOFT_EDGE = 12; // characters over which the light-up front is blended
const DIM = 0.22;

function Char({ char, progress, range }: { char: string; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [DIM, 1]);
  return <motion.span style={{ opacity }}>{char}</motion.span>;
}

// Lights the text up character by character as `progress` moves from `start` to `end`
function RevealText({
  text,
  progress,
  start,
  end,
}: {
  text: string;
  progress: MotionValue<number>;
  start: number;
  end: number;
}) {
  const step = (end - start) / text.length;
  const words = text.split(" ");
  // Character offset of each word within the full text (words are joined by single spaces)
  const offsets = words.reduce<number[]>(
    (acc, _, i) => [...acc, i === 0 ? 0 : acc[i - 1] + words[i - 1].length + 1],
    []
  );

  return (
    <span aria-hidden="true">
      {words.map((word, wordIndex) => (
        <span key={wordIndex}>
          <span className="inline-block whitespace-nowrap">
            {[...word].map((char, charIndex) => {
              const from = start + (offsets[wordIndex] + charIndex) * step;
              return <Char key={charIndex} char={char} progress={progress} range={[from, from + SOFT_EDGE * step]} />;
            })}
          </span>{" "}
        </span>
      ))}
    </span>
  );
}

function SlideBlock({
  slide,
  index,
  progress,
  reduceMotion,
}: {
  slide: Slide;
  index: number;
  progress: MotionValue<number>;
  reduceMotion: boolean;
}) {
  const count = SLIDES.length;
  const start = index / count;
  const end = (index + 1) / count;
  const isFirst = index === 0;
  const isLast = index === count - 1;

  const revealStart = start + (isFirst ? 0.02 : FADE);
  const revealEnd = end - (end - start) * HOLD;

  const fadeInput = [
    ...(isFirst ? [] : [start, start + FADE]),
    ...(isLast ? [] : [end - FADE, end]),
  ];
  const fadeOutput = [...(isFirst ? [] : [0, 1]), ...(isLast ? [] : [1, 0])];
  const yOutput = [...(isFirst ? [] : [24, 0]), ...(isLast ? [] : [0, -24])];

  const opacity = useTransform(progress, fadeInput, fadeOutput);
  const y = useTransform(progress, fadeInput, yOutput);
  const ctaOpacity = useTransform(progress, [revealEnd, revealEnd + 0.04], [0, 1]);

  return (
    <motion.div style={{ opacity, y }} className="absolute inset-x-0 top-0">
      <p
        aria-label={slide.text}
        className="text-[21px] leading-[1.3] tracking-[-0.01em] text-paper sm:text-[26px] lg:text-[32px] xl:text-[36px]"
      >
        {reduceMotion ? slide.text : <RevealText text={slide.text} progress={progress} start={revealStart} end={revealEnd} />}
      </p>
      {slide.cta && (
        <motion.div style={{ opacity: reduceMotion ? 1 : ctaOpacity }} className="mt-10">
          <Link href={slide.cta.href} className={ctaButtonClass}>
            <CtaButtonContent tone="inverse">{slide.cta.label}</CtaButtonContent>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
}

export default function StorySection() {
  const containerRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion() ?? false;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const bgScale = useTransform(scrollYProgress, [0, 1], [1.12, 1]);

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    setActive(Math.min(SLIDES.length - 1, Math.floor(value * SLIDES.length)));
  });

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <section
      ref={containerRef}
      id="about"
      className="relative bg-night text-paper"
      style={{ height: `${SLIDES.length * 180 + 100}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div style={{ scale: reduceMotion ? 1 : bgScale }} className="absolute inset-0">
          <Image src="/whyadadimg.png" alt="" fill sizes="100vw" className="object-cover" />
        </motion.div>
        <div className="absolute inset-0 bg-night/70" aria-hidden="true" />

        <div className="relative flex h-full flex-col pt-24 md:pt-28">
          {/* Section chip */}
          <div className="mx-auto w-full max-w-page px-6">
            <span className="inline-flex items-center gap-2.5 rounded-lg bg-night/60 px-3 py-2 font-mono text-[15px] uppercase leading-none tracking-[-0.02em] text-paper backdrop-blur-md md:px-3.5 md:text-[17px]">
              <span className="size-2.5 rounded-[2px] bg-accent" aria-hidden="true" />
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={active}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.25 }}
                >
                  {SLIDES[active].label}
                </motion.span>
              </AnimatePresence>
            </span>
          </div>

          {/* Progress hairline */}
          <div className="relative mt-6 h-px w-full bg-paper/15 md:mt-10">
            <motion.div style={{ scaleX: scrollYProgress }} className="absolute inset-0 origin-left bg-paper" />
          </div>

          <div className="mx-auto grid w-full max-w-page flex-1 grid-rows-[auto_1fr] gap-8 px-6 pt-8 md:grid-cols-[1fr_2fr] md:grid-rows-1 md:pt-10">
            {/* Counter */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-paper/30 px-4 py-2 font-mono text-caption">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={active}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.25 }}
                  >
                    {pad(active + 1)}
                  </motion.span>
                </AnimatePresence>
                <span className="text-paper/40">/ {pad(SLIDES.length)}</span>
              </span>
            </div>

            {/* Statements */}
            <div className="relative">
              {SLIDES.map((slide, index) => (
                <SlideBlock
                  key={slide.label}
                  slide={slide}
                  index={index}
                  progress={scrollYProgress}
                  reduceMotion={reduceMotion}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
