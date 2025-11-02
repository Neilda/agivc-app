"use client"

export function Hero() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-balance">
              Investing in{" "}
              <span className="underline decoration-secondary decoration-4 underline-offset-4">visionary founders</span>
            </h1>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
              We partner with exceptional entrepreneurs building transformative companies. We provide capital, strategic
              guidance, and deep networks to fuel growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition">
                Start Your Journey
              </button>
              <button className="px-8 py-3 border-2 border-primary text-primary rounded-full font-medium hover:bg-primary/5 transition">
                View Portfolio
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-full aspect-square bg-secondary/20 rounded-3xl flex items-center justify-center">
              <svg viewBox="0 0 200 200" className="w-48 h-48 text-secondary opacity-40">
                <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="100" cy="50" r="8" fill="currentColor" />
                <circle cx="135" cy="70" r="8" fill="currentColor" />
                <circle cx="65" cy="70" r="8" fill="currentColor" />
                <path d="M 100 50 L 135 70 M 100 50 L 65 70" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
