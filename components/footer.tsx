import { Facebook, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-bold mb-4">AGIVC</h3>
            <p className="text-sm text-primary-foreground/70">Investing in Canada's AI and robotics founders.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-primary-foreground/70 hover:text-primary-foreground transition">
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/success-stories"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition"
                >
                  Success Stories
                </Link>
              </li>
              <li>
                <Link href="/press-kit" className="text-primary-foreground/70 hover:text-primary-foreground transition">
                  Press Kit
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm">For Founders</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/accelerator"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition"
                >
                  Accelerator
                </Link>
              </li>
              <li>
                <Link href="/directory" className="text-primary-foreground/70 hover:text-primary-foreground transition">
                  Founders Directory
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-primary-foreground/70 hover:text-primary-foreground transition">
                  Events
                </Link>
              </li>
              <li>
                <a
                  href="https://discord.gg/6M45X7ySUc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition"
                >
                  Join Discord
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/sponsor" className="text-primary-foreground/70 hover:text-primary-foreground transition">
                  Become a Sponsor
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-primary-foreground/70 hover:text-primary-foreground transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-primary-foreground/70 hover:text-primary-foreground transition">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/70">© 2025 AGI Ventures Canada. All rights reserved.</p>
          <div className="flex gap-4">
            <a
              href="#"
              className="text-primary-foreground/70 hover:text-primary-foreground transition"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a
              href="#"
              className="text-primary-foreground/70 hover:text-primary-foreground transition"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="#"
              className="text-primary-foreground/70 hover:text-primary-foreground transition"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
