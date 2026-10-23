import type { Metadata } from "next";
import BlogPostList from "@/components/blog-post-list";
import Footer from "@/components/footer";
import { RiseText } from "@/components/ui/intro-text";
import { BLOG_POSTS } from "@/lib/blog-posts";
import { SITE_NAME } from "@/lib/site";

const description =
  "Stories and guides on motorcycle tours, trekking, camping, monsoon rides and eco-cultural adventure travel across Kerala and South India.";

export const metadata: Metadata = {
  title: `Journal – Adventure Travel Stories from Kerala & South India | ${SITE_NAME}`,
  description,
  alternates: { canonical: "/blog" },
  openGraph: { type: "website", url: "/blog", title: `Journal | ${SITE_NAME}`, description, siteName: SITE_NAME },
};

export default function BlogIndexPage() {
  return (
    <main className="bg-night">
      <section className="pb-20 pt-36 text-paper md:pb-28 md:pt-48">
        <div className="mx-auto w-full max-w-page px-6">
          <h1 className="font-display text-heading-lg md:text-display-lg">
            <RiseText text="Journal." />
          </h1>
          <p className="mt-8 max-w-lg text-body text-paper/70">{description}</p>
        </div>
      </section>

      <section className="bg-stone py-20 text-ink md:py-32">
        <div className="mx-auto w-full max-w-page px-6">
          <BlogPostList posts={BLOG_POSTS} />
        </div>
      </section>

      <Footer prevBg="bg-stone" />
    </main>
  );
}
