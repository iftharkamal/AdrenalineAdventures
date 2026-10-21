"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { SectionLabel } from "@/components/ui/section-label";

const COMMUNITY_IMAGES = [
  { id: 1, src: "/communitypic1.png", alt: "Riders on road", desktopRange: [0.1, 0.3], mobileRange: [0.15, 0.35] },
  { id: 2, src: "/communitypic2.png", alt: "Group photo", desktopRange: [0.25, 0.45], mobileRange: [0.3, 0.5] },
  { id: 3, src: "/communitypic3.png", alt: "Bikes on road", desktopRange: [0.4, 0.6], mobileRange: [0.45, 0.65] },
  { id: 4, src: "/communitypic4.png", alt: "B&W riders", desktopRange: [0.55, 0.75], mobileRange: [0.6, 0.8] },
  { id: 5, src: "/communitypic5.png", alt: "Meetup", desktopRange: [0.7, 0.9], mobileRange: [0.75, 1.0] },
];

// Stacked cards, each rising into place as the section scrolls
const DESKTOP_STACK = [
  "w-[70%] aspect-[4/3] -rotate-3",
  "w-[70%] aspect-[4/3] rotate-2",
  "w-[62%] aspect-square -rotate-1",
  "w-[56%] aspect-[3/4] rotate-3",
  "w-[52%] aspect-[3/4] rotate-1",
];

const MOBILE_STACK = [
  "w-[85%] aspect-[4/3] -rotate-2",
  "w-[80%] aspect-video rotate-1",
  "w-[75%] aspect-square -rotate-1",
  "w-[70%] aspect-[3/4] rotate-2",
  "w-[65%] aspect-[3/4] -rotate-1",
];

function StackedImage({
  image,
  index,
  isMobile,
  progress,
}: {
  image: (typeof COMMUNITY_IMAGES)[number];
  index: number;
  isMobile: boolean;
  progress: MotionValue<number>;
}) {
  const range = isMobile ? image.mobileRange : image.desktopRange;
  const opacity = useTransform(progress, range, [0, 1]);
  const scale = useTransform(progress, range, [0.92, 1]);
  const y = useTransform(progress, range, ["20%", "0%"]);

  return (
    <motion.div
      style={{ opacity, scale, y, zIndex: 10 + index * 10 }}
      className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl border border-graphite ${
        isMobile ? MOBILE_STACK[index] : DESKTOP_STACK[index]
      }`}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="(min-width: 1024px) 50vw, 85vw"
        className="object-cover grayscale transition-[filter] duration-700 hover:grayscale-0"
      />
    </motion.div>
  );
}

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
  const textY = useTransform(scrollYProgress, isMobile ? [0, 0.1, 0.2] : [0, 0.1], isMobile ? [20, 0, -20] : [20, 0]);

  return (
    <section ref={containerRef} id="community" className="relative h-[600vh] bg-abyssal-ink text-paper">
      <div className="sticky top-0 flex h-screen w-full items-center overflow-hidden">
        <div className="mx-auto flex h-full w-full max-w-page items-center px-6">
          <div className="grid w-full grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-16">
            <motion.div
              style={{ opacity: textOpacity, y: textY }}
              className={`z-40 lg:col-span-5 ${
                isMobile ? "absolute inset-0 flex flex-col items-center justify-center px-6 text-center" : "relative"
              }`}
            >
              <SectionLabel index="04">About our</SectionLabel>
              <h2 className="mb-6 mt-6 font-display text-heading-sm md:text-heading-lg">Community</h2>
              <p className="max-w-xl text-body text-paper/70">
                Adrenaline Adventures&apos; is an emerging Indian adventure travel company creating unique experiences
                for foreign and domestic travellers in India. We offer exciting type of adventure packages all designed
                to let travellers experience the rich culture of India in an adventurous way. Our company aims to
                provide unique, unforgettable travel experiences for adventure enthusiasts around the world.
              </p>
            </motion.div>

            <div className={`relative lg:col-span-7 ${isMobile ? "absolute inset-0 h-screen w-full" : "h-[75vh] w-full"}`}>
              {COMMUNITY_IMAGES.map((image, index) => (
                <StackedImage
                  key={image.id}
                  image={image}
                  index={index}
                  isMobile={isMobile}
                  progress={scrollYProgress}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
