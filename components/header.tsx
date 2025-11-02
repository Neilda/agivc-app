"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex-shrink-0">
            <h1 className="text-xl font-bold text-foreground">AI Canada Fund</h1>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-8 items-center">
            <Link href="/sponsor" className="text-sm font-medium text-foreground hover:text-secondary transition">
              Sponsor
            </Link>
            <Link href="/events" className="text-sm font-medium text-foreground hover:text-secondary transition">
              Events
            </Link>
            <Link href="/about" className="text-sm font-medium text-foreground hover:text-secondary transition">
              About
            </Link>
            <Link
              href="/sponsor"
              className="px-6 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:bg-primary/90 transition"
            >
              Become a Sponsor
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2" aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-4">
            <Link href="/sponsor" className="block text-sm font-medium text-foreground hover:text-secondary transition">
              Sponsor
            </Link>
            <Link href="/events" className="block text-sm font-medium text-foreground hover:text-secondary transition">
              Events
            </Link>
            <Link href="/about" className="block text-sm font-medium text-foreground hover:text-secondary transition">
              About
            </Link>
            <Link
              href="/sponsor"
              className="block w-full px-6 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:bg-primary/90 transition text-center"
            >
              Become a Sponsor
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
