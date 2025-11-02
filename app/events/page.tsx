import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { EventsHero } from "@/components/events-hero"
import { EventsList } from "@/components/events-list"
import { PastEvents } from "@/components/past-events"
import { EventsPartners } from "@/components/events-partners"

export const metadata = {
  title: "Events | AI Canada Fund",
  description: "Join us for workshops, demo days, and networking events for AI and robotics founders.",
}

export default function EventsPage() {
  return (
    <main className="bg-background text-foreground">
      <Header />
      <EventsHero />
      <EventsList />
      <PastEvents />
      <EventsPartners />
      <Footer />
    </main>
  )
}
