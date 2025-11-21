import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { TeamHero } from "@/components/team/team-hero"
import { TeamGrid } from "@/components/team/team-grid"

export const metadata = {
  title: "Team | AGI Ventures Canada",
  description: "Meet the team behind AGI Ventures Canada. We're dedicated to supporting Canadian AI and robotics founders.",
}

export default function TeamPage() {
  return (
    <>
      <Header />
      <main className="bg-background text-foreground">
        <TeamHero />
        <TeamGrid />
      </main>
      <Footer />
    </>
  )
}

