"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Plus } from "lucide-react";

const COMMUNITY_IMAGES = [
  { id: 1, src: "/communitypic1.png", side: "left", delay: 0 },
  { id: 2, src: "/communitypic2.png", side: "center", delay: 200 },
  { id: 3, src: "/communitypic3.png", side: "right", delay: 400 },
  { id: 4, src: "/communitypic4.png", side: "left", delay: 100 },
  { id: 5, src: "/communitypic5.png", side: "right", delay: 300 },
];

export default function CommunitySection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="community"
      className="min-h-screen bg-black text-white py-24 flex flex-col justify-center overflow-hidden"
    >
      <div className="mx-auto w-full max-w-[1400px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Text Content */}
          <div className="lg:col-span-5 z-20">
            <div className="flex items-center gap-1.5 mb-2">
              <Plus className="h-3.5 w-3.5 text-white/90 stroke-[3]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-white/90">
                ABOUT OUR
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter uppercase italic">
              community
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-white/70 max-w-xl">
              Adrenaline Adventures' is an emerging Indian adventure travel company
              creating unique experiences for foreign and domestic travellers in India.
              We offer exciting type of adventure packages all designed to let
              travellers experience the rich culture of India in an adventurous way.
              Our company aims to provide unique, unforgettable travel experiences
              for adventure enthusiasts around the world.
            </p>
          </div>

          {/* Image Grid */}
          <div className="lg:col-span-7 relative min-h-[600px] md:min-h-[800px] mt-12 lg:mt-0">
            {/* Top Right - Group Photo (communitypic2) */}
            <div 
              className={`absolute top-0 right-0 w-[65%] aspect-[4/3] z-10 transition-all duration-1000 ease-out ${
                isVisible ? "translate-x-0 opacity-100" : "translate-x-1/2 opacity-0"
              }`}
            >
              <Image
                src="/communitypic2.png"
                alt="Community event"
                fill
                className="object-cover rounded-sm shadow-2xl"
              />
            </div>

            {/* Middle Left - B&W Road Group (communitypic1) - The "Sticky/Center" one? 
                Actually the user said "center image will be stick there". 
                I'll assume the most 'centered' or 'base' image is the one that stays.
                In the reference, the bikes on road (pic3) or the large B&W (pic1) could be it.
                I'll make the bikes on road (pic3) the 'base' one.
            */}
            <div 
              className={`absolute top-[25%] -left-12 w-[65%] aspect-[16/9] z-20 transition-all duration-1000 ease-out delay-100 ${
                isVisible ? "translate-x-0 opacity-100" : "-translate-x-1/2 opacity-0"
              }`}
            >
              <Image
                src="/communitypic1.png"
                alt="Community riders"
                fill
                className="object-cover rounded-sm shadow-xl grayscale"
              />
            </div>

            {/* Middle Center/Right - Bikes on Road (communitypic3) - "Stick" there */}
            <div 
              className={`absolute top-[40%] right-[5%] w-[55%] aspect-[16/10] z-10 transition-all duration-1000 ease-out ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            >
              <Image
                src="/communitypic3.png"
                alt="Community ride"
                fill
                className="object-cover rounded-sm shadow-2xl"
              />
            </div>

            {/* Bottom Left - B&W Group with bikes (communitypic4) */}
            <div 
              className={`absolute bottom-[5%] -left-4 w-[50%] aspect-square z-30 transition-all duration-1000 ease-out delay-300 ${
                isVisible ? "translate-x-0 opacity-100" : "-translate-x-1/4 opacity-0"
              }`}
            >
              <Image
                src="/communitypic4.png"
                alt="Community group"
                fill
                className="object-cover rounded-sm shadow-xl grayscale"
              />
            </div>

            {/* Bottom Right - B&W Bikes in Parking (communitypic5) */}
            <div 
              className={`absolute bottom-[0%] right-0 w-[55%] aspect-[3/4] z-20 transition-all duration-1000 ease-out delay-400 ${
                isVisible ? "translate-x-0 opacity-100" : "translate-x-1/4 opacity-0"
              }`}
            >
              <Image
                src="/communitypic5.png"
                alt="Community meetup"
                fill
                className="object-cover rounded-sm shadow-lg grayscale"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
