"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HomepageHero } from "@/components/homepage-hero"
import { WhoWeAre } from "@/components/who-we-are"
import { WhatWeDo } from "@/components/what-we-do"
import { SponsorPreview } from "@/components/sponsor-preview"
import { VideoQuoteSection } from "@/components/video-quote-section"
import { UpcomingEvents } from "@/components/upcoming-events"

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <Header />
      <HomepageHero />
      <WhoWeAre />
      <WhatWeDo />
      <VideoQuoteSection />
      <SponsorPreview />
      <UpcomingEvents />
      <Footer />
    </main>
  )
}
