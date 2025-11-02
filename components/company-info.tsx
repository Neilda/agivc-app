export function CompanyInfo() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">About AGI Ventures Canada</h2>

        <div className="space-y-6 text-foreground/80 leading-relaxed">
          <p>
            <strong className="text-foreground">AGI Ventures Canada (AGIVC)</strong> is a venture capital firm and
            accelerator program dedicated to supporting Canadian founders building the next generation of AI and
            robotics companies.
          </p>

          <p>
            We provide early-stage funding, mentorship, and access to a network of industry partners to help founders go
            from idea to impact. Our program is designed to accelerate growth through intensive support, community
            building, and strategic guidance.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Quick Facts</h3>
              <ul className="space-y-2">
                <li>
                  <strong>Founded:</strong> 2024
                </li>
                <li>
                  <strong>Location:</strong> Canada
                </li>
                <li>
                  <strong>Focus:</strong> AI & Robotics
                </li>
                <li>
                  <strong>Stage:</strong> Pre-seed to Seed
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Our Mission</h3>
              <p className="text-foreground/80">
                To build a thriving ecosystem of AI and robotics founders in Canada, providing them with the resources,
                community, and support needed to build world-class companies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
