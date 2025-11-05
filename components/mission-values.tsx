export function MissionValues() {
  const values = [
    {
      title: "Inclusivity",
      description:
        "We welcome all who share our values — regardless of immigration status, race, age, gender, class, or experience level.",
      bgColor: "bg-[#E8DDD3]", // Warm beige
      illustration: (
        <svg className="w-32 h-32" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="60" cy="35" r="12" stroke="currentColor" strokeWidth="2.5" />
          <circle cx="35" cy="60" r="10" stroke="currentColor" strokeWidth="2.5" />
          <circle cx="85" cy="60" r="10" stroke="currentColor" strokeWidth="2.5" />
          <circle cx="60" cy="85" r="8" stroke="currentColor" strokeWidth="2.5" />
          <path d="M60 47 L60 77" stroke="currentColor" strokeWidth="2.5" />
          <path d="M60 47 L35 60" stroke="currentColor" strokeWidth="2.5" />
          <path d="M60 47 L85 60" stroke="currentColor" strokeWidth="2.5" />
        </svg>
      ),
    },
    {
      title: "Trust",
      description: "We trust each other to rise to the occasion, make mistakes, and learn from them.",
      bgColor: "bg-[#B8D4D1]", // Teal/mint
      illustration: (
        <svg className="w-32 h-32" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M30 60 L50 60 L50 40 L70 40 L70 60 L90 60"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <circle cx="30" cy="60" r="6" stroke="currentColor" strokeWidth="2.5" fill="white" />
          <circle cx="90" cy="60" r="6" stroke="currentColor" strokeWidth="2.5" fill="white" />
          <path d="M45 50 Q50 45 55 50" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M65 50 Q70 45 75 50" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: "Purpose & Community",
      description: "Everything we do is for the right reason — always in service of our community.",
      bgColor: "bg-[#D4D4E8]", // Lavender
      illustration: (
        <svg className="w-32 h-32" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M60 30 L60 90 M40 50 L80 50 M45 70 L75 70"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <circle cx="60" cy="60" r="25" stroke="currentColor" strokeWidth="2.5" />
        </svg>
      ),
    },
    {
      title: "Bias to Action",
      description: "We move forward in the face of uncertainty, taking action instead of waiting.",
      bgColor: "bg-[#F5D5C8]", // Coral/peach
      illustration: (
        <svg className="w-32 h-32" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M30 60 L70 60 M70 60 L55 45 M70 60 L55 75"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="85" cy="60" r="8" stroke="currentColor" strokeWidth="2.5" />
        </svg>
      ),
    },
    {
      title: "Radical Candor",
      description: "We value being smart, radically candid, kind, and open to feedback.",
      bgColor: "bg-[#C8E5D5]", // Mint green
      illustration: (
        <svg className="w-32 h-32" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="35" y="45" width="50" height="30" rx="4" stroke="currentColor" strokeWidth="2.5" />
          <path d="M45 60 L55 60 M65 60 L75 60" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M50 35 L50 45 M70 35 L70 45" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: "Growth",
      description: "We expect growth in ourselves, our community, and each other.",
      bgColor: "bg-[#E8D4C8]", // Warm tan
      illustration: (
        <svg className="w-32 h-32" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M40 80 L50 60 L60 70 L70 45 L80 55"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M75 45 L80 55 L70 52"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
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
                <div className="flex justify-center mb-8 text-foreground/80">{value.illustration}</div>
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
