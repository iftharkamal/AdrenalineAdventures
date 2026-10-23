import Link from "next/link";
import HoverFillRow, { HoverFillArrow } from "@/components/ui/hover-fill-row";
import Reveal from "@/components/ui/reveal";
import { RiseText } from "@/components/ui/intro-text";
import type { BlogPost } from "@/lib/blog-posts";

// Numbered article rows for light sections; each row opens the full post
export default function BlogPostList({ posts }: { posts: BlogPost[] }) {
  return (
    <ul className="border-t border-ink/10">
      {posts.map((post, index) => (
        <li key={post.slug} className="border-b border-ink/10">
          <Reveal delay={Math.min(index, 4) * 0.08}>
            <Link
              href={`/blog/${post.slug}`}
              className="block outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent"
            >
              <HoverFillRow className="flex items-center justify-between gap-6 px-4 py-8 md:gap-12 md:px-8 md:py-10">
                {/* Right padding reserves room for the title's hover shift so it never meets the arrow */}
                <div className="flex min-w-0 flex-1 items-center gap-6 pr-6 md:gap-16 md:pr-8">
                  <span className="shrink-0 rounded-full border border-line px-2.5 py-1 font-mono text-caption text-ink/70 transition-colors duration-500 group-hover:border-paper/30 group-hover:text-paper/70">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="min-w-0 font-display text-subheading transition-[color,translate] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-6 group-hover:text-paper md:text-heading-sm md:group-hover:translate-x-8">
                    <RiseText text={post.title} />
                  </h3>
                </div>
                <HoverFillArrow />
              </HoverFillRow>
            </Link>
          </Reveal>
        </li>
      ))}
    </ul>
  );
}
