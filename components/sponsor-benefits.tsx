export function SponsorBenefits() {
  const benefits = [
    "Private talent database of 500+ founders",
    "Featured job postings in founder community",
    "Early access to new product launches and pilots",
    "Speaking opportunities and brand visibility at events",
    "Quarterly market insights and founder trends",
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-primary text-center">Long-Term Benefits</h2>
        <ul className="space-y-4">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start gap-4">
              <span className="text-accent text-xl font-bold flex-shrink-0">✓</span>
              <span className="text-lg text-foreground/70">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
