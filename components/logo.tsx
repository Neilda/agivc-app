import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  href?: string
  variant?: "default" | "footer" | "transparent"
  width?: number
  height?: number
}

export function Logo({
  className,
  href = "/",
  variant = "default",
  width,
  height,
}: LogoProps) {
  const logoSrc =
    variant === "footer"
      ? "/logo-footer.svg"
      : variant === "transparent"
      ? "/logo-transparent.svg"
      : "/logo-nav.svg"

  const defaultWidth = variant === "footer" ? 140 : variant === "transparent" ? 120 : 140
  const defaultHeight = variant === "footer" ? 80 : variant === "transparent" ? 70 : 60

  const logoContent = (
    <Image
      src={logoSrc}
      alt="AGI Ventures Canada"
      width={width || defaultWidth}
      height={height || defaultHeight}
      className={cn("object-contain", className)}
      priority
    />
  )

  if (href) {
    return (
      <Link href={href} className="flex-shrink-0">
        {logoContent}
      </Link>
    )
  }

  return logoContent
}

