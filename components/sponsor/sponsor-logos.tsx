import Image from "next/image"

export function SponsorLogos() {
  const logos = [
    { name: "Vercel", src: "/logos/vercel-logotype-light.png", year: "2025", size: "h-8" },
    { name: "Factory", src: "/logos/factory-light.png", year: "2024", size: "h-12" },
    { name: "Windsurf", src: "/logos/windsurf-light.png", year: "2025", size: "h-24" },
    { name: "Zapier", src: "/logos/zapier-light.png", year: "2024", size: "h-12" },
    { name: "Ross Video", src: "/logos/ross-video-light.webp", year: "2024", size: "h-12" },
    { name: "Solace", src: "/logos/solace-light.png", year: "2025", size: "h-12" },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          <div className="flex items-center gap-3 pt-2">
            <div className="w-3 h-3 bg-primary rounded-sm"></div>
            <h2 className="text-sm font-medium text-foreground/60 uppercase tracking-wide">Our Sponsors</h2>
          </div>
          <div className="grid grid-cols-3 gap-4 flex-1">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="p-6 bg-muted/30 rounded-xl border border-border flex flex-col items-center justify-between aspect-square relative"
              >
                <div className="flex-1 flex items-center justify-center w-full">
                  <div className={`relative w-full ${logo.size} grayscale`}>
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      fill
                      className="object-contain rounded-[4px]"
                    />
                  </div>
                </div>
                <p className="text-xs text-foreground/60 self-end">/{logo.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
