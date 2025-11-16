export function ImpactSnapshots() {
  const metrics = [
    { value: "25+", label: "Portfolio Companies" },
    { value: "$50M", label: "Capital Deployed" },
    { value: "1000+", label: "Founders Supported" },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-foreground">Our Impact</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl font-bold text-accent mb-3">{metric.value}</div>
              <p className="text-lg text-foreground/70">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
