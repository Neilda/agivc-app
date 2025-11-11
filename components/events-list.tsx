export function EventsList() {
  const upcomingEvents = [
    {
      title: "AI Founders Demo Day",
      date: "November 15, 2025",
      format: "In-person",
      takeaway: "Watch 12 early-stage startups pitch to 100+ investors",
    },
    {
      title: "Robotics Workshop: Hardware to Market",
      date: "November 22, 2025",
      format: "Virtual",
      takeaway: "Learn best practices for commercializing robotics products",
    },
    {
      title: "AI Safety Roundtable",
      date: "December 5, 2025",
      format: "In-person",
      takeaway: "Discuss responsible AI practices with industry experts",
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-foreground">Upcoming Events</h2>
        <div className="space-y-4">
          {upcomingEvents.map((event, index) => (
            <div
              key={index}
              className="p-8 bg-secondary-50 rounded-2xl border border-border hover:shadow-lg transition"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-3">{event.title}</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 mb-3 text-sm text-foreground/60">
                    <span>{event.date}</span>
                    <span>•</span>
                    <span>{event.format}</span>
                  </div>
                  <p className="text-foreground/70">{event.takeaway}</p>
                </div>
                <button className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition whitespace-nowrap">
                  Register
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
