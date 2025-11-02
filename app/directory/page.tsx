import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DirectoryHero } from "@/components/directory-hero"
import { DirectoryOverview } from "@/components/directory-overview"
import { DirectoryFilters } from "@/components/directory-filters"

export const metadata = {
  title: "Founders Directory | AI Canada Fund",
  description: "Discover the founders we support. Connect with innovators in AI and robotics.",
}

export default function DirectoryPage() {
  return (
    <main className="bg-background text-foreground">
      <Header />
      <DirectoryHero />
      <DirectoryOverview />
      <DirectoryFilters />
      <Footer />
    </main>
  )
}
