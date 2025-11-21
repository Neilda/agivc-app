"use client"

import { useState } from "react"
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

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === "/"
  const dropdownLinkClass =
    "text-sm font-medium text-foreground hover:text-secondary !bg-transparent !hover:bg-transparent !focus:bg-transparent data-[active=true]:!bg-transparent data-[state=open]:!bg-transparent px-0 py-0"

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
            <AgivcLogo mode="light" className="h-20 w-auto" />
          </Link>

          {/* Desktop Menu - Centered */}
          <NavigationMenu viewport={false} className="hidden md:flex absolute left-1/2 -translate-x-1/2">
            <NavigationMenuList className="gap-8">
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={dropdownLinkClass}>
                  <Link href="/solutions">Solutions</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger variant="plain" className="text-sm font-medium text-foreground hover:text-secondary h-auto px-0 py-0 focus-visible:ring-0">
                  Community
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-4 p-4">
                    <li>
                      <NavigationMenuLink asChild className={dropdownLinkClass}>
                        <Link href={getLink("/", "events")} onClick={(e) => handleAnchorClick(e, "events")}>
                          Events
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild className={dropdownLinkClass}>
                        <Link href="/directory">Founders Directory</Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild className={dropdownLinkClass}>
                        <Link href="/success-stories">Success Stories</Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger variant="plain" className="text-sm font-medium text-foreground hover:text-secondary h-auto px-0 py-0 focus-visible:ring-0">
                  About
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-4 p-4">
                    <li>
                      <NavigationMenuLink asChild className={dropdownLinkClass}>
                        <Link href={getLink("/", "about")} onClick={(e) => handleAnchorClick(e, "about")}>
                          About AGIVC
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild className={dropdownLinkClass}>
                        <Link href={getLink("/", "mission")} onClick={(e) => handleAnchorClick(e, "mission")}>
                          Mission & Values
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild className={dropdownLinkClass}>
                        <Link href="/team">
                          Team
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild className={dropdownLinkClass}>
                        <Link href="/press-kit">Press Kit</Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild className={dropdownLinkClass}>
                  <Link href="/sponsor">Sponsor</Link>
                </NavigationMenuLink>
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
                        <Link href="/sponsor">
                          Become a Sponsor
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
                href="/team"
                onClick={() => setIsOpen(false)}
                className="block px-2 text-sm font-medium text-foreground hover:text-secondary transition"
              >
                Team
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
