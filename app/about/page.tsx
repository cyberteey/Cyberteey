import type { Metadata } from "next"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Users, Award, Target } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us - Cyberteey Crime Lab",
  description: "Learn about our team of cybersecurity experts and our mission to protect digital assets worldwide.",
}

export default function AboutPage() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            About Cyberteey Crime Lab
          </Badge>
          <h1 className="text-4xl font-bold mb-4">Protecting Your Digital World</h1>
          <p className="text-xl text-muted-foreground">
            We are a team of dedicated cybersecurity professionals committed to safeguarding digital assets and
            investigating cyber crimes.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-muted-foreground mb-4">
              To provide world-class cybersecurity services, digital forensics, and asset recovery solutions that
              protect individuals and organizations from cyber threats.
            </p>
            <p className="text-muted-foreground">
              We combine cutting-edge technology with deep expertise to deliver results that matter, helping our clients
              recover from cyber incidents and strengthen their security posture.
            </p>
          </div>
          <div className="relative h-64 overflow-hidden rounded-lg">
            <Image src="/images/about-image.png" alt="Cybersecurity team at work" fill className="object-cover" />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
          <Card>
            <CardHeader className="text-center">
              <Shield className="mx-auto h-12 w-12 text-primary mb-2" />
              <CardTitle>Security First</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">
                Every solution we provide is built with security as the foundation.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <Users className="mx-auto h-12 w-12 text-primary mb-2" />
              <CardTitle>Expert Team</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">
                Certified professionals with years of experience in cybersecurity.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <Award className="mx-auto h-12 w-12 text-primary mb-2" />
              <CardTitle>Proven Results</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">
                Track record of successful recoveries and security implementations.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <Target className="mx-auto h-12 w-12 text-primary mb-2" />
              <CardTitle>Client Focus</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">
                Tailored solutions that meet each client's unique needs and challenges.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
          <div className="grid gap-4 md:grid-cols-3 text-left">
            <div>
              <h3 className="font-semibold mb-2">24/7 Availability</h3>
              <p className="text-sm text-muted-foreground">
                Cyber threats don't wait for business hours. Neither do we.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Global Reach</h3>
              <p className="text-sm text-muted-foreground">
                We serve clients worldwide with consistent quality and expertise.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Confidentiality</h3>
              <p className="text-sm text-muted-foreground">
                Your privacy and data security are our highest priorities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
