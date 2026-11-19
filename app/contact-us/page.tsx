"use client";

import { useActionState } from "react";
import Image from "next/image";
import Footer from "@/components/footer";
import { CtaButtonContent, ctaButtonClass } from "@/components/ui/cta-button";
import { RiseText } from "@/components/ui/intro-text";
import { SectionLabel } from "@/components/ui/section-label";
import { cn } from "@/lib/utils";
import { submitContactForm, type ContactField, type ContactState } from "./actions";

const fields: { id: ContactField; label: string; type: string; autoComplete: string; required?: boolean }[] = [
  { id: "firstName", label: "First name", type: "text", autoComplete: "given-name", required: true },
  { id: "lastName", label: "Last name", type: "text", autoComplete: "family-name" },
  { id: "email", label: "Email", type: "email", autoComplete: "email", required: true },
  { id: "phone", label: "Phone", type: "tel", autoComplete: "tel" },
];

const inputClass =
  "w-full rounded-lg border border-line bg-transparent px-4 py-3 text-base text-paper outline-none transition-colors placeholder:text-paper/30 focus:border-accent";

const errorInputClass = "border-red-400 focus:border-red-400";

const initialState: ContactState = { status: "idle" };

export default function ContactUsPage() {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState);

  return (
    <main className="min-h-screen bg-night text-paper">
      <section className="px-6 pb-20 pt-36 md:pb-32 md:pt-48">
        <div className="mx-auto grid w-full max-w-page grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-24">
          {/* Left Column: Logo/Image */}
          <div className="relative mx-auto aspect-square w-full max-w-[500px] lg:mx-0">
            <Image
              src="/logo-adad-square.png"
              alt="Adrenaline Adventures logo"
              fill
              sizes="(min-width: 1024px) 500px, 100vw"
              className="object-contain"
              priority
            />
          </div>

          {/* Right Column: Contact Form */}
          <div>
            <SectionLabel index="01">Talk to team</SectionLabel>
            <h1 className="mt-6 font-display text-heading-lg md:text-display">
              <RiseText text="Contact us." delay={0.15} />
            </h1>

            <form className="mt-12 space-y-6" action={formAction} noValidate>
              {/* Honeypot: hidden from people, tempting to bots */}
              <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
                <label htmlFor="company">Company</label>
                <input type="text" id="company" name="company" tabIndex={-1} autoComplete="off" />
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {fields.map((field) => {
                  const error = state.errors?.[field.id];
                  return (
                    <div key={field.id} className="space-y-2">
                      <label htmlFor={field.id} className="font-mono text-caption uppercase text-paper/60">
                        {field.label}
                        {field.required && <span className="text-accent"> *</span>}
                      </label>
                      <input
                        type={field.type}
                        id={field.id}
                        name={field.id}
                        autoComplete={field.autoComplete}
                        required={field.required}
                        defaultValue={state.values?.[field.id]}
                        aria-invalid={error ? true : undefined}
                        aria-describedby={error ? `${field.id}-error` : undefined}
                        className={cn(inputClass, error && errorInputClass)}
                      />
                      {error && (
                        <p id={`${field.id}-error`} className="text-sm text-red-400">
                          {error}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="font-mono text-caption uppercase text-paper/60">
                  Message<span className="text-accent"> *</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  defaultValue={state.values?.message}
                  aria-invalid={state.errors?.message ? true : undefined}
                  aria-describedby={state.errors?.message ? "message-error" : undefined}
                  className={cn(inputClass, "resize-none", state.errors?.message && errorInputClass)}
                />
                {state.errors?.message && (
                  <p id="message-error" className="text-sm text-red-400">
                    {state.errors.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center">
                <button
                  type="submit"
                  disabled={isPending}
                  className={cn(ctaButtonClass, "disabled:cursor-wait disabled:opacity-60")}
                >
                  <CtaButtonContent tone="inverse">{isPending ? "Sending…" : "Submit now"}</CtaButtonContent>
                </button>
                <p
                  role="status"
                  aria-live="polite"
                  className={cn("text-sm", state.status === "error" ? "text-red-400" : "text-paper/80")}
                >
                  {!isPending && state.message}
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
