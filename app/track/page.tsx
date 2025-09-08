"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/components/ui/use-toast"
import { Search, Clock, CheckCircle, AlertCircle, XCircle, FileText, Calendar, User, Mail, Phone } from "lucide-react"

interface CaseData {
  id: string
  trackingId: string
  type: "complaint" | "recovery"
  name: string
  email: string
  phone?: string
  status: string
  createdAt: string
  updatedAt: string
  category?: string
  recoveryType?: string
  assetType?: string
  subject?: string
  description: string
  notes: Array<{
    id: string
    content: string
    createdAt: string
    author: string
  }>
}

const statusColors = {
  PENDING: "bg-yellow-100 text-yellow-800 border-yellow-200",
  IN_PROGRESS: "bg-blue-100 text-blue-800 border-blue-200",
  INVESTIGATING: "bg-purple-100 text-purple-800 border-purple-200",
  ANALYZING: "bg-indigo-100 text-indigo-800 border-indigo-200",
  RECOVERING: "bg-orange-100 text-orange-800 border-orange-200",
  RESOLVED: "bg-green-100 text-green-800 border-green-200",
  COMPLETED: "bg-green-100 text-green-800 border-green-200",
  CLOSED: "bg-gray-100 text-gray-800 border-gray-200",
  FAILED: "bg-red-100 text-red-800 border-red-200",
  PARTIAL_RECOVERY: "bg-yellow-100 text-yellow-800 border-yellow-200",
  ESCALATED: "bg-red-100 text-red-800 border-red-200",
}

const statusIcons = {
  PENDING: Clock,
  IN_PROGRESS: AlertCircle,
  INVESTIGATING: Search,
  ANALYZING: Search,
  RECOVERING: AlertCircle,
  RESOLVED: CheckCircle,
  COMPLETED: CheckCircle,
  CLOSED: XCircle,
  FAILED: XCircle,
  PARTIAL_RECOVERY: AlertCircle,
  ESCALATED: AlertCircle,
}

export default function TrackPage() {
  const [trackingId, setTrackingId] = useState("")
  const [caseData, setCaseData] = useState<CaseData | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!trackingId.trim()) return

    setIsLoading(true)
    try {
      const response = await fetch(`/api/track/${trackingId}`)
      if (response.ok) {
        const data = await response.json()
        setCaseData(data)
      } else if (response.status === 404) {
        toast({
          title: "Case Not Found",
          description: "No case found with this tracking ID. Please check and try again.",
          variant: "destructive",
        })
        setCaseData(null)
      } else {
        throw new Error("Failed to fetch case data")
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch case information. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const StatusIcon = caseData ? statusIcons[caseData.status as keyof typeof statusIcons] || AlertCircle : AlertCircle

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="h-8 w-8 text-blue-600" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Track Your Case</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Enter your tracking ID to view the current status and progress of your complaint or recovery request.
            </p>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Enter Tracking ID</CardTitle>
              <CardDescription>
                Your tracking ID was provided when you submitted your complaint or recovery request.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSearch} className="flex gap-4">
                <div className="flex-1">
                  <Label htmlFor="trackingId" className="sr-only">
                    Tracking ID
                  </Label>
                  <Input
                    id="trackingId"
                    placeholder="Enter your tracking ID (e.g., CLT123456789)"
                    value={trackingId}
                    onChange={(e) => setTrackingId(e.target.value)}
                    required
                  />
                </div>
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? "Searching..." : "Track Case"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {caseData && (
            <div className="space-y-6">
              {/* Case Overview */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <StatusIcon className="h-5 w-5" />
                        Case #{caseData.trackingId}
                      </CardTitle>
                      <CardDescription>
                        {caseData.type === "complaint" ? "Complaint Case" : "Recovery Request"}
                      </CardDescription>
                    </div>
                    <Badge
                      className={
                        statusColors[caseData.status as keyof typeof statusColors] || "bg-gray-100 text-gray-800"
                      }
                    >
                      {caseData.status.replace("_", " ")}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-gray-500" />
                        <span className="font-medium">Name:</span>
                        <span>{caseData.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-gray-500" />
                        <span className="font-medium">Email:</span>
                        <span>{caseData.email}</span>
                      </div>
                      {caseData.phone && (
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-gray-500" />
                          <span className="font-medium">Phone:</span>
                          <span>{caseData.phone}</span>
                        </div>
                      )}
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-gray-500" />
                        <span className="font-medium">Submitted:</span>
                        <span>{new Date(caseData.createdAt).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-gray-500" />
                        <span className="font-medium">Last Updated:</span>
                        <span>{new Date(caseData.updatedAt).toLocaleDateString()}</span>
                      </div>
                      {caseData.category && (
                        <div className="flex items-center gap-2">
                          <FileText className="h-4 w-4 text-gray-500" />
                          <span className="font-medium">Category:</span>
                          <span>{caseData.category.replace("_", " ")}</span>
                        </div>
                      )}
                      {caseData.recoveryType && (
                        <div className="flex items-center gap-2">
                          <FileText className="h-4 w-4 text-gray-500" />
                          <span className="font-medium">Recovery Type:</span>
                          <span>{caseData.recoveryType.replace("_", " ")}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Case Details */}
              <Card>
                <CardHeader>
                  <CardTitle>Case Details</CardTitle>
                </CardHeader>
                <CardContent>
                  {caseData.subject && (
                    <div className="mb-4">
                      <h4 className="font-medium text-gray-900 mb-2">Subject:</h4>
                      <p className="text-gray-700">{caseData.subject}</p>
                    </div>
                  )}
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Description:</h4>
                    <p className="text-gray-700 whitespace-pre-wrap">{caseData.description}</p>
                  </div>
                </CardContent>
              </Card>

              {/* Progress Timeline */}
              {caseData.notes && caseData.notes.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle>Progress Timeline</CardTitle>
                    <CardDescription>Updates and notes from our team regarding your case</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {caseData.notes.map((note, index) => (
                        <div key={note.id} className="flex gap-4">
                          <div className="flex flex-col items-center">
                            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                            {index < caseData.notes.length - 1 && <div className="w-px h-16 bg-gray-200 mt-2"></div>}
                          </div>
                          <div className="flex-1 pb-8">
                            <div className="bg-gray-50 rounded-lg p-4">
                              <p className="text-gray-800 mb-2">{note.content}</p>
                              <div className="flex items-center gap-4 text-sm text-gray-500">
                                <span>By: {note.author}</span>
                                <span>{new Date(note.createdAt).toLocaleString()}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Next Steps */}
              <Card>
                <CardHeader>
                  <CardTitle>What's Next?</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {caseData.status === "PENDING" && (
                      <p className="text-gray-700">
                        Your case is in our queue and will be reviewed by our expert team within 24-48 hours.
                      </p>
                    )}
                    {caseData.status === "IN_PROGRESS" && (
                      <p className="text-gray-700">
                        Our team is actively working on your case. You'll receive updates as we make progress.
                      </p>
                    )}
                    {caseData.status === "INVESTIGATING" && (
                      <p className="text-gray-700">
                        We're conducting a thorough investigation. This process may take several days depending on
                        complexity.
                      </p>
                    )}
                    {caseData.status === "RESOLVED" && (
                      <p className="text-gray-700">
                        Your case has been resolved successfully. Check your email for detailed information.
                      </p>
                    )}
                    {caseData.status === "COMPLETED" && (
                      <p className="text-gray-700">
                        Your recovery has been completed successfully. Check your email for asset return details.
                      </p>
                    )}
                    <p className="text-sm text-gray-600">
                      If you have any questions or need to provide additional information, please contact us at{" "}
                      <a href="mailto:cybercrimelabofficial@proton.me" className="text-blue-600 hover:underline">
                        cybercrimelabofficial@proton.me
                      </a>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
