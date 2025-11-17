import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SolutionsHero } from "@/components/solutions-hero"
import { SolutionsCapabilities } from "@/components/solutions-capabilities"
import { SolutionsProcess } from "@/components/solutions-process"
import { SolutionsCTA } from "@/components/solutions-cta"

export const metadata = {
  title: "AGIVC: Forward Deployed | AI Solutions",
  description:
    "AGIVC Forward Deployed: Custom AI solutions for startups and Fortune 500 companies. From ideation to deployment, we build production-ready AI systems.",
}

export default function SolutionsPage() {
  return (
    <>
      <Header />
      <main>
        <SolutionsHero />
        <SolutionsCapabilities />
        <SolutionsProcess />
        <SolutionsCTA />
      </main>
      <Footer />
    </>
  )
}
