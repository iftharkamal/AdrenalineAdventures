import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        formula1: ["var(--font-formula1)", "sans-serif"],
        "formula1-bold": ["var(--font-formula1-bold)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
        "encode-sans-expanded": ["var(--font-encode-sans-expanded)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;

