"use client";

import type { MouseEvent, ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

type Edge = "top" | "right" | "bottom" | "left";

const offscreen: Record<Edge, { x: string; y: string }> = {
  top: { x: "0%", y: "-100%" },
  right: { x: "100%", y: "0%" },
  bottom: { x: "0%", y: "100%" },
  left: { x: "-100%", y: "0%" },
};

const ease = [0.22, 1, 0.36, 1] as const;

// Edge closest to the pointer, measured relative to the row's size
function nearestEdge(event: MouseEvent<HTMLElement>): Edge {
  const rect = event.currentTarget.getBoundingClientRect();
  const x = (event.clientX - rect.left) / rect.width;
  const y = (event.clientY - rect.top) / rect.height;
  const distances: [Edge, number][] = [
    ["top", y],
    ["right", 1 - x],
    ["bottom", 1 - y],
    ["left", x],
  ];
  return distances.sort((a, b) => a[1] - b[1])[0][0];
}

// Rounded 56×48 block with a slanted left edge: "/" at rest, "\" while the row is hovered.
// Both paths share one command structure so the shape can morph between them.
const arrowShape = {
  rest: "M18 0 H48 Q56 0 56 8 V40 Q56 48 48 48 H8 Q0 48 1.67 40 L8.33 8 Q10 0 18 0 Z",
  hover: "M8 0 H48 Q56 0 56 8 V40 Q56 48 48 48 H18 Q10 48 8.33 40 L1.67 8 Q0 0 8 0 Z",
};

export function HoverFillArrow() {
  return (
    <span
      aria-hidden="true"
      className="relative flex h-12 w-14 shrink-0 items-center justify-center overflow-hidden text-ink"
    >
      <svg viewBox="0 0 56 48" preserveAspectRatio="none" className="absolute inset-0 size-full text-accent">
        <path data-fill-shape d={arrowShape.rest} fill="currentColor" />
      </svg>
      <span data-fill-arrow className="relative flex pl-1.5">
        <ArrowRight className="size-4" />
      </span>
    </span>
  );
}

// Row whose dark fill slides in from the edge the pointer enters and leaves through the edge it exits.
// Any [data-fill-arrow] inside exits right and re-enters from the left on both enter and leave.
export default function HoverFillRow({ children, className }: { children: ReactNode; className?: string }) {
  const [scope, animate] = useAnimate<HTMLDivElement>();

  const passArrowThrough = async () => {
    if (!scope.current.querySelector("[data-fill-arrow]")) return;
    await animate("[data-fill-arrow]", { x: 36 }, { duration: 0.2, ease: "easeIn" });
    await animate("[data-fill-arrow]", { x: -36 }, { duration: 0 });
    await animate("[data-fill-arrow]", { x: 0 }, { duration: 0.35, ease });
  };

  const morphShape = (d: string) => {
    if (!scope.current.querySelector("[data-fill-shape]")) return;
    animate("[data-fill-shape]", { d }, { duration: 0.45, ease });
  };

  const handleEnter = async (event: MouseEvent<HTMLDivElement>) => {
    passArrowThrough();
    morphShape(arrowShape.hover);
    await animate("[data-fill-panel]", offscreen[nearestEdge(event)], { duration: 0 });
    animate("[data-fill-panel]", { x: "0%", y: "0%" }, { duration: 0.45, ease });
  };

  const handleLeave = (event: MouseEvent<HTMLDivElement>) => {
    passArrowThrough();
    morphShape(arrowShape.rest);
    animate("[data-fill-panel]", offscreen[nearestEdge(event)], { duration: 0.45, ease });
  };

  return (
    <div
      ref={scope}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className={cn("group relative isolate overflow-hidden", className)}
    >
      <div
        data-fill-panel
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-ink"
        style={{ transform: "translateX(-100%)" }}
      />
      {children}
    </div>
  );
}
