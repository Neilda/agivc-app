import { Linkedin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function TeamGrid() {
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
    {
      name: "Rami Alhamad",
      role: "Investor / Advisor",
      linkedin: "https://www.linkedin.com/in/ramialhamad",
      image: "/headshots/rami.png",
    },
  ];

  return (
    <section className="py-32 md:py-40 lg:py-48 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="p-6 bg-background rounded-xl border border-border/50 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-6 flex justify-center">
                {member.image ? (
                  <div className="relative w-32 h-32 rounded-full overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                ) : (
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-secondary/40 to-foreground/40 flex items-center justify-center text-3xl font-bold text-foreground">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                )}
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-muted-foreground font-medium mb-3">
                  {member.role}
                </p>
                <Link
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

