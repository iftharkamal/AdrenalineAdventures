import Image from "next/image";
import Footer from "@/components/footer";

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
    bgGradient: "from-[#7a5c34] via-[#6b4f2d] to-[#4a3520]",
    highlightBg: "bg-[#f5f0e8]",
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
    bgGradient: "from-[#3a2a18] via-[#2d2015] to-[#1a1510]",
    highlightBg: "bg-[#f5f0e8]",
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
    bgGradient: "from-[#7a5c34] via-[#6b4f2d] to-[#4a3520]",
    highlightBg: "bg-[#f5f0e8]",
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
    bgGradient: "from-[#3a2a18] via-[#2d2015] to-[#1a1510]",
    highlightBg: "bg-[#f5f0e8]",
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
    bgGradient: "from-[#2d4a2d] via-[#1e3520] to-[#152a15]",
    highlightBg: "bg-[#eef5e8]",
  },
];

/* ───────────────────────────── Page Component ───────────────────────────── */

export default function EventsPage() {
  return (
    <main>
      {/* ─── Events Header Section ─── */}
      <section className="relative min-h-screen bg-gradient-to-br from-[#2a2017] via-[#3a2e1e] to-[#1a1510] text-white flex items-center overflow-hidden">
        {/* Subtle grain overlay */}
        {/* <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMSIvPjwvc3ZnPg==')]" /> */}

        <div className="mx-auto w-full max-w-[1400px] px-6 py-32 md:py-40 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Left: Title & Description */}
            <div>
              <h1 className="text-4xl md:text-6xl font-formula1 font-black mb-8 tracking-tight leading-[0.95] text-[#d4a843]">
                EVENTS
              </h1>
              <p className="text-base md:text-lg text-white/70 leading-relaxed max-w-lg font-poppins font-medium">
                When a user activates a theme, they have an expectation of
                seeing their photos, theirs shop, their contributors and all of
                their content with a new style or twist. Themes provide this
                ability to showcase user content in different ways. How a theme
                gets that content is what we look for. When there is no content a
                theme should not show anything
              </p>
            </div>

            {/* Right: Event List */}
            <div className="flex flex-col gap-6 lg:pt-4">
              {EVENTS.map((event) => (
                <a
                  key={event.id}
                  href={`#event-${event.id}`}
                  className="group flex flex-col gap-0.5 transition-all duration-300 hover:translate-x-2"
                >
                  <div className="flex items-baseline gap-1">
                    <span className="text-[#d4a843] font-boldonse font-bold text-base md:text-lg italic tracking-wide">
                      {event.id}.
                    </span>
                    <span className="text-[#d4a843] font-boldonse text-base md:text-lg tracking-wide">
                      {event.title}
                    </span>
                  </div>
                  <span className="text-white text-sm md:text-base font-poppins font-medium pl-6">
                    {event.subtitle}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#7a5c34] to-transparent" />
      </section>

      {/* ─── Event Detail Sections ─── */}
      {EVENTS.map((event, index) => (
        <div key={event.id} id={`event-${event.id}`}>
          {/* Hero Section */}
          <section
            className={`relative min-h-screen bg-gradient-to-br ${event.bgGradient} text-white flex items-center overflow-hidden`}
          >
            <div className="mx-auto w-full max-w-[1400px] px-6 py-24 md:py-42 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                {/* Left: Image Card */}
                <div className="relative flex justify-center lg:justify-start">
                  {index % 2 === 0 ? (
                    /* Odd: Polaroid-style card */
                    <div className="relative bg-[#eeeae3] p-4 pb-12 shadow-2xl shadow-black/40 max-w-sm w-full z-10">
                      <div className="relative aspect-[3.5/4] overflow-hidden">
                        <Image
                          src={event.heroImage}
                          alt={event.title}
                          fill
                          className="object-cover"
                          sizes="(min-width: 1024px) 400px, 350px"
                        />
                      </div>
                      <div className="mt-8 px-2">
                        <h3 className="text-[#4a3520] text-3xl md:text-4xl font-boldonse tracking-tight leading-[1.3] max-w-[200px]">
                          {event.title.split(" ").map((word, i) => (
                            <span key={i} className="block">{word}</span>
                          ))}
                        </h3>
                        <p className="text-[#4a3520]/80 text-sm md:text-base font-poppins font-medium mt-2">
                          {event.subtitle}
                        </p>
                      </div>
                    </div>
                  ) : (
                    /* Even: Full-image card */
                    <div className="relative max-w-sm w-full aspect-[3.5/5.5] shadow-2xl shadow-black/40 z-10 group overflow-hidden">
                      <Image
                        src={event.heroImage}
                        alt={event.title}
                        fill
                        className="object-cover"
                        sizes="(min-width: 1024px) 400px, 350px"
                      />
                      {/* Gradient overlay for text readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      
                      <div className="absolute bottom-8 left-6 right-6 z-20">
                        <h3 className="text-white text-3xl md:text-4xl font-boldonse tracking-tight leading-[1.3] max-w-[200px]">
                        {event.title.split(" ").map((word, i) => (
                            <span key={i} className="block">{word}</span>
                          ))}
                        </h3>
                        <p className="text-white/90 text-sm md:text-base font-poppins font-medium mt-">
                          {event.subtitle}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Right: Content */}
                <div className="relative flex flex-col justify-center pt-24 pb-12 lg:py-12">
                  {/* Large faded background number */}
                  <div className="absolute top-0 left-0 lg:-left-20 transform lg:-translate-y-1/2 text-[180px] md:text-[280px] font-formula1 font-black text-white/10 leading-none select-none pointer-events-none z-0">
                    {event.id}
                  </div>

                  <div className="relative z-10">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-boldonse tracking-tight mb-4 text-[#d4a843]">
                      {event.title}
                    </h2>
                    <p className="text-white text-lg md:text-xl font-poppins font-semibold mb-10">
                      {event.subtitle}
                    </p>

                    <p className="text-white/80 text-base md:text-lg leading-relaxed mb-10 font-poppins font-normal max-w-xl">
                      {event.description}
                    </p>

                    <p className="text-white/50 text-base font-poppins font-light max-w-md leading-relaxed">
                      – {event.quote}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Highlights Section */}
          <section className={`${event.highlightBg} py-20 md:py-28`}>
            <div className="mx-auto w-full max-w-[1400px] px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                {/* Left: Highlights List */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-black text-[#1a1a1a] mb-8 tracking-tight">
                    Highlights
                  </h3>
                  <ul className="flex flex-col gap-4">
                    {event.highlights.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-3 text-[#1a1a1a]/80 text-base md:text-lg font-poppins font-light"
                      >
                        <span className="h-2 w-2 rounded-full bg-[#8b6914] flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right: Collage Image */}
                <div className="relative">
                  <div className="grid grid-cols-3 grid-rows-2 gap-3 md:gap-4">
                    {/* Main large image */}
                    <div className="col-span-2 row-span-2 relative aspect-[4/5] overflow-hidden rounded-sm shadow-lg">
                      <Image
                        src={event.collageImage}
                        alt={`${event.title} highlights`}
                        fill
                        className="object-cover"
                        sizes="(min-width: 1024px) 450px, 300px"
                      />
                    </div>
                    {/* Top-right small image */}
                    <div className="relative aspect-square overflow-hidden rounded-sm shadow-lg">
                      <Image
                        src={event.heroImage}
                        alt={`${event.title} highlight`}
                        fill
                        className="object-cover"
                        sizes="150px"
                      />
                    </div>
                    {/* Bottom-right small image */}
                    <div className="relative aspect-square overflow-hidden rounded-sm shadow-lg">
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
              </div>
            </div>
          </section>

          {/* Divider between events */}
          {index < EVENTS.length - 1 && (
            <div className="h-[2px] bg-gradient-to-r from-transparent via-[#8b6914]/20 to-transparent" />
          )}
        </div>
      ))}

      {/* ─── Footer ─── */}
      <Footer />
    </main>
  );
}
