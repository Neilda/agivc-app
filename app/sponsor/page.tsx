import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SponsorHero } from "@/components/sponsor-hero"
import { SponsorValue } from "@/components/sponsor-value"
import { SponsorBenefits } from "@/components/sponsor-benefits"
import { SponsorPackages } from "@/components/sponsor-packages"
import { SponsorAudience } from "@/components/sponsor-audience"
import { SponsorSocialProof } from "@/components/sponsor-social-proof"
import { SponsorCTA } from "@/components/sponsor-cta"

export const metadata = {
  title: "Become a Sponsor | AI Canada Fund",
  description:
    "Partner with Canada's leading AI and robotics fund. Access top founders and build strategic relationships.",
}

export default function SponsorPage() {
  return (
    <main className="bg-background text-foreground">
      <Header />
      <SponsorHero />
      <SponsorValue />
      <SponsorBenefits />
      <SponsorPackages />
      <SponsorAudience />
      <SponsorSocialProof />
      <SponsorCTA />
      <Footer />
    </main>
  )
}
