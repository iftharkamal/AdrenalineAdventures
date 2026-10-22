"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { useLenis } from "lenis/react";
import { CtaButtonContent, ctaButtonClass } from "@/components/ui/cta-button";
import { BlockText } from "@/components/ui/intro-text";
import { cn } from "@/lib/utils";

const pageLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Events", href: "/events" },
  { label: "Contact Us", href: "/contact-us" },
];

const socialLinks = [
  { name: "Instagram", href: "https://www.instagram.com/_adrenaline_adventures?igsh=c3c2c3FsN3M5ZGpy" },
  {
    name: "WhatsApp",
    href: "https://wa.me/918089713241?text=Hi%20Adrenaline%20Adventures%2C%20I%27d%20like%20to%20know%20more%20about%20your%20rides%20and%20programs.",
  },
  { name: "Facebook", href: "https://www.facebook.com/share/1DyAopkEGK/" },
];

const email = "adrenalineadventuresindia@gmail.com";
const phone = "+918089713241";

// Underline draws in from the left on hover and exits to the right on leave
const linkClass =
  "text-body-lg text-paper bg-linear-to-r from-current to-current bg-no-repeat bg-size-[0%_1px] bg-position-[100%_100%] pb-0.5 transition-[background-size] duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] hover:bg-size-[100%_1px] hover:bg-position-[0%_100%]";

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border-l border-paper/25 pl-5">
      <h4 className="mb-4 font-mono text-caption uppercase text-paper">
        <BlockText text={title} />
      </h4>
      {children}
    </div>
  );
}

// `prevBg` is the background of the section above, drawn as a rounded lip over the photo
export default function Footer({ prevBg = "bg-night" }: { prevBg?: "bg-night" | "bg-stone" }) {
  const lenis = useLenis();
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    if (lenis) lenis.scrollTo(0);
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative isolate overflow-hidden bg-night text-paper">
      <Image src="/gohike_hero.png" alt="" fill sizes="100vw" className="-z-20 object-cover" />
      <div className="absolute inset-0 -z-10 bg-night/70" aria-hidden="true" />
      <div className={cn("h-10 rounded-b-card md:h-16 md:rounded-b-panel", prevBg)} aria-hidden="true" />

      <div className="mx-auto flex min-h-[85vh] w-full max-w-page flex-col justify-between gap-16 px-6 pb-6 pt-14 md:pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          {/* Statement + CTA */}
          <div>
            <p className="max-w-xl font-display text-[30px] leading-[1.15] tracking-[-0.006em] md:text-heading-sm">
              Curated adventures, crafted memories.
            </p>
            <Link href="/contact-us" className={cn(ctaButtonClass, "mt-10")}>
              <CtaButtonContent size="lg">Contact us</CtaButtonContent>
            </Link>
          </div>

          {/* Link columns + back to top */}
          <div className="relative grid grid-cols-1 gap-10 pr-16 sm:grid-cols-2">
            <FooterColumn title="Navigate">
              <ul className="space-y-1.5">
                {pageLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={linkClass}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </FooterColumn>

            <FooterColumn title="Connect">
              <ul className="space-y-1.5">
                {socialLinks.map((social) => (
                  <li key={social.name}>
                    <a href={social.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                      {social.name}
                    </a>
                  </li>
                ))}
              </ul>
            </FooterColumn>

            <div className="sm:col-span-2">
              <FooterColumn title="Contact">
                <div className="space-y-1.5">
                  <a href={`tel:${phone}`} className={cn(linkClass, "block w-fit")}>
                    {phone}
                  </a>
                  <a href={`mailto:${email}`} className={cn(linkClass, "block w-fit break-all sm:break-normal")}>
                    {email}
                  </a>
                  <p className="pt-2 text-base text-paper/70">
                    Door No 36/267, Building No 7/619, Thrikkakara,
                    <br />
                    Ernakulam - 682021, Kerala, India
                  </p>
                </div>
              </FooterColumn>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="absolute right-0 top-0 flex size-12 items-center justify-center rounded-xl border border-paper/30 text-paper transition-colors hover:border-accent hover:text-accent"
            >
              <ArrowUp className="size-4" />
            </button>
          </div>
        </div>

        {/* Wordmark + copyright */}
        <div className="@container">
          <p className="mb-3 text-right font-mono text-caption uppercase text-paper md:hidden">
            © {year} Adrenaline Adventures.
            <br />
            All rights reserved.
          </p>
          <p
            aria-hidden="true"
            className="select-none whitespace-nowrap font-display text-[15cqi] leading-[0.95] tracking-[-0.03em] text-paper md:text-[8cqi]"
          >
            <span className="block md:inline">Adrenaline</span>{" "}
            <span className="block md:inline">Adventures</span>
          </p>
          <p className="mt-4 hidden font-mono text-caption uppercase text-paper md:block">
            © {year} Adrenaline Adventures. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
