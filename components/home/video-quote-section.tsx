import { SectionWithMedia } from "@/components/sections/section-with-media"
import Image from "next/image"

export function VideoQuoteSection() {
  return (
    <SectionWithMedia
      title="Where you live shouldn't matter"
      description="No matter where you are, if you ship great work, we will find you. Location doesn't limit your potential—what you build does."
      media={{
        type: "video",
        src: "https://www.youtube.com/embed/L3Oo-vQdOZU?controls=0&modestbranding=1&rel=0&showinfo=0",
        title: "AGIVC Video"
      }}
      align="right"
      background="muted"
    >
      <div className="mt-8 pl-6 border-l-2 border-border/60">
        <blockquote className="text-lg sm:text-xl font-medium tracking-tight text-foreground mb-6 text-balance leading-tight">
          You can live in Iowa, you can live in Ottawa, you can live anywhere in the world, and all that matters
          is what you ship.
        </blockquote>
        <div className="flex items-center gap-3">
          <div className="relative w-12 h-12 rounded-sm overflow-hidden flex-shrink-0">
            <Image
              src="/headshots/lee-rob.png"
              alt="Lee Robinson"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <div className="text-base font-medium text-foreground">Lee Robinson</div>
            <div className="text-sm text-foreground/50">Head of AI Education at Cursor</div>
          </div>
        </div>
      </div>
    </SectionWithMedia>
  )
}
