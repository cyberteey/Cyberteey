"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Shield,
  AlertTriangle,
  TrendingUp,
  Users,
  Globe,
  Lock,
  Eye,
  Smartphone,
  CreditCard,
  MessageCircle,
  ArrowRight,
  CheckCircle,
  Zap,
  Target,
  BarChart3,
  DollarSign,
  UserCheck,
  Info,
  FileText,
  Phone,
  Mail,
  Clock,
} from "lucide-react"
import { MatrixRain } from "@/components/matrix-rain"
import { LiveChat } from "@/components/live-chat"

const securityPlatforms = [
  "CrowdStrike Falcon",
  "Palo Alto Networks",
  "SentinelOne",
  "Splunk Security",
  "FireEye Mandiant",
  "Microsoft Defender",
  "Symantec Enterprise",
  "Kaspersky Security",
  "Trend Micro",
  "Check Point",
  "Fortinet FortiGate",
  "Cisco SecureX",
  "IBM Security",
  "McAfee Enterprise",
  "Rapid7",
  "Qualys VMDR",
  "Tenable Nessus",
  "Carbon Black",
  "Darktrace",
  "Proofpoint",
]

const globalStats = [
  { region: "North America", hacking: 72, fraud: 65, theft: 58 },
  { region: "Europe", hacking: 69, fraud: 61, theft: 54 },
  { region: "Asia-Pacific", hacking: 76, fraud: 71, theft: 67 },
  { region: "Latin America", hacking: 64, fraud: 59, theft: 52 },
  { region: "Middle East & Africa", hacking: 61, fraud: 56, theft: 49 },
]

const securityTips = [
  {
    category: "Password Security",
    icon: Lock,
    tips: [
      "Use unique passwords for each account (12+ characters)",
      "Enable two-factor authentication (2FA) everywhere possible",
      "Use a reputable password manager",
      "Never share passwords via email or text",
    ],
  },
  {
    category: "Mobile Security",
    icon: Smartphone,
    tips: [
      "Keep your device OS and apps updated",
      "Only download apps from official stores",
      "Use device lock screens with strong PINs",
      "Be cautious on public Wi-Fi networks",
    ],
  },
  {
    category: "Financial Protection",
    icon: CreditCard,
    tips: [
      "Monitor bank and credit card statements regularly",
      "Use hardware wallets for cryptocurrency",
      "Set up account alerts for transactions",
      "Never click links in suspicious financial emails",
    ],
  },
  {
    category: "Social Engineering",
    icon: Eye,
    tips: [
      "Verify caller identity before sharing information",
      "Be skeptical of urgent requests for money/info",
      "Limit personal information on social media",
      "Think before clicking links or downloading files",
    ],
  },
]

const faqs = [
  {
    question: "What should I do if my account has been hacked?",
    answer:
      "Immediately change your password, enable 2FA, check for unauthorized transactions, contact the platform support, and file a complaint with us for professional assistance in recovery and securing your account.",
  },
  {
    question: "How long does cryptocurrency recovery take?",
    answer:
      "Recovery timelines vary based on complexity. Simple cases may take 2-4 weeks, while complex international cases can take 3-6 months. We provide regular updates throughout the process.",
  },
  {
    question: "What evidence do I need for account recovery?",
    answer:
      "Gather screenshots of unauthorized access, transaction records, communication with scammers, device logs, and any verification documents. The more evidence, the better our chances of successful recovery.",
  },
  {
    question: "Do you work with law enforcement?",
    answer:
      "Yes, we collaborate with international law enforcement agencies, cybercrime units, and financial institutions to track down perpetrators and recover stolen assets through legal channels.",
  },
  {
    question: "What types of accounts can you help recover?",
    answer:
      "We specialize in recovering cryptocurrency wallets, email accounts, social media profiles, gaming accounts, cloud storage, trading platforms, and various digital assets across multiple platforms.",
  },
  {
    question: "How much does your service cost?",
    answer:
      "We offer free initial consultations. Our fees are transparent and based on case complexity. We work on both fixed-fee and success-based models, with no hidden charges.",
  },
]

export default function HomePage() {
  const [currentStat, setCurrentStat] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % globalStats.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <MatrixRain />

      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <Badge className="mb-4 bg-red-600 hover:bg-red-700">🚨 24/7 Emergency Response Available</Badge>
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Cyberteey Crime Lab
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-gray-300">
                Professional Digital Asset Recovery & Cybersecurity Solutions
              </p>
              <p className="text-lg mb-8 text-gray-400">
                Specialized in recovering stolen cryptocurrencies, hacked accounts, and providing comprehensive
                cybersecurity protection for individuals and businesses worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
                  asChild
                >
                  <Link href="/recovery">
                    <Shield className="mr-2 h-5 w-5" />
                    Start Recovery Process
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black bg-transparent"
                  asChild
                >
                  <Link href="/complaint">
                    <AlertTriangle className="mr-2 h-5 w-5" />
                    File Complaint
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/hero-image.png"
                alt="Cybersecurity Protection"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
                priority
              />
              <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full font-bold animate-pulse">
                98.7% Success Rate
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Cybersecurity Statistics */}
      <section className="py-16 px-4 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Global Cybersecurity Crisis - 2024 Statistics</h2>
            <p className="text-xl text-gray-300">The alarming rise in cybercrime affects millions worldwide</p>
          </div>

          {/* Key Global Statistics */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="bg-gradient-to-br from-red-900 to-red-800 border-red-700">
              <CardContent className="p-6 text-center">
                <TrendingUp className="h-12 w-12 text-red-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">68%</div>
                <p className="text-red-200">Organizations experienced account breaches in 2024</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-900 to-orange-800 border-orange-700">
              <CardContent className="p-6 text-center">
                <DollarSign className="h-12 w-12 text-orange-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">$4.88M</div>
                <p className="text-orange-200">Average data breach cost (10% increase from 2023)</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-900 to-purple-800 border-purple-700">
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">84%</div>
                <p className="text-purple-200">Increase in identity theft complaints globally</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-900 to-blue-800 border-blue-700">
              <CardContent className="p-6 text-center">
                <BarChart3 className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">73%</div>
                <p className="text-blue-200">Of crypto thefts involve compromised accounts</p>
              </CardContent>
            </Card>
          </div>

          {/* Regional Statistics */}
          <Card className="bg-slate-900/80 border-slate-700">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center">
                <Globe className="mr-3 h-6 w-6 text-cyan-400" />
                Regional Cybercrime Statistics (2024)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">
                    Current Region: {globalStats[currentStat].region}
                  </h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Account Hacking</span>
                      <div className="flex items-center">
                        <div className="w-32 bg-gray-700 rounded-full h-2 mr-3">
                          <div
                            className="bg-red-500 h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${globalStats[currentStat].hacking}%` }}
                          />
                        </div>
                        <span className="text-white font-bold">{globalStats[currentStat].hacking}%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Financial Fraud</span>
                      <div className="flex items-center">
                        <div className="w-32 bg-gray-700 rounded-full h-2 mr-3">
                          <div
                            className="bg-orange-500 h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${globalStats[currentStat].fraud}%` }}
                          />
                        </div>
                        <span className="text-white font-bold">{globalStats[currentStat].fraud}%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Identity Theft</span>
                      <div className="flex items-center">
                        <div className="w-32 bg-gray-700 rounded-full h-2 mr-3">
                          <div
                            className="bg-purple-500 h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${globalStats[currentStat].theft}%` }}
                          />
                        </div>
                        <span className="text-white font-bold">{globalStats[currentStat].theft}%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-2">
                  {globalStats.map((stat, index) => (
                    <div
                      key={stat.region}
                      className={`p-3 rounded-lg cursor-pointer transition-all ${
                        index === currentStat
                          ? "bg-cyan-600 text-white"
                          : "bg-slate-700 text-gray-300 hover:bg-slate-600"
                      }`}
                      onClick={() => setCurrentStat(index)}
                    >
                      <div className="font-semibold">{stat.region}</div>
                      <div className="text-sm opacity-80">
                        Hacking: {stat.hacking}% | Fraud: {stat.fraud}% | Theft: {stat.theft}%
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Security Tips Section */}
      <section className="py-16 px-4 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Essential Security Tips</h2>
            <p className="text-xl text-gray-300">
              Protect yourself from cyber threats with these expert recommendations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityTips.map((category, index) => (
              <Card key={index} className="bg-slate-800/80 border-slate-700 hover:border-cyan-500 transition-colors">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <category.icon className="mr-3 h-6 w-6 text-cyan-400" />
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {category.tips.map((tip, tipIndex) => (
                      <li key={tipIndex} className="flex items-start text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advertisement Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-cyan-900 to-blue-900">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30">
            <Badge className="mb-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold">
              🎯 LIMITED TIME OFFER
            </Badge>
            <h2 className="text-4xl font-bold text-white mb-4">FREE Security Assessment Worth $500</h2>
            <p className="text-xl text-cyan-100 mb-6">
              Get a comprehensive vulnerability audit of your digital assets and accounts
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <Target className="h-12 w-12 text-cyan-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Vulnerability Scan</h3>
                <p className="text-cyan-200 text-sm">Complete analysis of your security posture</p>
              </div>
              <div className="text-center">
                <FileText className="h-12 w-12 text-cyan-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Detailed Report</h3>
                <p className="text-cyan-200 text-sm">Actionable recommendations for improvement</p>
              </div>
              <div className="text-center">
                <UserCheck className="h-12 w-12 text-cyan-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Expert Consultation</h3>
                <p className="text-cyan-200 text-sm">30-minute session with our security experts</p>
              </div>
            </div>
            <Button
              size="lg"
              className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black hover:from-yellow-600 hover:to-orange-600 font-bold"
            >
              <Zap className="mr-2 h-5 w-5" />
              Claim Your FREE Assessment
            </Button>
            <p className="text-sm text-cyan-200 mt-4">
              ⏰ Offer expires in 48 hours | 🔒 No commitment required | ✅ 100% confidential
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300">Get answers to common questions about our services</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-slate-900/80 border border-slate-700 rounded-lg px-6"
              >
                <AccordionTrigger className="text-white hover:text-cyan-400 text-left">
                  <div className="flex items-center">
                    <Info className="h-5 w-5 text-cyan-400 mr-3 flex-shrink-0" />
                    {faq.question}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 pt-4">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Trusted Security Platforms Marquee */}
      <section className="py-12 bg-slate-900 overflow-hidden">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Trusted Security Partners</h2>
          <p className="text-gray-300">We work with industry-leading security platforms to protect your assets</p>
        </div>

        <div className="relative">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...securityPlatforms, ...securityPlatforms].map((platform, index) => (
              <div
                key={index}
                className="mx-8 flex items-center justify-center min-w-[200px] h-16 bg-gradient-to-r from-slate-800 to-slate-700 rounded-lg border border-slate-600 hover:border-cyan-500 transition-colors"
              >
                <span className="text-white font-semibold text-sm px-4">{platform}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-4 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-xl text-gray-300">Comprehensive cybersecurity solutions</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-slate-800/80 border-slate-700 hover:border-cyan-500 transition-colors group">
              <CardHeader>
                <div className="h-16 w-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-white">Digital Asset Recovery</CardTitle>
                <CardDescription className="text-gray-400">
                  Recover stolen cryptocurrencies, hacked accounts, and compromised digital assets
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="outline"
                  className="w-full border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black bg-transparent"
                  asChild
                >
                  <Link href="/recovery">
                    Start Recovery <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/80 border-slate-700 hover:border-cyan-500 transition-colors group">
              <CardHeader>
                <div className="h-16 w-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <AlertTriangle className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-white">Cybercrime Reporting</CardTitle>
                <CardDescription className="text-gray-400">
                  File complaints and track investigations with our expert team
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="outline"
                  className="w-full border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black bg-transparent"
                  asChild
                >
                  <Link href="/complaint">
                    File Complaint <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/80 border-slate-700 hover:border-cyan-500 transition-colors group">
              <CardHeader>
                <div className="h-16 w-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <MessageCircle className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-white">24/7 Support</CardTitle>
                <CardDescription className="text-gray-400">
                  Get immediate assistance from our cybersecurity experts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="outline"
                  className="w-full border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black bg-transparent"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Start Live Chat
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 bg-slate-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Get Help Now</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Phone className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Emergency Hotline</h3>
              <p className="text-cyan-400 font-mono">+1-800-CYBER-911</p>
              <p className="text-gray-400 text-sm mt-2">24/7 Emergency Response</p>
            </div>
            <div className="text-center">
              <Mail className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Email Support</h3>
              <p className="text-cyan-400">cybercrimelabofficial@proton.me</p>
              <p className="text-gray-400 text-sm mt-2">Response within 2 hours</p>
            </div>
            <div className="text-center">
              <Clock className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Response Time</h3>
              <p className="text-cyan-400">&lt; 15 minutes</p>
              <p className="text-gray-400 text-sm mt-2">Average first response</p>
            </div>
          </div>
        </div>
      </section>

      <LiveChat />
    </div>
  )
}
