export function SponsorSuccessStories() {
  const stories = [
    {
      sponsor: "Solace",
      program: "Hackathon Sponsor",
      result: "Reached 400+ developers and received 50+ product feedback submissions",
      quote: "The hackathon gave us direct access to developers actively building AI solutions. The feedback was invaluable.",
    },
    {
      sponsor: "Vercel",
      program: "Newsletter & Event Sponsor",
      result: "Featured in newsletter reaching 10K+ subscribers and sponsored 3 major events",
      quote: "Our partnership with AGIVC helped us connect with Canada's top AI builders and establish our presence in the ecosystem.",
    },
    {
      sponsor: "LangChain",
      program: "Accelerator Sponsor",
      result: "Mentored 12 startups and saw 3 adopt LangChain in production",
      quote: "Working with AGIVC's accelerator gave us early access to promising startups and helped shape our developer relations strategy.",
    },
  ]

  return (
    <section id="success-stories" className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-foreground mb-4">
          Success Stories
        </h2>
        <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-3xl">
          See how our sponsors have connected with Canada's AI community and achieved their goals.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stories.map((story, index) => (
            <div
              key={index}
              className="p-8 bg-background rounded-2xl border border-border/50 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4">
                <div className="text-sm font-medium text-primary mb-1">{story.program}</div>
                <h3 className="text-xl font-bold text-foreground mb-2">{story.sponsor}</h3>
              </div>
              <p className="text-sm font-medium text-foreground/70 mb-4">{story.result}</p>
              <p className="text-foreground/60 italic leading-relaxed">"{story.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

