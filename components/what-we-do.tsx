export function WhatWeDo() {
  const services = [
    {
      title: "Programs and Events",
      description:
        "We host quarterly events, demo days, and founder workshops to foster community and accelerate growth.",
    },
    {
      title: "Founder Support",
      description:
        "Beyond capital, we provide mentorship, introductions, and strategic guidance to help founders succeed.",
    },
    {
      title: "Sponsor Partnerships",
      description: "We connect sponsors with high-potential founders and provide exclusive access to our community.",
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-foreground">What we do</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="p-6 bg-background rounded-2xl border border-border hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-3 text-foreground">{service.title}</h3>
              <p className="text-foreground/70">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
