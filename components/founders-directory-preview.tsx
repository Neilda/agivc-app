import Link from "next/link"

export function FoundersDirectoryPreview() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-primary text-center">Founders Directory</h2>
        <p className="text-lg text-foreground/70 mb-8">
          Our directory showcases the incredible founders we support. Sponsors and partners use it to discover talented
          teams, find collaboration opportunities, and identify breakthrough innovations in AI and robotics.
        </p>
        <Link
          href="/directory"
          className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition"
        >
          Explore Directory
        </Link>
      </div>
    </section>
  )
}
