import Hero from "@/components/hero";
import StorySection from "@/components/story-section";
import FeaturedEvents from "@/components/featured-events";
import CommunitySection from "@/components/community-section";
import MemberSection from "@/components/member-section";
import DestinationsSection from "@/components/destinations-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <StorySection />
      <FeaturedEvents />
      <CommunitySection />
      <MemberSection />
      <DestinationsSection />
      <Footer prevBg="bg-stone" />
    </main>
  );
}
