import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { SuccessStoriesHero } from "@/components/success-stories/success-stories-hero"
import { CaseStudiesGrid } from "@/components/success-stories/case-studies-grid"
import { ComingSoonOverlay } from "@/components/shared/coming-soon-overlay"

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
