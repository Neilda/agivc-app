import Link from "next/link"

export function FounderSpotlights() {
  const spotlights = [
    {
      name: "Sarah Chen",
      company: "RoboFlow AI",
      outcome: "Raised $3M Series A",
    },
    {
      name: "Marcus Johnson",
      company: "Catalyst Robotics",
      outcome: "Launched to 50+ enterprise customers",
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-foreground">Founder Spotlights</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {spotlights.map((spotlight, index) => (
            <div key={index} className="p-6 bg-background rounded-2xl border border-border">
              <h3 className="text-lg font-bold text-foreground mb-1">{spotlight.name}</h3>
              <p className="text-sm text-secondary mb-3">{spotlight.company}</p>
              <p className="text-foreground/70">{spotlight.outcome}</p>
            </div>
          ))}
        </div>
        <Link href="/success-stories" className="text-foreground font-semibold hover:text-foreground/80 transition">
          View all success stories →
        </Link>
      </div>
    </section>
  )
}
