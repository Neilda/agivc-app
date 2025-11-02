export function HomepageHero() {
  return (
    <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-balance leading-tight">
            <span className="text-foreground">Investing in Canada's </span>
            <span className="underline decoration-accent decoration-[6px] underline-offset-4">AI and robotics</span>
            <span className="text-foreground"> founders</span>
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl leading-relaxed">
            We back builders with capital, community, and industry partners to go from idea to impact.
          </p>
        </div>

        <div className="flex justify-center lg:justify-end">
          <img
            src="/abstract-illustration-of-ai-technology-and-innovat.jpg"
            alt="AI Innovation Illustration"
            className="w-full max-w-md rounded-2xl"
          />
        </div>
      </div>
    </section>
  )
}
