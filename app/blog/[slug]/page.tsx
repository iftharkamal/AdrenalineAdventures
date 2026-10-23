import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import BlogPostList from "@/components/blog-post-list";
import Footer from "@/components/footer";
import { CtaButtonContent, ctaButtonClass } from "@/components/ui/cta-button";
import { RiseText } from "@/components/ui/intro-text";
import { SectionLabel } from "@/components/ui/section-label";
import { BLOG_POSTS, getPostBySlug, getReadingMinutes, getRelatedPosts, type BlogBlock } from "@/lib/blog-posts";
import { SITE_NAME, SITE_URL } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

// Every post is known at build time, so unknown slugs 404 instead of rendering on demand
export const dynamicParams = false;

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug((await params).slug);
  if (!post) return {};

  const title = post.seoTitle ?? post.title;
  const path = `/blog/${post.slug}`;

  return {
    title: `${title} | ${SITE_NAME}`,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      url: path,
      title,
      description: post.description,
      siteName: SITE_NAME,
      publishedTime: post.publishedAt,
      tags: post.keywords,
      images: [{ url: post.image, alt: post.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: post.description,
      images: [post.image],
    },
  };
}

const dateFormat = new Intl.DateTimeFormat("en-IN", { day: "numeric", month: "long", year: "numeric" });

function ArticleBlock({ block, isLead }: { block: BlogBlock; isLead: boolean }) {
  switch (block.type) {
    case "h2":
      return <h2 className="mt-16 font-display text-subheading text-ink md:text-heading-sm">{block.text}</h2>;
    case "h3":
      return <h3 className="mt-12 font-display text-subheading text-ink">{block.text}</h3>;
    case "ul":
      return (
        <ul className="mt-6 space-y-3">
          {block.items.map((item) => (
            <li key={item} className="flex gap-4">
              <span className="mt-[0.6em] size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    default:
      return <p className={isLead ? "text-body-lg text-ink" : "mt-6"}>{block.text}</p>;
  }
}

export default async function BlogPostPage({ params }: Props) {
  const post = getPostBySlug((await params).slug);
  if (!post) notFound();

  const url = `${SITE_URL}/blog/${post.slug}`;
  const related = getRelatedPosts(post);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      image: `${SITE_URL}${post.image}`,
      datePublished: post.publishedAt,
      dateModified: post.publishedAt,
      keywords: post.keywords.join(", "),
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
      publisher: {
        "@type": "Organization",
        name: SITE_NAME,
        logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Journal", item: `${SITE_URL}/blog` },
        { "@type": "ListItem", position: 3, name: post.title, item: url },
      ],
    },
  ];

  return (
    <main className="bg-night">
      <script
        type="application/ld+json"
        // Escape "<" so post text can never close the script tag
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />

      {/* ─── Hero ─── */}
      <header className="relative isolate overflow-hidden pb-20 pt-36 text-paper md:pb-28 md:pt-52">
        <Image src={post.image} alt={post.imageAlt} fill priority sizes="100vw" className="-z-20 object-cover" />
        <div className="absolute inset-0 -z-10 bg-linear-to-t from-night via-night/75 to-night/45" aria-hidden="true" />
        <div className="mx-auto w-full max-w-page px-6">
          <nav aria-label="Breadcrumb" className="font-mono text-caption uppercase text-paper/60">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="transition-colors hover:text-paper">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/blog" className="transition-colors hover:text-paper">
                  Journal
                </Link>
              </li>
            </ol>
          </nav>
          <h1 className="mt-8 max-w-4xl font-display text-heading-sm md:text-heading-lg">
            <RiseText text={post.title} stagger={0.04} />
          </h1>
          <p className="mt-8 flex flex-wrap items-center gap-3 font-mono text-caption uppercase text-paper/60">
            <time dateTime={post.publishedAt}>{dateFormat.format(new Date(post.publishedAt))}</time>
            <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
            <span>{getReadingMinutes(post)} min read</span>
          </p>
        </div>
      </header>

      {/* ─── Article body ─── */}
      <article className="bg-stone py-20 text-body text-ink/75 md:py-28">
        <div className="mx-auto w-full max-w-2xl px-6">
          {post.content.map((block, index) => (
            <ArticleBlock key={index} block={block} isLead={index === 0} />
          ))}
        </div>
      </article>

      {/* ─── Call to action ─── */}
      <section className="bg-stone pb-20 md:pb-28">
        <div className="mx-auto w-full max-w-page px-6">
          <div className="flex flex-col items-start gap-8 rounded-panel bg-night px-8 py-14 text-paper md:flex-row md:items-end md:justify-between md:px-16 md:py-20">
            <div>
              <SectionLabel>Your next ride</SectionLabel>
              <h2 className="mt-6 max-w-xl font-display text-heading-sm">
                <RiseText text="Ready to explore beyond ordinary travel?" />
              </h2>
            </div>
            <Link href="/contact-us" className={ctaButtonClass}>
              <CtaButtonContent tone="inverse">Plan your adventure</CtaButtonContent>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Related posts ─── */}
      <section className="bg-stone pb-20 text-ink md:pb-32">
        <div className="mx-auto w-full max-w-page px-6">
          <SectionLabel tone="light" className="mb-10">
            Keep reading
          </SectionLabel>
          <BlogPostList posts={related} />
        </div>
      </section>

      <Footer prevBg="bg-stone" />
    </main>
  );
}
