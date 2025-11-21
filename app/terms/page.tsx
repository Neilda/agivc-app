import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h1 className="text-4xl sm:text-5xl font-bold mb-8">Terms of Service</h1>
          <div className="prose prose-lg max-w-none space-y-8 text-foreground/80">
            <p className="text-sm text-muted-foreground">Last updated: January 2025</p>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Agreement to Terms</h2>
              <p>
                By accessing or using the AGI Ventures Canada website and services, you agree to be bound by these Terms
                of Service. If you disagree with any part of these terms, you may not access our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Use of Services</h2>
              <p>Our services include:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access to information about our accelerator program</li>
                <li>Application submission for our programs</li>
                <li>Access to our founders directory and community resources</li>
                <li>Event registration and participation</li>
              </ul>
              <p className="mt-4">
                You agree to use our services only for lawful purposes and in accordance with these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Intellectual Property</h2>
              <p>
                The content, features, and functionality of our website are owned by AGIVC and are protected by
                international copyright, trademark, and other intellectual property laws. You may not reproduce,
                distribute, or create derivative works without our express written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Application Process</h2>
              <p>
                When applying to our accelerator program, you represent and warrant that all information provided is
                accurate and complete. Submission of an application does not guarantee acceptance into the program.
                AGIVC reserves the right to accept or reject any application at our sole discretion.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Confidentiality</h2>
              <p>
                Information shared during the application process and program participation may be confidential. We will
                handle such information in accordance with our Privacy Policy and any separate confidentiality
                agreements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Limitation of Liability</h2>
              <p>
                AGIVC shall not be liable for any indirect, incidental, special, consequential, or punitive damages
                resulting from your use of or inability to use our services. Our total liability shall not exceed the
                amount paid by you, if any, for accessing our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. We will notify users of any material changes by
                posting the new Terms on this page and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of Canada and the province of
                Ontario, without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Contact Us</h2>
              <p>
                If you have questions about these Terms, please contact us at:{" "}
                <a href="mailto:legal@agivc.ca" className="text-foreground hover:underline">
                  legal@agivc.ca
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
