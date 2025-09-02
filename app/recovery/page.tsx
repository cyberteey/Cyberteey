"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Shield, Key, Database, AlertTriangle, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function RecoveryPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [selectedServices, setSelectedServices] = useState<string[]>([])

  const handleServiceChange = (service: string, checked: boolean) => {
    if (checked) {
      setSelectedServices([...selectedServices, service])
    } else {
      setSelectedServices(selectedServices.filter((s) => s !== service))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white mask-radial-faded opacity-20" />
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block font-mono text-green-500 bg-black/50 px-4 py-2 rounded mb-4">
                &gt; DIGITAL_RECOVERY_PROTOCOL.EXE
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white font-mono">
                DIGITAL ASSET RECOVERY
              </h1>
              <p className="max-w-[700px] text-gray-400 md:text-xl">
                Professional recovery services for lost digital assets, compromised accounts, and inaccessible data
                using advanced forensic techniques.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recovery Services Overview */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-cyan-900/20 px-3 py-1 text-sm text-cyan-500 font-mono">
                RECOVERY_MATRIX
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white font-mono">
                ASSET RECOVERY PROTOCOLS
              </h2>
              <p className="max-w-[700px] text-gray-400 md:text-xl/relaxed">
                Comprehensive digital forensics and recovery services for all types of digital assets and accounts.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="cyber-border glass-card p-6 group hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-green-500/20 rounded-lg mr-4">
                  <Key className="h-8 w-8 text-green-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white font-mono">ACCOUNT_RECOVERY</h3>
                  <div className="text-green-500 text-sm font-mono">STATUS: ACTIVE</div>
                </div>
              </div>
              <p className="text-gray-400 mb-6">
                Recover access to compromised or locked accounts across all major platforms and services.
              </p>
              <div className="space-y-2 text-sm font-mono">
                <div className="flex items-center text-green-400">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  <span>Social media accounts</span>
                </div>
                <div className="flex items-center text-green-400">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  <span>Email account recovery</span>
                </div>
                <div className="flex items-center text-green-400">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  <span>Banking & financial accounts</span>
                </div>
                <div className="flex items-center text-green-400">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  <span>Business platform access</span>
                </div>
              </div>
            </div>

            <div className="cyber-border glass-card p-6 group hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-cyan-500/20 rounded-lg mr-4">
                  <Database className="h-8 w-8 text-cyan-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white font-mono">DATA_RECOVERY</h3>
                  <div className="text-cyan-500 text-sm font-mono">STATUS: SCANNING</div>
                </div>
              </div>
              <p className="text-gray-400 mb-6">
                Advanced data recovery from damaged, corrupted, or encrypted storage devices.
              </p>
              <div className="space-y-2 text-sm font-mono">
                <div className="flex items-center text-cyan-400">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  <span>Hard drive recovery</span>
                </div>
                <div className="flex items-center text-cyan-400">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  <span>SSD data extraction</span>
                </div>
                <div className="flex items-center text-cyan-400">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  <span>Mobile device recovery</span>
                </div>
                <div className="flex items-center text-cyan-400">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  <span>Cloud data restoration</span>
                </div>
              </div>
            </div>

            <div className="cyber-border glass-card p-6 group hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-yellow-500/20 rounded-lg mr-4">
                  <Shield className="h-8 w-8 text-yellow-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white font-mono">CRYPTO_RECOVERY</h3>
                  <div className="text-yellow-500 text-sm font-mono">STATUS: ANALYZING</div>
                </div>
              </div>
              <p className="text-gray-400 mb-6">
                Specialized recovery of cryptocurrency wallets and digital assets using forensic blockchain analysis.
              </p>
              <div className="space-y-2 text-sm font-mono">
                <div className="flex items-center text-yellow-400">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  <span>Wallet password recovery</span>
                </div>
                <div className="flex items-center text-yellow-400">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  <span>Private key restoration</span>
                </div>
                <div className="flex items-center text-yellow-400">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  <span>Exchange account recovery</span>
                </div>
                <div className="flex items-center text-yellow-400">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  <span>NFT asset recovery</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recovery Process */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900 relative">
        <div className="absolute inset-0 bg-dot-white opacity-10" />
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-cyan-900/20 px-3 py-1 text-sm text-cyan-500 font-mono">
                RECOVERY_SEQUENCE
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white font-mono">
                RECOVERY PROTOCOL
              </h2>
              <p className="max-w-[700px] text-gray-400 md:text-xl/relaxed">
                Our systematic approach to digital asset recovery ensures maximum success rates.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="cyber-border glass-card p-6 mb-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-500 font-mono font-bold">01</span>
                </div>
                <h3 className="text-lg font-bold text-white font-mono mb-2">ASSESSMENT</h3>
                <p className="text-gray-400 text-sm">Initial analysis of the recovery scenario and asset evaluation</p>
              </div>
            </div>

            <div className="text-center">
              <div className="cyber-border glass-card p-6 mb-4">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-cyan-500 font-mono font-bold">02</span>
                </div>
                <h3 className="text-lg font-bold text-white font-mono mb-2">FORENSICS</h3>
                <p className="text-gray-400 text-sm">Advanced forensic analysis using specialized recovery tools</p>
              </div>
            </div>

            <div className="text-center">
              <div className="cyber-border glass-card p-6 mb-4">
                <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-yellow-500 font-mono font-bold">03</span>
                </div>
                <h3 className="text-lg font-bold text-white font-mono mb-2">RECOVERY</h3>
                <p className="text-gray-400 text-sm">Execution of recovery protocols and asset extraction</p>
              </div>
            </div>

            <div className="text-center">
              <div className="cyber-border glass-card p-6 mb-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-purple-500 font-mono font-bold">04</span>
                </div>
                <h3 className="text-lg font-bold text-white font-mono mb-2">DELIVERY</h3>
                <p className="text-gray-400 text-sm">Secure transfer of recovered assets to verified owner</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recovery Application Form */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-cyan-900/20 px-3 py-1 text-sm text-cyan-500 font-mono">
                RECOVERY_APPLICATION
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white font-mono">
                APPLY FOR RECOVERY
              </h2>
              <p className="max-w-[700px] text-gray-400 md:text-xl/relaxed">
                Submit your recovery request with detailed information for assessment.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            {formSubmitted ? (
              <div className="cyber-border glass-card p-12 text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-8 w-8 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 font-mono">RECOVERY REQUEST SUBMITTED</h3>
                <p className="text-gray-400 mb-6">
                  Your recovery application has been received. Our forensics team will review your case and contact you
                  within 24 hours.
                </p>
                <div className="glass-card p-4 mb-6">
                  <p className="text-green-500 font-mono text-sm">
                    &gt; CASE_ID: REC-{Math.random().toString(36).substr(2, 9).toUpperCase()}
                  </p>
                  <p className="text-green-500 font-mono text-sm">&gt; STATUS: UNDER_REVIEW</p>
                  <p className="text-green-500 font-mono text-sm">&gt; PRIORITY: HIGH</p>
                </div>
                <Button onClick={() => setFormSubmitted(false)} className="cyber-button font-mono">
                  SUBMIT_ANOTHER_REQUEST
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="cyber-border glass-card p-8">
                <div className="grid gap-6">
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-white font-mono">PERSONAL INFORMATION</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="fullName" className="text-white font-mono">
                          FULL NAME *
                        </Label>
                        <Input
                          id="fullName"
                          placeholder="Enter your full legal name"
                          required
                          className="border-gray-700 bg-gray-800 text-white placeholder:text-gray-400 font-mono"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-white font-mono">
                          EMAIL ADDRESS *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your.email@domain.com"
                          required
                          className="border-gray-700 bg-gray-800 text-white placeholder:text-gray-400 font-mono"
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone" className="text-white font-mono">
                          PHONE NUMBER *
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+1 (555) 123-4567"
                          required
                          className="border-gray-700 bg-gray-800 text-white placeholder:text-gray-400 font-mono"
                        />
                      </div>
                      <div>
                        <Label htmlFor="location" className="text-white font-mono">
                          LOCATION
                        </Label>
                        <Input
                          id="location"
                          placeholder="City, Country"
                          className="border-gray-700 bg-gray-800 text-white placeholder:text-gray-400 font-mono"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Recovery Type */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-white font-mono">RECOVERY TYPE</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="urgency" className="text-white font-mono">
                          URGENCY LEVEL *
                        </Label>
                        <Select required>
                          <SelectTrigger className="border-gray-700 bg-gray-800 text-white font-mono">
                            <SelectValue placeholder="Select urgency level" />
                          </SelectTrigger>
                          <SelectContent className="bg-gray-800 border-gray-700">
                            <SelectItem value="low" className="text-white font-mono">
                              LOW - Standard processing
                            </SelectItem>
                            <SelectItem value="medium" className="text-white font-mono">
                              MEDIUM - Priority processing
                            </SelectItem>
                            <SelectItem value="high" className="text-white font-mono">
                              HIGH - Urgent (24-48 hours)
                            </SelectItem>
                            <SelectItem value="critical" className="text-white font-mono">
                              CRITICAL - Emergency (immediate)
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="estimatedValue" className="text-white font-mono">
                          ESTIMATED ASSET VALUE
                        </Label>
                        <Select>
                          <SelectTrigger className="border-gray-700 bg-gray-800 text-white font-mono">
                            <SelectValue placeholder="Select value range" />
                          </SelectTrigger>
                          <SelectContent className="bg-gray-800 border-gray-700">
                            <SelectItem value="under-1k" className="text-white font-mono">
                              Under $1,000
                            </SelectItem>
                            <SelectItem value="1k-10k" className="text-white font-mono">
                              $1,000 - $10,000
                            </SelectItem>
                            <SelectItem value="10k-100k" className="text-white font-mono">
                              $10,000 - $100,000
                            </SelectItem>
                            <SelectItem value="100k-1m" className="text-white font-mono">
                              $100,000 - $1,000,000
                            </SelectItem>
                            <SelectItem value="over-1m" className="text-white font-mono">
                              Over $1,000,000
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Services Needed */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-white font-mono">RECOVERY SERVICES NEEDED</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {[
                        { id: "email-recovery", label: "Email Account Recovery", icon: "📧" },
                        { id: "social-media", label: "Social Media Accounts", icon: "📱" },
                        { id: "crypto-wallet", label: "Cryptocurrency Wallets", icon: "₿" },
                        { id: "banking", label: "Banking & Financial Accounts", icon: "🏦" },
                        { id: "cloud-storage", label: "Cloud Storage Access", icon: "☁️" },
                        { id: "business-accounts", label: "Business Platform Accounts", icon: "💼" },
                        { id: "data-recovery", label: "Hard Drive/Device Data", icon: "💾" },
                        { id: "password-recovery", label: "Password Recovery", icon: "🔐" },
                        { id: "domain-recovery", label: "Domain & Website Recovery", icon: "🌐" },
                        { id: "nft-recovery", label: "NFT & Digital Assets", icon: "🎨" },
                        { id: "gaming-accounts", label: "Gaming Accounts", icon: "🎮" },
                        { id: "other-recovery", label: "Other Digital Assets", icon: "🔧" },
                      ].map((service) => (
                        <div key={service.id} className="flex items-center space-x-3 glass-card p-3">
                          <Checkbox
                            id={service.id}
                            checked={selectedServices.includes(service.id)}
                            onCheckedChange={(checked) => handleServiceChange(service.id, checked as boolean)}
                            className="border-gray-600"
                          />
                          <Label htmlFor={service.id} className="text-gray-300 font-mono text-sm flex items-center">
                            <span className="mr-2">{service.icon}</span>
                            {service.label}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Incident Details */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-white font-mono">INCIDENT DETAILS</h3>
                    <div>
                      <Label htmlFor="incidentDescription" className="text-white font-mono">
                        DESCRIBE THE SITUATION *
                      </Label>
                      <Textarea
                        id="incidentDescription"
                        placeholder="Provide detailed information about what happened, when it occurred, and what assets are affected..."
                        required
                        className="min-h-[120px] border-gray-700 bg-gray-800 text-white placeholder:text-gray-400 font-mono"
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="incidentDate" className="text-white font-mono">
                          WHEN DID THIS OCCUR?
                        </Label>
                        <Input
                          id="incidentDate"
                          type="date"
                          className="border-gray-700 bg-gray-800 text-white font-mono"
                        />
                      </div>
                      <div>
                        <Label htmlFor="previousAttempts" className="text-white font-mono">
                          PREVIOUS RECOVERY ATTEMPTS
                        </Label>
                        <Select>
                          <SelectTrigger className="border-gray-700 bg-gray-800 text-white font-mono">
                            <SelectValue placeholder="Have you tried recovery before?" />
                          </SelectTrigger>
                          <SelectContent className="bg-gray-800 border-gray-700">
                            <SelectItem value="none" className="text-white font-mono">
                              No previous attempts
                            </SelectItem>
                            <SelectItem value="self" className="text-white font-mono">
                              Self-attempted recovery
                            </SelectItem>
                            <SelectItem value="other-service" className="text-white font-mono">
                              Used other recovery service
                            </SelectItem>
                            <SelectItem value="multiple" className="text-white font-mono">
                              Multiple attempts
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Evidence & Documentation */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-white font-mono">EVIDENCE & DOCUMENTATION</h3>
                    <div>
                      <Label htmlFor="availableEvidence" className="text-white font-mono">
                        AVAILABLE EVIDENCE
                      </Label>
                      <Textarea
                        id="availableEvidence"
                        placeholder="List any evidence you have: screenshots, transaction IDs, backup files, recovery phrases, etc."
                        className="min-h-[80px] border-gray-700 bg-gray-800 text-white placeholder:text-gray-400 font-mono"
                      />
                    </div>
                    <div className="glass-card p-4">
                      <p className="text-yellow-500 font-mono text-sm mb-2">⚠️ SECURITY NOTICE:</p>
                      <p className="text-gray-400 text-sm font-mono">
                        Never share passwords, private keys, or recovery phrases in this form. Our team will request
                        secure verification through encrypted channels after initial assessment.
                      </p>
                    </div>
                  </div>

                  {/* Legal Verification */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-white font-mono">LEGAL VERIFICATION</h3>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <Checkbox id="ownership" required className="border-gray-600 mt-1" />
                        <Label htmlFor="ownership" className="text-gray-300 font-mono text-sm">
                          I confirm that I am the legitimate owner of the digital assets/accounts I am requesting
                          recovery for, and I have legal authority to access them.
                        </Label>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Checkbox id="identity" required className="border-gray-600 mt-1" />
                        <Label htmlFor="identity" className="text-gray-300 font-mono text-sm">
                          I agree to provide government-issued identification and proof of ownership as required for
                          verification.
                        </Label>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Checkbox id="legal-compliance" required className="border-gray-600 mt-1" />
                        <Label htmlFor="legal-compliance" className="text-gray-300 font-mono text-sm">
                          I understand that all recovery activities will be conducted in compliance with applicable laws
                          and regulations.
                        </Label>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Checkbox id="terms" required className="border-gray-600 mt-1" />
                        <Label htmlFor="terms" className="text-gray-300 font-mono text-sm">
                          I agree to the{" "}
                          <Link href="/terms-of-service" className="text-cyan-500 hover:underline">
                            Terms of Service
                          </Link>{" "}
                          and{" "}
                          <Link href="/privacy-policy" className="text-cyan-500 hover:underline">
                            Privacy Policy
                          </Link>
                          .
                        </Label>
                      </div>
                    </div>
                  </div>

                  {/* Submit */}
                  <div className="pt-6">
                    <Button type="submit" className="w-full cyber-button font-mono text-lg py-4">
                      <Shield className="mr-2 h-5 w-5" />
                      SUBMIT_RECOVERY_REQUEST
                    </Button>
                    <p className="mt-4 text-xs text-gray-400 text-center font-mono">
                      All recovery requests are handled with maximum security and confidentiality. Response time: 24-48
                      hours.
                    </p>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-cyan-900/20 px-3 py-1 text-sm text-cyan-500 font-mono">
                SUCCESS_METRICS
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white font-mono">
                RECOVERY SUCCESS RATE
              </h2>
              <p className="max-w-[700px] text-gray-400 md:text-xl/relaxed">
                Our track record speaks for itself - professional results with maximum discretion.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-12">
            <div className="text-center glass-card p-6">
              <div className="text-4xl font-bold text-green-500 font-mono mb-2">94%</div>
              <div className="text-gray-400 font-mono text-sm">SUCCESS RATE</div>
            </div>
            <div className="text-center glass-card p-6">
              <div className="text-4xl font-bold text-cyan-500 font-mono mb-2">$50M+</div>
              <div className="text-gray-400 font-mono text-sm">ASSETS RECOVERED</div>
            </div>
            <div className="text-center glass-card p-6">
              <div className="text-4xl font-bold text-yellow-500 font-mono mb-2">2,500+</div>
              <div className="text-gray-400 font-mono text-sm">CASES RESOLVED</div>
            </div>
            <div className="text-center glass-card p-6">
              <div className="text-4xl font-bold text-purple-500 font-mono mb-2">24H</div>
              <div className="text-gray-400 font-mono text-sm">AVG RESPONSE TIME</div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mr-4">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                </div>
                <div>
                  <div className="text-green-500 font-mono text-sm">CASE_ID: REC-2024-001</div>
                  <div className="text-white font-bold">Cryptocurrency Recovery</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                "Lost access to Bitcoin wallet worth $2.3M. Cyber Crime Lab recovered 100% of assets within 72 hours
                using advanced forensic techniques."
              </p>
              <div className="text-cyan-500 font-mono text-xs">RECOVERY_STATUS: COMPLETE</div>
            </div>

            <div className="glass-card p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center mr-4">
                  <CheckCircle className="h-6 w-6 text-cyan-500" />
                </div>
                <div>
                  <div className="text-cyan-500 font-mono text-sm">CASE_ID: REC-2024-047</div>
                  <div className="text-white font-bold">Business Account Recovery</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                "Compromised business email and cloud accounts. Team recovered all data and secured accounts within 48
                hours, preventing major data loss."
              </p>
              <div className="text-cyan-500 font-mono text-xs">RECOVERY_STATUS: COMPLETE</div>
            </div>

            <div className="glass-card p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center mr-4">
                  <CheckCircle className="h-6 w-6 text-yellow-500" />
                </div>
                <div>
                  <div className="text-yellow-500 font-mono text-sm">CASE_ID: REC-2024-089</div>
                  <div className="text-white font-bold">Data Recovery</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                "Failed SSD with 10 years of family photos and documents. Advanced forensic recovery restored 98% of
                data from damaged drive."
              </p>
              <div className="text-cyan-500 font-mono text-xs">RECOVERY_STATUS: COMPLETE</div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-t from-black to-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-grid-white mask-radial-faded opacity-20" />
        </div>
        <div className="container px-4 md:px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-12">
              <div className="font-mono text-red-500 text-lg mb-6">&gt; EMERGENCY_RECOVERY_HOTLINE</div>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-mono">URGENT RECOVERY NEEDED?</h2>
              <p className="text-gray-400 text-xl mb-8 max-w-2xl mx-auto">
                For critical recovery situations requiring immediate attention, contact our emergency response team.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
                <div className="glass-card p-4">
                  <div className="text-red-500 font-mono text-sm mb-2">EMERGENCY HOTLINE</div>
                  <div className="text-white font-mono text-xl">+1 (555) RECOVER</div>
                  <div className="text-gray-400 font-mono text-xs">24/7 AVAILABILITY</div>
                </div>
                <div className="glass-card p-4">
                  <div className="text-red-500 font-mono text-sm mb-2">SECURE EMAIL</div>
                  <div className="text-white font-mono text-xl">emergency@cybercrimelab.com</div>
                  <div className="text-gray-400 font-mono text-xs">ENCRYPTED COMMUNICATION</div>
                </div>
              </div>

              <div className="text-sm font-mono text-yellow-500 mb-6">
                &gt; RESPONSE_TIME: &lt; 1 HOUR | THREAT_LEVEL: CRITICAL
              </div>

              <Link href="/contact">
                <Button size="lg" className="cyber-button font-mono text-lg px-8 py-4 mr-4">
                  <AlertTriangle className="mr-2 h-5 w-5" />
                  EMERGENCY_CONTACT
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
