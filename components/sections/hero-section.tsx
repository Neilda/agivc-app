import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface HeroSectionProps {
  children: ReactNode
  background?: "default" | "muted" | "subtle"
  className?: string
}

export function HeroSection({ 
  children, 
  background = "default",
  className 
}: HeroSectionProps) {
  const hasCustomPadding = className?.includes("pt-") || className?.includes("pb-") || className?.includes("py-")
  
  return (
    <section className={cn(
      "relative overflow-hidden",
      !hasCustomPadding && "py-32 md:py-40 lg:py-48",
      background === "muted" && "bg-muted/30",
      background === "subtle" && "bg-muted/10",
      className
    )}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  )
}
