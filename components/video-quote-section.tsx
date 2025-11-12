export function VideoQuoteSection() {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-[1.5fr,1fr] gap-8 md:gap-12 items-center">
          {/* Video Player */}
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-xl shadow-lg border border-border"
              src="https://www.youtube.com/embed/L3Oo-vQdOZU"
              title="AGIVC Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Quote */}
          <div className="flex items-center">
            <blockquote className="space-y-6">
              <svg className="w-12 h-12 text-primary" fill="currentColor" viewBox="0 0 32 32">
                <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14h-6c0-2.2 1.8-4 4-4V8zm16 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-2.2 1.8-4 4-4V8z" />
              </svg>
              <p className="text-xl md:text-2xl font-sans leading-relaxed text-foreground">
                You can live in Iowa, you can live in Ottawa, you can live anywhere in the world, and all that matters
                is what you ship. So if you ship good things… people will find you and people will share it.
              </p>
              <footer className="text-sm text-muted-foreground">
                <cite className="not-italic">
                  <strong className="text-foreground">Lee Robinson</strong>
                  <br />
                  Head of AI Education at Cursor
                </cite>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
