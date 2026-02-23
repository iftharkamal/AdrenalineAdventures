"use client";

import Image from "next/image";
import { Plus, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

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
      <div className="relative z-20 h-full mx-auto max-w-[1400px] px-6 flex flex-col justify-center">
        <div className="max-w-3xl">
          <div className="flex items-center gap-1.5 mb-2">
            <Plus className="h-3.5 w-3.5 text-white stroke-[3]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-white">
              WHY
            </span>
          </div>
          <h2 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter">
            ADAD
          </h2>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl mb-10 font-medium">
            We set out to create adventure rides that truly capture the spirit of exploration — 
            journeys that reflect our passion for the open road and the world beyond it. 
            Each route is designed in collaboration with expert local guides to bring out the culture, 
            challenge, and character of every destination.
          </p>
          <Button 
            className="bg-white hover:bg-white/90 text-black px-8 py-6 rounded-none text-base font-bold transition-all duration-300 group"
          >
            Find Out More
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>

      {/* Bottom Vignette/Gradient Effect */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent z-15" />
    </section>
  );
}
