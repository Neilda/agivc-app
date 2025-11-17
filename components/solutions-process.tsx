export function SolutionsProcess() {
  const processes = [
    {
      number: "01",
      title: "Discover",
      description:
        "We start by understanding what you're trying to solve and what success looks like. Quick assessment of your technical landscape, existing workflows, and where AI creates the most value.",
      details: [
        "Problem definition",
        "Technical feasibility",
        "Success metrics",
        "Timeline and scope",
      ],
    },
    {
      number: "02",
      title: "Build",
      description:
        "We ship working software quickly. Start with a prototype, validate with real users, iterate based on feedback. You see progress weekly, not in months.",
      details: [
        "Rapid prototyping",
        "Production deployment",
        "User feedback loops",
        "Integration testing",
      ],
    },
    {
      number: "03",
      title: "Scale",
      description:
        "Once it works, we make it reliable. Monitoring, optimization, training for your team. The system improves as it runs, and your team knows how to maintain it.",
      details: ["Performance monitoring", "Quality improvements", "Team training", "Ongoing support"],
    },
  ]

  return (
    <section className="py-24 md:py-32 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">How it works</h2>
          <p className="text-xl text-muted-foreground max-w-3xl">
            From first call to production in weeks. We move fast and keep things simple.
          </p>
        </div>

        <div className="space-y-16">
          {processes.map((process, index) => (
            <div key={index} className="grid lg:grid-cols-[1fr,2fr] gap-8 lg:gap-16">
              <div>
                <div className="text-5xl font-bold text-primary/20 mb-4">{process.number}</div>
                <h3 className="text-3xl font-bold text-foreground mb-4">{process.title}</h3>
              </div>
              <div>
                <p className="text-lg text-foreground leading-relaxed mb-6">{process.description}</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {process.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <span className="text-sm text-muted-foreground">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
