"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/components/ui/use-toast"
import { Search, CheckCircle, Star } from "lucide-react"

const recoveryTypes = [
  { value: "ACCOUNT_RECOVERY", label: "Account Recovery", description: "Recover hacked or compromised accounts" },
  {
    value: "CRYPTOCURRENCY_RECOVERY",
    label: "Cryptocurrency Recovery",
    description: "Recover stolen or lost crypto assets",
  },
  { value: "DATA_RECOVERY", label: "Data Recovery", description: "Recover deleted or corrupted data" },
  { value: "EMAIL_RECOVERY", label: "Email Recovery", description: "Recover compromised email accounts" },
  { value: "SOCIAL_MEDIA_RECOVERY", label: "Social Media Recovery", description: "Recover social media accounts" },
  { value: "FINANCIAL_RECOVERY", label: "Financial Recovery", description: "Recover financial accounts and assets" },
  { value: "IDENTITY_RECOVERY", label: "Identity Recovery", description: "Recover stolen identity information" },
  { value: "DEVICE_RECOVERY", label: "Device Recovery", description: "Recover access to locked devices" },
]

const assetTypes = [
  { value: "CRYPTOCURRENCY", label: "Cryptocurrency (Bitcoin, Ethereum, etc.)" },
  { value: "BANK_ACCOUNT", label: "Bank Account" },
  { value: "EMAIL_ACCOUNT", label: "Email Account" },
  { value: "SOCIAL_MEDIA", label: "Social Media Account" },
  { value: "GAMING_ACCOUNT", label: "Gaming Account" },
  { value: "CLOUD_STORAGE", label: "Cloud Storage (Google Drive, iCloud, etc.)" },
  { value: "DOMAIN_NAME", label: "Domain Name" },
  { value: "WEBSITE", label: "Website" },
  { value: "MOBILE_WALLET", label: "Mobile Wallet" },
  { value: "TRADING_ACCOUNT", label: "Trading Account" },
  { value: "PAYPAL_ACCOUNT", label: "PayPal Account" },
  { value: "DIGITAL_WALLET", label: "Digital Wallet" },
  { value: "OTHER", label: "Other" },
]

const successRates = {
  CRYPTOCURRENCY: "96.8%",
  BANK_ACCOUNT: "92.4%",
  EMAIL_ACCOUNT: "98.1%",
  SOCIAL_MEDIA: "94.7%",
  GAMING_ACCOUNT: "89.3%",
  CLOUD_STORAGE: "91.6%",
  DOMAIN_NAME: "87.2%",
  WEBSITE: "93.5%",
  MOBILE_WALLET: "95.3%",
  TRADING_ACCOUNT: "90.8%",
  PAYPAL_ACCOUNT: "94.1%",
  DIGITAL_WALLET: "92.9%",
  OTHER: "88.5%",
}

export default function RecoveryPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [trackingId, setTrackingId] = useState("")
  const [selectedAssetType, setSelectedAssetType] = useState("")
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      recoveryType: formData.get("recoveryType"),
      assetType: formData.get("assetType"),
      description: formData.get("description"),
      lossAmount: formData.get("lossAmount"),
      lossDate: formData.get("lossDate"),
      evidence: formData.get("evidence"),
    }

    try {
      const response = await fetch("/api/recovery", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        const result = await response.json()
        setTrackingId(result.trackingId)
        toast({
          title: "Recovery Request Submitted",
          description: `Your tracking ID is: ${result.trackingId}`,
        })
      } else {
        throw new Error("Failed to submit recovery request")
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit recovery request. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (trackingId) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 py-12">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <CardTitle className="text-2xl text-green-700">Recovery Request Submitted</CardTitle>
              <CardDescription>
                Your recovery request has been received and our expert team is ready to help
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h3 className="font-semibold text-green-800 mb-2">Your Tracking ID</h3>
                <p className="text-2xl font-mono font-bold text-green-700">{trackingId}</p>
                <p className="text-sm text-green-600 mt-2">Use this ID to track your recovery progress</p>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Star className="h-5 w-5 text-yellow-600" />
                  <span className="font-semibold text-yellow-800">Success Rate: 94.2%</span>
                </div>
                <p className="text-sm text-yellow-700">
                  Our team has successfully recovered digital assets in 94.2% of cases
                </p>
              </div>

              <div className="space-y-4 text-left">
                <h4 className="font-semibold text-gray-800">Recovery Process Timeline:</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      1
                    </div>
                    <div>
                      <p className="font-medium">Initial Assessment</p>
                      <p className="text-sm text-gray-600">24-48 hours - Case review and feasibility analysis</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      2
                    </div>
                    <div>
                      <p className="font-medium">Technical Analysis</p>
                      <p className="text-sm text-gray-600">2-5 days - Deep investigation and recovery planning</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      3
                    </div>
                    <div>
                      <p className="font-medium">Active Recovery</p>
                      <p className="text-sm text-gray-600">5-14 days - Implementation of recovery procedures</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      4
                    </div>
                    <div>
                      <p className="font-medium">Asset Return</p>
                      <p className="text-sm text-gray-600">Final step - Secure return of recovered assets</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="flex-1 bg-green-600 hover:bg-green-700">
                  <a href={`/track?id=${trackingId}`}>Track Recovery Progress</a>
                </Button>
                <Button variant="outline" asChild className="flex-1 bg-transparent">
                  <a href="/recovery">Submit Another Request</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="h-8 w-8 text-green-600" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Digital Asset Recovery</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional recovery services for lost, stolen, or compromised digital assets with a 94.2% success rate.
            </p>
          </div>

          {/* Success Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-green-600 mb-2">94.2%</div>
                <p className="text-sm text-gray-600">Overall Success Rate</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">7-14</div>
                <p className="text-sm text-gray-600">Days Average Recovery</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
                <p className="text-sm text-gray-600">Assets Recovered</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
                <p className="text-sm text-gray-600">Expert Support</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Recovery Request Form</CardTitle>
              <CardDescription>
                Provide detailed information about your lost or compromised digital assets to help us recover them
                effectively.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" name="name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" name="email" type="email" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number (Optional)</Label>
                  <Input id="phone" name="phone" type="tel" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="recoveryType">Recovery Type *</Label>
                  <Select name="recoveryType" required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select the type of recovery needed" />
                    </SelectTrigger>
                    <SelectContent>
                      {recoveryTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          <div>
                            <div className="font-medium">{type.label}</div>
                            <div className="text-sm text-gray-500">{type.description}</div>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="assetType">Asset Type *</Label>
                  <Select name="assetType" required onValueChange={setSelectedAssetType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select the type of asset to recover" />
                    </SelectTrigger>
                    <SelectContent>
                      {assetTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {selectedAssetType && successRates[selectedAssetType as keyof typeof successRates] && (
                    <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                      <p className="text-sm text-green-700">
                        <strong>
                          Success Rate for {assetTypes.find((t) => t.value === selectedAssetType)?.label}:{" "}
                        </strong>
                        <span className="font-bold">
                          {successRates[selectedAssetType as keyof typeof successRates]}
                        </span>
                      </p>
                    </div>
                  )}
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="lossAmount">Estimated Loss Amount (Optional)</Label>
                    <Input id="lossAmount" name="lossAmount" placeholder="e.g., $10,000 or 2.5 BTC" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lossDate">Date of Loss (Optional)</Label>
                    <Input id="lossDate" name="lossDate" type="date" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Detailed Description *</Label>
                  <Textarea
                    id="description"
                    name="description"
                    rows={6}
                    placeholder="Please describe what happened, how the asset was lost or compromised, any relevant details about the incident, and what steps you've already taken..."
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="evidence">Evidence/Documentation (Optional)</Label>
                  <Textarea
                    id="evidence"
                    name="evidence"
                    rows={3}
                    placeholder="List any evidence you have: transaction IDs, wallet addresses, screenshots, emails, etc. Do not include private keys or passwords."
                  />
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800 mb-2">Recovery Process Information:</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Our experts will assess your case within 24-48 hours</li>
                    <li>• You'll receive regular updates on the recovery progress</li>
                    <li>• We use advanced forensic tools and blockchain analysis</li>
                    <li>• No upfront fees - we work on a success-based model</li>
                    <li>• All communications are encrypted and confidential</li>
                  </ul>
                </div>

                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting Request..." : "Submit Recovery Request"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
