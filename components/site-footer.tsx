import Link from "next/link"
import Image from "next/image"

export function SiteFooter() {
  return (
    <footer className="w-full border-t border-gray-800 bg-gray-950 py-8 md:py-12">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative h-8 w-8 overflow-hidden">
                <Image src="/images/logo.png" alt="Cyberteey Logo" width={32} height={32} className="object-contain" />
              </div>
              <span className="text-xl font-bold text-white">Cyberteey</span>
            </Link>
            <p className="text-sm text-gray-400">
              Professional ethical hacking and cybersecurity services to protect your digital assets.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-cyan-500">
                <span className="sr-only">Twitter</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-cyan-500">
                <span className="sr-only">LinkedIn</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-cyan-500">
                <span className="sr-only">GitHub</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services#penetration-testing" className="text-sm text-gray-400 hover:text-cyan-500">
                  Penetration Testing
                </Link>
              </li>
              <li>
                <Link href="/services#security-assessment" className="text-sm text-gray-400 hover:text-cyan-500">
                  Security Assessments
                </Link>
              </li>
              <li>
                <Link href="/services#code-review" className="text-sm text-gray-400 hover:text-cyan-500">
                  Secure Code Review
                </Link>
              </li>
              <li>
                <Link href="/services#cloud-security" className="text-sm text-gray-400 hover:text-cyan-500">
                  Cloud Security
                </Link>
              </li>
              <li>
                <Link href="/services#security-consulting" className="text-sm text-gray-400 hover:text-cyan-500">
                  Security Consulting
                </Link>
              </li>
              <li>
                <Link href="/recovery" className="text-sm text-gray-400 hover:text-cyan-500">
                  Digital Asset Recovery
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-gray-400 hover:text-cyan-500">
                  About
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-sm text-gray-400 hover:text-cyan-500">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-gray-400 hover:text-cyan-500">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-400 hover:text-cyan-500">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="text-sm text-gray-400 hover:text-cyan-500">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-sm text-gray-400 hover:text-cyan-500">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="text-sm text-gray-400 hover:text-cyan-500">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8 md:flex md:items-center md:justify-between">
          <div className="text-xs text-gray-400">&copy; {new Date().getFullYear()} Cyberteey. All rights reserved.</div>
          <div className="mt-4 md:mt-0">
            <p className="text-xs text-gray-400">Ethical Hacking | Security Solutions | Professional Integrity</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
