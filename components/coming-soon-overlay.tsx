export function ComingSoonOverlay() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
      <div className="absolute inset-0 bg-background/30" />

      <div className="relative bg-card border border-border rounded-xl p-12 shadow-2xl max-w-md mx-4 text-center pointer-events-auto">
        <h2 className="text-4xl font-bold mb-4">Coming Soon</h2>
        <p className="text-muted-foreground text-lg">We're working hard to bring you this page. Check back soon!</p>
      </div>
    </div>
  )
}
