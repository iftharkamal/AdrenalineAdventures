import Hero from "@/components/hero";
export default function Home() {
  return (
    <main>
      <Hero />
      <section
        id="about"
        className="min-h-screen scroll-mt-28 bg-neutral-950 text-white"
      >
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 px-6 pt-28 pb-16">
          <h2 className="text-3xl font-semibold sm:text-4xl">About Us</h2>
          <p className="max-w-2xl text-base text-white/80 sm:text-lg">
            Adrenaline Adventures is built around curated outdoor experiences
            and unforgettable journeys.
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
