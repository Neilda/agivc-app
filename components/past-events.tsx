import Link from "next/link"

export function PastEvents() {
  const pastOutcomes = [
    "200+ founders and investors connected at Q3 Demo Day",
    "Raised $12M total from 8 portfolio companies post-event",
    "3 partnerships forged between sponsors and founders",
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-foreground">Past Events</h2>
        <ul className="space-y-4 mb-8">
          {pastOutcomes.map((outcome, index) => (
            <li key={index} className="flex items-start gap-4">
              <span className="text-accent text-xl font-bold flex-shrink-0">→</span>
              <span className="text-lg text-foreground/70">{outcome}</span>
            </li>
          ))}
        </ul>
        <Link href="#" className="text-accent font-semibold hover:text-accent/80 transition">
          View event archive →
        </Link>
      </div>
    </section>
  )
}
