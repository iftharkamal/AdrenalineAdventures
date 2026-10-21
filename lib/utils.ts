import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

// Teach tailwind-merge the custom type scale and radii from globals.css,
// otherwise `text-caption` is mistaken for a colour and dropped next to `text-paper`.
const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      text: [
        "caption",
        "body",
        "body-lg",
        "subheading",
        "heading-sm",
        "heading-lg",
        "display",
        "display-lg",
        "display-xl",
        "hero",
      ],
      radius: ["card", "panel"],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
