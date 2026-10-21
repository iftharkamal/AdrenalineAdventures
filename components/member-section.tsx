import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
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
    <section className="bg-bone-white py-20 text-abyssal-ink md:py-32">
      <div className="mx-auto w-full max-w-page px-6">
        <div className="mb-16 grid grid-cols-1 items-start gap-10 md:mb-24 md:grid-cols-2">
          <Reveal>
            <SectionLabel index="05" tone="light">
              Become a
            </SectionLabel>
            <h2 className="mt-6 font-display text-heading-sm md:text-heading-lg">Member</h2>
          </Reveal>
          <Reveal className="flex flex-col items-start gap-8" delay={0.1}>
            <p className="text-body text-graphite">
              Become part of a growing tribe of thrill-seekers, explorers, and culture lovers from around the world. At
              Adrenaline Adventures, we&apos;re more than just a travel company — we&apos;re a community of passionate
              adventurers who believe in discovering India through unforgettable journeys, bold experiences, and deep
              cultural connections.
            </p>
            <Link href="/contact-us" className="inline-flex items-center gap-1">
              <span className={buttonVariants({ variant: "solid" })}>Join the community</span>
              <span className={buttonVariants({ variant: "accent", size: "icon" })}>
                <ArrowRight />
              </span>
            </Link>
          </Reveal>
        </div>

        <ul className="border-t border-lichen">
          {MEMBER_ITEMS.map((item, index) => (
            <li key={item.id} className="border-b border-lichen">
              <Reveal delay={index * 0.08}>
                <div className="group flex items-center justify-between gap-6 py-8 md:py-10">
                  <div className="flex items-center gap-6 md:gap-16">
                    <span className="rounded-full border border-graphite px-2.5 py-1 font-mono text-caption text-graphite">
                      {item.id}
                    </span>
                    <h3 className="font-display text-subheading transition-transform duration-300 group-hover:translate-x-2 md:text-heading-sm">
                      {item.title}
                    </h3>
                  </div>
                  <span className={buttonVariants({ variant: "accent", size: "icon" })} aria-hidden="true">
                    <ArrowRight />
                  </span>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
