import { SectionWithMedia } from "@/components/sections/section-with-media"

export function WhoWeAre() {
  return (
    <SectionWithMedia
      id="about"
      title="Who we are"
      description="We started as Canada's first AI Tinkerers chapter, growing from 30 to 1500 builders. Today, we're still a community—renamed AGIVC to provide solutions, accelerator programs, and investments."
      media={{
        type: "image",
        src: "/team/table-laptop-small-team.JPG",
        alt: "Team collaborating"
      }}
      cta={{
        text: "Learn more",
        href: "/team"
      }}
      align="right"
      background="muted"
    />
  )
}
