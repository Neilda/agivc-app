import { Linkedin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface Person {
  name: string;
  role: string;
  linkedin: string;
  image?: string;
}

function PersonCard({ person }: { person: Person }) {
  return (
    <div className="p-6 bg-background rounded-xl border border-border/50 shadow-sm hover:shadow-md transition-shadow">
      <div className="mb-6 flex justify-center">
        {person.image ? (
          <div className="relative w-32 h-32 rounded-full overflow-hidden">
            <Image
              src={person.image}
              alt={person.name}
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-300 rounded-[4px]"
            />
          </div>
        ) : (
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-secondary/40 to-foreground/40 flex items-center justify-center text-3xl font-bold text-foreground">
            {person.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </div>
        )}
      </div>
      <div className="text-center">
        <h3 className="text-xl font-bold text-foreground mb-1">
          {person.name}
        </h3>
        <p className="text-sm text-muted-foreground font-medium mb-3">
          {person.role}
        </p>
        <Link
          href={person.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
        >
          <Linkedin className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}

function PersonGrid({ people, title }: { people: Person[]; title: string }) {
  if (people.length === 0) return null;

  return (
    <div className="mb-20">
      <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">
        {title}
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {people.map((person, index) => (
          <PersonCard key={index} person={person} />
        ))}
      </div>
    </div>
  );
}

export function TeamGrid() {
  const team: Person[] = [
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
  ];

  const advisors: Person[] = [
    {
      name: "Wilson Li",
      role: "Advisor",
      linkedin: "https://www.linkedin.com/in/wilson-li-cpa-ca-a79a103b/",
      image: "/headshots/wilson-li.jpeg",
    },
  ];

  const investors: Person[] = [
    {
      name: "Rami Alhamad",
      role: "Investor / Advisor",
      linkedin: "https://www.linkedin.com/in/ramialhamad",
      image: "/headshots/rami.png",
    },
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-[1400px] mx-auto">
        <PersonGrid people={team} title="Team" />
        <PersonGrid people={advisors} title="Advisors" />
        <PersonGrid people={investors} title="Investors" />
      </div>
    </section>
  );
}

