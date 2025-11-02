export function NewsletterPrompt() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-foreground">Stay Updated</h2>
        <p className="text-lg text-foreground/70 mb-8">
          Subscribe to our newsletter for exclusive founder insights, investment trends, and event announcements.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 bg-secondary-50 border border-border rounded-full text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition whitespace-nowrap">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  )
}
