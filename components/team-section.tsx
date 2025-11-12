"use client"

import { Linkedin, Twitter } from "lucide-react"

export function TeamSection() {
  const team = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Managing Partner",
      bio: "20+ years in venture capital and AI/ML",
      initials: "SC",
    },
    {
      id: 2,
      name: "Marcus Johnson",
      role: "General Partner",
      bio: "Former CTO, specialized in deep tech",
      initials: "MJ",
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      role: "Principal",
      bio: "FinTech and blockchain specialist",
      initials: "ER",
    },
    {
      id: 4,
      name: "David Park",
      role: "Operating Partner",
      bio: "Scaled 5 companies seed to Series C",
      initials: "DP",
    },
  ]

  return (
    <section id="team" className="py-20 md:py-28 bg-muted/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance text-primary text-center">The Team</h2>
        <p className="text-lg text-muted-foreground mb-16 max-w-2xl">
          Experienced investors and operators dedicated to founder success.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member) => (
            <div
              key={member.id}
              className="group bg-card rounded-2xl p-6 border border-border hover:border-secondary/50 transition"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary/40 to-accent/40 flex items-center justify-center mb-4 text-lg font-bold text-foreground">
                {member.initials}
              </div>
              <h3 className="text-lg font-bold mb-1">{member.name}</h3>
              <p className="text-sm text-secondary font-medium mb-3">{member.role}</p>
              <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
              <div className="flex gap-2">
                <a href="#" className="p-2 rounded-lg hover:bg-muted transition" aria-label="LinkedIn">
                  <Linkedin size={16} />
                </a>
                <a href="#" className="p-2 rounded-lg hover:bg-muted transition" aria-label="Twitter">
                  <Twitter size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
