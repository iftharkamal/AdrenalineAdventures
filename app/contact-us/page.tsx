"use client";

import Image from "next/image";
import Footer from "@/components/footer";
import { CtaButtonContent, ctaButtonClass } from "@/components/ui/cta-button";
import { SectionLabel } from "@/components/ui/section-label";

const fields = [
  { id: "firstName", label: "First name", type: "text" },
  { id: "lastName", label: "Last name", type: "text" },
  { id: "email", label: "Email", type: "email" },
  { id: "phone", label: "Phone", type: "tel" },
];

const inputClass =
  "w-full rounded-lg border border-line bg-transparent px-4 py-3 text-base text-paper outline-none transition-colors placeholder:text-paper/30 focus:border-accent";

export default function ContactUsPage() {
  return (
    <main className="min-h-screen bg-night text-paper">
      <section className="px-6 pb-20 pt-36 md:pb-32 md:pt-48">
        <div className="mx-auto grid w-full max-w-page grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-24">
          {/* Left Column: Logo/Image */}
          <div className="relative mx-auto aspect-square w-full max-w-[500px] overflow-hidden rounded-card md:rounded-panel lg:mx-0">
            <Image
              src="/logoforcontactus.png"
              alt="Adrenaline Adventures Contact Logo"
              fill
              sizes="(min-width: 1024px) 500px, 100vw"
              className="object-cover"
              priority
            />
          </div>

          {/* Right Column: Contact Form */}
          <div>
            <SectionLabel index="01">Talk to team</SectionLabel>
            <h1 className="mt-6 font-display text-heading-lg md:text-display">Contact us.</h1>

            <form className="mt-12 space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {fields.map((field) => (
                  <div key={field.id} className="space-y-2">
                    <label htmlFor={field.id} className="font-mono text-caption uppercase text-paper/60">
                      {field.label}
                    </label>
                    <input type={field.type} id={field.id} className={inputClass} />
                  </div>
                ))}
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="font-mono text-caption uppercase text-paper/60">
                  Message
                </label>
                <textarea id="message" rows={4} className={`${inputClass} resize-none`} />
              </div>

              <div className="pt-2">
                <button type="submit" className={ctaButtonClass}>
                  <CtaButtonContent tone="inverse">Submit now</CtaButtonContent>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
