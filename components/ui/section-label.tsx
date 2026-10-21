import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Tone = "dark" | "light";

// Section counter pill ("01") followed by a mono label
export function SectionLabel({
  index,
  children,
  tone = "dark",
  className,
}: {
  index?: string;
  children: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-3 self-start", className)}>
      {index && (
        <span
          className={cn(
            "rounded-full border border-line px-2.5 py-1 font-mono text-caption",
            tone === "dark" ? "text-paper/60" : "text-ink/70"
          )}
        >
          {index}
        </span>
      )}
      <span className={cn("font-mono text-caption uppercase", tone === "dark" ? "text-paper/60" : "text-ink/70")}>
        {children}
      </span>
    </div>
  );
}

// 6px accent dot + mono uppercase label
export function Tag({ children, tone = "dark", className }: { children: ReactNode; tone?: Tone; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 font-mono text-caption uppercase",
        tone === "dark" ? "text-paper/60" : "text-ink/70",
        className
      )}
    >
      <span className="size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
      {children}
    </span>
  );
}
