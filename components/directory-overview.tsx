export function DirectoryOverview() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-foreground">How It Works</h2>
        <p className="text-lg text-foreground/70 leading-relaxed mb-8">
          Our directory features carefully selected AI and robotics founders at various stages of their journey.
          Sponsors and partners use this resource to discover talent, find collaboration opportunities, and support the
          next generation of innovators.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="p-6 bg-secondary-50 rounded-2xl border border-border">
            <h3 className="text-lg font-bold text-foreground mb-3">Public Directory</h3>
            <p className="text-foreground/70">
              Browse basic founder profiles, including bio, focus areas, and stage of growth. Perfect for networking and
              learning about our community.
            </p>
          </div>
          <div className="p-6 bg-accent-50 rounded-2xl border border-border">
            <h3 className="text-lg font-bold text-foreground mb-3">Sponsor Access</h3>
            <p className="text-foreground/70">
              Exclusive deeper access with detailed metrics, contact information, and collaboration opportunities.
              Available to our valued sponsors.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
