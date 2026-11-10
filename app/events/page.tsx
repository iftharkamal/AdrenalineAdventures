import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Footer from "@/components/footer";
import PhotoStrip from "@/components/photo-strip";
import { buttonVariants } from "@/components/ui/button";
import { BlockText, RiseText } from "@/components/ui/intro-text";
import { SectionLabel, Tag } from "@/components/ui/section-label";
import { EVENTS } from "@/lib/events";

/* ───────────────────────────── Page Component ───────────────────────────── */

export default function EventsPage() {
  return (
    <main className="bg-night">
      {/* ─── Events Header Section ─── */}
      <section className="pb-20 pt-36 text-paper md:pb-32 md:pt-48">
        <div className="mx-auto grid w-full max-w-page grid-cols-1 gap-16 px-6 lg:grid-cols-2 lg:gap-24">
          <div>
            {/* "Adventures." is ~6.75em wide, so on phones it scales with the viewport and drops a size in the narrow two-column range */}
            <h1 className="font-display text-[clamp(2.25rem,12vw,3.625rem)] leading-[1.1] tracking-[-0.012em] md:text-display-lg lg:text-heading-lg xl:text-display-lg">
              <span className="block text-subheading md:text-heading-sm">
                <RiseText text="Our" />
              </span>
              <span className="block">
                <RiseText text="Adventures." delay={0.08} />
              </span>
            </h1>
            <p className="mt-8 max-w-lg text-body text-paper/70">
              From thrilling motorcycle expeditions and scenic road trips to immersive hiking trails, camping escapes,
              and offbeat explorations, Adrenaline Adventures brings together riders, hikers, and explorers through
              experiences that go beyond the usual. Every adventure is thoughtfully curated to inspire discovery,
              embrace freedom, and create unforgettable memories.
            </p>
            <p className="mt-6 max-w-lg text-body text-paper">Choose your adventure. Embrace the journey.</p>
          </div>

          <ul className="border-t border-line lg:mt-4">
            {EVENTS.map((event, index) => (
              <li key={event.id} className="border-b border-line">
                <a href={`#event-${event.id}`} className="group flex items-center justify-between gap-6 py-5">
                  <span className="flex items-center gap-5">
                    <span className="rounded-full border border-line px-2.5 py-1 font-mono text-caption text-paper/60">
                      {event.id}
                    </span>
                    <span>
                      <span className="block font-display text-subheading transition-transform duration-300 group-hover:translate-x-1">
                        <RiseText text={event.title} delay={0.2 + index * 0.08} />
                      </span>
                      <span className="mt-1 block font-mono text-caption uppercase text-paper/60">
                        <BlockText text={event.subtitle} delay={0.3 + index * 0.08} />
                      </span>
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
                        src={event.cover.src}
                        alt={event.cover.alt}
                        fill
                        className="object-cover"
                        sizes="(min-width: 1024px) 400px, 350px"
                      />
                    </div>
                    <div className="px-3 pb-4 pt-6 text-ink">
                      <h3 className="font-display text-heading-sm">
                        <RiseText text={event.title} />
                      </h3>
                      <Tag tone="light" className="mt-3">
                        {event.subtitle}
                      </Tag>
                    </div>
                  </div>
                ) : (
                  /* Full-bleed photo card */
                  <div className="relative aspect-[3.5/5] w-full max-w-sm overflow-hidden rounded-card">
                    <Image
                      src={event.cover.src}
                      alt={event.cover.alt}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 400px, 350px"
                    />
                    <div className="absolute inset-0 bg-night/45" aria-hidden="true" />
                    <div className="absolute inset-x-6 bottom-8">
                      <h3 className="font-display text-heading-sm text-paper">
                        <RiseText text={event.title} />
                      </h3>
                      <Tag className="mt-3 text-paper/80">{event.subtitle}</Tag>
                    </div>
                  </div>
                )}
              </div>

              {/* Right: Content */}
              <div>
                <SectionLabel index={event.id}>{event.subtitle}</SectionLabel>
                <h2 className="mt-6 font-display text-heading-sm md:text-heading-lg">
                  <RiseText text={event.title} />
                </h2>
                <div className="mt-8 max-w-xl space-y-5 text-body text-paper/70">
                  {event.description.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>

            {/* Photos from past editions of this event */}
            <div className="mx-auto mt-16 w-full max-w-page px-6 md:mt-24">
              <p className="mb-6 font-mono text-caption uppercase text-paper/60">
                Moments from {event.title}
              </p>
              <PhotoStrip photos={event.gallery} label={event.title} />
            </div>
          </section>
        </div>
      ))}

      <Footer />
    </main>
  );
}
