"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useToast } from "@/components/ui/use-toast"
import { AlertTriangle, FileText, Shield, Clock } from "lucide-react"

const complaintCategories = [
  { value: "ACCOUNT_HACK", label: "Account Hacking" },
  { value: "IDENTITY_THEFT", label: "Identity Theft" },
  { value: "FINANCIAL_FRAUD", label: "Financial Fraud" },
  { value: "CYBERBULLYING", label: "Cyberbullying" },
  { value: "PHISHING", label: "Phishing Attack" },
  { value: "MALWARE", label: "Malware/Virus" },
  { value: "DATA_BREACH", label: "Data Breach" },
  { value: "RANSOMWARE", label: "Ransomware Attack" },
  { value: "SOCIAL_ENGINEERING", label: "Social Engineering" },
  { value: "ONLINE_SCAM", label: "Online Scam" },
  { value: "CRYPTOCURRENCY_THEFT", label: "Cryptocurrency Theft" },
  { value: "EMAIL_COMPROMISE", label: "Email Compromise" },
  { value: "WEBSITE_DEFACEMENT", label: "Website Defacement" },
  { value: "OTHER", label: "Other" },
]

const priorities = [
  { value: "LOW", label: "Low", description: "Non-urgent matter" },
  { value: "MEDIUM", label: "Medium", description: "Standard priority" },
  { value: "HIGH", label: "High", description: "Important issue" },
  { value: "URGENT", label: "Urgent", description: "Needs quick attention" },
  { value: "EMERGENCY", label: "Emergency", description: "Critical situation" },
]

export default function ComplaintPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [trackingId, setTrackingId] = useState("")
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      category: formData.get("category"),
      priority: formData.get("priority"),
      subject: formData.get("subject"),
      description: formData.get("description"),
      evidence: formData.get("evidence"),
    }

    try {
      const response = await fetch("/api/complaints", {
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
          title: "Complaint Submitted Successfully",
          description: `Your tracking ID is: ${result.trackingId}`,
        })
      } else {
        throw new Error("Failed to submit complaint")
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit complaint. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (trackingId) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-100 py-12">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <CardTitle className="text-2xl text-green-700">Complaint Submitted Successfully</CardTitle>
              <CardDescription>Your complaint has been received and assigned a tracking ID</CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h3 className="font-semibold text-green-800 mb-2">Your Tracking ID</h3>
                <p className="text-2xl font-mono font-bold text-green-700">{trackingId}</p>
                <p className="text-sm text-green-600 mt-2">Save this ID to track your complaint status</p>
              </div>

              <div className="space-y-4 text-left">
                <h4 className="font-semibold text-gray-800">What happens next?</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-blue-500" />
                    <span>Our team will review your complaint within 24-48 hours</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <FileText className="h-4 w-4 text-blue-500" />
                    <span>You'll receive email updates on the progress</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Shield className="h-4 w-4 text-blue-500" />
                    <span>Our experts may contact you for additional information</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="flex-1">
                  <a href={`/track?id=${trackingId}`}>Track Your Complaint</a>
                </Button>
                <Button variant="outline" asChild className="flex-1 bg-transparent">
                  <a href="/complaint">Submit Another Complaint</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-100 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertTriangle className="h-8 w-8 text-red-600" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">File a Complaint</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Report cybercrime incidents, security breaches, or digital fraud. Our expert team will investigate and
              assist you.
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Complaint Details</CardTitle>
              <CardDescription>
                Please provide as much detail as possible to help us investigate your case effectively.
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
                  <Label htmlFor="category">Incident Category *</Label>
                  <Select name="category" required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select the type of incident" />
                    </SelectTrigger>
                    <SelectContent>
                      {complaintCategories.map((category) => (
                        <SelectItem key={category.value} value={category.value}>
                          {category.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-4">
                  <Label>Priority Level *</Label>
                  <RadioGroup name="priority" defaultValue="MEDIUM" className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {priorities.map((priority) => (
                      <div key={priority.value} className="flex items-center space-x-2 border rounded-lg p-3">
                        <RadioGroupItem value={priority.value} id={priority.value} />
                        <div className="flex-1">
                          <Label htmlFor={priority.value} className="font-medium">
                            {priority.label}
                          </Label>
                          <p className="text-sm text-gray-500">{priority.description}</p>
                        </div>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input id="subject" name="subject" placeholder="Brief summary of the incident" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Detailed Description *</Label>
                  <Textarea
                    id="description"
                    name="description"
                    rows={6}
                    placeholder="Please provide a detailed description of the incident, including when it occurred, what happened, and any relevant details..."
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="evidence">Evidence/Documentation (Optional)</Label>
                  <Textarea
                    id="evidence"
                    name="evidence"
                    rows={3}
                    placeholder="List any evidence you have (screenshots, emails, transaction IDs, etc.). Do not include sensitive information like passwords."
                  />
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h4 className="font-semibold text-yellow-800 mb-2">Important Notes:</h4>
                  <ul className="text-sm text-yellow-700 space-y-1">
                    <li>• Do not include passwords, PINs, or other sensitive credentials</li>
                    <li>• Our team will contact you within 24-48 hours</li>
                    <li>• You will receive a tracking ID to monitor your case progress</li>
                    <li>• For emergencies, call our 24/7 hotline: +1-800-CYBER-HELP</li>
                  </ul>
                </div>

                <Button type="submit" className="w-full bg-red-600 hover:bg-red-700" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit Complaint"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
