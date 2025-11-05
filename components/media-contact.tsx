import { Mail, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"

export function MediaContact() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Media Contact</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-border rounded-xl p-8 bg-background">
            <Mail className="w-8 h-8 mb-4 text-accent" />
            <h3 className="text-xl font-semibold mb-2">Press Inquiries</h3>
            <p className="text-foreground/70 mb-4">
              For media inquiries, interviews, or press releases, please contact our communications team.
            </p>
            <Button variant="outline" className="w-full bg-transparent" asChild>
              <a href="mailto:info@agiventures.ca">Email Press Team</a>
            </Button>
          </div>

          <div className="border border-border rounded-xl p-8 bg-background">
            <MessageSquare className="w-8 h-8 mb-4 text-accent" />
            <h3 className="text-xl font-semibold mb-2">General Inquiries</h3>
            <p className="text-foreground/70 mb-4">
              For general questions about AGIVC, our programs, or partnership opportunities.
            </p>
            <Button variant="outline" className="w-full bg-transparent" asChild>
              <a href="mailto:info@agiventures.ca">Email General Team</a>
            </Button>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-foreground/70">
            Follow us on social media for the latest updates and announcements
          </p>
        </div>
      </div>
    </section>
  )
}
