import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

// Wrap with an element using `ctaButtonClass`; hover on the wrapper swaps the
// label and arrow fills and sends the arrow through its slanted block.
const ctaButtonClass =
  "group/cta inline-flex items-stretch rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-night";

const ease = "duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]";

const labelTones = {
  // Dark fill, for light canvases
  solid: "bg-ink text-paper",
  // Light fill, for dark canvases
  inverse: "bg-cream text-ink",
  // Hairline ghost on dark canvases
  outline: "bg-night/60 text-paper shadow-[inset_0_0_0_1px_var(--color-line)] backdrop-blur-md",
};

// Arrow block takes the label's resting fill on hover
const arrowHoverTones = {
  solid: "group-hover/cta:bg-ink group-hover/cta:text-paper group-focus-visible/cta:bg-ink group-focus-visible/cta:text-paper",
  inverse: "group-hover/cta:bg-cream group-focus-visible/cta:bg-cream",
  outline: "group-hover/cta:bg-cream group-focus-visible/cta:bg-cream",
};

type CtaTone = keyof typeof labelTones;

function CtaButtonContent({
  children,
  tone = "solid",
  size = "default",
}: {
  children: React.ReactNode;
  tone?: CtaTone;
  size?: "default" | "lg";
}) {
  const height = size === "lg" ? "h-12" : "h-10";

  return (
    <>
      <span
        className={cn(
          "flex items-center whitespace-nowrap rounded-lg rounded-r-none pl-4 pr-6 font-mono text-caption uppercase transition-[background-color,color,box-shadow]",
          "[clip-path:polygon(0_0,100%_0,calc(100%-10px)_100%,0_100%)]",
          "group-hover/cta:bg-accent group-hover/cta:text-ink group-hover/cta:shadow-none group-focus-visible/cta:bg-accent group-focus-visible/cta:text-ink",
          size === "lg" && "pl-5 pr-7",
          height,
          ease,
          labelTones[tone]
        )}
      >
        {children}
      </span>
      <span
        aria-hidden="true"
        className={cn(
          "relative -ml-1.5 w-13 overflow-hidden rounded-lg rounded-l-none bg-accent text-ink transition-colors",
          "[clip-path:polygon(10px_0,100%_0,100%_100%,0_100%)]",
          height,
          ease,
          arrowHoverTones[tone]
        )}
      >
        {/* Resting arrow exits right while its twin enters from the left */}
        <ArrowRight
          className={cn(
            "absolute left-[calc(50%-3px)] top-1/2 size-4 -translate-y-1/2 transition-transform group-hover/cta:translate-x-10 group-focus-visible/cta:translate-x-10",
            ease
          )}
        />
        <ArrowRight
          className={cn(
            "absolute left-[calc(50%-3px)] top-1/2 size-4 -translate-x-10 -translate-y-1/2 transition-transform group-hover/cta:translate-x-0 group-focus-visible/cta:translate-x-0",
            ease
          )}
        />
      </span>
    </>
  );
}

export { CtaButtonContent, ctaButtonClass };
