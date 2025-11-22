import { Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { AgivcLogo } from "@/components/shared/agivc-logo";

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          <div>
            <AgivcLogo mode="dark" className="h-24 w-auto mb-4" />
            <p className="text-sm text-primary-foreground/70">
              Think in decades. Ship this weekend.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/#about"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition"
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  href="/press-kit"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition"
                >
                  Press Kit
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
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm">Forward Deployed Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/solutions#building-ai-solutions"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition"
                >
                  Building AI Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions#training-your-team"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition"
                >
                  Training Your Team
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions#ai-champion-program"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition"
                >
                  AI Champion Program
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
                <Link
                  href="/#events"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition"
                >
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
            <h4 className="font-semibold mb-4 text-sm">For Sponsors</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/community"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition"
                >
                  Become A Sponsor
                </Link>
              </li>
            </ul>
            <h4 className="font-semibold mb-4 text-sm mt-8">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/privacy"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/70">
            © 2025 AGI Ventures Canada. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/company/agiventurescanada"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/70 hover:text-primary-foreground transition"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
