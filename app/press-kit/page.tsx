import { Header } from "@/components/header"
import { PressKitHero } from "@/components/press-kit-hero"
import { BrandAssets } from "@/components/brand-assets"
import { CompanyInfo } from "@/components/company-info"
import { MediaContact } from "@/components/media-contact"
import { Footer } from "@/components/footer"

export default function PressKitPage() {
  return (
    <>
      <Header />
      <main>
        <PressKitHero />
        <CompanyInfo />
        <BrandAssets />
        <MediaContact />
        <Footer />
      </main>
    </>
  )
}
