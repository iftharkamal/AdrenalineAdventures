import Image from "next/image";
import Reveal from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 bg-abyssal-ink py-20 text-paper md:py-32">
      <div className="mx-auto w-full max-w-page px-6">
        <div className="mb-16 grid gap-10 md:mb-24 md:grid-cols-2">
          <Reveal>
            <SectionLabel index="01">Our</SectionLabel>
            <h2 className="mt-6 font-display text-heading-sm md:text-heading-lg">Mission</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-body text-paper/70 md:text-body-lg md:text-paper/70">
              Adrenaline Adventures is an emerging Indian adventure travel company creating unique experiences for
              foreign and domestic travellers in India. We offer exciting type of adventure packages all designed to let
              travellers experience the rich culture of India in an adventurous way. Our company aims to provide unique,
              unforgettable travel experiences for adventure enthusiasts around the world.
            </p>
          </Reveal>
        </div>

        <div className="flex flex-col items-end gap-5 md:flex-row md:gap-6">
          <Reveal className="w-full md:w-2/3">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl">
              <Image
                src="/ourmission1.png"
                alt="Adventure riders group"
                fill
                className="object-cover grayscale transition-[filter] duration-700 hover:grayscale-0"
                sizes="(min-width: 768px) 66vw, 100vw"
              />
            </div>
          </Reveal>
          <Reveal className="w-full md:w-1/3" delay={0.15}>
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl">
              <Image
                src="/ourmission2.png"
                alt="Triumphant rider"
                fill
                className="object-cover grayscale transition-[filter] duration-700 hover:grayscale-0"
                sizes="(min-width: 768px) 33vw, 100vw"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
