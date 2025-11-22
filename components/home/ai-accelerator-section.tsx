import { SectionWithMedia } from "@/components/sections/section-with-media";

export function AIAcceleratorSection() {
  return (
    <SectionWithMedia
      title="AI Accelerator"
      description="A 6-week intensive program, with 2.5 weeks spent in San Francisco. We invest alongside our VC partners at the end of the program to help you find product market fit."
      media={{
        type: "image",
        src: "/logos/organizers-posed-photo.jpg",
        alt: "AI Accelerator",
      }}
      cta={{
        text: "Apply Now",
        href: "/accelerator",
      }}
      align="left"
      background="muted"
    />
  );
}
