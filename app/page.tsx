import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Hero from "@/components/hero";
export default function Home() {
  return (
    <main>
      <Hero />
      <section
        id="about"
        className="scroll-mt-28 bg-neutral-900 text-white"
      >
        <div className="mx-auto w-full max-w-6xl px-6 pt-24 pb-16">
          <div className="relative h-[360px] w-full overflow-hidden bg-black sm:h-[440px] md:h-[520px]">
            <Image
              src="/aboutImage.jpg"
              alt="Adventure riders on a motorcycle"
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              className="object-cover grayscale"
              priority={false}
            />
            <div className="absolute inset-0 bg-black/35" aria-hidden="true" />
            <div className="absolute inset-0 flex items-end justify-start sm:items-center sm:justify-end">
              <div className="w-full max-w-lg p-6 text-left text-white sm:p-10">
                <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-white/70">
                  ABOUT
                </p>
                <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">
                  Adrenaline Adventures
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-white/80 sm:text-base">
                  Adrenaline Adventures is an emerging Indian adventure travel
                  company creating unique experiences for foreign and domestic
                  travellers in India. We offer exciting type of adventure
                  packages all designed to let travellers experience the rich
                  culture of India in an adventurous way. Our company aims to
                  provide unique, unforgettable travel experiences for adventure
                  enthusiasts around the world.
                </p>
                <Button className="mt-6 h-9 rounded-lg bg-white px-4 text-xs font-medium text-neutral-900 hover:bg-white/90">
                  Start Your Adventure
                  <ArrowRight className="h-3.5 w-3.5" />
                </Button>
              </div>
            </div>
          </div>

          <p className="mt-10 max-w-2xl text-base text-white/80 sm:text-lg">
            Adrenaline Adventures is an emerging Indian adventure travel company
            creating unique experiences for foreign and domestic travellers in
            India.
          </p>
        </div>
      </section>

      <section
        id="events"
        className="min-h-screen scroll-mt-28 bg-neutral-950 text-white"
      >
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 px-6 pt-28 pb-16">
          <h2 className="text-3xl font-semibold sm:text-4xl">Events</h2>
          <p className="max-w-2xl text-base text-white/80 sm:text-lg">
            Explore upcoming rides, expeditions, and community gatherings.
          </p>
        </div>
      </section>

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
