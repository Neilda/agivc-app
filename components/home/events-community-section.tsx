import { SectionWithMedia } from "@/components/sections/section-with-media";

export function EventsCommunitySection() {
  return (
    <SectionWithMedia
      id="events-community"
      title="Events & Community"
      description="Our largest hackathons have 400 attendees and are usually held at Invest Ottawa."
      media={{
        type: "image",
        src: "/hackathon-crowd-with-laptop.JPG",
        alt: "Community Event",
      }}
      cta={{
        text: "Join Community",
        href: "/directory",
      }}
      align="right"
      background="muted"
    />
  );
}
