import { Header } from "@/components/header"
import { PressKitHero } from "@/components/press-kit-hero"
import { BrandAssets } from "@/components/brand-assets"
import { CompanyInfo } from "@/components/company-info"
import { MediaContact } from "@/components/media-contact"
import { Footer } from "@/components/footer"
import { ComingSoonOverlay } from "@/components/coming-soon-overlay"

export default function PressKitPage() {
  return (
    <div className="relative">
      <Header />
      <main className="blur-[2px] pointer-events-none">
        <PressKitHero />
        <CompanyInfo />
        <BrandAssets />
        <MediaContact />
      </main>
      <Footer />
      <ComingSoonOverlay />
    </div>
  )
}
