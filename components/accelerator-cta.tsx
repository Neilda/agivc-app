import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function AcceleratorCTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-center">Ready to accelerate your AI startup?</h2>
        <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
          Applications are open for our next cohort. Join Canada's most ambitious AI founders.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button size="lg" className="rounded-full">
            Apply Now <ArrowRight className="ml-2" size={20} />
          </Button>
          <Button size="lg" variant="outline" className="rounded-full bg-transparent" asChild>
            <a href="https://discord.gg/6M45X7ySUc" target="_blank" rel="noopener noreferrer">
              Join Our Discord
            </a>
          </Button>
        </div>
        <p className="text-sm text-muted-foreground mt-8">
          Questions? Email us at{" "}
          <a href="mailto:accelerator@agivc.ca" className="text-primary hover:underline">
            accelerator@agivc.ca
          </a>
        </p>
      </div>
    </section>
  )
}
