import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import Reveal from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";

export default function WhyAdad() {
  return (
    <section className="bg-abyssal-ink px-3 py-3 md:px-6 md:py-6">
      <div className="relative flex min-h-[90vh] items-end overflow-hidden rounded-card md:rounded-panel">
        <Image src="/whyadadimg.png" alt="Adventure riders in the mountains" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-abyssal-ink/50" aria-hidden="true" />

        <div className="relative z-10 mx-auto w-full max-w-page px-6 py-16 md:py-24">
          <Reveal className="max-w-2xl">
            <SectionLabel index="03">Why</SectionLabel>
            <h2 className="mt-6 font-display text-heading-lg text-paper md:text-display">ADAD</h2>
            <p className="mb-10 mt-6 text-body text-paper/80">
              We set out to create adventure rides that truly capture the spirit of exploration — journeys that reflect
              our passion for the open road and the world beyond it. Each route is designed in collaboration with expert
              local guides to bring out the culture, challenge, and character of every destination.
            </p>
            <Link href="/about-us" className="inline-flex items-center gap-1">
              <span className={buttonVariants({ variant: "inverse" })}>Find out more</span>
              <span className={buttonVariants({ variant: "accent", size: "icon" })}>
                <ArrowRight />
              </span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
