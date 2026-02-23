"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";
import { Plus, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const EVENTS = [
  {
    id: 1,
    title: "WEEKEND ESCAPE",
    category: "One Day / Group Bike Ride",
    image: "/eventcard1.png",
  },
  {
    id: 2,
    title: "MALTERRA RALLY",
    category: "One Day / Car Rally",
    image: "/eventcard2.png",
  },
  {
    id: 3,
    title: "GO HIKE",
    category: "Multi- Day / Hiking Camp",
    image: "/eventcard3.png",
  },
  {
    id: 4,
    title: "COASTAL RIDE",
    category: "Two Day / Solo Ride",
    image: "/eventcard1.png",
  },
  {
    id: 5,
    title: "HIMALAYAN PASS",
    category: "Five Day / Expedition",
    image: "/eventcard2.png",
  },
];

export default function FeaturedEvents() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = useCallback(() => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      const progress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
      setScrollProgress(progress);
    }
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, [handleScroll]);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-[#f2f1ef] min-h-screen flex flex-col justify-center py-24 text-[#1a1a1a]">
      <div className="mx-auto w-full max-w-[1400px] px-6">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-1.5 mb-2">
            <Plus className="h-3.5 w-3.5 text-[#1a1a1a] stroke-[3]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.4em]">
              EXPLORE OUR
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Featured Events
          </h2>
          <p className="max-w-2xl text-lg text-[#1a1a1a]/70 leading-relaxed">
            Adventures that spark your spirit from quick rides to multi-day journeys, each experience blends thrill, culture, and community. More than trips, they're stories you'll carry forever.
          </p>
        </div>

        {/* Scroll Container */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth pb-12 snap-x snap-mandatory"
        >
          {EVENTS.map((event) => (
            <div 
              key={event.id}
              className="min-w-full md:min-w-[calc(33.333%-16px)] snap-start group"
            >
              <div className="relative bg-[#1a1a1a] p-3 rounded-sm aspect-[4/5] overflow-hidden flex flex-col">
                <div className="relative flex-1 overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                
                <div className="mt-6 px-2 flex justify-between items-end pb-4">
                  <div>
                    <span className="text-[10px] font-bold text-white/60 block mb-1 uppercase tracking-wider">
                      {event.category}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-white leading-none">
                      {event.title}
                    </h3>
                  </div>
                  <button className="bg-white/10 hover:bg-white/20 p-2 border border-white/20 transition-colors">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Navigation */}
        <div className="flex flex-col md:flex-row items-end md:items-center gap-8 md:gap-12 mt-4">
          <div className="flex gap-4">
            <button 
              onClick={() => scroll("left")}
              className="h-14 w-14 flex items-center justify-center border border-[#1a1a1a]/10 hover:bg-[#1a1a1a] hover:text-white transition-all duration-300"
              aria-label="Previous cards"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button 
              onClick={() => scroll("right")}
              className="h-14 w-14 flex items-center justify-center border border-[#1a1a1a]/10 hover:bg-[#1a1a1a] hover:text-white transition-all duration-300"
              aria-label="Next cards"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
          
          <div className="flex-1 h-[2px] bg-[#1a1a1a]/10 relative w-full overflow-hidden">
            <div 
              className="absolute h-full bg-[#1a1a1a] transition-all duration-300 linear"
              style={{ 
                left: 0, 
                width: `${Math.max(20, scrollProgress)}%` 
              }}
            />
          </div>
        </div>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
