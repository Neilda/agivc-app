import { Users, Handshake, Heart, Zap, MessageSquare, TrendingUp } from "lucide-react"

export function MissionValues() {
  const values = [
    {
      title: "Inclusivity",
      description:
        "We welcome all who share our values — regardless of immigration status, race, age, gender, class, or experience level.",
      bgColor: "bg-[#E8DDD3]",
      icon: Users,
    },
    {
      title: "Trust",
      description: "We trust each other to rise to the occasion, make mistakes, and learn from them.",
      bgColor: "bg-[#B8D4D1]",
      icon: Handshake,
    },
    {
      title: "Purpose & Community",
      description: "Everything we do is for the right reason — always in service of our community.",
      bgColor: "bg-[#D4D4E8]",
      icon: Heart,
    },
    {
      title: "Bias to Action",
      description: "We move forward in the face of uncertainty, taking action instead of waiting.",
      bgColor: "bg-[#F5D5C8]",
      icon: Zap,
    },
    {
      title: "Radical Candor",
      description: "We value being smart, radically candid, kind, and open to feedback.",
      bgColor: "bg-[#C8E5D5]",
      icon: MessageSquare,
    },
    {
      title: "Growth",
      description: "We expect growth in ourselves, our community, and each other.",
      bgColor: "bg-[#E8D4C8]",
      icon: TrendingUp,
    },
  ]

  return (
    <section id="mission" className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 mb-24">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight">Our Mission</h2>
          </div>
          <div className="space-y-6">
            <p className="text-lg text-foreground/80 leading-relaxed">
              We partner with exceptional AI and robotics founders to accelerate their journey from idea to impact.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Through capital, community, and strategic mentorship, we help shape the future of Canadian innovation.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-12 text-foreground">Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className={`${value.bgColor} rounded-[2rem] p-8 sm:p-10 flex flex-col justify-between min-h-[320px] transition-transform hover:scale-[1.02]`}
              >
                <div className="flex justify-center mb-8 text-foreground/80">
                  <value.icon className="w-32 h-32" strokeWidth={1} />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-foreground">{value.title}</h3>
                  <p className="text-foreground/70 leading-relaxed text-sm">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
