import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about-hero"
import { MissionValues } from "@/components/mission-values"
import { TeamAndPartners } from "@/components/team-and-partners"
import { FoundersDirectoryPreview } from "@/components/founders-directory-preview"
import { ContactSection } from "@/components/contact-section"
import { HashScrollHandler } from "@/components/hash-scroll-handler"

export const metadata = {
  title: "About Us | AI Canada Fund",
  description: "Learn about our mission to support Canada's leading AI and robotics founders.",
}

export default function AboutPage() {
  return (
    <main className="bg-background text-foreground">
      <HashScrollHandler />
      <Header />
      <AboutHero />
      <MissionValues />
      <TeamAndPartners />
      <FoundersDirectoryPreview />
      <ContactSection />
      <Footer />
    </main>
  )
}
