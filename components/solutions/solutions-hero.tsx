import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function SolutionsHero() {
  return (
    <section className="py-24 md:py-32 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1fr,1fr] gap-16 items-start mb-16">
          <div>
            <div className="text-primary font-medium mb-4 text-lg">
              Forward Deployed Solutions
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              Build, train, and transform
            </h1>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed">
              We build production-ready AI systems, train your teams, and
              develop AI champions who drive transformation.
            </p>
            <Link
              href="mailto:info@agiventures.ca"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium mt-8 group"
            >
              Get Started
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </div>

        <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden">
          <Image
            src="/team-collaborating-on-ai-project-with-modern-techn.jpg"
            alt="AI Solutions"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
