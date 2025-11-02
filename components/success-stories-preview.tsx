import Link from "next/link"

export function SuccessStoriesPreview() {
  const stories = [
    "Portfolio company raises $5M Series A led by top-tier VCs",
    "Founder's AI product reaches 10K users in first 90 days",
    "Robotics startup partners with Fortune 500 company",
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-accent-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-foreground">Success Stories</h2>
        <ul className="space-y-4 mb-8">
          {stories.map((story, index) => (
            <li key={index} className="flex items-start gap-4">
              <span className="text-accent text-xl font-bold flex-shrink-0">✓</span>
              <span className="text-lg text-foreground/70">{story}</span>
            </li>
          ))}
        </ul>
        <Link href="/success-stories" className="text-accent font-semibold hover:text-accent/80 transition">
          Read full stories →
        </Link>
      </div>
    </section>
  )
}
