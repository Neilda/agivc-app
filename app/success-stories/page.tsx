import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SuccessStoriesHero } from "@/components/success-stories-hero"
import { CaseStudiesGrid } from "@/components/case-studies-grid"

export const metadata = {
  title: "Success Stories | AI Canada Fund",
  description: "Discover the impact our founders are making in AI and robotics.",
}

export default function SuccessStoriesPage() {
  return (
    <main className="bg-background text-foreground">
      <Header />
      <SuccessStoriesHero />
      <CaseStudiesGrid />
      <Footer />
    </main>
  )
}
