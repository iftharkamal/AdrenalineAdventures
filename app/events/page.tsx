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
    description: [
      "Weekend Escape is a curated riding experience crafted for those who crave more than just a getaway. Designed by Adrenaline Adventures, this segment brings together passionate riders for one-day and multi-day motorcycle journeys that blend thrill, exploration, and community. From winding hill roads and mist-covered valleys to scenic coastal stretches, every ride is thoughtfully planned to deliver both adventure and comfort.",
      "Whether it’s a quick one-day escape from the city or an immersive multi-day expedition, Weekend Escape focuses on creating meaningful experiences on two wheels. With well-defined routes, experienced ride coordinators, safety support, and a strong sense of rider camaraderie, each journey is built to help you disconnect from routine and reconnect with the road.",
    ],
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
    title: "MALTERRA RALLY",
    subtitle: "Car Rally – One-Day",
    heroImage: "/maltera_rally_hero.png",
    description: [
      "Malterra Rally is a curated group car rally experience designed for those who seek more than just a drive. Created by Adrenaline Adventures, this program brings together passionate drivers for immersive journeys across scenic routes, challenging terrains, and offbeat destinations. It’s not about speed... it’s about the experience, the connection with the road, and the shared energy of a convoy moving as one.",
      "Each rally is thoughtfully planned with detailed routes, checkpoints, and coordinated support to ensure a smooth and engaging experience. Participants get to enjoy a perfect mix of exploration, teamwork, and driving excitement, whether it’s a single-day rally or a multi-day expedition. With a strong focus on safety, organization, and community, Malterra Rally creates an environment where drivers can push their limits while enjoying the journey together.",
    ],
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
    id: "03",
    title: "GOHIKE",
    subtitle: "Hiking Camp – Multi-Day",
    heroImage: "/gohike_hero.png",
    description: [
      "GoHike is the dedicated hiking program by Adrenaline Adventures, created for those who find peace and thrill in exploring the outdoors on foot. From lush forest trails and rolling hills to hidden viewpoints and misty peaks, each hike is carefully curated to offer a balance of adventure, nature, and mindful escape.",
      "Whether it’s a short day hike or a more immersive trekking experience, GoHike focuses on safe, well-guided journeys that bring like-minded explorers together. With experienced coordinators, planned routes, and a strong sense of community, every hike is designed to help you disconnect from the noise and reconnect with nature.",
    ],
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
  {
    id: "04",
    title: "SOUTH INDIA EXPEDITION",
    subtitle: "Bike Expedition – Multi-Day",
    heroImage: "/eventcard2.png",
    description: [
      "South India Expedition is a curated long-distance journey by Adrenaline Adventures, designed for riders who want to explore the rich diversity of the southern landscapes. From coastal highways and dense forests to winding hill roads and serene countryside, this expedition brings together the best of nature, culture, and riding thrill.",
      "Planned as a multi-day experience, it offers a perfect balance of adventure and comfort with well-structured routes, experienced ride leaders, and dedicated support throughout the journey. More than just a ride, it’s about discovering new places, building strong connections, and creating stories that stay long after the journey ends.",
    ],
    quote: "Ghats, coastlines, and a thousand shades of green.",
    highlights: [
      "Western Ghats hairpin climbs",
      "Coastal highways & backwaters",
      "Tea and coffee estate stays",
      "Authentic South Indian cuisine",
      "Backup vehicle & mechanic support",
      "Evening gatherings & live music",
      "Ride captains for every group",
    ],
    collageImage: "/maltera_rally_collage.png",
  },
  {
    id: "05",
    title: "NORTH INDIA EXPEDITION",
    subtitle: "Himalayan Expedition – Multi-Day",
    heroImage: "/gohike_hero.png",
    description: [
      "North India Expedition is a signature long-distance journey by Adrenaline Adventures, crafted for riders who seek the ultimate test of endurance, exploration, and freedom. This expedition takes you through some of the most breathtaking and diverse landscapes in India. From winding mountain passes and high-altitude roads to vast valleys and remote terrains that redefine the meaning of adventure.",
      "Designed as a multi-day experience, the expedition combines thrill with thoughtful planning, ensuring riders are supported every step of the way. With experienced ride leaders, backup support, and a strong focus on safety, it’s not just about reaching the destination... it’s about embracing every challenge, every mile, and every moment along the journey.",
    ],
    quote: "Higher roads, thinner air, bigger stories.",
    highlights: [
      "High-altitude Himalayan passes",
      "Planned acclimatisation days",
      "Monasteries & mountain villages",
      "Camps under starlit skies",
      "Backup vehicle & medical support",
      "Experienced Himalayan ride leaders",
      "Once-in-a-lifetime landscapes",
    ],
    collageImage: "/gohike_collage.png",
  },
  {
    id: "06",
    title: "CUSTOMIZE YOUR RIDE",
    subtitle: "Private Ride – Your Dates",
    heroImage: "/landingImage.png",
    description: [
      "Customize Your Ride is built for those who don’t want a fixed itinerary but a journey shaped around their own vision. At Adrenaline Adventures, we design fully personalized rides tailored to your style. Whether it’s the route you want to take, the kind of terrain you prefer, or the pace you enjoy.",
      "From exclusive group rides to private getaways and special experiences, every detail is carefully planned to match your expectations. With expert coordination, route curation, and on-road support, we turn your idea of the perfect ride into a seamless, unforgettable journey.",
    ],
    quote: "Your route, your crew, your adventure.",
    highlights: [
      "Routes planned around you",
      "Pick your own dates & duration",
      "Ideal for friends, clubs & teams",
      "Stays, food & permits handled",
      "Backup vehicle & mechanic support",
      "Optional photo & video coverage",
      "Any skill level welcome",
    ],
    collageImage: "/landingImage.png",
  },
];

/* ───────────────────────────── Page Component ───────────────────────────── */

export default function EventsPage() {
  return (
    <main className="bg-night">
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

          <ul className="border-t border-line lg:mt-4">
            {EVENTS.map((event) => (
              <li key={event.id} className="border-b border-line">
                <a href={`#event-${event.id}`} className="group flex items-center justify-between gap-6 py-5">
                  <span className="flex items-center gap-5">
                    <span className="rounded-full border border-line px-2.5 py-1 font-mono text-caption text-paper/60">
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
          <section className="border-t border-line py-20 text-paper md:py-32">
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
                    <div className="px-3 pb-4 pt-6 text-ink">
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
                    <div className="absolute inset-0 bg-night/45" aria-hidden="true" />
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
                <div className="mt-8 max-w-xl space-y-5 text-body text-paper/70">
                  {event.description.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <p className="mt-10 max-w-md border-t border-line pt-6 text-body-lg text-paper">
                  &ldquo;{event.quote}&rdquo;
                </p>
              </div>
            </div>
          </section>

          {/* Highlights band */}
          <section className="bg-stone py-20 text-ink md:py-32">
            <div className="mx-auto grid w-full max-w-page grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:gap-20">
              <div className="rounded-card bg-paper p-6 md:p-10">
                <h3 className="font-display text-heading-sm">Highlights</h3>
                <ul className="mt-8 border-t border-ink/10">
                  {event.highlights.map((item) => (
                    <li key={item} className="flex items-center gap-4 border-b border-ink/10 py-4 text-body">
                      <span className="size-1.5 shrink-0 rounded-full bg-night" aria-hidden="true" />
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

      <Footer prevBg="bg-stone" />
    </main>
  );
}
