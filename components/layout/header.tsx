"use client"

import { useState } from "react"
import { Menu, X, ChevronDown } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"
import { usePathname } from 'next/navigation'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  const getLink = (href: string, anchor?: string) => {
    if (isHomePage && anchor) {
      return `#${anchor}`
    }
    return anchor ? `${href}#${anchor}` : href
  }

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, anchor: string) => {
    if (isHomePage) {
      e.preventDefault()
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
      setIsOpen(false)
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="mx-auto max-w-[1400px]">
        <div className="relative flex items-center justify-between h-16 px-4">
          <Link href="/" className="flex-shrink-0 z-10">
            <Image
              src="/logos/agivc-logo-nov-25-light.png"
              alt="AGIVC"
              width={400}
              height={133}
              className="h-20 w-auto"
            />
          </Link>

          {/* Desktop Menu - Centered */}
          <nav className="hidden md:flex gap-8 items-center absolute left-1/2 -translate-x-1/2">
            <Link
              href="/solutions"
              className="text-sm font-medium text-foreground hover:text-secondary transition"
            >
              Solutions
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown("community")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-secondary transition h-16">
                Community
                <ChevronDown
                  size={16}
                  className={`transition-transform ${openDropdown === "community" ? "rotate-180" : ""}`}
                />
              </button>
              {openDropdown === "community" && (
                <div className="absolute top-12 left-0 w-64">
                  <div className="bg-background border border-border rounded-xl shadow-lg py-4 px-2">
                    <div className="space-y-1">
                      <Link
                        href={getLink("/", "events")}
                        onClick={(e) => handleAnchorClick(e, "events")}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-muted rounded-lg transition"
                      >
                        Events
                      </Link>
                      <Link
                        href="/directory"
                        className="block px-4 py-2 text-sm text-foreground hover:bg-muted rounded-lg transition"
                      >
                        Founders Directory
                      </Link>
                      <Link
                        href="/success-stories"
                        className="block px-4 py-2 text-sm text-foreground hover:bg-muted rounded-lg transition"
                      >
                        Success Stories
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown("about")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-secondary transition h-16">
                About
                <ChevronDown
                  size={16}
                  className={`transition-transform ${openDropdown === "about" ? "rotate-180" : ""}`}
                />
              </button>
              {openDropdown === "about" && (
                <div className="absolute top-12 left-0 w-64">
                  <div className="bg-background border border-border rounded-xl shadow-lg py-4 px-2">
                    <div className="space-y-1">
                      <Link
                        href={getLink("/", "about")}
                        onClick={(e) => handleAnchorClick(e, "about")}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-muted rounded-lg transition"
                      >
                        About AGIVC
                      </Link>
                      <Link
                        href={getLink("/", "mission")}
                        onClick={(e) => handleAnchorClick(e, "mission")}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-muted rounded-lg transition"
                      >
                        Mission & Values
                      </Link>
                      <Link
                        href={getLink("/", "team")}
                        onClick={(e) => handleAnchorClick(e, "team")}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-muted rounded-lg transition"
                      >
                        Team & Partners
                      </Link>
                      <Link
                        href="/press-kit"
                        className="block px-4 py-2 text-sm text-foreground hover:bg-muted rounded-lg transition"
                      >
                        Press Kit
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/sponsor"
              className="text-sm font-medium text-foreground hover:text-secondary transition"
            >
              Sponsor
            </Link>
          </nav>

          {/* Desktop CTA Button - Right Side */}
          <div className="hidden md:flex items-center gap-4 z-10">
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown("start")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition flex items-center gap-1">
                Start here
                <ChevronDown
                  size={16}
                  className={`transition-transform ${openDropdown === "start" ? "rotate-180" : ""}`}
                />
              </button>
              {openDropdown === "start" && (
                <div className="absolute top-full right-0 w-auto min-w-[200px] pt-2">
                  <div className="bg-background border border-border rounded-xl shadow-lg py-4 px-2">
                    <div className="space-y-1">
                      <Link
                        href="/sponsor"
                        className="block px-4 py-2 text-sm text-foreground hover:bg-muted rounded-lg transition whitespace-nowrap"
                      >
                        Become a Sponsor
                      </Link>
                      <Link
                        href="/accelerator"
                        className="block px-4 py-2 text-sm text-foreground hover:bg-muted rounded-lg transition whitespace-nowrap"
                      >
                        Apply for Accelerator
                      </Link>
                      <a
                        href="https://discord.gg/6M45X7ySUc"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-2 text-sm text-foreground hover:bg-muted rounded-lg transition whitespace-nowrap"
                      >
                        Join Discord
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 z-10" aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-4 px-4">
            <Link
              href="/solutions"
              onClick={() => setIsOpen(false)}
              className="block px-2 text-sm font-medium text-foreground hover:text-secondary transition"
            >
              Solutions
            </Link>

            <div className="space-y-2">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide px-2">Community</p>
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
                href="/directory"
                onClick={() => setIsOpen(false)}
                className="block px-2 text-sm font-medium text-foreground hover:text-secondary transition"
              >
                Founders Directory
              </Link>
              <Link
                href="/success-stories"
                onClick={() => setIsOpen(false)}
                className="block px-2 text-sm font-medium text-foreground hover:text-secondary transition"
              >
                Success Stories
              </Link>
            </div>
            <div className="space-y-2">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide px-2">About</p>
              <Link
                href={getLink("/", "about")}
                onClick={(e) => {
                  handleAnchorClick(e, "about")
                  setIsOpen(false)
                }}
                className="block px-2 text-sm font-medium text-foreground hover:text-secondary transition"
              >
                About AGIVC
              </Link>
              <Link
                href={getLink("/", "mission")}
                onClick={(e) => {
                  handleAnchorClick(e, "mission")
                  setIsOpen(false)
                }}
                className="block px-2 text-sm font-medium text-foreground hover:text-secondary transition"
              >
                Mission & Values
              </Link>
              <Link
                href={getLink("/", "team")}
                onClick={(e) => {
                  handleAnchorClick(e, "team")
                  setIsOpen(false)
                }}
                className="block px-2 text-sm font-medium text-foreground hover:text-secondary transition"
              >
                Team & Partners
              </Link>
              <Link
                href="/press-kit"
                onClick={() => setIsOpen(false)}
                className="block px-2 text-sm font-medium text-foreground hover:text-secondary transition"
              >
                Press Kit
              </Link>
            </div>
            <Link
              href="/sponsor"
              onClick={() => setIsOpen(false)}
              className="block px-2 text-sm font-medium text-foreground hover:text-secondary transition"
            >
              Sponsor
            </Link>
            <div className="space-y-2">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide px-2">Start here</p>
              <Link
                href="/sponsor"
                onClick={() => setIsOpen(false)}
                className="block px-2 text-sm font-medium text-foreground hover:text-secondary transition"
              >
                Become a Sponsor
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
