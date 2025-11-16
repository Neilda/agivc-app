import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SponsorHero } from "@/components/sponsor-hero"
import { SponsorValue } from "@/components/sponsor-value"
import { SponsorAudience } from "@/components/sponsor-audience"
import { SponsorLogos } from "@/components/sponsor-logos"
import { SponsorPrograms } from "@/components/sponsor-programs"
import { SponsorSocialProof } from "@/components/sponsor-social-proof"
import { SponsorInterestCTA } from "@/components/sponsor-interest-cta"

export const metadata = {
  title: "Become a Sponsor | AGIVC",
  description:
    "Partner with Canada's leading AI community. Sponsor meetups, hackathons, newsletters, video series, accelerator programs, and more.",
}

export default function SponsorPage() {
  return (
    <main className="bg-background text-foreground">
      <Header />
      <SponsorHero />
      <SponsorValue />
      <SponsorAudience />
      <SponsorLogos />
      <SponsorPrograms />
      <SponsorSocialProof />
      <SponsorInterestCTA />
      <Footer />
    </main>
  )
}

