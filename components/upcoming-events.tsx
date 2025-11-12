export function UpcomingEvents() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-primary text-center">Upcoming Events</h2>
        <div className="flex justify-center">
          <div className="w-full max-w-3xl">
            <iframe
              src="https://luma.com/embed/calendar/cal-4YYXwxgUXIjLzGg/events"
              className="w-full h-[500px] rounded-xl shadow-lg"
              style={{ border: "1px solid #e5e7eb" }}
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
