"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function SolutionsAnchorScroll() {
  const pathname = usePathname()

  useEffect(() => {
    if (pathname === "/solutions") {
      const hash = window.location.hash.replace("#", "")
      if (hash) {
        setTimeout(() => {
          const element = document.getElementById(hash)
          if (element) {
            const headerHeight = 64
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
            const offsetPosition = elementPosition - headerHeight

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            })
          }
        }, 100)
      }
    }
  }, [pathname])

  return null
}

