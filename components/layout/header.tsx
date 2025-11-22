"use client"

import { useState, useEffect } from "react"
import { Menu, X } from 'lucide-react'
import Link from "next/link"
import { usePathname } from 'next/navigation'
import { AgivcLogo } from "@/components/shared/agivc-logo"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Badge } from "@/components/ui/badge"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  const dropdownLinkClass =
    "text-sm font-medium text-foreground hover:text-secondary !bg-transparent !hover:bg-transparent !focus:bg-transparent !focus-visible:bg-transparent data-[active=true]:!bg-transparent data-[state=open]:!bg-transparent px-0 py-0"

  const topLevelLinkClass =
    "text-sm font-medium text-foreground hover:text-secondary px-0 py-0 focus:outline-none focus-visible:outline-none transition-colors"

  const scrollToAnchor = (anchor: string) => {
    if (typeof window === "undefined") return false
    const element = document.getElementById(anchor)
    if (!element) return false
    const headerHeight = 64
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
    const offsetPosition = elementPosition - headerHeight

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    })
    return true
  }

  const getLink = (href: string, anchor?: string) => {
    if (isHomePage && anchor) {
      return `#${anchor}`
    }
    return anchor ? `${href}#${anchor}` : href
  }

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, anchor: string) => {
    if (!isHomePage) {
      return
    }
    e.preventDefault()
    scrollToAnchor(anchor)
    setIsOpen(false)
  }

  useEffect(() => {
    if (typeof window === "undefined") return
    if (!isHomePage) return
    const hash = window.location.hash ? window.location.hash.replace("#", "") : ""
    if (!hash) return

    let attempts = 0
    const maxAttempts = 8

    const attemptScroll = () => {
      if (scrollToAnchor(hash) || attempts >= maxAttempts) {
        return
      }
      attempts += 1
      window.setTimeout(attemptScroll, 100)
    }

    const timeoutId = window.setTimeout(attemptScroll, 100)

    return () => window.clearTimeout(timeoutId)
  }, [isHomePage])

  const handleSolutionsAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, anchor: string) => {
    if (pathname === "/solutions") {
      e.preventDefault()
      setTimeout(() => {
        const element = document.getElementById(anchor)
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
      setIsOpen(false)
    } else {
      setIsOpen(false)
      setTimeout(() => {
        const element = document.getElementById(anchor)
        if (element) {
          const headerHeight = 64
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
          const offsetPosition = elementPosition - headerHeight

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          })
        }
      }, 500)
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="mx-auto max-w-[1400px]">
        <div className="relative flex items-center justify-between h-16 px-4">
          <Link href="/" className="flex-shrink-0 z-10">
            <AgivcLogo mode="light" className="h-20 w-auto" showWordmark={isScrolled} />
          </Link>

          {/* Desktop Menu - Centered */}
          <NavigationMenu viewport={false} className="hidden md:flex absolute left-1/2 -translate-x-1/2">
            <NavigationMenuList className="gap-8">
              <NavigationMenuItem>
                <NavigationMenuTrigger variant="plain" className="text-sm font-medium text-foreground hover:text-secondary h-auto px-0 py-0 focus-visible:ring-0">
                  Forward Deployed Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[250px] gap-4 p-4">
                    <li>
                      <NavigationMenuLink asChild className={dropdownLinkClass}>
                        <Link href="/solutions#building-ai-solutions" onClick={(e) => handleSolutionsAnchorClick(e, "building-ai-solutions")}>
                          Building AI Solutions
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild className={dropdownLinkClass}>
                        <Link href="/solutions#training-your-team" onClick={(e) => handleSolutionsAnchorClick(e, "training-your-team")}>
                          Training Your Team
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild className={dropdownLinkClass}>
                        <Link href="/solutions#ai-champion-program" onClick={(e) => handleSolutionsAnchorClick(e, "ai-champion-program")}>
                          AI Champion Program
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/accelerator" className={`${topLevelLinkClass} flex items-center gap-2`}>
                  Accelerator
                  <Badge variant="secondary">Coming Soon</Badge>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link
                  href={getLink("/", "events")}
                  onClick={(e) => {
                    handleAnchorClick(e, "events")
                    e.currentTarget.blur()
                  }}
                  className={topLevelLinkClass}
                >
                  Events
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/community" className={topLevelLinkClass}>
                  Sponsor
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger variant="plain" className="text-sm font-medium text-foreground hover:text-secondary h-auto px-0 py-0 focus-visible:ring-0">
                  About
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-4 p-4">
                    <li>
                      <NavigationMenuLink asChild className={dropdownLinkClass}>
                        <Link href="/team">
                          Team
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild className={dropdownLinkClass}>
                        <a href="https://drive.google.com/drive/folders/1_QBfatv7365RhtDx8qMmB_UUldu66EwO?usp=sharing" target="_blank" rel="noopener noreferrer">Press Kit</a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Desktop CTA Button - Right Side */}
          <NavigationMenu viewport={false} className="hidden md:flex z-10">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger variant="primary" className="rounded-full px-6 h-10 text-sm font-semibold">
                  Start here
                </NavigationMenuTrigger>
                <NavigationMenuContent className="right-0 left-auto">
                  <ul className="grid w-[200px] gap-4 p-4">
                    <li>
                      <NavigationMenuLink asChild className={`${dropdownLinkClass} whitespace-nowrap`}>
                        <Link href="/solutions">
                          Hire Us
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild className={`${dropdownLinkClass} whitespace-nowrap`}>
                        <Link href="/community">
                          Become A Sponsor
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild className={`${dropdownLinkClass} whitespace-nowrap`}>
                        <Link href="/accelerator">
                          Apply for Accelerator
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild className={`${dropdownLinkClass} whitespace-nowrap`}>
                        <a href="https://discord.gg/6M45X7ySUc" target="_blank" rel="noopener noreferrer">
                          Join Discord
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 z-10" aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-4 px-4">
            <div className="space-y-2">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide px-2">Forward Deployed Services</p>
              <Link
                href="/solutions#building-ai-solutions"
                onClick={(e) => {
                  handleSolutionsAnchorClick(e, "building-ai-solutions")
                  setIsOpen(false)
                }}
                className="block px-2 text-sm font-medium text-foreground hover:text-secondary transition"
              >
                Building AI Solutions
              </Link>
              <Link
                href="/solutions#training-your-team"
                onClick={(e) => {
                  handleSolutionsAnchorClick(e, "training-your-team")
                  setIsOpen(false)
                }}
                className="block px-2 text-sm font-medium text-foreground hover:text-secondary transition"
              >
                Training Your Team
              </Link>
              <Link
                href="/solutions#ai-champion-program"
                onClick={(e) => {
                  handleSolutionsAnchorClick(e, "ai-champion-program")
                  setIsOpen(false)
                }}
                className="block px-2 text-sm font-medium text-foreground hover:text-secondary transition"
              >
                AI Champion Program
              </Link>
            </div>
            <Link
              href="/accelerator"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 px-2 text-sm font-medium text-foreground hover:text-secondary transition"
            >
              Accelerator
              <Badge variant="secondary">Coming Soon</Badge>
            </Link>
            <Link
              href={getLink("/", "events")}
              onClick={(e) => {
                handleAnchorClick(e, "events")
                setIsOpen(false)
              }}
              className="block px-2 text-sm font-medium text-foreground hover:text-secondary transition"
            >
              Events
            </Link>
            <Link
              href="/community"
              onClick={() => setIsOpen(false)}
              className="block px-2 text-sm font-medium text-foreground hover:text-secondary transition"
            >
              Sponsor
            </Link>
            <div className="space-y-2">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide px-2">About</p>
              <Link
                href="/team"
                onClick={() => setIsOpen(false)}
                className="block px-2 text-sm font-medium text-foreground hover:text-secondary transition"
              >
                Team
              </Link>
              <a
                href="https://drive.google.com/drive/folders/1_QBfatv7365RhtDx8qMmB_UUldu66EwO?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="block px-2 text-sm font-medium text-foreground hover:text-secondary transition"
              >
                Press Kit
              </a>
            </div>
            <div className="space-y-2">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide px-2">Start here</p>
              <Link
                href="/solutions"
                onClick={() => setIsOpen(false)}
                className="block px-2 text-sm font-medium text-foreground hover:text-secondary transition"
              >
                Hire Us
              </Link>
              <Link
                href="/community"
                onClick={() => setIsOpen(false)}
                className="block px-2 text-sm font-medium text-foreground hover:text-secondary transition"
              >
                Become A Sponsor
              </Link>
              <Link
                href="/accelerator"
                onClick={() => setIsOpen(false)}
                className="block px-2 text-sm font-medium text-foreground hover:text-secondary transition"
              >
                Apply for Accelerator
              </Link>
              <a
                href="https://discord.gg/6M45X7ySUc"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="block px-2 text-sm font-medium text-foreground hover:text-secondary transition"
              >
                Join Discord
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
