"use client"

import Image from "next/image"
import { useEffect, useMemo, useState } from "react"

interface AgivcLogoProps {
  mode?: "light" | "dark" | "auto"
  className?: string
  width?: number
  height?: number
  showWordmark?: boolean
}

export function AgivcLogo({ mode = "auto", className = "", width = 400, height = 133, showWordmark = false }: AgivcLogoProps) {
  const [mounted, setMounted] = useState(false)
  const [logoMode, setLogoMode] = useState<"light" | "dark">(
    mode === "light" || mode === "dark" ? mode : "light"
  )

  useEffect(() => {
    setMounted(true)

    if (mode === "auto") {
      const updateLogoMode = () => {
        const isDark = document.documentElement.classList.contains("dark")
        setLogoMode(isDark ? "dark" : "light")
      }

      updateLogoMode()

      const observer = new MutationObserver(updateLogoMode)
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["class"],
      })

      return () => observer.disconnect()
    } else if (mode === "light" || mode === "dark") {
      setLogoMode(mode)
    }
  }, [mode])

  const containerClassName = useMemo(() => {
    const base = "relative inline-flex items-center"
    const groupClass = "group"
    const scrolledClass = showWordmark ? "scrolled" : ""
    return [base, groupClass, scrolledClass, className].filter(Boolean).join(" ")
  }, [className, showWordmark])

  if (!mounted && mode === "auto") {
    return (
      <div className={containerClassName}>
        <Image
          src="/logos/agivc-logo-nov-25-light.png"
          alt="AGIVC"
          width={width}
          height={height}
          className="h-full w-auto"
        />
      </div>
    )
  }

  const logoSrc = `/logos/agivc-logo-nov-25-${logoMode}.png`
  const wordmarkSrc = `/logos/agivc-wordmark-nov-25-${logoMode}.png`

  return (
    <div className={`${containerClassName} agivc-logo-group`}>
      <Image
        src={logoSrc}
        alt="AGIVC"
        width={width}
        height={height}
        className="agivc-logo-main h-full w-auto"
      />
      <Image
        src={wordmarkSrc}
        alt="AGIVC Wordmark"
        width={width}
        height={height}
        className="agivc-logo-wordmark absolute top-1/2 left-0 -translate-y-1/2 h-full w-auto origin-left scale-[1.8]"
      />
    </div>
  )
}

