import Link from "next/link"
import Image from "next/image"
import { Shield, Code, Lock, Database, CheckCircle, Cloud, TabletIcon as DeviceTablet } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                Our Services
              </h1>
              <p className="max-w-[700px] text-gray-400 md:text-xl dark:text-gray-400">
                Comprehensive ethical hacking and cybersecurity solutions to protect your digital assets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-cyan-900/20 px-3 py-1 text-sm text-cyan-500">
                  Our Approach
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">
                  Proactive Security Solutions
                </h2>
                <div className="space-y-4 text-gray-400">
                  <p>
                    At Cyberteey, we provide comprehensive ethical hacking and cybersecurity services designed to
                    identify vulnerabilities before malicious actors can exploit them.
                  </p>
                  <p>
                    Our methodology combines automated scanning with manual testing techniques to ensure thorough
                    coverage of your systems. We don't just find vulnerabilities – we provide actionable recommendations
                    and support for remediation.
                  </p>
                  <p>
                    Each service can be customized to meet your specific needs, industry requirements, and security
                    goals. We work closely with your team to understand your infrastructure and develop testing plans
                    that minimize business disruption while maximizing security insights.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=500"
                width={500}
                height={500}
                alt="Cybersecurity services illustration"
                className="mx-auto rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-cyan-900/20 px-3 py-1 text-sm text-cyan-500">
                Core Offerings
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">
                Specialized Security Services
              </h2>
              <p className="max-w-[700px] text-gray-400 md:text-xl/relaxed">
                Our range of ethical hacking and security testing services to keep your systems secure.
              </p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col space-y-4 rounded-lg border border-gray-800 bg-gray-900 p-6 shadow-lg">
              <div className="rounded-full bg-cyan-900/20 p-4 w-16 h-16 flex items-center justify-center">
                <Shield className="h-8 w-8 text-cyan-500" />
              </div>
              <h3 className="text-xl font-bold text-white">Penetration Testing</h3>
              <p className="text-gray-400">
                Comprehensive assessment of your systems to identify and exploit vulnerabilities before malicious actors
                do.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-cyan-500" />
                  <span>External network testing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-cyan-500" />
                  <span>Internal network testing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-cyan-500" />
                  <span>Detailed exploitation reporting</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-cyan-500" />
                  <span>Remediation guidance</span>
                </li>
              </ul>
              <div className="pt-4 mt-auto">
                <Link href="/contact">
                  <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white">Request Service</Button>
                </Link>
              </div>
            </div>
            <div className="flex flex-col space-y-4 rounded-lg border border-gray-800 bg-gray-900 p-6 shadow-lg">
              <div className="rounded-full bg-cyan-900/20 p-4 w-16 h-16 flex items-center justify-center">
                <Lock className="h-8 w-8 text-cyan-500" />
              </div>
              <h3 className="text-xl font-bold text-white">Security Assessments</h3>
              <p className="text-gray-400">
                Thorough evaluation of your security infrastructure, policies, and protocols to identify weaknesses.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-cyan-500" />
                  <span>Vulnerability scanning</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-cyan-500" />
                  <span>Security policy review</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-cyan-500" />
                  <span>Compliance gap analysis</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-cyan-500" />
                  <span>Risk prioritization</span>
                </li>
              </ul>
              <div className="pt-4 mt-auto">
                <Link href="/contact">
                  <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white">Request Service</Button>
                </Link>
              </div>
            </div>
            <div className="flex flex-col space-y-4 rounded-lg border border-gray-800 bg-gray-900 p-6 shadow-lg">
              <div className="rounded-full bg-cyan-900/20 p-4 w-16 h-16 flex items-center justify-center">
                <Code className="h-8 w-8 text-cyan-500" />
              </div>
              <h3 className="text-xl font-bold text-white">Secure Code Review</h3>
              <p className="text-gray-400">
                Analysis of your application code to identify security flaws and implement best practices.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-cyan-500" />
                  <span>Static code analysis</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-cyan-500" />
                  <span>Manual code review</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-cyan-500" />
                  <span>Secure coding recommendations</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-cyan-500" />
                  <span>Vulnerability remediation guidance</span>
                </li>
              </ul>
              <div className="pt-4 mt-auto">
                <Link href="/contact">
                  <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white">Request Service</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-cyan-900/20 px-3 py-1 text-sm text-cyan-500">
                Specialized Solutions
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">
                Additional Security Services
              </h2>
              <p className="max-w-[700px] text-gray-400 md:text-xl/relaxed">
                Specialized security services for specific technologies and environments.
              </p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col space-y-4 rounded-lg border border-gray-800 bg-gray-900 p-6 shadow-lg">
              <div className="rounded-full bg-cyan-900/20 p-4 w-16 h-16 flex items-center justify-center">
                <Database className="h-8 w-8 text-cyan-500" />
              </div>
              <h3 className="text-xl font-bold text-white">Database Security Assessment</h3>
              <p className="text-gray-400">
                Thorough evaluation of database configurations, access controls, and data protection measures.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-cyan-500" />
                  <span>Configuration review</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-cyan-500" />
                  <span>Privilege assessment</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-cyan-500" />
                  <span>Query injection testing</span>
                </li>
              </ul>
              <div className="pt-4 mt-auto">
                <Link href="/contact">
                  <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white">Learn More</Button>
                </Link>
              </div>
            </div>
            <div className="flex flex-col space-y-4 rounded-lg border border-gray-800 bg-gray-900 p-6 shadow-lg">
              <div className="rounded-full bg-cyan-900/20 p-4 w-16 h-16 flex items-center justify-center">
                <Cloud className="h-8 w-8 text-cyan-500" />
              </div>
              <h3 className="text-xl font-bold text-white">Cloud Security Assessment</h3>
              <p className="text-gray-400">
                Evaluation of cloud infrastructure security, configurations, and access controls.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-cyan-500" />
                  <span>AWS/Azure/GCP security review</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-cyan-500" />
                  <span>IAM policy assessment</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-cyan-500" />
                  <span>Storage security evaluation</span>
                </li>
              </ul>
              <div className="pt-4 mt-auto">
                <Link href="/contact">
                  <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white">Learn More</Button>
                </Link>
              </div>
            </div>
            <div className="flex flex-col space-y-4 rounded-lg border border-gray-800 bg-gray-900 p-6 shadow-lg">
              <div className="rounded-full bg-cyan-900/20 p-4 w-16 h-16 flex items-center justify-center">
                <DeviceTablet className="h-8 w-8 text-cyan-500" />
              </div>
              <h3 className="text-xl font-bold text-white">Mobile Application Security</h3>
              <p className="text-gray-400">
                Security testing for iOS and Android applications to identify mobile-specific vulnerabilities.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-cyan-500" />
                  <span>Data storage assessment</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-cyan-500" />
                  <span>API security testing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-cyan-500" />
                  <span>Authentication review</span>
                </li>
              </ul>
              <div className="pt-4 mt-auto">
                <Link href="/contact">
                  <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white">Learn More</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-cyan-900/20 px-3 py-1 text-sm text-cyan-500">
                Service Packages
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">
                Tailored Security Solutions
              </h2>
              <p className="max-w-[700px] text-gray-400 md:text-xl/relaxed">
                Choose from our strategic service packages or request a custom solution.
              </p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="flex flex-col rounded-lg border border-gray-800 bg-gray-900 shadow-lg overflow-hidden transition-all hover:shadow-cyan-900/20">
              <div className="bg-gray-800 p-6">
                <h3 className="text-xl font-bold text-white">Essential Security</h3>
                <p className="mt-2 text-gray-400">Basic security assessment for small businesses and startups.</p>
                <div className="mt-4 flex items-baseline">
                  <span className="text-2xl font-bold text-white">Starting at</span>
                  <span className="ml-1 text-4xl font-bold text-cyan-500">$2,500</span>
                </div>
              </div>
              <div className="flex flex-col p-6 space-y-4 flex-1">
                <ul className="space-y-3 flex-1">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-cyan-500" />
                    <span className="text-gray-300">Vulnerability scanning</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-cyan-500" />
                    <span className="text-gray-300">Basic penetration testing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-cyan-500" />
                    <span className="text-gray-300">Security report with findings</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-cyan-500" />
                    <span className="text-gray-300">Remediation recommendations</span>
                  </li>
                </ul>
                <Link href="/contact">
                  <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white mt-4">Request Quote</Button>
                </Link>
              </div>
            </div>
            <div className="flex flex-col rounded-lg border border-cyan-700 bg-gray-900 shadow-lg overflow-hidden transition-all hover:shadow-cyan-900/20 relative">
              <div className="absolute top-0 right-0 m-2">
                <div className="bg-cyan-600 text-white text-xs font-bold px-3 py-1 rounded-full">MOST POPULAR</div>
              </div>
              <div className="bg-gray-800 p-6">
                <h3 className="text-xl font-bold text-white">Advanced Protection</h3>
                <p className="mt-2 text-gray-400">Comprehensive security solution for medium-sized businesses.</p>
                <div className="mt-4 flex items-baseline">
                  <span className="text-2xl font-bold text-white">Starting at</span>
                  <span className="ml-1 text-4xl font-bold text-cyan-500">$5,000</span>
                </div>
              </div>
              <div className="flex flex-col p-6 space-y-4 flex-1">
                <ul className="space-y-3 flex-1">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-cyan-500" />
                    <span className="text-gray-300">Full-scope penetration testing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-cyan-500" />
                    <span className="text-gray-300">Web application security assessment</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-cyan-500" />
                    <span className="text-gray-300">Social engineering simulation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-cyan-500" />
                    <span className="text-gray-300">Detailed reporting and remediation plan</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-cyan-500" />
                    <span className="text-gray-300">30-day follow-up assessment</span>
                  </li>
                </ul>
                <Link href="/contact">
                  <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white mt-4">Request Quote</Button>
                </Link>
              </div>
            </div>
            <div className="flex flex-col rounded-lg border border-gray-800 bg-gray-900 shadow-lg overflow-hidden transition-all hover:shadow-cyan-900/20">
              <div className="bg-gray-800 p-6">
                <h3 className="text-xl font-bold text-white">Enterprise Security</h3>
                <p className="mt-2 text-gray-400">Complete security solution for large organizations.</p>
                <div className="mt-4 flex items-baseline">
                  <span className="text-2xl font-bold text-white">Starting at</span>
                  <span className="ml-1 text-4xl font-bold text-cyan-500">$10,000</span>
                </div>
              </div>
              <div className="flex flex-col p-6 space-y-4 flex-1">
                <ul className="space-y-3 flex-1">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-cyan-500" />
                    <span className="text-gray-300">Advanced penetration testing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-cyan-500" />
                    <span className="text-gray-300">Cloud infrastructure security assessment</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-cyan-500" />
                    <span className="text-gray-300">Mobile application security testing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-cyan-500" />
                    <span className="text-gray-300">Red team simulation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-cyan-500" />
                    <span className="text-gray-300">Executive reporting and presentations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-cyan-500" />
                    <span className="text-gray-300">Quarterly reassessment and consulting</span>
                  </li>
                </ul>
                <Link href="/contact">
                  <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white mt-4">Request Quote</Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-4">Need a custom solution for your specific requirements?</p>
            <Link href="/contact">
              <Button className="bg-cyan-600 hover:bg-cyan-700 text-white">Contact for Custom Solutions</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-cyan-900/20 px-3 py-1 text-sm text-cyan-500">
                  Our Process
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">
                  Security Assessment Methodology
                </h2>
                <div className="space-y-4 text-gray-400">
                  <p>
                    Our structured approach to security testing ensures thorough coverage and actionable results. We
                    employ industry-standard methodologies combined with our proprietary techniques to deliver
                    comprehensive security assessments.
                  </p>
                </div>
              </div>
              <div className="space-y-6 pt-4">
                <div className="flex gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-900/20 text-cyan-500">
                    1
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-white">Discovery and Scoping</h3>
                    <p className="text-gray-400">
                      We work with you to understand your systems, define the scope, and establish testing parameters.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-900/20 text-cyan-500">
                    2
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-white">Reconnaissance and Scanning</h3>
                    <p className="text-gray-400">
                      Using advanced tools, we identify potential entry points and vulnerabilities in your systems.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-900/20 text-cyan-500">
                    3
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-white">Vulnerability Assessment</h3>
                    <p className="text-gray-400">
                      We analyze discovered vulnerabilities to determine their severity and potential impact.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-900/20 text-cyan-500">
                    4
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-white">Exploitation and Testing</h3>
                    <p className="text-gray-400">
                      With your permission, we attempt to exploit vulnerabilities to validate their existence and
                      impact.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-900/20 text-cyan-500">
                    5
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-white">Reporting and Remediation</h3>
                    <p className="text-gray-400">
                      We provide detailed reports with findings, risk assessments, and actionable remediation steps.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=500"
                width={500}
                height={500}
                alt="Security methodology illustration"
                className="mx-auto rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-cyan-900/20 px-3 py-1 text-sm text-cyan-500">
                Common Questions
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">Frequently Asked Questions</h2>
              <p className="max-w-[700px] text-gray-400 md:text-xl/relaxed">
                Answers to common questions about our ethical hacking services.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-4xl gap-6">
            <div className="rounded-lg border border-gray-800 bg-gray-900 p-6">
              <h3 className="text-lg font-bold text-white">How long does a typical security assessment take?</h3>
              <p className="mt-2 text-gray-400">
                The duration varies based on the scope and complexity of your systems. A basic assessment may take 1-2
                weeks, while comprehensive enterprise assessments can take 4-6 weeks. We'll provide a detailed timeline
                during the scoping phase.
              </p>
            </div>
            <div className="rounded-lg border border-gray-800 bg-gray-900 p-6">
              <h3 className="text-lg font-bold text-white">Will penetration testing disrupt our operations?</h3>
              <p className="mt-2 text-gray-400">
                We take great care to minimize disruption. Most of our testing can be conducted without any operational
                impact. For more intrusive tests, we'll coordinate with your team to schedule them during off-hours or
                maintenance windows.
              </p>
            </div>
            <div className="rounded-lg border border-gray-800 bg-gray-900 p-6">
              <h3 className="text-lg font-bold text-white">How do you ensure confidentiality of our data?</h3>
              <p className="mt-2 text-gray-400">
                We maintain strict confidentiality protocols. All engagements begin with signing NDAs, and we securely
                handle all information. Our team follows ethical guidelines and never retains client data beyond the
                engagement period.
              </p>
            </div>
            <div className="rounded-lg border border-gray-800 bg-gray-900 p-6">
              <h3 className="text-lg font-bold text-white">What qualifications do your security testers have?</h3>
              <p className="mt-2 text-gray-400">
                Our team consists of certified security professionals with credentials including CEH, OSCP, CISSP, and
                other industry certifications. Each tester has extensive experience in ethical hacking and security
                assessments across various industries.
              </p>
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
                Ready to Secure Your Systems?
              </h2>
              <p className="max-w-[600px] text-gray-300 md:text-xl/relaxed">
                Contact Cyberteey today to discuss your security needs and how our ethical hacking services can help.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/contact">
                <Button className="bg-cyan-600 hover:bg-cyan-700 text-white">Get a Free Consultation</Button>
              </Link>
              <Link href="/portfolio">
                <Button variant="outline" className="border-gray-600 text-gray-200 hover:bg-gray-800">
                  View Our Case Studies
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
