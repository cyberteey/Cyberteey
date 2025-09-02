"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Mail, Phone, MapPin, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would handle form submission here
    setFormSubmitted(true)
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                Contact Us
              </h1>
              <p className="max-w-[700px] text-gray-400 md:text-xl dark:text-gray-400">
                Get in touch to discuss your security needs or request a consultation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-cyan-900/20 px-3 py-1 text-sm text-cyan-500">
                  Get In Touch
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">
                  Let's Discuss Your Security Needs
                </h2>
                <div className="space-y-4 text-gray-400">
                  <p>
                    Whether you're looking for a comprehensive security assessment, targeted penetration testing, or
                    expert security consulting, we're here to help.
                  </p>
                  <p>
                    Fill out the form with your details and requirements, and we'll get back to you to discuss how we
                    can meet your security needs. All inquiries are handled with strict confidentiality.
                  </p>
                </div>
              </div>
              <div className="space-y-6 pt-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-cyan-900/20 p-2">
                    <Mail className="h-6 w-6 text-cyan-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Email</h3>
                    <p className="text-gray-400">contact@cyberteey.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-cyan-900/20 p-2">
                    <Phone className="h-6 w-6 text-cyan-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Phone</h3>
                    <p className="text-gray-400">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-cyan-900/20 p-2">
                    <MapPin className="h-6 w-6 text-cyan-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Location</h3>
                    <p className="text-gray-400">Serving clients globally</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              {formSubmitted ? (
                <div className="rounded-lg border border-gray-800 bg-gray-900 p-8 shadow-lg h-full flex flex-col items-center justify-center text-center">
                  <div className="rounded-full bg-cyan-900/20 p-3 mb-4">
                    <Send className="h-8 w-8 text-cyan-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
                  <p className="text-gray-400 mb-6">
                    Your message has been sent successfully. We'll get back to you as soon as possible.
                  </p>
                  <Button onClick={() => setFormSubmitted(false)} className="bg-cyan-600 hover:bg-cyan-700 text-white">
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="rounded-lg border border-gray-800 bg-gray-900 p-8 shadow-lg h-full"
                >
                  <div className="space-y-6">
                    <div className="grid gap-2">
                      <Label htmlFor="name" className="text-white">
                        Name
                      </Label>
                      <Input
                        id="name"
                        placeholder="Your full name"
                        required
                        className="border-gray-700 bg-gray-800 text-white placeholder:text-gray-400"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="email" className="text-white">
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Your email address"
                        required
                        className="border-gray-700 bg-gray-800 text-white placeholder:text-gray-400"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="company" className="text-white">
                        Company / Organization
                      </Label>
                      <Input
                        id="company"
                        placeholder="Your company name"
                        className="border-gray-700 bg-gray-800 text-white placeholder:text-gray-400"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label className="text-white">I'm interested in:</Label>
                      <RadioGroup defaultValue="penetration-testing">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem id="penetration-testing" value="penetration-testing" />
                          <Label htmlFor="penetration-testing" className="text-gray-300">
                            Penetration Testing
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem id="security-assessment" value="security-assessment" />
                          <Label htmlFor="security-assessment" className="text-gray-300">
                            Security Assessment
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem id="code-review" value="code-review" />
                          <Label htmlFor="code-review" className="text-gray-300">
                            Secure Code Review
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem id="consulting" value="consulting" />
                          <Label htmlFor="consulting" className="text-gray-300">
                            Security Consulting
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem id="other" value="other" />
                          <Label htmlFor="other" className="text-gray-300">
                            Other
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem id="digital-recovery" value="digital-recovery" />
                          <Label htmlFor="digital-recovery" className="text-gray-300">
                            Digital Asset & Account Recovery
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="message" className="text-white">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Describe your security needs or project details"
                        required
                        className="min-h-[120px] border-gray-700 bg-gray-800 text-white placeholder:text-gray-400"
                      />
                    </div>
                    <div>
                      <Button type="submit" className="w-full bg-cyan-600 hover:bg-cyan-700 text-white">
                        Send Message
                      </Button>
                      <p className="mt-2 text-xs text-gray-400 text-center">
                        By submitting this form, you agree to our{" "}
                        <Link href="/privacy-policy" className="text-cyan-500 hover:underline">
                          Privacy Policy
                        </Link>
                      </p>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-cyan-900/20 px-3 py-1 text-sm text-cyan-500">
                Common Questions
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">Frequently Asked Questions</h2>
              <p className="max-w-[700px] text-gray-400 md:text-xl/relaxed">
                Answers to common questions about working with us.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-4xl gap-6">
            <div className="rounded-lg border border-gray-800 bg-gray-900 p-6">
              <h3 className="text-lg font-bold text-white">What information should I include in my inquiry?</h3>
              <p className="mt-2 text-gray-400">
                To help us respond more effectively, please include details about your organization, the specific
                security services you're interested in, any deadlines or timeframes, and a brief description of your
                security goals.
              </p>
            </div>
            <div className="rounded-lg border border-gray-800 bg-gray-900 p-6">
              <h3 className="text-lg font-bold text-white">How soon can you start a security assessment?</h3>
              <p className="mt-2 text-gray-400">
                Our availability varies based on current projects. Typically, we can initiate a project within 1-3 weeks
                of finalizing agreements. For urgent security concerns, we offer expedited services when possible.
              </p>
            </div>
            <div className="rounded-lg border border-gray-800 bg-gray-900 p-6">
              <h3 className="text-lg font-bold text-white">Do you offer remote security services?</h3>
              <p className="mt-2 text-gray-400">
                Yes, many of our services can be performed remotely, including most penetration testing, code reviews,
                and security consulting. Some assessments may require on-site work, which we can discuss based on your
                specific needs.
              </p>
            </div>
            <div className="rounded-lg border border-gray-800 bg-gray-900 p-6">
              <h3 className="text-lg font-bold text-white">How do you handle confidentiality?</h3>
              <p className="mt-2 text-gray-400">
                We treat all client information with the utmost confidentiality. Prior to beginning any work, we sign
                robust confidentiality agreements to protect your sensitive information and security findings.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
