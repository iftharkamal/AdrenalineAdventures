import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import AboutSection from "@/components/about-section";
import Hero from "@/components/hero";
import FeaturedEvents from "@/components/featured-events";
import WhyAdad from "@/components/why-adad";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <FeaturedEvents />
      <WhyAdad />

      <section
        id="contact"
        className="min-h-screen scroll-mt-28 bg-neutral-950 text-white"
      >
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 px-6 pt-28 pb-16">
          <h2 className="text-3xl font-semibold sm:text-4xl">Contact Us</h2>
          <p className="max-w-2xl text-base text-white/80 sm:text-lg">
            Reach out to plan your next adventure or ask about our experiences.
          </p>
        </div>
      </section>
    </main>
  );
}
