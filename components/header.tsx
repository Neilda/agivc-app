"use client"

import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import Link from "next/link"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="mx-auto">
        <div className="flex justify-between items-center h-16 px-4">
          <Link href="/" className="flex-shrink-0">
            <h1 className="text-xl font-bold text-foreground">AGIVC</h1>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-8 items-center">
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
                        href="/events"
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
                        href="/about"
                        className="block px-4 py-2 text-sm text-foreground hover:bg-muted rounded-lg transition"
                      >
                        About AGIVC
                      </Link>
                      <Link
                        href="/about#mission"
                        className="block px-4 py-2 text-sm text-foreground hover:bg-muted rounded-lg transition"
                      >
                        Mission & Values
                      </Link>
                      <Link
                        href="/about#team"
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

            <Link href="/sponsor" className="text-sm font-medium text-foreground hover:text-secondary transition">
              Sponsor
            </Link>

            <div
              className="relative py-4 -my-4"
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
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2" aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-4 px-4">
            <div className="space-y-2">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide px-2">Community</p>
              <Link
                href="/events"
                className="block px-2 text-sm font-medium text-foreground hover:text-secondary transition"
              >
                Events
              </Link>
              <Link
                href="/directory"
                className="block px-2 text-sm font-medium text-foreground hover:text-secondary transition"
              >
                Founders Directory
              </Link>
              <Link
                href="/success-stories"
                className="block px-2 text-sm font-medium text-foreground hover:text-secondary transition"
              >
                Success Stories
              </Link>
            </div>
            <div className="space-y-2">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide px-2">About</p>
              <Link
                href="/about"
                className="block px-2 text-sm font-medium text-foreground hover:text-secondary transition"
              >
                About AGIVC
              </Link>
              <Link
                href="/about#mission"
                className="block px-2 text-sm font-medium text-foreground hover:text-secondary transition"
              >
                Mission & Values
              </Link>
              <Link
                href="/about#team"
                className="block px-2 text-sm font-medium text-foreground hover:text-secondary transition"
              >
                Team & Partners
              </Link>
              <Link
                href="/press-kit"
                className="block px-2 text-sm font-medium text-foreground hover:text-secondary transition"
              >
                Press Kit
              </Link>
            </div>
            <Link
              href="/sponsor"
              className="block px-2 text-sm font-medium text-foreground hover:text-secondary transition"
            >
              Sponsor
            </Link>
            <div className="space-y-2">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide px-2">Start here</p>
              <Link
                href="/sponsor"
                className="block px-2 text-sm font-medium text-foreground hover:text-secondary transition"
              >
                Become a Sponsor
              </Link>
              <Link
                href="/accelerator"
                className="block px-2 text-sm font-medium text-foreground hover:text-secondary transition"
              >
                Apply for Accelerator
              </Link>
              <a
                href="https://discord.gg/6M45X7ySUc"
                target="_blank"
                rel="noopener noreferrer"
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
