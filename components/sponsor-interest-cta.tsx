export function SponsorInterestCTA() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-foreground">Interested in Sponsoring?</h2>
        <p className="text-lg text-foreground/70 mb-8">
          Sponsorship openings are limited. Get in touch to discuss how we can create a partnership that delivers value
          for your organization.
        </p>
        <a
          href="mailto:sponsors@agiventures.ca?subject=Sponsorship Inquiry"
          className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition"
        >
          I'm Interested
        </a>
        <p className="text-sm text-foreground/60 mt-6">
          Or contact us at{" "}
          <a href="mailto:sponsors@agiventures.ca" className="text-foreground hover:underline">
            sponsors@agiventures.ca
          </a>
        </p>
      </div>
    </section>
  )
}

