import { AcceleratorHero } from "@/components/accelerator-hero"
import { ProgramOverview } from "@/components/program-overview"
import { ProgramBenefits } from "@/components/program-benefits"
import { BatchSchedule } from "@/components/batch-schedule"
import { AcceleratorCTA } from "@/components/accelerator-cta"
import { Footer } from "@/components/footer"
import { ComingSoonOverlay } from "@/components/coming-soon-overlay"
import { Header } from "@/components/header"

export default function AcceleratorPage() {
  return (
    <main className="relative min-h-screen bg-background">
      <Header />
      <div className="blur-[2px] pointer-events-none">
        <AcceleratorHero />
        <ProgramOverview />
        <ProgramBenefits />
        <BatchSchedule />
        <AcceleratorCTA />
      </div>
      <Footer />
      <ComingSoonOverlay />
    </main>
  )
}
