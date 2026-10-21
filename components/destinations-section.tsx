import Image from "next/image";
import Reveal from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";

export default function DestinationsSection() {
  return (
    <section className="bg-bone-white pb-20 text-abyssal-ink md:pb-32">
      <div className="mx-auto w-full max-w-page px-6">
        <div className="rounded-card bg-paper p-6 md:rounded-panel md:p-10">
          <Reveal className="mb-10 md:mb-16">
            <SectionLabel index="06" tone="light">
              Our global destinations
            </SectionLabel>
            <h2 className="mt-6 font-display text-heading-sm md:text-heading-lg">Your dream Destination</h2>
          </Reveal>

          <div className="relative mx-auto aspect-[2/1] w-full">
            <Image
              src="/map.png"
              alt="World map with destination markers"
              fill
              sizes="(min-width: 1200px) 1120px, 100vw"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
