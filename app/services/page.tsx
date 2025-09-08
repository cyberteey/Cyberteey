import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Shield,
  Code,
  Lock,
  Database,
  CheckCircle,
  Cloud,
  LucideTablet as DeviceTablet,
  Search,
  Users,
  Award,
  Clock,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Services - Cyberteey Crime Lab",
  description:
    "Comprehensive cybersecurity services including digital forensics, asset recovery, and incident response.",
}

const services = [
  {
    icon: Shield,
    title: "Digital Forensics",
    description: "Advanced investigation techniques to uncover digital evidence and analyze cyber incidents.",
    features: [
      "Computer and mobile device analysis",
      "Network traffic investigation",
      "Malware analysis and reverse engineering",
      "Data recovery from damaged devices",
      "Expert witness testimony",
    ],
    pricing: "Starting at $500/hour",
  },
  {
    icon: Search,
    title: "Asset Recovery",
    description: "Specialized recovery services for cryptocurrency, digital accounts, and compromised assets.",
    features: [
      "Cryptocurrency tracing and recovery",
      "Compromised account restoration",
      "Digital wallet recovery",
      "Social media account recovery",
      "Email account restoration",
    ],
    pricing: "Success-based pricing",
  },
  {
    icon: Users,
    title: "Incident Response",
    description: "Rapid response to cyber attacks with comprehensive damage assessment and mitigation.",
    features: [
      "24/7 emergency response",
      "Threat containment and eradication",
      "Damage assessment and reporting",
      "System restoration and hardening",
      "Post-incident analysis",
    ],
    pricing: "Starting at $200/hour",
  },
  {
    icon: Award,
    title: "Cybersecurity Consulting",
    description: "Strategic cybersecurity guidance and implementation for organizations of all sizes.",
    features: [
      "Security assessments and audits",
      "Policy development and compliance",
      "Security awareness training",
      "Penetration testing",
      "Risk management consulting",
    ],
    pricing: "Custom pricing",
  },
]

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

      {/* New Services Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              Our Services
            </Badge>
            <h1 className="text-4xl font-bold mb-4">Comprehensive Cybersecurity Solutions</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From digital forensics to asset recovery, we provide the expertise and tools needed to protect and restore
              your digital assets.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 mb-12">
            {services.map((service, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <Badge variant="secondary" className="mt-1">
                        {service.pricing}
                      </Badge>
                    </div>
                  </div>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full">
                    <Link href="/contact">Get Quote</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-muted/50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Need Emergency Assistance?</h2>
            <p className="text-muted-foreground mb-6">
              Our emergency response team is available 24/7 for critical incidents.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  <Clock className="mr-2 h-5 w-5" />
                  Emergency Contact
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/complaint">Report Incident</Link>
              </Button>
            </div>
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
                <Button variant="outline" className="border-gray-600 text-gray-200 hover:bg-gray-800 bg-transparent">
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
