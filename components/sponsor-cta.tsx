export function SponsorCTA() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-foreground">Ready to Get Started?</h2>
        <p className="text-lg text-foreground/70 mb-8">
          Let's explore how a partnership can unlock value for your organization.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <button className="px-8 py-3 bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition rounded-lg">
            Become a Sponsor
          </button>
          <button className="px-8 py-3 bg-secondary text-secondary-foreground font-semibold hover:bg-secondary/90 transition rounded-xl">
            Book a Call
          </button>
        </div>
      </div>
    </section>
  )
}
