import { ThreeCardSection } from "@/components/sections/three-card-section"

export function SponsorPreview() {
  return (
    <ThreeCardSection
      title="You can sponsor us"
      cards={[
        {
          title: "Events, hackathons, conference",
          description: "Sponsor our largest hackathons with 400+ attendees, monthly meetups, and major conferences. Get brand visibility, speaking opportunities, and direct access to Canada's top AI talent.",
          cta: {
            text: "Learn more",
            href: "/community#success-stories",
          },
        },
        {
          title: "Newsletter and Podcast",
          description: "Reach 10K+ subscribers with monthly sponsor spotlights, product announcements, and thought leadership content. Sponsor our founder interview series featuring deep conversations with Canada's most successful AI entrepreneurs.",
          cta: {
            text: "Learn more",
            href: "/community#success-stories",
          },
        },
        {
          title: "AI Accelerator",
          description: "Sponsor our 6-week intensive program with 2.5 weeks in San Francisco. Mentor startups, test your products with founders, and gain early access to the next generation of AI companies.",
          cta: {
            text: "Learn more",
            href: "/community#success-stories",
          },
        },
      ]}
      background="subtle"
    />
  )
}
