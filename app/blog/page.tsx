import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Clock, User, Tag } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                Security Insights & Resources
              </h1>
              <p className="max-w-[700px] text-gray-400 md:text-xl dark:text-gray-400">
                Expert articles, guides, and updates on cybersecurity trends and best practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-cyan-900/20 px-3 py-1 text-sm text-cyan-500">
                Featured Content
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">Latest Articles</h2>
              <p className="max-w-[700px] text-gray-400 md:text-xl/relaxed">
                Stay informed with our latest cybersecurity insights and expertise.
              </p>
            </div>
          </div>
          <div className="grid gap-10 mx-auto md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
            <div className="group flex flex-col h-full rounded-lg border border-gray-800 bg-gray-900 shadow-lg overflow-hidden transition-all hover:shadow-cyan-900/20">
              <div className="aspect-video overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  width={500}
                  height={300}
                  alt="Zero-day vulnerabilities"
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="flex-1 p-6 space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-cyan-900/20 px-3 py-1 text-sm text-cyan-500">
                    Vulnerability Research
                  </div>
                  <h3 className="text-2xl font-bold text-white">Understanding Zero-Day Vulnerabilities</h3>
                  <div className="flex flex-wrap items-center text-sm text-gray-400 gap-4">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>March 15, 2023</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>Cyberteey</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Tag className="h-4 w-4" />
                      <span>Security</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-400">
                  Zero-day vulnerabilities represent some of the most dangerous security threats. This article explores
                  what they are, how they're exploited, and strategies for protection.
                </p>
                <div className="pt-4 mt-auto">
                  <Link href="/blog/understanding-zero-day-vulnerabilities">
                    <Button variant="link" className="p-0 text-cyan-500 hover:text-cyan-400">
                      Read Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="group flex flex-col h-full rounded-lg border border-gray-800 bg-gray-900 shadow-lg overflow-hidden transition-all hover:shadow-cyan-900/20">
              <div className="aspect-video overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  width={500}
                  height={300}
                  alt="Web application security"
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="flex-1 p-6 space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-cyan-900/20 px-3 py-1 text-sm text-cyan-500">
                    Web Security
                  </div>
                  <h3 className="text-2xl font-bold text-white">Essential Web Application Security Measures</h3>
                  <div className="flex flex-wrap items-center text-sm text-gray-400 gap-4">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>February 28, 2023</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>Cyberteey</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Tag className="h-4 w-4" />
                      <span>Web Security</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-400">
                  Protect your web applications from common threats with these essential security measures. Learn about
                  XSS, CSRF, SQL injection, and more.
                </p>
                <div className="pt-4 mt-auto">
                  <Link href="/blog/web-application-security-measures">
                    <Button variant="link" className="p-0 text-cyan-500 hover:text-cyan-400">
                      Read Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="group flex flex-col h-full rounded-lg border border-gray-800 bg-gray-900 shadow-lg overflow-hidden transition-all hover:shadow-cyan-900/20">
              <div className="aspect-video overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  width={500}
                  height={300}
                  alt="Social engineering"
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="flex-1 p-6 space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-cyan-900/20 px-3 py-1 text-sm text-cyan-500">
                    Threat Awareness
                  </div>
                  <h3 className="text-2xl font-bold text-white">Defending Against Social Engineering Attacks</h3>
                  <div className="flex flex-wrap items-center text-sm text-gray-400 gap-4">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>January 15, 2023</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>Cyberteey</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Tag className="h-4 w-4" />
                      <span>Security Awareness</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-400">
                  Social engineering remains one of the most effective attack vectors. Learn how to identify and defend
                  against these psychological manipulation techniques.
                </p>
                <div className="pt-4 mt-auto">
                  <Link href="/blog/defending-against-social-engineering">
                    <Button variant="link" className="p-0 text-cyan-500 hover:text-cyan-400">
                      Read Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-cyan-900/20 px-3 py-1 text-sm text-cyan-500">
                More Insights
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">Recent Articles</h2>
              <p className="max-w-[700px] text-gray-400 md:text-xl/relaxed">
                Explore our collection of cybersecurity articles and resources.
              </p>
            </div>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="group flex items-start gap-4 rounded-lg border border-gray-800 bg-gray-900 p-6 shadow-lg transition-all hover:shadow-cyan-900/20">
              <div className="w-12 h-12 rounded-full bg-cyan-900/20 flex items-center justify-center shrink-0">
                <Tag className="h-6 w-6 text-cyan-500" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white">Cloud Security Best Practices</h3>
                <div className="flex flex-wrap items-center text-sm text-gray-400 gap-4">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>December 10, 2022</span>
                  </div>
                </div>
                <p className="text-gray-400">
                  Essential security practices for securing your cloud infrastructure and applications in AWS, Azure,
                  and GCP environments.
                </p>
                <Button variant="link" className="p-0 text-cyan-500 hover:text-cyan-400">
                  Read Article
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="group flex items-start gap-4 rounded-lg border border-gray-800 bg-gray-900 p-6 shadow-lg transition-all hover:shadow-cyan-900/20">
              <div className="w-12 h-12 rounded-full bg-cyan-900/20 flex items-center justify-center shrink-0">
                <Tag className="h-6 w-6 text-cyan-500" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white">The Rise of Ransomware: Protection Strategies</h3>
                <div className="flex flex-wrap items-center text-sm text-gray-400 gap-4">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>November 22, 2022</span>
                  </div>
                </div>
                <p className="text-gray-400">
                  Understanding the ransomware threat landscape and implementing effective protection and recovery
                  strategies.
                </p>
                <Button variant="link" className="p-0 text-cyan-500 hover:text-cyan-400">
                  Read Article
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="group flex items-start gap-4 rounded-lg border border-gray-800 bg-gray-900 p-6 shadow-lg transition-all hover:shadow-cyan-900/20">
              <div className="w-12 h-12 rounded-full bg-cyan-900/20 flex items-center justify-center shrink-0">
                <Tag className="h-6 w-6 text-cyan-500" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white">Secure Coding Practices for Developers</h3>
                <div className="flex flex-wrap items-center text-sm text-gray-400 gap-4">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>October 15, 2022</span>
                  </div>
                </div>
                <p className="text-gray-400">
                  Essential secure coding practices that developers should implement to build more secure applications.
                </p>
                <Button variant="link" className="p-0 text-cyan-500 hover:text-cyan-400">
                  Read Article
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="group flex items-start gap-4 rounded-lg border border-gray-800 bg-gray-900 p-6 shadow-lg transition-all hover:shadow-cyan-900/20">
              <div className="w-12 h-12 rounded-full bg-cyan-900/20 flex items-center justify-center shrink-0">
                <Tag className="h-6 w-6 text-cyan-500" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white">Building an Effective Security Awareness Program</h3>
                <div className="flex flex-wrap items-center text-sm text-gray-400 gap-4">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>September 5, 2022</span>
                  </div>
                </div>
                <p className="text-gray-400">
                  Strategies for creating and implementing a security awareness program that actually works for your
                  organization.
                </p>
                <Button variant="link" className="p-0 text-cyan-500 hover:text-cyan-400">
                  Read Article
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-12">
            <Button className="bg-cyan-600 hover:bg-cyan-700 text-white">View All Articles</Button>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-cyan-900/20 px-3 py-1 text-sm text-cyan-500">
                Security Resources
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">
                Free Security Tools & Resources
              </h2>
              <p className="max-w-[700px] text-gray-400 md:text-xl/relaxed">
                Helpful resources to improve your cybersecurity knowledge and capabilities.
              </p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-gray-800 bg-gray-900 p-6 shadow-lg transition-all hover:shadow-cyan-900/20">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">Security Checklist Template</h3>
                <p className="text-gray-400">
                  A comprehensive cybersecurity checklist for organizations of all sizes to assess their security
                  posture.
                </p>
                <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white">Download PDF</Button>
              </div>
            </div>
            <div className="rounded-lg border border-gray-800 bg-gray-900 p-6 shadow-lg transition-all hover:shadow-cyan-900/20">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">Security Policy Templates</h3>
                <p className="text-gray-400">
                  Ready-to-use security policy templates that you can customize for your organization.
                </p>
                <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white">Access Templates</Button>
              </div>
            </div>
            <div className="rounded-lg border border-gray-800 bg-gray-900 p-6 shadow-lg transition-all hover:shadow-cyan-900/20">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">Security Awareness Videos</h3>
                <p className="text-gray-400">
                  Educational videos on common security threats and best practices for your team.
                </p>
                <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white">Watch Videos</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-gray-900 via-cyan-900/20 to-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Stay Updated on Security Trends
              </h2>
              <p className="max-w-[600px] text-gray-300 md:text-xl/relaxed">
                Subscribe to our newsletter for the latest security insights, tips, and updates.
              </p>
            </div>
            <div className="mx-auto w-full max-w-md space-y-2">
              <form className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex h-10 w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-gray-200 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
                <Button type="submit" className="bg-cyan-600 hover:bg-cyan-700 text-white">
                  Subscribe
                </Button>
              </form>
              <p className="text-xs text-gray-400">We respect your privacy. Unsubscribe at any time.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
