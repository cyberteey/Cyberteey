import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"

import "@/app/globals.css"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ThemeProvider } from "@/components/theme-provider"
import { CookieConsent } from "@/components/features/cookie-consent"
import { BackToTop } from "@/components/features/back-to-top"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Cyber Crime Lab - Elite Ethical Hacking & Security Solutions",
  description:
    "Advanced cybersecurity services by certified ethical hackers. Penetration testing, security audits, and vulnerability assessments to protect your digital assets.",
  keywords:
    "ethical hacking, cybersecurity, penetration testing, security audit, vulnerability assessment, cyber crime lab",
  authors: [{ name: "Cyber Crime Lab" }],
  creator: "Cyber Crime Lab",
  publisher: "Cyber Crime Lab",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cybercrimelab.com",
    title: "Cyber Crime Lab - Elite Ethical Hacking & Security Solutions",
    description:
      "Advanced cybersecurity services by certified ethical hackers. Protect your digital assets with military-grade security.",
    siteName: "Cyber Crime Lab",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cyber Crime Lab - Elite Ethical Hacking & Security Solutions",
    description:
      "Advanced cybersecurity services by certified ethical hackers. Protect your digital assets with military-grade security.",
    creator: "@cybercrimelab",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
    generator: 'v0.app'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={`${spaceGrotesk.className} bg-gray-950 text-gray-50 min-h-screen flex flex-col antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <SiteHeader />
          <main id="main-content" className="flex-1" role="main">
            {children}
          </main>
          <SiteFooter />
          <CookieConsent />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}
