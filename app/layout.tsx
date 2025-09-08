import type React from "react"
import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Toaster } from "@/components/ui/toaster"
import { LiveChat } from "@/components/live-chat"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" })

export const metadata: Metadata = {
  title: "Cyberteey Crime Lab - Elite Cybersecurity & Digital Asset Recovery",
  description:
    "Professional cybersecurity services, digital forensics, and asset recovery with 94.2% success rate. Expert complaint handling and 24/7 support.",
  keywords:
    "cybersecurity, digital forensics, asset recovery, complaint tracking, live chat support, cyber crime investigation",
  authors: [{ name: "Cyberteey Crime Lab" }],
  creator: "Cyberteey Crime Lab",
  publisher: "Cyberteey Crime Lab",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://cyberteey.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Cyberteey Crime Lab - Elite Cybersecurity & Digital Asset Recovery",
    description: "Professional cybersecurity services, digital forensics, and asset recovery with 94.2% success rate.",
    siteName: "Cyberteey Crime Lab",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cyberteey Crime Lab - Cybersecurity Experts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cyberteey Crime Lab - Elite Cybersecurity & Digital Asset Recovery",
    description: "Professional cybersecurity services, digital forensics, and asset recovery with 94.2% success rate.",
    images: ["/images/og-image.png"],
    creator: "@cyberteey",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
          <LiveChat />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
