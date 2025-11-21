import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { TeamHero } from "@/components/team/team-hero";
import { TeamGrid } from "@/components/team/team-grid";
import { MissionValues } from "@/components/home/mission-values";
import Image from "next/image";

export const metadata = {
  title: "Team | AGI Ventures Canada",
  description:
    "Meet the team behind AGI Ventures Canada. We're dedicated to supporting Canadian AI and robotics founders.",
};

export default function TeamPage() {
  return (
    <>
      <Header />
      <main className="bg-background text-foreground">
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-[1400px] mx-auto">
            <div className="relative w-full">
              <div className="aspect-[21/9] rounded-sm border border-border/50 bg-muted/10 overflow-hidden ring-1 ring-black/5">
                <Image
                  src="/team/group-photo-vibe-hack.JPG"
                  alt="AGIVC Team"
                  fill
                  className="object-cover rounded-[4px]"
                  priority
                />
              </div>
            </div>
          </div>
        </section>
        <MissionValues />
        <TeamHero />
        <TeamGrid />
      </main>
      <Footer />
    </>
  );
}
