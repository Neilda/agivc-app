import { AcceleratorHero } from "@/components/accelerator/accelerator-hero"
import { ProgramOverview } from "@/components/accelerator/program-overview"
import { ProgramBenefits } from "@/components/accelerator/program-benefits"
import { BatchSchedule } from "@/components/accelerator/batch-schedule"
import { AcceleratorCTA } from "@/components/accelerator/accelerator-cta"
import { Footer } from "@/components/layout/footer"
import { ComingSoonOverlay } from "@/components/shared/coming-soon-overlay"
import { Header } from "@/components/layout/header"

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
