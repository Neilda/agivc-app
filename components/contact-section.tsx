export function ContactSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-foreground">Get In Touch</h2>
        <p className="text-lg text-foreground/70 mb-8">
          Have questions or want to collaborate? We'd love to hear from you.
        </p>
        <div className="space-y-3">
          <p className="text-foreground">
            <span className="font-semibold">Press & Partnerships:</span> info@agiventures.ca
          </p>
          <p className="text-foreground/70">Typically respond within 48 hours</p>
        </div>
      </div>
    </section>
  )
}
