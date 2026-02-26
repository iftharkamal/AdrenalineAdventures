"use client";

import Image from "next/image";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Footer from "@/components/footer";

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
    <main className="bg-[#121212]">
      {/* ==================== SECTION 1: Hero with Background Image ==================== */}
      <section className="relative min-h-screen w-full overflow-hidden">
        {/* Background Image */}
        <Image
          src="/landingImage.png"
          alt="Adventure group at sunset"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Warm overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-amber-900/30 via-amber-800/20 to-black/60" />

        {/* Content */}
        <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-5xl flex-col justify-center px-6 pt-28 pb-20">
          <h1 className="font-formula1-bold text-3xl sm:text-4xl md:text-5xl text-[#3d1a1a] mb-10 tracking-wide uppercase">
            About Us
          </h1>

          <div className="space-y-6 max-w-3xl text-[#2a1a0e] text-sm sm:text-[15px] leading-relaxed font-medium" style={{ textAlign: "justify" }}>
            <p>
              At Adrenaline Adventures, we believe true luxury lies in experiences that are rare, unforgettable,
              and shared with the right people. We are more than an adventure company — we are a
              community of explorers who value both the thrill of the unknown and the elegance of a well-
              curated journey.
            </p>
            <p>
              Our expeditions are crafted with precision and passion, offering everything from exclusive
              motorcycle rides and elite car rallies to bespoke camping retreats, treks, and wilderness escapes.
              Each plan is designed to be distinctive and immersive, ensuring that no two adventures are ever
              alike.
            </p>
            <p>
              What sets us apart is our unwavering commitment to quality, safety, and originality. Every journey
              is meticulously designed — from the routes we choose to the moments we create — blending the
              spirit of adventure with a refined sense of belonging. For us, the destination matters, but the
              shared experience of the journey matters more.
            </p>
            <p>
              Our vision goes beyond the present. We are continuously exploring new frontiers, bringing
              innovative and one-of-a-kind adventures to our members. With each step, we push boundaries
              while staying true to our ethos: adventure should be bold, different, and deeply personal.
            </p>
          </div>

          {/* Bottom overlay card */}
          <div className="mt-12 sm:mt-16 flex justify-center sm:justify-end">
            <div className="bg-black/50 backdrop-blur-sm rounded-lg p-6 sm:p-8 max-w-xl">
              <p className="font-formula1-bold text-[#d4a843] text-base sm:text-lg md:text-xl leading-relaxed">
                At Adrenaline Adventures, you don&apos;t just take
                part in activities —you become part of a
                distinguished circle of like-minded individuals,
                united by the spirit of discovery, camaraderie,
                and the pursuit of the extraordinary. At
                Adrenaline Adventures, you don&apos;t just take part
                in activities —you become part of a
                distinguished circle of like-minded individuals,
                united by the spirit of discovery, camaraderie,
                and the pursuit of the extraordinary.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 2: Stats Bar ==================== */}
      <section className="bg-[#1a1a1a] border-y border-white/10">
        <div className="mx-auto w-full max-w-5xl px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="border border-white/20 rounded-lg px-4 py-5 text-center flex flex-col items-center justify-center"
              >
                <span className="font-formula1-bold text-2xl sm:text-3xl md:text-4xl text-[#d4a843] mb-1">
                  {stat.number}
                </span>
                <span className="font-formula1 text-white text-xs sm:text-sm tracking-wide">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SECTION 3: Why Join ==================== */}
      <section className="bg-[#121212] relative overflow-hidden">
        {/* Subtle golden radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(180,140,60,0.08)_0%,_transparent_70%)]" />

        <div className="relative z-10 mx-auto w-full max-w-5xl px-6 py-16 md:py-24">
          <h2 className="font-formula1 text-white text-xl sm:text-2xl md:text-3xl italic mb-10">
            Why Join Adrenaline Adventures?
          </h2>

          <div className="pl-4 sm:pl-8 border-l-2 border-[#d4a843]/30 space-y-6 max-w-3xl">
            <p className="text-white/80 text-sm sm:text-[15px] leading-relaxed font-medium">
              Because adventure is better when it&apos;s shared.<br />
              With us, it&apos;s not just about the route or the destination — it&apos;s about the people you meet,
              the stories you create, and the memories that stay long after the journey ends. Every ride,
              rally, hike, or camp is crafted for thrill-seekers who value connection as much as the
              experience itself. From handpicked routes and expert coordination to finish-line
              celebrations and nights filled with music, laughter, and shared moments — we make
              sure your adventure feels like it was made just for you.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 4: What We Do ==================== */}
      <section className="bg-[#121212]">
        <div className="mx-auto w-full max-w-5xl px-6 pb-16 md:pb-24">
          <h2 className="font-formula1 text-white text-xl sm:text-2xl md:text-3xl italic mb-8">
            What We Do
          </h2>

          <div className="pl-4 sm:pl-8 space-y-4">
            {whatWeDo.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-[#d4a843] flex-shrink-0" />
                <p className="text-white/80 text-sm sm:text-[15px] leading-relaxed font-medium">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SECTION 5: FAQ Accordion ==================== */}
      <section className="bg-[#121212]">
        <div className="mx-auto w-full max-w-5xl px-6 pb-20 md:pb-28">
          <div className="border-t border-white/10">
            {faqs.map((faq, index) => (
              <div key={faq} className="border-b border-white/10">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between py-5 sm:py-6 text-left group"
                  aria-expanded={openFaq === index}
                >
                  <span className="font-formula1 text-white/80 text-sm sm:text-[15px] tracking-wide pr-4 group-hover:text-white transition-colors">
                    {faq}
                  </span>
                  <span className="flex-shrink-0 text-white/60 group-hover:text-[#d4a843] transition-colors">
                    {openFaq === index ? (
                      <Minus className="h-5 w-5" />
                    ) : (
                      <Plus className="h-5 w-5" />
                    )}
                  </span>
                </button>
                {/* Expandable answer area */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openFaq === index ? "max-h-40 pb-6" : "max-h-0"
                  }`}
                >
                  <p className="text-white/60 text-sm leading-relaxed pl-2">
                    Every journey with Adrenaline Adventures is designed to ignite your spirit and connect you with
                    a community that shares your passion for discovery and the extraordinary.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
