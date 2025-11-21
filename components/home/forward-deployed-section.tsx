import { SectionWithMedia } from "@/components/sections/section-with-media";

export function ForwardDeployedSection() {
  return (
    <SectionWithMedia
      title="Forward Deployed"
      description="We build production-ready AI systems, train your teams, and develop AI champions who drive transformation."
      media={{
        type: "image",
        src: "/team/table-laptop-mid-size-team.JPG",
        alt: "Team collaborating",
      }}
      cta={{
        text: "View Solutions",
        href: "/solutions",
      }}
      align="left"
      background="default"
    />
  );
}
