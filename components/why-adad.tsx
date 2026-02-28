"use client";

import Image from "next/image";
import { Plus, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function WhyAdad() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/whyadadimg.png"
          alt="Adventure riders in the mountains"
          fill
          className="object-cover"
          priority
        />
        {/* Subtle Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/20 z-10" />
      </div>

      {/* Text Content */}
      <div className="relative z-20 h-full mx-auto max-w-6xl px-6 flex flex-col justify-center py-12 md:py-16">
        <motion.div 
          className="max-w-3xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-1.5 mb-2">
            <Plus className="h-3.5 w-3.5 text-white stroke-[3]" />
            <span className="text-[10px] sm:text-[11px] md:text-[12px] lg:text-[14px] font-medium uppercase tracking-[0.5em] text-white font-inter">
              WHY
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl mb-6 md:mb-8 leading-none tracking-tight font-formula1-bold text-white uppercase">
            ADAD
          </h2>
          <p className="text-sm sm:text-base md:text-lg leading-[1.8] text-white/80 font-medium tracking-wide font-inter max-w-xl mb-10">
            We set out to create adventure rides that truly capture the spirit of exploration — 
            journeys that reflect our passion for the open road and the world beyond it. 
            Each route is designed in collaboration with expert local guides to bring out the culture, 
            challenge, and character of every destination.
          </p>
          <Button 
            className="bg-white hover:bg-white/90 text-black px-8 py-6 rounded-md text-base  transition-all duration-300 group"
          >
            Find Out More
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>

      {/* Bottom Vignette/Gradient Effect */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent z-15" />
    </section>
  );
}
