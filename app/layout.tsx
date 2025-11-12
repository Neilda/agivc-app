import type React from "react"
import type { Metadata } from "next"

import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { ScrollToTop } from "@/components/scroll-to-top"

export const metadata: Metadata = {
  metadataBase: new URL("https://agivc.ca"),
  title: "AGI Ventures Canada | Investing in AI & Robotics Founders",
  description:
    "AGI Ventures Canada backs Canadian AI and robotics founders with capital, community, and industry partners to go from idea to impact.",
  generator: "v0.app",
  openGraph: {
    title: "AGI Ventures Canada | Investing in AI & Robotics Founders",
    description:
      "AGI Ventures Canada backs Canadian AI and robotics founders with capital, community, and industry partners to go from idea to impact.",
    url: "https://agivc.ca",
    siteName: "AGI Ventures Canada",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AGI Ventures Canada Landing Page",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AGI Ventures Canada | Investing in AI & Robotics Founders",
    description:
      "AGI Ventures Canada backs Canadian AI and robotics founders with capital, community, and industry partners.",
    images: ["/og-image.jpg"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <ScrollToTop />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
