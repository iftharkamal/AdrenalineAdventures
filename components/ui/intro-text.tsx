"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;
const EASE_IN_OUT = [0.76, 0, 0.24, 1] as const;
// The visible wrapper is what gets observed: the words start clipped or hidden, so they can't trigger it themselves
const VIEWPORT = { once: true, margin: "-40px" } as const;

const rise: Variants = {
  hidden: { y: "110%" },
  show: (delay: number) => ({ y: 0, transition: { duration: 0.9, delay, ease: EASE } }),
};

// Heading words rise one after another from behind a mask the first time they are seen
export function RiseText({ text, delay = 0, stagger = 0.08 }: { text: string; delay?: number; stagger?: number }) {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) return <>{text}</>;

  return (
    <>
      <span className="sr-only">{text}</span>
      <motion.span aria-hidden="true" initial="hidden" whileInView="show" viewport={VIEWPORT}>
        {text.split(" ").map((word, i) => (
          <span key={i}>
            {i > 0 && " "}
            <span className="-mb-[0.12em] inline-block overflow-hidden pb-[0.12em] align-bottom">
              <motion.span className="inline-block" variants={rise} custom={delay + i * stagger}>
                {word}
              </motion.span>
            </span>
          </span>
        ))}
      </motion.span>
    </>
  );
}

const BLOCK_DURATION = 0.7;

const blockWord: Variants = {
  hidden: { opacity: 0 },
  show: (start: number) => ({ opacity: 1, transition: { duration: 0, delay: start + BLOCK_DURATION / 2 } }),
};

const block: Variants = {
  hidden: { clipPath: "inset(0 100% 0 0)" },
  show: (start: number) => ({
    clipPath: ["inset(0 100% 0 0)", "inset(0 0% 0 0)", "inset(0 0 0 100%)"],
    transition: { duration: BLOCK_DURATION, delay: start, times: [0, 0.5, 1], ease: EASE_IN_OUT },
  }),
};

// Each word is covered by a solid block in the text colour that wipes in, then off, leaving the word behind
export function BlockText({ text, delay = 0, stagger = 0.025 }: { text: string; delay?: number; stagger?: number }) {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) return <>{text}</>;

  return (
    <>
      <span className="sr-only">{text}</span>
      <motion.span aria-hidden="true" initial="hidden" whileInView="show" viewport={VIEWPORT}>
        {text.split(" ").map((word, i) => {
          const start = delay + i * stagger;
          return (
            <span key={i}>
              {i > 0 && " "}
              <span className="relative inline-block">
                <motion.span className="inline-block" variants={blockWord} custom={start}>
                  {word}
                </motion.span>
                <motion.span
                  className="pointer-events-none absolute inset-0 bg-current"
                  variants={block}
                  custom={start}
                />
              </span>
            </span>
          );
        })}
      </motion.span>
    </>
  );
}
