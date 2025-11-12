"use client"

export function InvestmentAreas() {
  const areas = [
    {
      id: 1,
      icon: "🤖",
      title: "Enterprise AI",
      description: "Transforming businesses through intelligent automation",
    },
    {
      id: 2,
      icon: "🔬",
      title: "Deep Tech",
      description: "Pushing boundaries with cutting-edge research",
    },
    {
      id: 3,
      icon: "💰",
      title: "FinTech",
      description: "Reimagining financial services for tomorrow",
    },
  ]

  return (
    <section id="approach" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance text-primary text-center">Our Focus Areas</h2>
        <p className="text-lg text-muted-foreground mb-16 max-w-2xl">
          We invest in sectors positioned to create outsized impact.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {areas.map((area) => (
            <div
              key={area.id}
              className="bg-card rounded-2xl p-8 border border-border hover:border-secondary/50 transition"
            >
              <div className="text-4xl mb-4">{area.icon}</div>
              <h3 className="text-xl font-bold mb-3">{area.title}</h3>
              <p className="text-muted-foreground">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
