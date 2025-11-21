import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SponsorHero } from "@/components/sponsor/sponsor-hero";
import { SponsorValue } from "@/components/sponsor/sponsor-value";
import { SponsorAudience } from "@/components/sponsor/sponsor-audience";
import { SponsorLogos } from "@/components/sponsor/sponsor-logos";
import { SponsorPrograms } from "@/components/sponsor/sponsor-programs";
import { SponsorSocialProof } from "@/components/sponsor/sponsor-social-proof";
import { SponsorInterestCTA } from "@/components/sponsor/sponsor-interest-cta";

export const metadata = {
  title: "Become a Sponsor | AGIVC",
  description:
    "Partner with Canada's leading AI community. Sponsor meetups, hackathons, newsletters, video series, accelerator programs, and more.",
};

export default function SponsorPage() {
  return (
    <main className="bg-background text-foreground">
      <Header />
      <SponsorHero />
      <SponsorValue />
      <SponsorAudience />
      <SponsorLogos />
      <SponsorPrograms />
      {/* <SponsorSocialProof /> */}
      <SponsorInterestCTA />
      <Footer />
    </main>
  );
}
