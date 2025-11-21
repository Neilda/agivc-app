import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HomepageHero } from "@/components/home/homepage-hero";
import { WhoWeAre } from "@/components/home/who-we-are";
import { ForwardDeployedSection } from "@/components/home/forward-deployed-section";
import { EventsCommunitySection } from "@/components/home/events-community-section";
import { AIAcceleratorSection } from "@/components/home/ai-accelerator-section";
import { SponsorPreview } from "@/components/home/sponsor-preview";
import { VideoQuoteSection } from "@/components/home/video-quote-section";
import { MissionValues } from "@/components/home/mission-values";
import { UpcomingEvents } from "@/components/home/upcoming-events";

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <Header />
      <HomepageHero />
      <WhoWeAre />
      <ForwardDeployedSection />
      <EventsCommunitySection />
      <AIAcceleratorSection />
      <VideoQuoteSection />
      <SponsorPreview />
      <MissionValues />
      <UpcomingEvents />
      <Footer />
    </main>
  );
}
