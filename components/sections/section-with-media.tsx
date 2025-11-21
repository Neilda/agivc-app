import { ReactNode } from "react"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"

interface SectionWithMediaProps {
  title: string
  description: string
  media: {
    type: "image"
    src: string
    alt: string
  } | {
    type: "video"
    src: string
    title: string
  } | {
    type: "custom"
    content: ReactNode
  }
  cta?: {
    text: string
    href: string
  }
  align?: "left" | "right"
  background?: "default" | "muted" | "subtle"
  className?: string
  children?: ReactNode
  id?: string
}

export function SectionWithMedia({
  title,
  description,
  media,
  cta,
  align = "left",
  background = "default",
  className,
  children,
  id,
}: SectionWithMediaProps) {
  return (
    <section id={id} className={cn(
      "py-16 md:py-20 lg:py-24 overflow-hidden",
      background === "muted" && "bg-muted/30",
      background === "subtle" && "bg-muted/10",
      className
    )}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-4 lg:gap-8 items-center min-h-[500px] lg:min-h-[600px]">
          
          {/* Text Content */}
          <div className={cn(
            "flex flex-col justify-center lg:col-span-4",
            align === "right" ? "lg:col-start-9 lg:row-start-1" : "lg:col-start-1"
          )}>
            <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-foreground mb-2 text-balance leading-tight">
              {title}
            </h2>
            <p className="text-xl sm:text-2xl font-medium tracking-tight text-foreground/50 mb-6 text-balance leading-tight">
              {description}
            </p>
            {children}
            {cta && (
              <div className="mt-2">
                <Link href={cta.href} className="inline-block group">
                  <span className="inline-flex items-center text-primary font-medium text-base hover:opacity-80 transition-opacity gap-2">
                    <span className="leading-none">{cta.text}</span>
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1 flex-shrink-0" />
                  </span>
                </Link>
              </div>
            )}
          </div>

          {/* Media Content */}
          <div className={cn(
            "relative w-full aspect-square rounded-sm border border-border/50 overflow-hidden lg:col-span-8",
            align === "right" ? "lg:col-start-1 lg:row-start-1" : "lg:col-start-5"
          )}>
            {media.type === "image" && (
              <>
                <div className="absolute inset-0 bg-muted/20" />
                <Image
                  src={media.src}
                  alt={media.alt}
                  fill
                  className="object-cover rounded-[4px]"
                />
              </>
            )}
            
            {media.type === "video" && (
              <div className="absolute inset-0 flex items-center justify-center bg-muted/20">
                <div className="w-full aspect-video max-h-full">
                  <iframe
                    src={media.src}
                    title={media.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            )}
            
            {media.type === "custom" && media.content}
            
            <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-sm pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  )
}
