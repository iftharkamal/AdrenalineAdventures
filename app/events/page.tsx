import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Footer from "@/components/footer";
import { buttonVariants } from "@/components/ui/button";
import { SectionLabel, Tag } from "@/components/ui/section-label";

/* ───────────────────────────── Event Data ───────────────────────────── */

const EVENTS = [
  {
    id: "01",
    title: "WEEKEND ESCAPE",
    subtitle: "Group Bike Ride – One-Day",
    heroImage: "/eventcard1.png",
    description:
      "A day packed with throttle, curves, and camaraderie. Our one-day bike rides take you through scenic routes — from misty forest trails to winding mountain roads — with plenty of pit stops for stories, photos, and local flavours. Perfect for riders who crave thrill without an overnight stay.",
    quote: "Turning miles into memories, and strangers into friends.",
    highlights: [
      "Beginner friendly",
      "Thrilling curves & scenic trails",
      "Pit stops for chai & local flavors",
      "Perfect for quick weekend riders",
      "Group bonding & shared stories",
      "Forest roads and mountain climbs",
      "No overnight stay needed",
    ],
    collageImage: "/eventcard1.png",
  },
  {
    id: "02",
    title: "WEEKEND ESCAPE",
    subtitle: "Group Bike Ride – Multi-Day",
    heroImage: "/eventcard1.png",
    description:
      "More than a ride — this is a moving festival on wheels. Our multi-day bike rides blend the thrill of conquering diverse terrains with the joy of shared experiences. Each evening, the ride shifts gears into celebration: finish-line parties, music and dance nights, storytelling circles, and interactive sessions that deepen bonds within the group. By the last day, you won't just remember the roads — you'll remember the people who rode them with you.",
    quote: "Thrill, elegance, and a community that feels like home.",
    highlights: [
      "Diverse terrains across states",
      "Sunrises on winding hill roads",
      "Evenings with music & dance",
      "Celebrate at every finish line",
      "Group bonding & shared stories",
      "Forest roads and mountain climbs",
      "Local stays & authentic food",
    ],
    collageImage: "/eventcard1.png",
  },
  {
    id: "03",
    title: "MALTERA RALLY",
    subtitle: "Car Rally – One-Day",
    heroImage: "/maltera_rally_hero.png",
    description:
      "Feel the raw power of the road beneath your wheels. Maltera Rally's one-day car events bring together petrolheads and speed enthusiasts for a day of adrenaline-fuelled driving through winding circuits and open stretches. With timed stages, precision challenges, and a festival-like atmosphere at every checkpoint, this is motorsport made for everyone — beginner or veteran.",
    quote: "Where rubber meets dust, and passion meets purpose.",
    highlights: [
      "Open to all skill levels",
      "Timed rally stages & challenges",
      "Scenic off-road terrain circuits",
      "Expert marshals & safety crew",
      "Festival vibe at checkpoints",
      "Trophy ceremonies & recognition",
      "No prior rally experience needed",
    ],
    collageImage: "/maltera_rally_collage.png",
  },
  {
    id: "04",
    title: "MALTERA RALLY",
    subtitle: "Car Rally – Multi-Day",
    heroImage: "/maltera_rally_hero.png",
    description:
      "A multi-day expedition that tests your limits and rewards your spirit. The Maltera Rally multi-day experience takes you across changing landscapes — from red-earth back roads to coastal highways — with overnight camps, bonfire storytelling, and dawn starts that fill you with the thrill of the unknown. You'll drive hard, celebrate harder, and come away with stories that outlast the dust on your windshield.",
    quote: "Not just a rally — it's a journey you'll never forget.",
    highlights: [
      "Multi-terrain rally across regions",
      "Dawn-to-dusk driving stages",
      "Overnight camps with bonfires",
      "Live timing & leaderboard updates",
      "Mechanic support at every stage",
      "Team-based & solo categories",
      "Award ceremony & finisher medals",
    ],
    collageImage: "/maltera_rally_collage.png",
  },
  {
    id: "05",
    title: "GOHIKE",
    subtitle: "Hiking Camp – Multi-Day",
    heroImage: "/gohike_hero.png",
    description:
      "Step away from the noise and into nature's cathedral. GoHike is our immersive multi-day hiking experience that takes you deep into forests, across river crossings, and up to summits where the air is thin but the views are infinite. Each camp brings a new trail, a new story, and a new connection with the people walking beside you. This isn't just a hike — it's a pilgrimage for the restless soul.",
    quote: "The best views come after the hardest climbs.",
    highlights: [
      "Guided trails for all fitness levels",
      "Stunning sunrise summit treks",
      "Riverside camps & forest stays",
      "Night sky stargazing sessions",
      "Local cuisine & campfire cooking",
      "Nature photography workshops",
      "Eco-friendly & leave-no-trace",
    ],
    collageImage: "/gohike_collage.png",
  },
];

/* ───────────────────────────── Page Component ───────────────────────────── */

export default function EventsPage() {
  return (
    <main className="bg-abyssal-ink">
      {/* ─── Events Header Section ─── */}
      <section className="pb-20 pt-36 text-paper md:pb-32 md:pt-48">
        <div className="mx-auto grid w-full max-w-page grid-cols-1 gap-16 px-6 lg:grid-cols-2 lg:gap-24">
          <div>
            <h1 className="font-display text-heading-lg md:text-display-lg">Events.</h1>
            <p className="mt-8 max-w-lg text-body text-paper/70">
              When a user activates a theme, they have an expectation of seeing their photos, theirs shop, their
              contributors and all of their content with a new style or twist. Themes provide this ability to showcase
              user content in different ways. How a theme gets that content is what we look for. When there is no
              content a theme should not show anything
            </p>
          </div>

          <ul className="border-t border-graphite lg:mt-4">
            {EVENTS.map((event) => (
              <li key={event.id} className="border-b border-graphite">
                <a href={`#event-${event.id}`} className="group flex items-center justify-between gap-6 py-5">
                  <span className="flex items-center gap-5">
                    <span className="rounded-full border border-graphite px-2.5 py-1 font-mono text-caption text-paper/60">
                      {event.id}
                    </span>
                    <span>
                      <span className="block font-display text-subheading transition-transform duration-300 group-hover:translate-x-1">
                        {event.title}
                      </span>
                      <span className="mt-1 block font-mono text-caption uppercase text-paper/60">{event.subtitle}</span>
                    </span>
                  </span>
                  <span
                    className={buttonVariants({
                      variant: "accent",
                      size: "icon",
                      className: "opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100",
                    })}
                    aria-hidden="true"
                  >
                    <ArrowRight />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ─── Event Detail Sections ─── */}
      {EVENTS.map((event, index) => (
        <div key={event.id} id={`event-${event.id}`}>
          {/* Detail band */}
          <section className="border-t border-graphite py-20 text-paper md:py-32">
            <div className="mx-auto grid w-full max-w-page grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:gap-24">
              {/* Left: Image Card */}
              <div className="flex justify-center lg:justify-start">
                {index % 2 === 0 ? (
                  /* Paper card with inset photo */
                  <div className="w-full max-w-sm rounded-card bg-paper p-3">
                    <div className="relative aspect-[3.5/4] overflow-hidden rounded-xl">
                      <Image
                        src={event.heroImage}
                        alt={event.title}
                        fill
                        className="object-cover"
                        sizes="(min-width: 1024px) 400px, 350px"
                      />
                    </div>
                    <div className="px-3 pb-4 pt-6 text-abyssal-ink">
                      <h3 className="font-display text-heading-sm">{event.title}</h3>
                      <Tag tone="light" className="mt-3">
                        {event.subtitle}
                      </Tag>
                    </div>
                  </div>
                ) : (
                  /* Full-bleed photo card */
                  <div className="relative aspect-[3.5/5] w-full max-w-sm overflow-hidden rounded-card">
                    <Image
                      src={event.heroImage}
                      alt={event.title}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 400px, 350px"
                    />
                    <div className="absolute inset-0 bg-abyssal-ink/45" aria-hidden="true" />
                    <div className="absolute inset-x-6 bottom-8">
                      <h3 className="font-display text-heading-sm text-paper">{event.title}</h3>
                      <Tag className="mt-3 text-paper/80">{event.subtitle}</Tag>
                    </div>
                  </div>
                )}
              </div>

              {/* Right: Content */}
              <div>
                <SectionLabel index={event.id}>{event.subtitle}</SectionLabel>
                <h2 className="mt-6 font-display text-heading-sm md:text-heading-lg">{event.title}</h2>
                <p className="mt-8 max-w-xl text-body text-paper/70">{event.description}</p>
                <p className="mt-10 max-w-md border-t border-graphite pt-6 text-body-lg text-paper">
                  &ldquo;{event.quote}&rdquo;
                </p>
              </div>
            </div>
          </section>

          {/* Highlights band */}
          <section className="bg-bone-white py-20 text-abyssal-ink md:py-32">
            <div className="mx-auto grid w-full max-w-page grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:gap-20">
              <div className="rounded-card bg-paper p-6 md:p-10">
                <h3 className="font-display text-heading-sm">Highlights</h3>
                <ul className="mt-8 border-t border-lichen">
                  {event.highlights.map((item) => (
                    <li key={item} className="flex items-center gap-4 border-b border-lichen py-4 text-body">
                      <span className="size-1.5 shrink-0 rounded-full bg-abyssal-ink" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-3 grid-rows-2 gap-3 md:gap-4">
                <div className="relative col-span-2 row-span-2 aspect-[4/5] overflow-hidden rounded-2xl">
                  <Image
                    src={event.collageImage}
                    alt={`${event.title} highlights`}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 450px, 300px"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-2xl">
                  <Image
                    src={event.heroImage}
                    alt={`${event.title} highlight`}
                    fill
                    className="object-cover"
                    sizes="150px"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-2xl">
                  <Image
                    src={event.collageImage}
                    alt={`${event.title} highlight`}
                    fill
                    className="object-cover object-bottom"
                    sizes="150px"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      ))}

      <Footer />
    </main>
  );
}
