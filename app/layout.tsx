import type React from "react"
import type { Metadata } from "next"

import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Exo_2 as V0_Font_Exo_2, Geist_Mono as V0_Font_Geist_Mono } from "next/font/google"

// Initialize fonts
const _exo_2 = V0_Font_Exo_2({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})
const _geistMono = V0_Font_Geist_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "Venture Capital Fund | AI & Innovation Investments",
  description:
    "Leading venture capital firm focused on early-stage AI, deep tech, and FinTech companies. Partner with us to scale your vision.",
  generator: "v0.app",
  openGraph: {
    title: "Venture Capital Fund | AI & Innovation Investments",
    description:
      "Leading venture capital firm focused on early-stage AI, deep tech, and FinTech companies. Partner with us to scale your vision.",
    url: "https://yourvc.com",
    siteName: "Venture Capital Fund",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Venture Capital Fund Landing Page",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Venture Capital Fund | AI & Innovation Investments",
    description: "Leading venture capital firm focused on early-stage AI, deep tech, and FinTech companies.",
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
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
