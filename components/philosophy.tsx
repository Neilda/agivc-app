"use client"

export function Philosophy() {
  const principles = [
    {
      number: "01",
      title: "Patient Capital",
      description:
        "We believe in long-term value creation. We're committed to our founders through every stage of their journey, from early-stage challenges to market leadership.",
    },
    {
      number: "02",
      title: "Active Partnership",
      description:
        "Beyond capital, we provide strategic guidance, industry connections, and operational expertise. Our team has built and scaled successful companies.",
    },
    {
      number: "03",
      title: "Founder-Centric",
      description:
        "We respect the vision and autonomy of exceptional founders. We serve as strategic advisors, not board room controllers.",
    },
  ]

  return (
    <section id="philosophy" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance text-primary text-center">How We Think About Investing</h2>
        <p className="text-lg text-muted-foreground mb-16 max-w-2xl">
          Our philosophy centers on founder success and long-term value creation.
        </p>

        <div className="space-y-12">
          {principles.map((principle) => (
            <div key={principle.number} className="flex gap-8 md:gap-12 items-start">
              <div className="flex-shrink-0 pt-2">
                <div className="w-16 h-16 rounded-2xl bg-secondary/20 flex items-center justify-center">
                  <span className="text-3xl font-bold text-secondary">{principle.number}</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold mb-3 text-balance">{principle.title}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">{principle.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
