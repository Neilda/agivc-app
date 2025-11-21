import { SectionWithMedia } from "@/components/sections/section-with-media"

export function SponsorPreview() {
  return (
    <SectionWithMedia
      title="For Sponsors"
      description="Partner with us to gain exclusive access to Canada's top AI founders. Sponsors receive premium placement in our community, featuring opportunities, early product access, and long-term strategic benefits."
      media={{
        type: "image",
        src: "/abstract-illustration-of-ai-technology-and-innovat.jpg",
        alt: "Sponsorship Benefits"
      }}
      cta={{
        text: "Become a Sponsor",
        href: "/sponsor"
      }}
      align="right"
      background="subtle"
    />
  )
}
