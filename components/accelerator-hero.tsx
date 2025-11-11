import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function AcceleratorHero() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              The{" "}
              <span className="relative inline-block">
                <span className="relative z-10">AI Accelerator</span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-foreground/30 -rotate-1"></span>
              </span>{" "}
              for Canadian Founders
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              A three-month intensive program designed to help AI and robotics startups take off. We provide funding,
              mentorship, and access to Canada's most valuable network of founders and investors.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="rounded-full">
                Apply Now <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full bg-transparent">
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative">
            <img src="/ai-accelerator-program-illustration-with-founders-.jpg" alt="AI Accelerator Program" className="rounded-[2rem] w-full" />
          </div>
        </div>
      </div>
    </section>
  )
}
