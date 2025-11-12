"use client"

export function CTA() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance text-primary text-center">Ready to Build the Future?</h2>
        <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto text-balance">
          Whether you're a founder with a bold vision or an LP seeking exceptional opportunities, let's talk.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition">
            Schedule a Call
          </button>
          <a
            href="mailto:hello@venture.vc"
            className="px-8 py-3 border-2 border-primary text-primary rounded-full font-medium hover:bg-primary/5 transition"
          >
            hello@venture.vc
          </a>
        </div>
      </div>
    </section>
  )
}
