import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h1 className="text-4xl sm:text-5xl font-bold mb-8">Privacy Policy</h1>
          <div className="prose prose-lg max-w-none space-y-8 text-foreground/80">
            <p className="text-sm text-muted-foreground">Last updated: January 2025</p>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Introduction</h2>
              <p>
                AGI Ventures Canada ("AGIVC", "we", "us", or "our") is committed to protecting your privacy. This
                Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our
                website or participate in our programs.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Information We Collect</h2>
              <p>We may collect information about you in a variety of ways, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Personal Data:</strong> Name, email address, phone number, company information, and other
                  contact details you provide when applying to our programs or subscribing to our newsletter.
                </li>
                <li>
                  <strong>Application Data:</strong> Information submitted through accelerator applications, including
                  business plans, pitch decks, and founder backgrounds.
                </li>
                <li>
                  <strong>Usage Data:</strong> Information about how you access and use our website, including IP
                  address, browser type, pages visited, and time spent on pages.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Process and evaluate applications to our accelerator program</li>
                <li>Communicate with founders, sponsors, and community members</li>
                <li>Send newsletters and updates about events and opportunities</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Disclosure of Your Information</h2>
              <p>
                We may share your information with third parties in certain situations, including with your consent,
                with service providers who assist us in operating our website and programs, or when required by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information.
                However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute
                security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Your Rights</h2>
              <p>Depending on your location, you may have certain rights regarding your personal information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access to your personal data</li>
                <li>Correction of inaccurate data</li>
                <li>Deletion of your data</li>
                <li>Objection to processing</li>
                <li>Data portability</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please contact us at:{" "}
                <a href="mailto:privacy@agivc.ca" className="text-foreground hover:underline">
                  privacy@agivc.ca
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
