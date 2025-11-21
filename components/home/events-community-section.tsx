import { SectionWithMedia } from "@/components/sections/section-with-media"

export function EventsCommunitySection() {
  return (
    <SectionWithMedia
      title="Events & Community"
      description="Our largest hackathons have 400 attendees and are usually held at Invest Ottawa. We also run meetups and conferences, and work with sponsors like LangChain, Tavily, Vercel, and Solace to foster the AI ecosystem."
      media={{
        type: "image",
        src: "/home/DSCF5379.png",
        alt: "Community Event"
      }}
      cta={{
        text: "Join Community",
        href: "/directory"
      }}
      align="right"
      background="muted"
    />
  )
}
