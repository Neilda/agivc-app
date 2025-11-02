export function ProgramOverview() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-6">What Happens at AGIVC Accelerator</h2>
          </div>
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              The AGIVC Accelerator is a three-month intensive program for AI and robotics startups. We run cohorts
              multiple times per year, bringing together the most promising founders in Canadian AI.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our goal is simple: help startups take off. Whether you're just starting or already launched, we'll help
              you be in dramatically better shape three months later—with a better product, more users, and more options
              for raising capital.
            </p>
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">$500K</div>
                <div className="text-sm text-muted-foreground">Investment</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">3</div>
                <div className="text-sm text-muted-foreground">Months</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">100+</div>
                <div className="text-sm text-muted-foreground">Mentors</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
