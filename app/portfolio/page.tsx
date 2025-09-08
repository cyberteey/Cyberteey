import type { Metadata } from "next"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Portfolio - Cyberteey Crime Lab",
  description: "Case studies and success stories from our cybersecurity and digital forensics work.",
}

const caseStudies = [
  {
    title: "Cryptocurrency Recovery - $2.3M Recovered",
    category: "Asset Recovery",
    description:
      "Successfully traced and recovered stolen cryptocurrency through advanced blockchain analysis and legal cooperation.",
    image: "/images/case-study-1.png",
    results: [
      "100% asset recovery",
      "3-week investigation timeline",
      "Cross-border legal coordination",
      "Advanced blockchain forensics",
    ],
    status: "Completed",
  },
  {
    title: "Corporate Data Breach Investigation",
    category: "Digital Forensics",
    description:
      "Comprehensive investigation of a Fortune 500 company breach, identifying attack vectors and securing systems.",
    image: "/images/case-study-2.png",
    results: [
      "Attack vector identified",
      "Systems secured and hardened",
      "Compliance requirements met",
      "Zero data loss confirmed",
    ],
    status: "Completed",
  },
  {
    title: "Ransomware Incident Response",
    category: "Incident Response",
    description: "Rapid response to ransomware attack, containing the threat and restoring operations within 48 hours.",
    image: "/images/case-study-3.png",
    results: [
      "Threat contained in 6 hours",
      "Full system restoration",
      "No ransom payment required",
      "Enhanced security implemented",
    ],
    status: "Completed",
  },
  {
    title: "Social Media Account Recovery",
    category: "Asset Recovery",
    description: "Recovered compromised social media accounts for high-profile individuals and businesses.",
    image: "/images/case-study-1.png",
    results: [
      "Multiple accounts recovered",
      "Identity verification process",
      "Security measures implemented",
      "Ongoing monitoring setup",
    ],
    status: "Completed",
  },
  {
    title: "Mobile Device Forensics",
    category: "Digital Forensics",
    description: "Extracted critical evidence from damaged mobile devices for legal proceedings.",
    image: "/images/case-study-2.png",
    results: [
      "Data recovered from damaged device",
      "Evidence admissible in court",
      "Chain of custody maintained",
      "Expert testimony provided",
    ],
    status: "Completed",
  },
  {
    title: "Email Account Restoration",
    category: "Asset Recovery",
    description: "Restored access to critical business email accounts after sophisticated phishing attack.",
    image: "/images/case-study-3.png",
    results: [
      "Full account access restored",
      "Security vulnerabilities patched",
      "Staff training implemented",
      "Monitoring systems deployed",
    ],
    status: "Completed",
  },
]

export default function PortfolioPage() {
  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <Badge variant="outline" className="mb-4">
          Case Studies
        </Badge>
        <h1 className="text-4xl font-bold mb-4">Success Stories</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Real cases where our expertise made the difference. See how we've helped clients recover assets, investigate
          incidents, and strengthen their security.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {caseStudies.map((study, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="relative h-48">
              <Image src={study.image || "/placeholder.svg"} alt={study.title} fill className="object-cover" />
              <div className="absolute top-4 left-4">
                <Badge>{study.category}</Badge>
              </div>
              <div className="absolute top-4 right-4">
                <Badge variant="secondary">{study.status}</Badge>
              </div>
            </div>
            <CardHeader>
              <CardTitle className="text-lg">{study.title}</CardTitle>
              <CardDescription>{study.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <h4 className="font-semibold text-sm">Key Results:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {study.results.map((result, resultIndex) => (
                    <li key={resultIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-muted-foreground mb-6">
          Contact us today to discuss your cybersecurity needs and see how we can help protect your digital assets.
        </p>
      </div>
    </div>
  )
}
