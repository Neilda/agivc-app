import { Linkedin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function TeamAndPartners() {
  const team = [
    {
      name: "Hai Nghiem",
      role: "CEO & Co-founder",
      linkedin: "https://www.linkedin.com/in/haiphunghiem/",
      image: "/headshots/hai.png",
    },
    {
      name: "Neilda Gagne",
      role: "Co-founder",
      linkedin: "https://www.linkedin.com/in/neildapacquing/",
      image: "/headshots/neilda.jpeg",
    },
    {
      name: "Wilson Li",
      role: "Advisor",
      linkedin: "https://www.linkedin.com/in/wilson-li-cpa-ca-a79a103b/",
      image: "/headshots/wilson-li.jpeg",
    },
  ]

  return (
    <section id="team" className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-foreground">Team</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {team.map((member, index) => (
            <div key={index} className="p-6 bg-background rounded-xl border border-border">
              <div className="mb-4">
                {member.image ? (
                  <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-secondary/40 to-foreground/40 flex items-center justify-center mb-4 text-2xl font-bold text-foreground">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                )}
              </div>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="text-sm text-foreground font-semibold">{member.role}</p>
                </div>
                <Link
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-foreground/80 transition-colors ml-2"
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
