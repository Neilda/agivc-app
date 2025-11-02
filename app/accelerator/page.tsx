import { AcceleratorHero } from "@/components/accelerator-hero"
import { ProgramOverview } from "@/components/program-overview"
import { ProgramBenefits } from "@/components/program-benefits"
import { BatchSchedule } from "@/components/batch-schedule"
import { AcceleratorCTA } from "@/components/accelerator-cta"
import { Footer } from "@/components/footer"

export default function AcceleratorPage() {
  return (
    <main className="min-h-screen bg-background">
      <AcceleratorHero />
      <ProgramOverview />
      <ProgramBenefits />
      <BatchSchedule />
      <AcceleratorCTA />
      <Footer />
    </main>
  )
}
