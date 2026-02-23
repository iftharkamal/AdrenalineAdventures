"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Plus } from "lucide-react";

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="min-h-screen scroll-mt-28 bg-[#121212] text-white flex flex-col justify-center py-24 overflow-hidden"
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        {/* Text Section - Pushed to the right */}
        <div className="flex flex-col items-end mb-16 md:mb-24">
          <div className="max-w-2xl">
            <div className="flex items-center gap-1.5 mb-2">
              <Plus className="h-3.5 w-3.5 text-white/90 stroke-[3]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-white/90">
                OUR
              </span>
            </div>
            <h2 className="text-5xl md:text-[64px] font-bold mb-8 leading-none tracking-tight">
              Mission
            </h2>
            <div className="max-w-xl">
              <p className="text-sm md:text-[16px] leading-[1.6] text-white/85 font-normal tracking-wide">
                Adrenaline Adventures is an emerging Indian adventure travel company
                creating unique experiences for foreign and domestic travellers in
                India. We offer exciting type of adventure packages all designed to
                let travellers experience the rich culture of India in an adventurous
                way. Our company aims to provide unique, unforgettable travel
                experiences for adventure enthusiasts around the world.
              </p>
            </div>
          </div>
        </div>

        {/* Images Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start">
          <div
            className={`md:col-span-8 transition-all duration-1000 ease-out transform ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-full opacity-0"
            }`}
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden shadow-2xl">
              <Image
                src="/motorcycle_group_bw.png"
                alt="Adventure riders group"
                fill
                className="object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-700"
                sizes="(min-width: 1024px) 70vw, 100vw"
              />
            </div>
          </div>
          <div
            className={`md:col-span-4 transition-all duration-1000 ease-out delay-300 transform ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
            }`}
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden shadow-2xl mt-8 md:mt-32">
              <Image
                src="/rider_fist_raised_bw.png"
                alt="Triumphant rider"
                fill
                className="object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-700"
                sizes="(min-width: 1024px) 30vw, 100vw"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

