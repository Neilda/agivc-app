import { Users, Lightbulb, TrendingUp, Network, Calendar, Rocket } from "lucide-react"

const benefits = [
  {
    icon: Users,
    title: "Expert Mentorship",
    description: "Weekly office hours with experienced founders and investors who've built successful AI companies.",
    color: "bg-[#E8DED3]",
  },
  {
    icon: Network,
    title: "Founder Community",
    description:
      "Join a tight-knit community of ambitious AI founders. Get your first customers, advisors, and co-founders from the network.",
    color: "bg-[#B8D4D4]",
  },
  {
    icon: Lightbulb,
    title: "Weekly Talks",
    description:
      "Learn from successful founders who share the inside story of building their companies from zero to scale.",
    color: "bg-[#D4C4D8]",
  },
  {
    icon: TrendingUp,
    title: "Demo Day",
    description: "Present your company to Canada's top investors and press at our exclusive Demo Day event.",
    color: "bg-[#E8DED3]",
  },
  {
    icon: Calendar,
    title: "Structured Program",
    description: "A proven curriculum covering product development, growth strategies, fundraising, and team building.",
    color: "bg-[#B8D4D4]",
  },
  {
    icon: Rocket,
    title: "Launch Support",
    description:
      "Get help launching your product to the world with press support, community launches, and growth tactics.",
    color: "bg-[#D4C4D8]",
  },
]

export function ProgramBenefits() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-primary mb-12 text-center">What You Get</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div key={index} className={`${benefit.color} rounded-[2rem] p-8 hover:scale-105 transition-transform`}>
                <Icon size={40} className="mb-4 text-foreground" />
                <h3 className="text-xl font-bold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-foreground/80 leading-relaxed">{benefit.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
