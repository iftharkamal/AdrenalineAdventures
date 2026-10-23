import Link from "next/link";
import ExpandablePostList from "@/components/expandable-post-list";
import { CtaButtonContent, ctaButtonClass } from "@/components/ui/cta-button";
import Reveal from "@/components/ui/reveal";
import { RiseText } from "@/components/ui/intro-text";
import { SectionLabel } from "@/components/ui/section-label";
import { BLOG_POSTS } from "@/lib/blog-posts";

export default function MemberSection() {
  return (
    <section className="bg-stone py-20 text-ink md:py-32">
      <div className="mx-auto w-full max-w-page px-6">
        <div className="mb-16 grid grid-cols-1 items-start gap-10 md:mb-24 md:grid-cols-2">
          <Reveal>
            <SectionLabel index="05" tone="light">
              Become a
            </SectionLabel>
            <h2 className="mt-6 font-display text-heading-sm md:text-heading-lg">
              <RiseText text="Member" />
            </h2>
          </Reveal>
          <Reveal className="flex flex-col items-start gap-8" delay={0.1}>
            <p className="text-body text-ink/70">
              Become part of a growing tribe of thrill-seekers, explorers, and culture lovers from around the world. At
              Adrenaline Adventures, we&apos;re more than just a travel company — we&apos;re a community of passionate
              adventurers who believe in discovering India through unforgettable journeys, bold experiences, and deep
              cultural connections.
            </p>
            <Link href="/contact-us" className={ctaButtonClass}>
              <CtaButtonContent>Join the community</CtaButtonContent>
            </Link>
          </Reveal>
        </div>

        <ExpandablePostList posts={BLOG_POSTS} />
      </div>
    </section>
  );
}
