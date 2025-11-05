import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SuccessStoriesHero } from "@/components/success-stories-hero"
import { CaseStudiesGrid } from "@/components/case-studies-grid"
import { ComingSoonOverlay } from "@/components/coming-soon-overlay"

export const metadata = {
  title: "Success Stories | AI Canada Fund",
  description: "Discover the impact our founders are making in AI and robotics.",
}

export default function SuccessStoriesPage() {
  return (
    <main className="relative bg-background text-foreground">
      <Header />
      <div className="blur-[2px] pointer-events-none">
        <SuccessStoriesHero />
        <CaseStudiesGrid />
      </div>
      <Footer />
      <ComingSoonOverlay />
    </main>
  )
}
