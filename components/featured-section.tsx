"use client"

export function FeaturedSection() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-muted/50 rounded-[2rem] p-8 md:p-12 lg:p-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Why we invest in founders</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                Great founders don't just build businesses—they reshape industries. We back visionary leaders who
                combine deep domain expertise with audacious ambition.
              </p>
              <button className="inline-flex px-6 py-3 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:bg-primary/90 transition">
                Learn Our Philosophy
              </button>
            </div>

            <div className="bg-secondary/20 rounded-3xl aspect-video flex items-center justify-center">
              <div className="text-center text-secondary/40">
                <svg viewBox="0 0 200 200" className="w-24 h-24 mx-auto">
                  <path d="M 60 80 Q 100 40 140 80" fill="none" stroke="currentColor" strokeWidth="3" />
                  <circle cx="100" cy="120" r="20" fill="currentColor" opacity="0.3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
