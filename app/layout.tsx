import type React from "react"
import type { Metadata } from "next"

import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Exo_2 as V0_Font_Exo_2, Geist_Mono as V0_Font_Geist_Mono } from "next/font/google"
import { ScrollToTop } from "@/components/layout/scroll-to-top"

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
  metadataBase: new URL("https://agiventures.ca"),
  title: "AGI Ventures Canada | Investing in AI & Robotics Founders",
  description:
    "Think in decades. Ship this weekend. We provide AI solutions, run AI communities, and invest through our accelerator.",
  generator: "Next.js",
  openGraph: {
    title: "AGI Ventures Canada | Investing in AI & Robotics Founders",
    description:
      "Think in decades. Ship this weekend. We provide AI solutions, run AI communities, and invest through our accelerator.",
    url: "https://agiventures.ca",
    siteName: "AGI Ventures Canada",
    images: [
      {
        url: "/team/group-photo-vibe-hack.JPG",
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
      "Think in decades. Ship this weekend. We provide AI solutions, run AI communities, and invest through our accelerator.",
    images: ["/team/group-photo-vibe-hack.JPG"],
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
        <ScrollToTop />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
