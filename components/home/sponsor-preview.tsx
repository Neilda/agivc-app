import { SectionWithMedia } from "@/components/sections/section-with-media"

export function SponsorPreview() {
  return (
    <SectionWithMedia
      title="You can sponsor us"
      description="Sponsor our events, newsletters, and hackathons. Test your AI products with our developer community and reach your target audience—whether you're looking to connect with developers, executives, or public sector leaders."
      media={{
        type: "image",
        src: "/sponsors/solace-booth.JPG",
        alt: "Sponsorship Benefits"
      }}
      cta={{
        text: "Sponsor success stories",
        href: "/sponsor#success-stories"
      }}
      align="right"
      background="subtle"
    />
  )
}
