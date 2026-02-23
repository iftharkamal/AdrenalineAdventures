"use client";

import { Plus, ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const MEMBER_ITEMS = [
  {
    id: "01",
    title: "The Art of the Weekend Escape",
  },
  {
    id: "02",
    title: "Why Culture Makes Every Ride Meaningful",
  },
  {
    id: "03",
    title: "Inside the Malterra Rally: Speed Meets Soul",
  },
  {
    id: "04",
    title: "Campfire Chronicles: Where Stories Find Their Flame",
  },
];

export default function MemberSection() {
  return (
    <section className="bg-[#f2f1ef] text-[#1a1a1a] py-24 min-h-screen flex flex-col justify-center">
      <div className="mx-auto w-full max-w-[1400px] px-6">
        {/* Header Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-start">
          <div>
            <div className="flex items-center gap-1.5 mb-2">
              <Plus className="h-4 w-4 text-[#1a1a1a] stroke-[3]" />
              <span className="text-[12px] font-bold uppercase tracking-[0.4em]">
                BECOME A
              </span>
            </div>
            <h2 className="text-6xl md:text-7xl font-bold tracking-tight">
              Member
            </h2>
          </div>
          <div className="flex flex-col items-start gap-8">
            <p className="text-lg md:text-xl text-[#1a1a1a]/80 leading-relaxed font-medium">
              Become part of a growing tribe of thrill-seekers, explorers, and culture lovers
              from around the world. At Adrenaline Adventures, we're more than just a
              travel company — we're a community of passionate adventurers who believe in
              discovering India through unforgettable journeys, bold experiences, and deep
              cultural connections.
            </p>
            <Button 
              className="bg-[#1a1a1a] hover:bg-[#1a1a1a]/90 text-white rounded-md px-6 py-5 text-sm font-medium transition-all duration-300 group"
            >
              Join the Community
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* List Section */}
        <div className="border-t border-[#1a1a1a]/10">
          {MEMBER_ITEMS.map((item) => (
            <div 
              key={item.id}
              className="group border-b border-[#1a1a1a]/10 py-10 flex items-center justify-between hover:bg-black/5 transition-colors cursor-pointer px-4 -mx-4 rounded-sm"
            >
              <div className="flex items-center gap-10 md:gap-20">
                <span className="text-sm font-bold text-[#1a1a1a]/40 tracking-widest">
                  {item.id}
                </span>
                <h3 className="text-2xl md:text-4xl font-medium tracking-tight group-hover:translate-x-2 transition-transform duration-300">
                  {item.title}
                </h3>
              </div>
              <div className="h-10 w-10 md:h-12 md:w-12 border border-[#1a1a1a]/20 flex items-center justify-center rounded-sm group-hover:bg-[#1a1a1a] group-hover:border-[#1a1a1a] transition-all duration-300">
                <ArrowRight className="h-5 w-5 text-[#1a1a1a] group-hover:text-white transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
