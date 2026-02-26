"use client";

import Image from "next/image";
import { Plus } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const COMMUNITY_IMAGES = [
  { id: 1, src: "/communitypic1.png", alt: "Riders on road", initialPos: { y: "20%" }, desktopRange: [0.1, 0.3], mobileRange: [0.15, 0.35] },
  { id: 2, src: "/communitypic2.png", alt: "Group photo", initialPos: { y: "20%" }, desktopRange: [0.25, 0.45], mobileRange: [0.3, 0.5] },
  { id: 3, src: "/communitypic3.png", alt: "Bikes on road", initialPos: { scale: 0.8, opacity: 0 }, desktopRange: [0.4, 0.6], mobileRange: [0.45, 0.65] },
  { id: 4, src: "/communitypic4.png", alt: "B&W riders", initialPos: { y: "20%" }, desktopRange: [0.55, 0.75], mobileRange: [0.6, 0.8] },
  { id: 5, src: "/communitypic5.png", alt: "Meetup", initialPos: { y: "20%" }, desktopRange: [0.7, 0.9], mobileRange: [0.75, 1.0] },
];

export default function CommunitySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Desktop: text stays. Mobile: text appears then fades to make room for full-screen images.
  const textOpacity = useTransform(
    scrollYProgress,
    isMobile ? [0, 0.1, 0.2] : [0, 0.1],
    isMobile ? [0, 1, 0] : [0, 1]
  );
  
  const textY = useTransform(
    scrollYProgress,
    isMobile ? [0, 0.1, 0.2] : [0, 0.1],
    isMobile ? [20, 0, -20] : [20, 0]
  );

  return (
    <section
      ref={containerRef}
      id="community"
      className="relative h-[600vh] bg-black"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8 h-full flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center w-full">
            
            {/* Text Content */}
            <motion.div 
              style={{ opacity: textOpacity, y: textY }}
              className={`lg:col-span-12 xl:col-span-5 z-40 lg:pr-8 ${isMobile ? "absolute inset-0 flex flex-col justify-center items-center text-center px-6" : "relative"}`}
            >
              <div className={`flex items-center gap-1.5 mb-2 ${isMobile ? "justify-center" : ""}`}>
                <Plus className="h-4 w-4 text-[#E5E5E5] stroke-[3]" />
                <span className="text-xs sm:text-sm font-medium uppercase tracking-[0.5em] text-[#E5E5E5] font-inter">
                  ABOUT OUR
                </span>
              </div>
              <h2 className="text-4xl sm:text-6xl md:text-6xl mb-6 leading-none tracking-tight font-formula1-bold text-white uppercase italic">
                community
              </h2>
              <p className="text-sm sm:text-base md:text-lg leading-[1.8] text-white/80 font-medium tracking-wide font-inter max-w-xl">
                Adrenaline Adventures&apos; is an emerging Indian adventure travel company
                creating unique experiences for foreign and domestic travellers in India.
                We offer exciting type of adventure packages all designed to let
                travellers experience the rich culture of India in an adventurous way.
                Our company aims to provide unique, unforgettable travel experiences
                for adventure enthusiasts around the world.
              </p>
            </motion.div>

            {/* Images - Positioned right on desktop, transition to full screen on mobile */}
            <div className={`lg:col-span-12 xl:col-span-7 relative ${isMobile ? "h-screen w-full absolute inset-0 pt-0" : "h-[75vh] w-full"}`}>
              {COMMUNITY_IMAGES.map((img, index) => {
                const range = isMobile ? img.mobileRange : img.desktopRange;
                
                const opacity = useTransform(scrollYProgress, range, [0, 1]);
                const scale = useTransform(scrollYProgress, range, [0.9, 1]);
                
                const yInitial = img.initialPos.y || "10%";
                const y = useTransform(scrollYProgress, range, [yInitial, "0%"]);

                // "Rising stack" layout: newest (index 4) is highest, covers previous top.
                // Desktop positions within the right panel (75vh height)
                const desktopPositions = [
                  "top-[55%] left-[5%] w-[42%] aspect-[4/3]",
                  "top-[40%] right-[5%] w-[40%] aspect-[16/10]",
                  "top-[22%] left-[20%] w-[45%] aspect-square shadow-[0_45px_100px_rgba(0,0,0,0.95)] border-white/20 border-2",
                  "top-[10%] right-[12%] w-[38%] aspect-[3/4]",
                  "top-[0%] left-[35%] w-[35%] aspect-[9/12]",
                ];

                // Mobile positions (Full Screen reveal)
                const mobilePositions = [
                   "top-[60%] left-[10%] w-[75%] aspect-[4/3]",
                   "top-[45%] right-[10%] w-[70%] aspect-video",
                   "top-[30%] left-[15%] w-[65%] aspect-square border-white/20 border-1",
                   "top-[15%] left-[5%] w-[70%] aspect-[3/4]",
                   "top-[0%] right-[15%] w-[70%] aspect-[9/12]",
                ];

                return (
                  <motion.div
                    key={img.id}
                    style={{ 
                      opacity, 
                      scale, 
                      y,
                      zIndex: 10 + index * 10 // Guaranteed sequential Z order
                    }}
                    className={`absolute ${isMobile ? mobilePositions[index] : desktopPositions[index]} overflow-hidden rounded-lg shadow-2xl border border-white/5 transition-all duration-300 group`}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Background Ambient Glow */}
        <motion.div 
          style={{ opacity: useTransform(scrollYProgress, [0.1, 0.5, 0.9], [0, 0.03, 0]) }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-white rounded-full blur-[200px] -z-10" 
        />
      </div>
    </section>
  );
}
