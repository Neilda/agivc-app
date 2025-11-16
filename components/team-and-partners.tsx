import { Linkedin } from "lucide-react"
import Link from "next/link"

export function TeamAndPartners() {
  const team = [
    {
      name: "Hai Nghiem",
      role: "CEO & Co-founder",
      linkedin: "https://www.linkedin.com/in/haiphunghiem/",
    },
    {
      name: "Neilda Gagne",
      role: "Co-founder",
      linkedin: "https://www.linkedin.com/in/neildapacquing/",
    },
    {
      name: "Wilson Li",
      role: "Advisor",
      linkedin: "https://www.linkedin.com/in/wilson-li-cpa-ca-a79a103b/",
    },
  ]

  return (
    <section id="team" className="py-16 bg-secondary-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-foreground">Meet Our Team</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {team.map((member, index) => (
            <div key={index} className="p-6 bg-background rounded-xl border border-border">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="text-sm text-accent font-semibold">{member.role}</p>
                </div>
                <Link
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent/80 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
