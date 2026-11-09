"use client";

import Image from "next/image";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Footer from "@/components/footer";
import { BlockText, RiseText } from "@/components/ui/intro-text";
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

// The first paragraph of each answer is shown as a lead line.
const faqs = [
  {
    question: "How Does Travel Shape Your Mindset?",
    answer: [
      "Travel doesn't just change the places you see. It changes the way you see the world.",
      "Every journey introduces us to something unfamiliar — new landscapes, different cultures, unexpected experiences, and perspectives beyond our everyday lives. Somewhere between leaving our comfort zones and embracing the unknown, we begin to discover a different version of ourselves.",
      "Travel teaches us to be adaptable, patient, open-minded, and curious. It reminds us that not everything goes according to plan, and sometimes the most beautiful experiences come from the unexpected detours.",
      "Whether navigating unfamiliar mountain roads, pushing through a challenging hiking trail, or connecting with people from different walks of life, every experience offers a lesson that stays with us long after we return home.",
      "At Adrenaline Adventures, we believe travel is more than exploring destinations. It is about challenging limitations, embracing new perspectives, and discovering possibilities beyond our comfort zones.",
      "Our motorcycle journeys, hiking expeditions, camping escapes, and group adventures bring people closer to nature, different cultures, and themselves.",
      "You learn to appreciate the little things, find confidence in unfamiliar situations, and understand that the world is much bigger than the boundaries of your everyday routine.",
      "Because sometimes, the greatest destination isn't a place on the map. It's the person you become along the way.",
    ],
  },
  {
    question: "Why Does Every Journey Feel Better With a Tribe?",
    answer: [
      "Because the best journeys are not just about the places we discover, but the people we meet along the way.",
      "There is something special about exploring the world with people who share the same passion for adventure. The excitement of an open road, the challenge of an unfamiliar trail, the warmth of a campfire, and the joy of discovering new places become even more meaningful when experienced together.",
      "A journey that begins with strangers often turns into a collection of unforgettable memories, genuine friendships, and connections that last far beyond the destination.",
      "At Adrenaline Adventures, we believe adventure is more than travelling from one place to another. It is about bringing together riders, hikers, road-trippers, and explorers who share a common desire to experience life beyond the ordinary.",
      "From motorcycle journeys across breathtaking landscapes to hiking expeditions, camping escapes, and offbeat road trips, every experience is an opportunity to explore, connect, and discover something new.",
      "We celebrate the little moments just as much as the big adventures — spontaneous conversations, unexpected detours, shared laughter, music nights, and stories around the campfire. Because these are the moments that turn an ordinary trip into an extraordinary experience.",
      "We are not just creating travel experiences. We are building a community where strangers become friends, experiences become stories, and every journey brings us a little closer.",
    ],
  },
  {
    question: "Have You Ever Watched the Stars Without Your Phone?",
    answer: [
      "Sometimes, the most beautiful moments happen when we put our screens away and simply look up.",
      "We live in a world where almost every moment is captured, shared, and consumed through a screen. We photograph sunsets, record experiences, and scroll through countless images of places we dream of visiting. But when was the last time you simply stopped and experienced a moment without reaching for your phone?",
      "Imagine sitting beneath an open sky, surrounded by mountains, listening to the sounds of nature, with thousands of stars illuminating the darkness. No notifications, no deadlines, no distractions. Just you, the night sky, and the quiet beauty of being present.",
      "There is something extraordinary about disconnecting from the digital world and reconnecting with the natural one. The silence feels different, conversations become deeper, and even the simplest moments begin to mean more.",
      "At Adrenaline Adventures, we believe adventure is also about discovering these little moments. Through our camping escapes, hiking expeditions, and outdoor experiences, we encourage people to step away from their routines and embrace the beauty of the world around them.",
      "Sometimes, the best memories aren't the ones stored in your phone gallery. They are the ones you carry within you.",
      "So, the next time you find yourself beneath a sky full of stars, put your phone away. Look up. Take a deep breath. And let the moment be yours.",
    ],
  },
  {
    question: "Why Is Hiking the Best Way to Reconnect With Yourself?",
    answer: [
      "Sometimes, the best way to find yourself is to get lost in nature.",
      "In a world that rarely slows down, we often forget to pause, breathe, and appreciate the moment. Between daily routines, endless notifications, and constant responsibilities, we gradually lose touch with the simplest things that make us feel alive.",
      "Hiking offers a chance to step away from all of that.",
      "With every step along a forest trail, every breath of fresh mountain air, and every viewpoint that unfolds before you, something begins to change. The noise fades, the mind becomes clearer, and you start noticing things you might have overlooked in everyday life.",
      "Hiking teaches patience, builds resilience, and reminds us that meaningful experiences often come from taking things one step at a time. The challenging climbs, unexpected trails, and moments of silence become opportunities to discover your own strength.",
      "But hiking is not always about walking alone. Sharing trails, stories, laughter, and beautiful landscapes with like-minded explorers makes the experience even more meaningful.",
      "At Adrenaline Adventures, through our GoHike experiences, we bring people closer to nature through curated hiking adventures, outdoor exploration, and meaningful connections.",
      "Because sometimes, you don't need another escape. You just need a trail, a little fresh air, and the freedom to rediscover yourself.",
    ],
  },
];

export default function AboutUsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <main className="bg-night">
      {/* ==================== SECTION 1: Intro on light canvas ==================== */}
      <section className="bg-stone pb-6 pt-28 text-ink md:pb-6 md:pt-32">
        <div className="mx-auto w-full max-w-page px-6">
          <h1 className="font-display text-heading-lg md:text-display-lg">
            <RiseText text="About us." />
          </h1>

          <div className="mt-10 grid gap-10 md:mt-12 md:grid-cols-[1fr_2fr]">
            <SectionLabel index="01" tone="light">
              Who we are
            </SectionLabel>
            <div className="space-y-6 text-body text-ink/70">
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
            <div className="absolute inset-0 bg-night/45" aria-hidden="true" />
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
      <section className="bg-stone pb-20 pt-6 md:pb-32">
        <div className="mx-auto grid w-full max-w-page grid-cols-2 gap-3 px-6 md:gap-5 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="@container flex flex-col gap-6 rounded-card bg-paper p-5 sm:p-6 md:p-8">
              {/* Sized to the card (cqi) so the widest figure, "1000+", always fits, capped at heading-lg */}
              <span className="font-display text-[clamp(24px,26cqi,58px)] leading-[1.1] tracking-[-0.012em] text-ink">
                <RiseText text={stat.number} />
              </span>
              <span className="font-mono text-caption uppercase text-ink/70">
                <BlockText text={stat.label} />
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== SECTION 3: Why Join ==================== */}
      <section className="py-20 text-paper md:py-32">
        <div className="mx-auto grid w-full max-w-page gap-10 px-6 md:grid-cols-[1fr_2fr]">
          <SectionLabel index="02">Why join</SectionLabel>
          <div>
            <h2 className="font-display text-heading-sm md:text-heading-lg">
              <RiseText text="Why Join Adrenaline Adventures?" />
            </h2>
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
        <div className="mx-auto grid w-full max-w-page gap-10 border-t border-line px-6 pt-20 md:grid-cols-[1fr_2fr] md:pt-32">
          <SectionLabel index="03">What we do</SectionLabel>
          <ul className="space-y-5">
            {whatWeDo.map((item, index) => (
              <li key={item} className="flex items-start gap-4 text-body-lg">
                <span className="mt-3 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                <span>
                  <BlockText text={item} delay={index * 0.1} />
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ==================== SECTION 5: FAQ Accordion ==================== */}
      <section className="pb-20 text-paper md:pb-32">
        <div className="mx-auto grid w-full max-w-page gap-10 px-6 md:grid-cols-[1fr_2fr]">
          <SectionLabel index="04">Questions</SectionLabel>
          <div className="border-t border-line">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              const [lead, ...rest] = faq.answer;
              return (
                <div key={faq.question} className="border-b border-line">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="group flex w-full items-center justify-between gap-6 py-6 text-left"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                  >
                    <span className="text-body-lg text-paper/80 transition-colors group-hover:text-paper">
                      <BlockText text={faq.question} delay={index * 0.1} />
                    </span>
                    <span
                      className={cn(
                        "flex size-10 shrink-0 items-center justify-center rounded-lg border transition-colors",
                        isOpen
                          ? "border-accent bg-accent text-ink"
                          : "border-line text-paper group-hover:border-paper"
                      )}
                    >
                      {isOpen ? <Minus className="size-4" /> : <Plus className="size-4" />}
                    </span>
                  </button>
                  {/* grid-rows 0fr -> 1fr animates to the answer's natural height, however long it is */}
                  <div
                    id={`faq-panel-${index}`}
                    className={cn(
                      "grid transition-[grid-template-rows] duration-500 ease-in-out",
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    )}
                  >
                    <div className="overflow-hidden">
                      <div className="max-w-2xl space-y-4 pb-8 md:pr-16">
                        <p className="text-body-lg text-paper/90">{lead}</p>
                        {rest.map((paragraph) => (
                          <p key={paragraph} className="text-body text-paper/60">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
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
