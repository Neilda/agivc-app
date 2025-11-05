import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DirectoryHero } from "@/components/directory-hero"
import { DirectoryOverview } from "@/components/directory-overview"
import { DirectoryFilters } from "@/components/directory-filters"
import { ComingSoonOverlay } from "@/components/coming-soon-overlay"

export const metadata = {
  title: "Founders Directory | AI Canada Fund",
  description: "Discover the founders we support. Connect with innovators in AI and robotics.",
}

export default function DirectoryPage() {
  return (
    <main className="relative bg-background text-foreground">
      <Header />
      <div className="blur-[2px] pointer-events-none">
        <DirectoryHero />
        <DirectoryOverview />
        <DirectoryFilters />
      </div>
      <Footer />
      <ComingSoonOverlay />
    </main>
  )
}
