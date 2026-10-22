import Link from "next/link";
import { CtaButtonContent, ctaButtonClass } from "@/components/ui/cta-button";
import HoverFillRow, { HoverFillArrow } from "@/components/ui/hover-fill-row";
import Reveal from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";

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
    <section className="bg-stone py-20 text-ink md:py-32">
      <div className="mx-auto w-full max-w-page px-6">
        <div className="mb-16 grid grid-cols-1 items-start gap-10 md:mb-24 md:grid-cols-2">
          <Reveal>
            <SectionLabel index="05" tone="light">
              Become a
            </SectionLabel>
            <h2 className="mt-6 font-display text-heading-sm md:text-heading-lg">Member</h2>
          </Reveal>
          <Reveal className="flex flex-col items-start gap-8" delay={0.1}>
            <p className="text-body text-ink/70">
              Become part of a growing tribe of thrill-seekers, explorers, and culture lovers from around the world. At
              Adrenaline Adventures, we&apos;re more than just a travel company — we&apos;re a community of passionate
              adventurers who believe in discovering India through unforgettable journeys, bold experiences, and deep
              cultural connections.
            </p>
            <Link href="/contact-us" className={ctaButtonClass}>
              <CtaButtonContent>Join the community</CtaButtonContent>
            </Link>
          </Reveal>
        </div>

        <ul className="border-t border-ink/10">
          {MEMBER_ITEMS.map((item, index) => (
            <li key={item.id} className="border-b border-ink/10">
              <Reveal delay={index * 0.08}>
                <HoverFillRow className="flex items-center justify-between gap-6 px-4 py-8 md:gap-12 md:px-8 md:py-10">
                  {/* Right padding reserves room for the title's hover shift so it never meets the arrow */}
                  <div className="flex min-w-0 flex-1 items-center gap-6 pr-6 md:gap-16 md:pr-8">
                    <span className="shrink-0 rounded-full border border-line px-2.5 py-1 font-mono text-caption text-ink/70 transition-colors duration-500 group-hover:border-paper/30 group-hover:text-paper/70">
                      {item.id}
                    </span>
                    <h3 className="min-w-0 font-display text-subheading transition-[color,translate] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-6 group-hover:text-paper md:text-heading-sm md:group-hover:translate-x-8">
                      {item.title}
                    </h3>
                  </div>
                  <HoverFillArrow />
                </HoverFillRow>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
