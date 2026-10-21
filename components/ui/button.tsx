import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-lg font-mono text-caption uppercase transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-bioluminescent-lime focus-visible:ring-offset-2 focus-visible:ring-offset-abyssal-ink disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // Dark fill, for light canvases
        solid: "bg-abyssal-ink text-paper hover:bg-graphite",
        // Light fill, for dark canvases
        inverse: "bg-paper text-abyssal-ink hover:bg-bone-white",
        // Hairline ghost on dark canvases
        outline: "border border-graphite text-paper hover:border-paper",
        // Hairline ghost on light canvases
        "outline-ink": "border border-graphite text-abyssal-ink hover:border-abyssal-ink",
        // Lime arrow square, the only filled accent shape
        accent: "bg-bioluminescent-lime text-abyssal-ink hover:bg-paper",
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
