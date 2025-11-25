import { ThreeCardSection } from "@/components/sections/three-card-section"

export function SponsorPreview() {
  return (
    <ThreeCardSection
      title="You can sponsor us"
      cards={[
        {
          title: "Events, hackathons, conference",
          description: "Back our flagship hackathons, meetups, and conferences to put your brand in front of Canada's AI builders.",
          cta: {
            text: "Learn more",
            href: "/community#success-stories",
          },
        },
        {
          title: "Newsletter and Podcast",
          description: "Reach 10K+ subscribers through sponsor spotlights and join founder interviews on our podcast.",
          cta: {
            text: "Learn more",
            href: "/community#success-stories",
          },
        },
        {
          title: "AI Accelerator",
          description: "Fuel our 3-month accelerator, mentor founders, and get early access to emerging AI products.",
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
