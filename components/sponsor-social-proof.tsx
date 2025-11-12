export function SponsorSocialProof() {
  const testimonials = [
    {
      quote: "The founder access and community engagement far exceeded our expectations.",
      company: "TechCorp Canada",
    },
    {
      quote: "A strategic partnership that positioned us as a leader in AI innovation.",
      company: "Innovation Labs",
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-accent-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-primary text-center">What Sponsors Say</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-8 bg-background rounded-2xl border border-border">
              <p className="text-lg text-foreground/70 mb-4 italic">"{testimonial.quote}"</p>
              <p className="font-semibold text-foreground">{testimonial.company}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
