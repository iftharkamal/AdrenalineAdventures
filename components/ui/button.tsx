import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-lg font-mono text-caption uppercase transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-night disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // Dark fill, for light canvases
        solid: "bg-ink text-paper hover:bg-ink/80",
        // Light fill, for dark canvases
        inverse: "bg-cream text-ink hover:bg-paper",
        // Hairline ghost on dark canvases
        outline: "border border-line text-paper hover:border-paper",
        // Hairline ghost on light canvases
        "outline-ink": "border border-line text-ink hover:border-ink",
        // Orange arrow square, the only filled accent shape
        accent: "bg-accent text-ink hover:bg-accent/85",
      },
      size: {
        default: "h-10 px-4",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "solid",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<"button"> & VariantProps<typeof buttonVariants>) {
  return <button data-slot="button" className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}

export { Button, buttonVariants };
