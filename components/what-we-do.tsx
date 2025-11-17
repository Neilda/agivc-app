export function WhatWeDo() {
  const services = [
    {
      title: "Forward Deployed",
      description:
        "We build agentic AI solutions and training employees for companies ranging from startups to Fortune 50.",
    },
    {
      title: "Events & community",
      description:
        "Our largest hackathons have 400 attendees and are usually held at Invest Ottawa. We also run meetups and conferences, and work with sponsors like LangChain, Tavily, Vercel, Solace.",
    },
    {
      title: "AI Accelerator",
      description:
        "6 weeks program, with 2.5 weeks spent in San Fran. We also invest alongside our VC partners at the end of the program.",
    },
  ];

  return (
    <section id="what-we-do" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-foreground">What we do</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-background rounded-3xl border border-border hover:shadow-lg transition"
            >
              <h3 className="text-xl font-bold mb-3 text-foreground">
                {service.title}
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
