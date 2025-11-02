import Link from "next/link"

export function SponsorPreview() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-accent-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-foreground">For Sponsors</h2>
        <p className="text-lg text-foreground/70 mb-8 max-w-2xl leading-relaxed">
          Partner with us to gain exclusive access to Canada's top AI and robotics founders. Sponsors receive premium
          placement in our community, featuring opportunities, early product access, and long-term strategic benefits.
        </p>
        <Link
          href="/sponsor"
          className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition"
        >
          Learn More
        </Link>
      </div>
    </section>
  )
}
