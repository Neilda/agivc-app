import { SectionWithMedia } from "@/components/sections/section-with-media";

export function ForwardDeployedSection() {
  return (
    <section className="bg-muted/30">
      {/* Section 09 - Hackathons */}
      <div id="hackathons" className="py-24 md:py-32 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-muted-foreground/20 mb-4">
                09
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Hackathons that drive outcomes
              </h2>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-foreground/80 leading-relaxed">
                Hackathons are one of the fastest ways to catalyze innovation, surface talent, and test ideas under real constraints — when they're designed properly.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                We help organizations design and run hackathons as strategic tools, not one-off events, ensuring meaningful output during the event and momentum after it ends.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-muted/30 rounded-2xl border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Hackathon strategy
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Leaders align on why they're running a hackathon and what success actually looks like — before a single team starts building.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Clear goals (innovation, hiring, GTM, internal tooling)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Audience and participant design</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Problem framing and challenge definition</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Success metrics beyond demos</span>
                </li>
              </ul>
            </div>

            <div className="p-8 bg-muted/30 rounded-2xl border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Hackathon execution
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Teams get the structure, tooling, and support they need to build quickly without getting stuck or overwhelmed.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Run-of-show and timeline design</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Builder-first kickoff and onboarding</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Mentor and judge coordination</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>On-site or hybrid execution support</span>
                </li>
              </ul>
            </div>

            <div className="p-8 bg-muted/30 rounded-2xl border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Post-hackathon outcomes
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                The work doesn't stop at demos. We help turn momentum into real next steps.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Project evaluation frameworks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Follow-on programs (pilots, accelerators, hiring funnels)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Team and talent identification</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Community retention and re-engagement</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12">
            <p className="text-lg text-foreground/80 leading-relaxed max-w-3xl">
              Built by builders who run hackathons to discover talent, test ideas, and ship real things.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
