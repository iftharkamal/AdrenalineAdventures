import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import AboutSection from "@/components/about-section";
import Hero from "@/components/hero";
import FeaturedEvents from "@/components/featured-events";
import WhyAdad from "@/components/why-adad";
import CommunitySection from "@/components/community-section";
import MemberSection from "@/components/member-section";
import DestinationsSection from "@/components/destinations-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <FeaturedEvents />
      <WhyAdad />
      <CommunitySection />
      <MemberSection />
      <DestinationsSection />
      <Footer />
    </main>
  );
}
