import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Shield, Lock, Code } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function PortfolioPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                Portfolio & Case Studies
              </h1>
              <p className="max-w-[700px] text-gray-400 md:text-xl dark:text-gray-400">
                Explore our successful security projects and see how we've helped organizations strengthen their
                security posture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-cyan-900/20 px-3 py-1 text-sm text-cyan-500">
                Featured Projects
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">Case Studies</h2>
              <p className="max-w-[700px] text-gray-400 md:text-xl/relaxed">
                A selection of our recent security assessment and penetration testing projects.
              </p>
            </div>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="group flex flex-col rounded-lg border border-gray-800 bg-gray-900 shadow-lg overflow-hidden transition-all hover:shadow-cyan-900/20">
              <div className="aspect-video overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  width={500}
                  height={300}
                  alt="Financial institution case study"
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="flex-1 p-6 space-y-4">
                <div className="inline-block rounded-lg bg-cyan-900/20 px-3 py-1 text-sm text-cyan-500">
                  Financial Sector
                </div>
                <h3 className="text-xl font-bold text-white">Financial Institution Security Overhaul</h3>
                <p className="text-gray-400">
                  We identified and remediated critical vulnerabilities in a multinational banking system, securing
                  sensitive financial data for millions of customers.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-cyan-500" />
                    <span className="text-gray-300">Vulnerability Assessment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Lock className="h-5 w-5 text-cyan-500" />
                    <span className="text-gray-300">Network Penetration Testing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Code className="h-5 w-5 text-cyan-500" />
                    <span className="text-gray-300">Secure Code Review</span>
                  </div>
                </div>
                <div className="pt-4 mt-auto">
                  <Button variant="link" className="p-0 text-cyan-500 hover:text-cyan-400">
                    Read Full Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
            <div className="group flex flex-col rounded-lg border border-gray-800 bg-gray-900 shadow-lg overflow-hidden transition-all hover:shadow-cyan-900/20">
              <div className="aspect-video overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  width={500}
                  height={300}
                  alt="E-commerce platform case study"
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="flex-1 p-6 space-y-4">
                <div className="inline-block rounded-lg bg-cyan-900/20 px-3 py-1 text-sm text-cyan-500">E-commerce</div>
                <h3 className="text-xl font-bold text-white">E-commerce Platform Protection</h3>
                <p className="text-gray-400">
                  Secured customer data and payment systems for a major online retailer, preventing potential data
                  breaches and ensuring PCI DSS compliance.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-cyan-500" />
                    <span className="text-gray-300">API Security Testing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Lock className="h-5 w-5 text-cyan-500" />
                    <span className="text-gray-300">Payment Gateway Security</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Code className="h-5 w-5 text-cyan-500" />
                    <span className="text-gray-300">Web Application Penetration Testing</span>
                  </div>
                </div>
                <div className="pt-4 mt-auto">
                  <Button variant="link" className="p-0 text-cyan-500 hover:text-cyan-400">
                    Read Full Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
            <div className="group flex flex-col rounded-lg border border-gray-800 bg-gray-900 shadow-lg overflow-hidden transition-all hover:shadow-cyan-900/20">
              <div className="aspect-video overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  width={500}
                  height={300}
                  alt="Healthcare system case study"
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="flex-1 p-6 space-y-4">
                <div className="inline-block rounded-lg bg-cyan-900/20 px-3 py-1 text-sm text-cyan-500">Healthcare</div>
                <h3 className="text-xl font-bold text-white">Healthcare System Security Audit</h3>
                <p className="text-gray-400">
                  Comprehensive security assessment for a healthcare provider with sensitive patient data, ensuring
                  HIPAA compliance and protection of medical records.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-cyan-500" />
                    <span className="text-gray-300">Database Security Assessment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Lock className="h-5 w-5 text-cyan-500" />
                    <span className="text-gray-300">Compliance Gap Analysis</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Code className="h-5 w-5 text-cyan-500" />
                    <span className="text-gray-300">Security Policy Review</span>
                  </div>
                </div>
                <div className="pt-4 mt-auto">
                  <Button variant="link" className="p-0 text-cyan-500 hover:text-cyan-400">
                    Read Full Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Case Studies */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-cyan-900/20 px-3 py-1 text-sm text-cyan-500">
                More Success Stories
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">Additional Projects</h2>
              <p className="max-w-[700px] text-gray-400 md:text-xl/relaxed">
                Further examples of our security work across different industries.
              </p>
            </div>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="group rounded-lg border border-gray-800 bg-gray-900 shadow-lg overflow-hidden transition-all hover:shadow-cyan-900/20">
              <div className="p-6 space-y-4">
                <div className="inline-block rounded-lg bg-cyan-900/20 px-3 py-1 text-sm text-cyan-500">Technology</div>
                <h3 className="text-xl font-bold text-white">SaaS Platform Security Assessment</h3>
                <p className="text-gray-400">
                  Performed comprehensive security testing for a cloud-based SaaS platform, identifying and addressing
                  vulnerabilities before product launch.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-cyan-500" />
                    <span className="text-gray-300">Cloud Infrastructure Testing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Lock className="h-5 w-5 text-cyan-500" />
                    <span className="text-gray-300">Authentication Security Review</span>
                  </div>
                </div>
                <Button variant="link" className="p-0 text-cyan-500 hover:text-cyan-400">
                  View Details
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="group rounded-lg border border-gray-800 bg-gray-900 shadow-lg overflow-hidden transition-all hover:shadow-cyan-900/20">
              <div className="p-6 space-y-4">
                <div className="inline-block rounded-lg bg-cyan-900/20 px-3 py-1 text-sm text-cyan-500">Government</div>
                <h3 className="text-xl font-bold text-white">Municipal Infrastructure Security</h3>
                <p className="text-gray-400">
                  Security assessment of critical municipal infrastructure systems, including water management and
                  public services portals.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-cyan-500" />
                    <span className="text-gray-300">SCADA Systems Testing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Lock className="h-5 w-5 text-cyan-500" />
                    <span className="text-gray-300">Public-facing Applications Assessment</span>
                  </div>
                </div>
                <Button variant="link" className="p-0 text-cyan-500 hover:text-cyan-400">
                  View Details
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="group rounded-lg border border-gray-800 bg-gray-900 shadow-lg overflow-hidden transition-all hover:shadow-cyan-900/20">
              <div className="p-6 space-y-4">
                <div className="inline-block rounded-lg bg-cyan-900/20 px-3 py-1 text-sm text-cyan-500">Education</div>
                <h3 className="text-xl font-bold text-white">University Systems Security</h3>
                <p className="text-gray-400">
                  Comprehensive security testing for a major university's student information systems and research
                  databases.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-cyan-500" />
                    <span className="text-gray-300">Data Protection Assessment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Lock className="h-5 w-5 text-cyan-500" />
                    <span className="text-gray-300">Access Control Testing</span>
                  </div>
                </div>
                <Button variant="link" className="p-0 text-cyan-500 hover:text-cyan-400">
                  View Details
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="group rounded-lg border border-gray-800 bg-gray-900 shadow-lg overflow-hidden transition-all hover:shadow-cyan-900/20">
              <div className="p-6 space-y-4">
                <div className="inline-block rounded-lg bg-cyan-900/20 px-3 py-1 text-sm text-cyan-500">
                  Manufacturing
                </div>
                <h3 className="text-xl font-bold text-white">Industrial Control Systems Protection</h3>
                <p className="text-gray-400">
                  Security assessment of manufacturing industrial control systems and connected IoT devices for a global
                  manufacturer.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-cyan-500" />
                    <span className="text-gray-300">IoT Device Security Testing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Lock className="h-5 w-5 text-cyan-500" />
                    <span className="text-gray-300">ICS/SCADA Security Assessment</span>
                  </div>
                </div>
                <Button variant="link" className="p-0 text-cyan-500 hover:text-cyan-400">
                  View Details
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-cyan-900/20 px-3 py-1 text-sm text-cyan-500">
                Client Feedback
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">What Our Clients Say</h2>
              <p className="max-w-[700px] text-gray-400 md:text-xl/relaxed">
                Testimonials from organizations we've helped secure.
              </p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-gray-800 bg-gray-900 p-6 shadow-lg">
              <div className="flex flex-col space-y-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5 fill-current text-cyan-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="border-l-4 border-cyan-700 pl-4 italic text-gray-400">
                  "The security assessment conducted by Cyberteey was incredibly thorough. They identified
                  vulnerabilities we had no idea existed and provided clear guidance on how to address them. Their work
                  has significantly improved our security posture."
                </blockquote>
                <div>
                  <p className="font-semibold text-white">CTO</p>
                  <p className="text-sm text-gray-400">Financial Services Company</p>
                </div>
              </div>
            </div>
            <div className="rounded-lg border border-gray-800 bg-gray-900 p-6 shadow-lg">
              <div className="flex flex-col space-y-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5 fill-current text-cyan-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="border-l-4 border-cyan-700 pl-4 italic text-gray-400">
                  "Working with Cyberteey was a game-changer for our e-commerce platform. Their penetration testing
                  uncovered critical issues that could have led to a severe data breach. The team was professional,
                  thorough, and provided excellent remediation support."
                </blockquote>
                <div>
                  <p className="font-semibold text-white">Head of Security</p>
                  <p className="text-sm text-gray-400">E-commerce Platform</p>
                </div>
              </div>
            </div>
            <div className="rounded-lg border border-gray-800 bg-gray-900 p-6 shadow-lg">
              <div className="flex flex-col space-y-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5 fill-current text-cyan-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="border-l-4 border-cyan-700 pl-4 italic text-gray-400">
                  "As a healthcare provider, security is paramount for us. Cyberteey's comprehensive security audit
                  helped us not only achieve HIPAA compliance but also establish a robust security framework that
                  protects our patients' sensitive data. Highly recommended."
                </blockquote>
                <div>
                  <p className="font-semibold text-white">IT Director</p>
                  <p className="text-sm text-gray-400">Healthcare Provider</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-gray-900 via-cyan-900/20 to-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Ready to Secure Your Organization?
              </h2>
              <p className="max-w-[600px] text-gray-300 md:text-xl/relaxed">
                Contact Cyberteey today to discuss how our ethical hacking services can help protect your digital
                assets.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/contact">
                <Button className="bg-cyan-600 hover:bg-cyan-700 text-white">Schedule a Consultation</Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" className="border-gray-600 text-gray-200 hover:bg-gray-800">
                  Explore Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
