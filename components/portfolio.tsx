"use client"

export function Portfolio() {
  const portfolio = [
    { name: "CloudSync AI", category: "Enterprise AI", date: "Oct 15, 2025" },
    { name: "QuantumLeap", category: "Deep Tech", date: "Sep 20, 2025" },
    { name: "PayFlow Protocol", category: "FinTech", date: "Aug 30, 2025" },
    { name: "BioRegen Labs", category: "Deep Tech", date: "Jul 10, 2025" },
    { name: "MarketSense", category: "Enterprise AI", date: "Jun 05, 2025" },
    { name: "Vault Secure", category: "FinTech", date: "May 12, 2025" },
  ]

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-primary text-center">Featured Investments</h2>

        <div className="space-y-4">
          {portfolio.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between p-6 bg-card rounded-xl border border-border hover:border-secondary/50 hover:bg-muted/30 transition group"
            >
              <div className="flex-1">
                <h3 className="font-semibold text-foreground group-hover:text-secondary transition">{item.name}</h3>
                <p className="text-sm text-muted-foreground">{item.category}</p>
              </div>
              <p className="text-sm text-muted-foreground">{item.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
