"use client";

import Image from "next/image";
import { Plus } from "lucide-react";
import { motion } from "framer-motion";

export default function DestinationsSection() {
  return (
    <section className="bg-[#f2f1ef] text-[#1a1a1a] py-12 md:py-16 min-h-screen flex flex-col justify-center overflow-hidden">
      <div className="mx-auto w-full max-w-6xl px-6 text-center">
        {/* Header */}
        <motion.div 
          className="mb-10 md:mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-1.5 mb-2">
            <Plus className="h-3.5 w-3.5 text-[#1a1a1a] stroke-[3]" />
            <span className="text-[10px] sm:text-[11px] md:text-[12px] lg:text-[14px] font-medium uppercase tracking-[0.5em] font-inter text-[#1a1a1a]">
              OUR GLOBAL DESTINATIONS
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl mb-6 md:mb-8 leading-none tracking-tight font-formula1-bold">
            Your dream Destination
          </h2>
        </motion.div>

        {/* Map Image */}
        <div className="relative w-full aspect-[2/1] max-w-5xl mx-auto">
          <Image
            src="/map.png"
            alt="World map with destination markers"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
