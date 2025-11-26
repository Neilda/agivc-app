export function BatchSchedule() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-foreground mb-12 text-center">The Three-Month Journey</h2>
        <div className="space-y-8">
          <div className="bg-background rounded-[2rem] p-8 border border-border">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Weeks 1-4: Foundation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Kickoff event, meet your cohort, and dive into intensive office hours. Focus on product development,
                  finding product-market fit, and talking to users. Weekly founder talks from successful alumni.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-background rounded-[2rem] p-8 border border-border">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Weeks 5-8: Growth</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Launch your product publicly with our support. Focus on growth, metrics, and iteration. Get your first
                  customers from the AGIVC community. Prepare for fundraising conversations.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-background rounded-[2rem] p-8 border border-border">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Weeks 9-12: Demo Day</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Intensive Demo Day prep with presentation coaching and pitch refinement. Present to top Canadian
                  investors and press. Prepare for SF trip, with ~2 weeks in San Francisco. Continue momentum with fundraising support and ongoing community access.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
