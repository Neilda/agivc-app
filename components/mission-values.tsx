export function MissionValues() {
  const values = [
    {
      title: "Founder-First",
      description: "Everything we do is centered on founder success and long-term value creation.",
    },
    {
      title: "Community Driven",
      description: "We believe in the power of connection, collaboration, and collective growth.",
    },
    {
      title: "Impact Focused",
      description: "We invest in technologies that solve real problems and create lasting change.",
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Our Mission</h2>
          <p className="text-lg text-foreground/70 leading-relaxed max-w-3xl">
            We partner with exceptional AI and robotics founders to accelerate their journey from idea to impact.
            Through capital, community, and strategic mentorship, we help shape the future of Canadian innovation.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-12 text-foreground">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div key={index} className="p-8 bg-secondary-50 rounded-2xl border border-border">
                <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                <p className="text-foreground/70">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
