export function CaseStudiesGrid() {
  const caseStudies = [
    {
      name: "Sarah Chen",
      company: "RoboFlow AI",
      problem: "Limited solutions for enterprise robotics automation",
      approach: "Built an AI platform enabling non-technical teams to deploy robotics",
      outcome: "Raised $3M Series A in 18 months",
      quote: "The community support and founder network accelerated our growth significantly.",
    },
    {
      name: "Marcus Johnson",
      company: "Catalyst Robotics",
      problem: "Hardware startups facing go-to-market challenges",
      approach: "Developed robotics with embedded AI for manufacturing",
      outcome: "Launched to 50+ enterprise customers",
      quote: "Access to industry mentors and sponsors was invaluable.",
    },
    {
      name: "Priya Gupta",
      company: "NeuralSync",
      problem: "Gap between AI research and practical applications",
      approach: "Created AI tools for accelerating medical research",
      outcome: "Partnered with 5 leading hospitals",
      quote: "The fund believed in us before we believed in ourselves.",
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <div key={index} className="p-8 bg-secondary-50 rounded-2xl border border-border">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-1">{study.company}</h3>
                <p className="text-sm text-accent font-semibold">Founder: {study.name}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Problem</h4>
                  <p className="text-foreground/70">{study.problem}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Approach</h4>
                  <p className="text-foreground/70">{study.approach}</p>
                </div>
              </div>

              <div className="mb-6 p-4 bg-background rounded-xl border border-border">
                <h4 className="font-semibold text-foreground mb-2">Outcome</h4>
                <p className="text-lg text-accent font-semibold">{study.outcome}</p>
              </div>

              <p className="text-foreground/70 italic">"{study.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
