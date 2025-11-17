export function VideoQuoteSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start lg:items-center">
          <div className="w-full lg:w-[60%] aspect-video">
            <iframe
              className="w-full h-full rounded-3xl shadow-lg border border-border"
              src="https://www.youtube.com/embed/L3Oo-vQdOZU?controls=0&modestbranding=1&rel=0&showinfo=0"
              title="AGIVC Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <div className="w-full lg:w-[40%] flex items-center">
            <blockquote className="space-y-6">
              <svg className="w-12 h-12 text-muted-foreground/30" fill="currentColor" viewBox="0 0 32 32">
                <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14h-6c0-2.2 1.8-4 4-4V8zm16 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-2.2 1.8-4 4-4V8z" />
              </svg>
              <p className="text-xl md:text-2xl leading-relaxed text-foreground">
                You can live in Iowa, you can live in Ottawa, you can live anywhere in the world, and all that matters
                is what you ship. So if you ship good things… people will find you and people will share it.
              </p>
              <footer className="mt-8">
                <cite className="not-italic">
                  <div className="text-lg md:text-xl font-bold text-foreground">Lee Robinson</div>
                  <div className="text-base md:text-lg text-foreground/80 mt-1">Head of AI Education at Cursor</div>
                </cite>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
