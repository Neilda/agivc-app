import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ReadyToSponsor() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-foreground">
          Ready to sponsor?
        </h2>
        <Link
          href="/sponsor"
          className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-colors group"
        >
          <span>Sponsor</span>
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}

