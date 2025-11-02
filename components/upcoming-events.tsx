export function UpcomingEvents() {
  const events = [
    {
      title: "AI Founders Demo Day",
      date: "November 15, 2025",
      value: "Watch early-stage founders pitch to investors",
    },
    {
      title: "Robotics Workshop",
      date: "November 22, 2025",
      value: "Learn best practices in commercializing robotics",
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-foreground">Upcoming Events</h2>
        <div className="space-y-4">
          {events.map((event, index) => (
            <div
              key={index}
              className="p-6 bg-secondary-50 rounded-2xl border border-border hover:shadow-lg transition flex justify-between items-start"
            >
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">{event.title}</h3>
                <p className="text-sm text-secondary mb-2">{event.date}</p>
                <p className="text-foreground/70">{event.value}</p>
              </div>
              <button className="ml-4 px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium hover:bg-secondary/90 transition whitespace-nowrap">
                RSVP
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
