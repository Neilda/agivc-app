import { SectionWithMedia } from "@/components/sections/section-with-media"

export function WhoWeAre() {
  return (
    <SectionWithMedia
      id="about"
      title="Who we are"
      description="We started as Canada's first AI Tinkerers chapter, growing from 30 to 1500 builders. Today, we're still a community—renamed AGIVC to provide solutions, accelerator programs, and investments."
      media={{
        type: "image",
        src: "/team-collaborating-on-ai-project-with-modern-techn.jpg",
        alt: "Team collaborating"
      }}
      cta={{
        text: "Meet the team",
        href: "/about"
      }}
      align="right"
      background="muted"
    />
  )
}
