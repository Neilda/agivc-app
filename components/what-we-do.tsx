export function WhatWeDo() {
  const services = [
    {
      title: "Venture Studio",
      description: "Build agentic AI solutions for companies ranging from startups to F50.",
    },
    {
      title: "Community Events",
      description: "Hackathons, meetups with companies like Cursor, ElevenLabs, LangChain and more.",
    },
    {
      title: "AI Accelerator",
      description:
        "6 weeks program, with 2.5 weeks spent in San Fran. We also invest alongside our VC partners at the end of the program.",
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-foreground">What we do</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="p-6 bg-background rounded-3xl border border-border hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-3 text-foreground">{service.title}</h3>
              <p className="text-foreground/70 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
