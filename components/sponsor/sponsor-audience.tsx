export function SponsorAudience() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-foreground">Our Community</h2>
        <div className="grid sm:grid-cols-3 gap-8">
          <div>
            <div className="text-4xl font-bold text-foreground mb-2">400+</div>
            <p className="text-foreground/70">In-person attendees at our events</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-foreground mb-2">1550+</div>
            <p className="text-foreground/70">Subscribers to newsletter</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-foreground mb-2">$CA100K+</div>
            <p className="text-foreground/70">Sponsorship raised first two years</p>
          </div>
        </div>
      </div>
    </section>
  )
}
