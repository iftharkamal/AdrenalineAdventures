"use client";

import Image from "next/image";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Footer from "@/components/footer";
import { SectionLabel } from "@/components/ui/section-label";
import { cn } from "@/lib/utils";

const stats = [
  { number: "1000+", label: "Riders & Explorers" },
  { number: "50+", label: "Curated Rides" },
  { number: "25+", label: "Destinations" },
  { number: "100+", label: "Evenings Shared" },
];

const whatWeDo = [
  "Craft one-day escapes and multi-day expeditions across India",
  "Blend adventure and culture for a complete travel experience",
  "Build a community of riders, drivers, and explorers",
  "Focus on safety, authenticity, and storytelling in every trip",
];

const faqs = [
  "Why does every journey feel better with a tribe..?",
  "How does travel shape your mindset?",
  "Why is hiking the best way to reconnect with yourself?",
  "Have you ever watched the stars without your phone?",
];

export default function AboutUsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <main className="bg-abyssal-ink">
      {/* ==================== SECTION 1: Intro on light canvas ==================== */}
      <section className="bg-bone-white pb-6 pt-36 text-abyssal-ink md:pb-6 md:pt-48">
        <div className="mx-auto w-full max-w-page px-6">
          <h1 className="font-display text-heading-lg md:text-display-lg">About us.</h1>

          <div className="mt-16 grid gap-10 md:mt-24 md:grid-cols-[1fr_2fr]">
            <SectionLabel index="01" tone="light">
              Who we are
            </SectionLabel>
            <div className="space-y-6 text-body text-graphite">
              <p>
                At Adrenaline Adventures, we believe true luxury lies in experiences that are rare, unforgettable, and
                shared with the right people. We are more than an adventure company — we are a community of explorers
                who value both the thrill of the unknown and the elegance of a well- curated journey.
              </p>
              <p>
                Our expeditions are crafted with precision and passion, offering everything from exclusive motorcycle
                rides and elite car rallies to bespoke camping retreats, treks, and wilderness escapes. Each plan is
                designed to be distinctive and immersive, ensuring that no two adventures are ever alike.
              </p>
              <p>
                What sets us apart is our unwavering commitment to quality, safety, and originality. Every journey is
                meticulously designed — from the routes we choose to the moments we create — blending the spirit of
                adventure with a refined sense of belonging. For us, the destination matters, but the shared experience
                of the journey matters more.
              </p>
              <p>
                Our vision goes beyond the present. We are continuously exploring new frontiers, bringing innovative and
                one-of-a-kind adventures to our members. With each step, we push boundaries while staying true to our
                ethos: adventure should be bold, different, and deeply personal.
              </p>
            </div>
          </div>
        </div>

        {/* Photo panel */}
        <div className="mt-20 px-3 md:mt-32 md:px-6">
          <div className="relative flex min-h-[80vh] items-end overflow-hidden rounded-card md:rounded-panel">
            <Image
              src="/aboutuspic1.png"
              alt="Adventure group at sunset"
              fill
              sizes="100vw"
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-abyssal-ink/45" aria-hidden="true" />
            <div className="relative z-10 mx-auto flex w-full max-w-page justify-end px-6 py-12 md:py-20">
              <p className="max-w-xl text-body-lg text-paper">
                At Adrenaline Adventures, you don&apos;t just take part in activities — you become part of a
                distinguished circle of like-minded individuals, united by the spirit of discovery, camaraderie, and the
                pursuit of the extraordinary.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 2: Stats ==================== */}
      <section className="bg-bone-white pb-20 pt-6 md:pb-32">
        <div className="mx-auto grid w-full max-w-page grid-cols-2 gap-3 px-6 md:grid-cols-4 md:gap-5">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-6 rounded-card bg-paper p-6 md:p-8">
              <span className="font-display text-heading-sm text-abyssal-ink md:text-heading-lg">{stat.number}</span>
              <span className="font-mono text-caption uppercase text-graphite">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== SECTION 3: Why Join ==================== */}
      <section className="py-20 text-paper md:py-32">
        <div className="mx-auto grid w-full max-w-page gap-10 px-6 md:grid-cols-[1fr_2fr]">
          <SectionLabel index="02">Why join</SectionLabel>
          <div>
            <h2 className="font-display text-heading-sm md:text-heading-lg">Why Join Adrenaline Adventures?</h2>
            <p className="mt-8 text-body text-paper/70">
              Because adventure is better when it&apos;s shared.
              <br />
              With us, it&apos;s not just about the route or the destination — it&apos;s about the people you meet, the
              stories you create, and the memories that stay long after the journey ends. Every ride, rally, hike, or camp
              is crafted for thrill-seekers who value connection as much as the experience itself. From handpicked routes
              and expert coordination to finish-line celebrations and nights filled with music, laughter, and shared
              moments — we make sure your adventure feels like it was made just for you.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 4: What We Do ==================== */}
      <section className="pb-20 text-paper md:pb-32">
        <div className="mx-auto grid w-full max-w-page gap-10 border-t border-graphite px-6 pt-20 md:grid-cols-[1fr_2fr] md:pt-32">
          <SectionLabel index="03">What we do</SectionLabel>
          <ul className="space-y-5">
            {whatWeDo.map((item) => (
              <li key={item} className="flex items-start gap-4 text-body-lg">
                <span className="mt-3 size-1.5 shrink-0 rounded-full bg-bioluminescent-lime" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ==================== SECTION 5: FAQ Accordion ==================== */}
      <section className="pb-20 text-paper md:pb-32">
        <div className="mx-auto grid w-full max-w-page gap-10 px-6 md:grid-cols-[1fr_2fr]">
          <SectionLabel index="04">Questions</SectionLabel>
          <div className="border-t border-graphite">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={faq} className="border-b border-graphite">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="group flex w-full items-center justify-between gap-6 py-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-body-lg text-paper/80 transition-colors group-hover:text-paper">{faq}</span>
                    <span
                      className={cn(
                        "flex size-10 shrink-0 items-center justify-center rounded-lg border transition-colors",
                        isOpen
                          ? "border-bioluminescent-lime bg-bioluminescent-lime text-abyssal-ink"
                          : "border-graphite text-paper group-hover:border-paper"
                      )}
                    >
                      {isOpen ? <Minus className="size-4" /> : <Plus className="size-4" />}
                    </span>
                  </button>
                  <div
                    className={cn(
                      "overflow-hidden transition-all duration-300 ease-in-out",
                      isOpen ? "max-h-40 pb-6" : "max-h-0"
                    )}
                  >
                    <p className="max-w-2xl text-body text-paper/60">
                      Every journey with Adrenaline Adventures is designed to ignite your spirit and connect you with a
                      community that shares your passion for discovery and the extraordinary.
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
