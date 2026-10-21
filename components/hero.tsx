"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-abyssal-ink">
      <Image
        src="/landingImage.png"
        alt="Cyclists riding on a trail at sunset"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-abyssal-ink/45" aria-hidden="true" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-page flex-col justify-between px-6 pb-10 pt-36 md:pb-12 md:pt-44">
        <motion.h1
          className="max-w-5xl font-display text-[52px] leading-none tracking-[-0.02em] text-paper sm:text-heading-lg md:text-display lg:text-display-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          This is ADAD.
        </motion.h1>

        <motion.div
          className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="max-w-md text-body-lg text-paper">Born from the spirit of exploration.</p>
          <a href="#about" className="flex items-center gap-1" aria-label="Discover ADAD">
            <span className={buttonVariants({ variant: "outline", className: "bg-abyssal-ink/60 backdrop-blur-md" })}>
              Discover ADAD
            </span>
            <span className={buttonVariants({ variant: "accent", size: "icon" })}>
              <ArrowRight />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
