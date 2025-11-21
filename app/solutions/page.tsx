import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { SolutionsHero } from "@/components/solutions/solutions-hero"
import { SolutionsCapabilities } from "@/components/solutions/solutions-capabilities"
import { SolutionsCTA } from "@/components/solutions/solutions-cta"
import { SolutionsAnchorScroll } from "@/components/solutions/solutions-anchor-scroll"

export const metadata = {
  title: "AGIVC: Forward Deployed | AI Solutions",
  description:
    "AGIVC Forward Deployed: Custom AI solutions for startups and Fortune 500 companies. From ideation to deployment, we build production-ready AI systems.",
}

export default function SolutionsPage() {
  return (
    <>
      <SolutionsAnchorScroll />
      <Header />
      <main>
        <SolutionsHero />
        <SolutionsCapabilities />
        <SolutionsCTA />
      </main>
      <Footer />
    </>
  )
}
