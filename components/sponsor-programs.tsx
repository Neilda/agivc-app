import { Users, Code, Mail, Video, Rocket, Building2, Package } from "lucide-react"

export function SponsorPrograms() {
  const programs = [
    {
      name: "Meetups",
      icon: Users,
      description: "Sponsor our monthly AI Tinkerers meetups with 150+ builders. Get brand visibility, speaking opportunities, and direct access to Canada's top AI talent.",
      benefits: [
        "Logo placement on event materials",
        "5-minute sponsor presentation slot",
        "Dedicated sponsor table at venue",
        "Access to attendee list",
      ],
    },
    {
      name: "Hackathons",
      icon: Code,
      description: "Support our hackathons where teams build AI solutions in 48 hours. Perfect for developer tools, APIs, and technical platforms.",
      benefits: [
        "Naming rights opportunity",
        "Technical workshop slot",
        "Mentor access to participants",
        "Winner announcement presence",
      ],
    },
    {
      name: "Newsletter",
      icon: Mail,
      description: "Reach 10K+ subscribers with monthly sponsor spotlights, product announcements, and thought leadership content.",
      benefits: [
        "Dedicated sponsor section",
        "Featured content placement",
        "Quarterly thought leadership article",
        "Newsletter analytics access",
      ],
    },
    {
      name: "Video Interview Series",
      icon: Video,
      description: "Sponsor our founder interview series featuring deep conversations with Canada's most successful AI entrepreneurs.",
      benefits: [
        "Pre-roll video sponsorship",
        "Logo in video credits",
        "Featured in series promotion",
        "Access to full video library",
      ],
    },
    {
      name: "AI Accelerator",
      icon: Rocket,
      description: "Support our 6-week accelerator program. Sponsor demo day, mentor sessions, or provide resources to cohort companies.",
      benefits: [
        "Demo day sponsorship",
        "Mentor session access",
        "Cohort company introductions",
        "Program graduation presence",
      ],
    },
    {
      name: "Waterloo Hackerhouse",
      icon: Building2,
      description: "Sponsor our Waterloo hackerhouse program providing space and resources for founders building AI companies.",
      benefits: [
        "Space naming opportunity",
        "Resource provider recognition",
        "Resident founder access",
        "Quarterly sponsor events",
      ],
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Sponsorship Programs</h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Choose from individual programs or sponsor everything with our full package. Sponsorship openings are limited.
          </p>
          <p className="text-sm text-foreground/60 mt-4 font-semibold">Limited Availability</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {programs.map((program, index) => {
            const Icon = program.icon
            return (
              <div
                key={index}
                className="p-6 bg-background rounded-2xl border-2 border-border hover:border-foreground transition flex flex-col"
              >
                <div className="mb-4">
                  <Icon className="w-12 h-12 text-foreground mb-4" strokeWidth={1} />
                  <h3 className="text-xl font-bold text-foreground mb-2">{program.name}</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed mb-4">{program.description}</p>
                </div>
                <div className="mt-auto">
                  <p className="text-sm font-semibold text-foreground mb-3">Benefits include:</p>
                  <ul className="space-y-2">
                    {program.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-foreground/70">
                        <span className="text-foreground mt-1">•</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
        <div className="mt-12 p-8 bg-muted/30 rounded-2xl border-2 border-foreground">
          <div className="flex items-start gap-4">
            <Package className="w-12 h-12 text-foreground flex-shrink-0" strokeWidth={1} />
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-foreground mb-2">Full Package</h3>
              <p className="text-lg text-foreground/70 mb-4">
                Sponsor all programs for a full year. Includes everything above plus exclusive access to founder database,
                priority event placement, and custom partnership opportunities.
              </p>
              <p className="text-sm text-foreground/60 font-semibold">Best value for comprehensive brand visibility</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

