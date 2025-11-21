export function UpcomingEvents() {
  return (
    <section id="events" className="py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-foreground mb-12 text-center">
          Upcoming Events
        </h2>
        <div className="flex justify-center">
          <div className="w-full max-w-4xl">
            <iframe
              src="https://luma.com/embed/calendar/cal-4YYXwxgUXIjLzGg/events"
              className="w-full h-[600px] rounded-2xl shadow-lg border border-border"
              allowFullScreen
              aria-hidden="false"
              tabIndex={0}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
