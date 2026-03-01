"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Plus } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "./ui/scroll-reveal";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen scroll-mt-24 bg-[#121212] text-white flex flex-col justify-center py-12 md:py-16 overflow-hidden"
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        {/* Text Section - Pushed to the right */}
        <div className="flex flex-col items-end mb-10 md:mb-16">
          <motion.div 
            className="max-w-2xl"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-1.5 mb-2 ">
              <Plus className="h-3.5 w-3.5 text-white/90 stroke-[3]" />
                <span className="text-[10px] sm:text-[11px] md:text-[12px] lg:text-[14px] font-medium uppercase tracking-[0.5em] text-white/90 font-inter">
                  OUR
                </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl  mb-6 md:mb-8 leading-none tracking-tight font-formula1-bold">
              Mission
            </h2>
            <div className="max-w-xl">
              <ScrollReveal  baseOpacity={0}
                enableBlur={true}
                baseRotation={0}
                blurStrength={8}
                textClassName="text-sm sm:text-base md:text-lg leading-[1.8] text-white/80 font-medium tracking-wide font-inter">
              Adrenaline Adventures is an emerging Indian adventure travel company
              creating unique experiences for foreign and domestic travellers in
              India. We offer exciting type of adventure packages all designed to
              let travellers experience the rich culture of India in an adventurous
              way. Our company aims to provide unique, unforgettable travel
              experiences for adventure enthusiasts around the world.
              </ScrollReveal>
            </div>
          </motion.div>
        </div>

        {/* Images Section */}
        {/* Images Section - Horizontal & Bottom Aligned */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-end">
          <motion.div
            className="w-full md:w-2/3"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden shadow-2xl">
              <Image
                src="/ourmission1.png"
                alt="Adventure riders group"
                fill
                className="object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-700"
                sizes="(min-width: 1024px) 70vw, 100vw"
              />
            </div>
          </motion.div>
          <motion.div
            className="w-full md:w-1/3"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden shadow-2xl">
              <Image
                src="/ourmission2.png"
                alt="Triumphant rider"
                fill
                className="object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-700"
                sizes="(min-width: 1024px) 30vw, 100vw"
              />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

