export function TeamAndPartners() {
  const team = [
    {
      name: "Jessica Park",
      role: "Managing Partner",
      bio: "20+ years in VC and tech investing, leading early-stage AI initiatives.",
    },
    {
      name: "Alex Rodriguez",
      role: "Partner",
      bio: "Former robotics founder, serial entrepreneur, and industry advisor.",
    },
    {
      name: "Maya Patel",
      role: "Community Lead",
      bio: "Building ecosystems and connecting founders with resources and mentors.",
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-foreground">Meet Our Team</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {team.map((member, index) => (
            <div key={index} className="p-6 bg-background rounded-2xl border border-border">
              <h3 className="text-lg font-bold text-foreground mb-1">{member.name}</h3>
              <p className="text-sm text-accent font-semibold mb-3">{member.role}</p>
              <p className="text-foreground/70">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
