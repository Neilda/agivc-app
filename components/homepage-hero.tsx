export function HomepageHero() {
  return (
    <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance leading-tight">
            <span className="text-foreground">Accelerate </span>
            <span className="underline decoration-accent decoration-[6px] underline-offset-4">applied AI</span>
            <span className="text-foreground"> through community, code and startups</span>
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl leading-relaxed">
            There's a lot of talking about AI out there. Our people prefer to ship and then talk about it.
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
