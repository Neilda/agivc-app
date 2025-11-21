import { SectionWithMedia } from "@/components/sections/section-with-media"

export function ForwardDeployedSection() {
  return (
    <SectionWithMedia
      title="Forward Deployed"
      description="We build production-ready AI systems, train your teams, and develop AI champions who drive transformation. Real builders—not consultants with demos—working with startups to Fortune 500."
      media={{
        type: "image",
        src: "/abstract-illustration-of-ai-technology-and-innovat.jpg",
        alt: "AI Technology Illustration"
      }}
      cta={{
        text: "View Solutions",
        href: "/solutions"
      }}
      align="left"
      background="default"
    />
  )
}
