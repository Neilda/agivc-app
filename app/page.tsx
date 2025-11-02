"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HomepageHero } from "@/components/homepage-hero"
import { WhoWeAre } from "@/components/who-we-are"
import { WhatWeDo } from "@/components/what-we-do"
import { ImpactSnapshots } from "@/components/impact-snapshots"
import { SponsorPreview } from "@/components/sponsor-preview"
import { UpcomingEvents } from "@/components/upcoming-events"
import { FounderSpotlights } from "@/components/founder-spotlights"
import { NewsletterPrompt } from "@/components/newsletter-prompt"

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <Header />
      <HomepageHero />
      <WhoWeAre />
      <WhatWeDo />
      <ImpactSnapshots />
      <SponsorPreview />
      <UpcomingEvents />
      <FounderSpotlights />
      <NewsletterPrompt />
      <Footer />
    </main>
  )
}
