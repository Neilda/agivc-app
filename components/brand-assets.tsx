import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export function BrandAssets() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-primary text-center">Brand Assets</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-border rounded-xl p-8 bg-muted/30">
            <div className="aspect-video bg-background rounded-lg flex items-center justify-center mb-4">
              <span className="text-4xl font-bold">AGIVC</span>
            </div>
            <h3 className="font-semibold mb-2">Logo Package</h3>
            <p className="text-sm text-foreground/70 mb-4">
              Includes PNG, SVG, and vector formats in light and dark versions
            </p>
            <Button variant="outline" className="w-full bg-transparent">
              <Download size={16} className="mr-2" />
              Download Logos
            </Button>
          </div>

          <div className="border border-border rounded-xl p-8 bg-muted/30">
            <div className="space-y-4 mb-4">
              <div>
                <p className="text-sm text-foreground/70 mb-2">Primary Color</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-primary border border-border"></div>
                  <span className="font-mono text-sm">#000000</span>
                </div>
              </div>
              <div>
                <p className="text-sm text-foreground/70 mb-2">Accent Color</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-accent border border-border"></div>
                  <span className="font-mono text-sm">#E07A5F</span>
                </div>
              </div>
            </div>
            <h3 className="font-semibold mb-2">Brand Guidelines</h3>
            <p className="text-sm text-foreground/70 mb-4">
              Complete brand guidelines including colors, typography, and usage rules
            </p>
            <Button variant="outline" className="w-full bg-transparent">
              <Download size={16} className="mr-2" />
              Download Guidelines
            </Button>
          </div>
        </div>

        <div className="mt-8 p-6 bg-muted/30 rounded-xl border border-border">
          <h3 className="font-semibold mb-2">Usage Guidelines</h3>
          <ul className="space-y-2 text-sm text-foreground/70">
            <li>• Please maintain adequate spacing around the logo</li>
            <li>• Do not alter the logo colors or proportions</li>
            <li>• Use the appropriate logo version for light or dark backgrounds</li>
            <li>• For questions about brand usage, contact our media team</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
