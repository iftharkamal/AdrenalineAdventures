"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useInView, useReducedMotion, type PanInfo } from "framer-motion";
import { useLenis } from "lenis/react";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Photo } from "@/lib/photos";

const AUTOPLAY_MS = 3500; // time each photo leads the strip
const RESUME_AFTER_MS = 8000; // quiet period after someone touches the strip before it moves again
const SWIPE_THRESHOLD = 60; // px of drag before the lightbox counts it as a swipe
const EASE = [0.22, 1, 0.36, 1] as const;

const pad = (n: number) => String(n).padStart(2, "0");

/* ───────────────────────────── Lightbox ───────────────────────────── */

function Lightbox({
  photos,
  label,
  index,
  onIndexChange,
  onClose,
}: {
  photos: Photo[];
  label: string;
  index: number;
  onIndexChange: (index: number) => void;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const [direction, setDirection] = useState(0);
  const reduceMotion = useReducedMotion();
  const lenis = useLenis();
  const count = photos.length;
  const current = photos[index];

  const paginate = useCallback(
    (dir: number) => {
      setDirection(dir);
      onIndexChange((index + dir + count) % count);
    },
    [count, index, onIndexChange]
  );

  // Freeze the page behind the viewer
  useEffect(() => {
    lenis?.stop();
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      lenis?.start();
      document.body.style.overflow = overflow;
    };
  }, [lenis]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      else if (event.key === "ArrowLeft") paginate(-1);
      else if (event.key === "ArrowRight") paginate(1);
      else if (event.key === "Tab") {
        // Keep focus inside the viewer
        const focusable = dialogRef.current?.querySelectorAll<HTMLElement>("button");
        if (!focusable?.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, paginate]);

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -SWIPE_THRESHOLD) paginate(1);
    else if (info.offset.x > SWIPE_THRESHOLD) paginate(-1);
  };

  return createPortal(
    <motion.div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={`${label} photos`}
      className="fixed inset-0 z-100 flex flex-col bg-night/95 text-paper backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center justify-between gap-4 px-4 py-4 md:px-8">
        <span className="font-mono text-caption uppercase text-paper/70" aria-live="polite">
          {label} · {pad(index + 1)} / {pad(count)}
        </span>
        <Button ref={closeRef} variant="outline" size="icon" aria-label="Close photos" onClick={onClose}>
          <X />
        </Button>
      </div>

      <div className="relative min-h-0 flex-1 overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            variants={{
              enter: (dir: number) => ({ x: `${dir * 100}%`, opacity: 0 }),
              center: { x: "0%", opacity: 1 },
              exit: (dir: number) => ({ x: `${dir * -100}%`, opacity: 0 }),
            }}
            initial={reduceMotion ? false : "enter"}
            animate="center"
            exit={reduceMotion ? undefined : "exit"}
            transition={{ duration: 0.6, ease: EASE }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
            className="absolute inset-0 cursor-grab px-4 active:cursor-grabbing md:px-24"
          >
            <div className="relative h-full w-full">
              <Image
                src={current.src}
                alt={current.alt}
                fill
                draggable={false}
                sizes="100vw"
                className="pointer-events-none object-contain"
              />
            </div>
          </motion.div>
        </AnimatePresence>

        <Button
          variant="outline"
          size="icon"
          aria-label="Previous photo"
          onClick={() => paginate(-1)}
          className="absolute left-4 top-1/2 hidden -translate-y-1/2 bg-night/60 md:inline-flex md:left-8"
        >
          <ChevronLeft />
        </Button>
        <Button
          variant="outline"
          size="icon"
          aria-label="Next photo"
          onClick={() => paginate(1)}
          className="absolute right-4 top-1/2 hidden -translate-y-1/2 bg-night/60 md:inline-flex md:right-8"
        >
          <ChevronRight />
        </Button>
      </div>

      <div className="flex items-center justify-between gap-4 px-4 py-4 md:px-8 md:py-6">
        <p className="text-body text-paper/70">{current.alt}</p>
        <div className="flex gap-2 md:hidden">
          <Button variant="outline" size="icon" aria-label="Previous photo" onClick={() => paginate(-1)}>
            <ChevronLeft />
          </Button>
          <Button variant="outline" size="icon" aria-label="Next photo" onClick={() => paginate(1)}>
            <ChevronRight />
          </Button>
        </div>
      </div>
    </motion.div>,
    document.body
  );
}

/* ───────────────────────────── Strip ───────────────────────────── */

// A sliding row of photos that drifts forward on its own; any photo opens full screen
export default function PhotoStrip({ photos, label }: { photos: Photo[]; label: string }) {
  const railRef = useRef<HTMLDivElement>(null);
  const triggerRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const pausedUntil = useRef(0);
  const [hovering, setHovering] = useState(false);
  const [progress, setProgress] = useState(0);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const reduceMotion = useReducedMotion();
  const inView = useInView(railRef, { amount: 0.4 });

  const holdAutoplay = useCallback(() => {
    pausedUntil.current = Date.now() + RESUME_AFTER_MS;
  }, []);

  const updateProgress = useCallback(() => {
    const rail = railRef.current;
    if (!rail) return;
    const { scrollLeft, scrollWidth, clientWidth } = rail;
    setProgress(((scrollLeft + clientWidth) / scrollWidth) * 100);
  }, []);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;
    updateProgress();
    rail.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    return () => {
      rail.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, [updateProgress]);

  // Moves to the next (or previous) photo that starts beyond the rail's current left edge
  const step = useCallback((dir: 1 | -1) => {
    const rail = railRef.current;
    if (!rail) return;
    const items = Array.from(rail.children) as HTMLElement[];
    const left = rail.scrollLeft;
    const atEnd = left + rail.clientWidth >= rail.scrollWidth - 2;

    if (dir === 1 && atEnd) {
      rail.scrollTo({ left: 0, behavior: "smooth" });
      return;
    }
    const target =
      dir === 1
        ? items.find((item) => item.offsetLeft > left + 2)
        : [...items].reverse().find((item) => item.offsetLeft < left - 2);
    rail.scrollTo({ left: target ? target.offsetLeft : 0, behavior: "smooth" });
  }, []);

  const playing = !reduceMotion && inView && !hovering && openIndex === null;

  useEffect(() => {
    if (!playing) return;
    const timer = window.setInterval(() => {
      if (document.hidden || Date.now() < pausedUntil.current) return;
      step(1);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(timer);
  }, [playing, step]);

  const open = (i: number) => {
    holdAutoplay();
    setOpenIndex(i);
  };

  const close = useCallback(() => {
    if (openIndex !== null) {
      const trigger = triggerRefs.current[openIndex];
      trigger?.focus({ preventScroll: true });
      // Leave the strip on the photo the viewer ended on
      const rail = railRef.current;
      if (rail && trigger) rail.scrollTo({ left: trigger.offsetLeft, behavior: "instant" });
    }
    setOpenIndex(null);
    holdAutoplay();
  }, [holdAutoplay, openIndex]);

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label={`${label} photos`}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onFocus={holdAutoplay}
      onPointerDown={holdAutoplay}
      onWheel={holdAutoplay}
      onTouchStart={holdAutoplay}
    >
      <div
        ref={railRef}
        className="no-scrollbar relative flex snap-x snap-mandatory gap-3 overflow-x-auto md:gap-4"
      >
        {photos.map((item, i) => {
          const ratio = item.width / item.height;
          return (
            <button
              key={item.src}
              ref={(node) => {
                triggerRefs.current[i] = node;
              }}
              type="button"
              onClick={() => open(i)}
              aria-label={`View photo ${i + 1} of ${photos.length}: ${item.alt}`}
              className="group relative h-72 max-w-[85vw] shrink-0 snap-start overflow-hidden rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset sm:h-96 md:h-[460px]"
              style={{ aspectRatio: `${item.width} / ${item.height}` }}
            >
              <Image
                src={item.src}
                alt=""
                fill
                sizes={`(min-width: 768px) ${Math.ceil(460 * ratio)}px, (min-width: 640px) ${Math.ceil(384 * ratio)}px, ${Math.min(Math.ceil(288 * ratio), 400)}px`}
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span
                className="absolute right-3 top-3 grid size-9 place-items-center rounded-lg bg-night/60 text-paper opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
                aria-hidden="true"
              >
                <Expand className="size-4" />
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-6 flex items-center gap-6 md:gap-10">
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            aria-label="Previous photos"
            onClick={() => {
              holdAutoplay();
              step(-1);
            }}
          >
            <ChevronLeft />
          </Button>
          <Button
            variant="outline"
            size="icon"
            aria-label="Next photos"
            onClick={() => {
              holdAutoplay();
              step(1);
            }}
          >
            <ChevronRight />
          </Button>
        </div>

        <div className="relative h-px flex-1 bg-paper/15">
          <div
            className="absolute inset-y-0 left-0 bg-paper transition-[width] duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        <span className="shrink-0 font-mono text-caption uppercase text-paper/60">
          {photos.length} photos
        </span>
      </div>

      <AnimatePresence>
        {openIndex !== null && (
          <Lightbox photos={photos} label={label} index={openIndex} onIndexChange={setOpenIndex} onClose={close} />
        )}
      </AnimatePresence>
    </div>
  );
}
