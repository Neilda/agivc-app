import Link from "next/link"
import { ArrowRight } from 'lucide-react'

export function SolutionsCTA() {
  return (
    <section className="py-24 md:py-32 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
          Ready to ship?
        </h2>
        <p className="text-xl text-muted-foreground mb-12 text-balance">
          Tell us what you're building. We'll show you how we can help.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="mailto:info@agiventures.ca"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition group"
          >
            Get in Touch
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/#what-we-do"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-background text-foreground border border-border rounded-lg font-medium hover:bg-muted transition"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  )
}
