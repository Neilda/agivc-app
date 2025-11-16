export function SponsorPackages() {
  const packages = [
    {
      name: "Advocate",
      description: "Perfect for early-stage engagement and community participation.",
      price: "$25K",
    },
    {
      name: "Partner",
      description: "Gain premium visibility and direct founder introductions.",
      price: "$75K",
    },
    {
      name: "Strategic",
      description: "Full suite of benefits including custom founder events and data access.",
      price: "$150K+",
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-foreground">Sponsorship Tiers</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="p-8 bg-background rounded-2xl border-2 border-border hover:border-accent transition"
            >
              <h3 className="text-2xl font-bold text-foreground mb-2">{pkg.name}</h3>
              <p className="text-3xl font-bold text-accent mb-6">{pkg.price}</p>
              <p className="text-foreground/70">{pkg.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
