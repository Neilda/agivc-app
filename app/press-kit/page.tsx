import { Header } from "@/components/layout/header"
import { PressKitHero } from "@/components/press-kit/press-kit-hero"
import { BrandAssets } from "@/components/press-kit/brand-assets"
import { CompanyInfo } from "@/components/about/company-info"
import { MediaContact } from "@/components/press-kit/media-contact"
import { Footer } from "@/components/layout/footer"
import { ComingSoonOverlay } from "@/components/shared/coming-soon-overlay"

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
