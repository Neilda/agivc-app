import { HeroSection } from "@/components/sections/hero-section";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HomepageHero() {
  return (
    <HeroSection background="subtle" className="pt-20 pb-20 md:pt-24 md:pb-24">
      <div className="flex flex-col items-start text-left max-w-4xl mb-16">
        <p className="text-lg sm:text-xl lg:text-2xl font-medium tracking-tight text-foreground max-w-4xl mb-6 text-balance leading-tight">
          Think in decades. Ship this weekend. <br />
          Community events, corporate services & training, and accelerator
        </p>

        <Button asChild size="lg" className="rounded-full text-base px-10 h-12">
          <Link
            href="/community"
            className="group inline-flex items-center gap-3"
          >
            <span className="leading-none">Events and Community</span>
            <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1 flex-shrink-0" />
          </Link>
        </Button>
      </div>

      <div className="relative w-full">
        <div className="aspect-[16/10] rounded-sm border border-border/50 bg-muted/10 overflow-hidden ring-1 ring-black/5">
          <div className="absolute inset-0 bg-gradient-to-br from-background to-muted/50" />
          <Image
            src="/home/DSCF5379.png"
            alt="AGIVC Team"
            fill
            className="object-cover opacity-90 rounded-[4px]"
            priority
          />
        </div>
      </div>
    </HeroSection>
  );
}
