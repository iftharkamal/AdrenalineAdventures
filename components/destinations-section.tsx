"use client";

import Image from "next/image";
import { Plus } from "lucide-react";

export default function DestinationsSection() {
  return (
    <section className="bg-[#f2f1ef] text-[#1a1a1a] py-24 min-h-screen flex flex-col justify-center overflow-hidden">
      <div className="mx-auto w-full max-w-[1400px] px-6 text-center">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center justify-center gap-1.5 mb-2">
            <Plus className="h-3.5 w-3.5 text-[#1a1a1a] stroke-[3]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.4em]">
              OUR GLOBAL DESTINATIONS
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
            Your dream Destination
          </h2>
        </div>

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
