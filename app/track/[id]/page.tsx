"use client"

import { Label } from "@/components/ui/label"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Shield,
  Clock,
  CheckCircle,
  AlertCircle,
  XCircle,
  FileText,
  Calendar,
  User,
  Mail,
  Phone,
  Tag,
  AlertTriangle,
} from "lucide-react"
import { format } from "date-fns"

interface Note {
  id: string
  content: string
  author: string
  createdAt: string
}

interface TrackingData {
  id: string
  trackingId: string
  name: string
  email: string
  phone?: string
  status: string
  priority: string
  createdAt: string
  updatedAt: string
  notes: Note[]
  // Complaint specific
  category?: string
  title?: string
  description?: string
  // Recovery specific
  incidentType?: string
  affectedAccounts?: string[]
  estimatedValue?: string
  urgencyLevel?: string
}

const statusConfig = {
  submitted: { label: "Submitted", color: "bg-blue-500", icon: FileText },
  reviewing: { label: "Under Review", color: "bg-yellow-500", icon: Clock },
  investigating: { label: "Investigating", color: "bg-orange-500", icon: AlertCircle },
  resolved: { label: "Resolved", color: "bg-green-500", icon: CheckCircle },
  closed: { label: "Closed", color: "bg-gray-500", icon: XCircle },
}

const priorityConfig = {
  low: { label: "Low", color: "bg-green-500/20 text-green-400 border-green-500/30" },
  medium: { label: "Medium", color: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30" },
  high: { label: "High", color: "bg-orange-500/20 text-orange-400 border-orange-500/30" },
  critical: { label: "Critical", color: "bg-red-500/20 text-red-400 border-red-500/30" },
}

export default function TrackingDetailPage() {
  const params = useParams()
  const trackingId = params.id as string
  const [data, setData] = useState<TrackingData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)

        // Try complaints first
        let response = await fetch(`/api/complaints?trackingId=${trackingId}`)
        let result = await response.json()

        if (response.ok && result.complaint) {
          setData(result.complaint)
          return
        }

        // Try recovery requests
        response = await fetch(`/api/recovery?trackingId=${trackingId}`)
        result = await response.json()

        if (response.ok && result.recovery) {
          setData(result.recovery)
          return
        }

        setError("Tracking ID not found")
      } catch (err) {
        setError("Failed to fetch tracking information")
      } finally {
        setLoading(false)
      }
    }

    if (trackingId) {
      fetchData()
    }
  }, [trackingId])

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-green-400 font-mono flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-400 mx-auto mb-4"></div>
          <p>Loading tracking information...</p>
        </div>
      </div>
    )
  }

  if (error || !data) {
    return (
      <div className="min-h-screen bg-black text-green-400 font-mono">
        <div className="container mx-auto px-4 py-16">
          <Card className="max-w-2xl mx-auto bg-black/50 border-red-400/30">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-red-400/20 rounded-full flex items-center justify-center mb-4">
                <XCircle className="w-8 h-8 text-red-400" />
              </div>
              <CardTitle className="text-2xl text-red-400">Tracking ID Not Found</CardTitle>
              <CardDescription className="text-red-400/70">
                {error || "The tracking ID you entered could not be found in our system."}
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button
                onClick={() => (window.location.href = "/track")}
                className="bg-green-400/20 hover:bg-green-400/30 text-green-400 border border-green-400/30"
              >
                Try Another ID
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  const statusInfo = statusConfig[data.status as keyof typeof statusConfig] || statusConfig.submitted
  const priorityInfo = priorityConfig[data.priority as keyof typeof priorityConfig] || priorityConfig.medium
  const StatusIcon = statusInfo.icon

  const isComplaint = "category" in data
  const isRecovery = "incidentType" in data

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-green-400/20 text-green-400 px-4 py-2 rounded-full text-sm mb-6">
              <Shield className="w-4 h-4" />
              CASE TRACKING SYSTEM
            </div>
            <h1 className="text-4xl font-bold mb-4 text-green-400">{data.trackingId}</h1>
            <p className="text-green-400/70 text-lg">
              {isComplaint ? "Security Complaint Status" : "Recovery Request Status"}
            </p>
          </div>

          {/* Status Overview */}
          <Card className="bg-black/50 border-green-400/30">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 ${statusInfo.color} rounded-full flex items-center justify-center`}>
                    <StatusIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-green-400">{statusInfo.label}</CardTitle>
                    <CardDescription className="text-green-400/70">
                      Last updated: {format(new Date(data.updatedAt), "PPp")}
                    </CardDescription>
                  </div>
                </div>
                <Badge className={priorityInfo.color}>{priorityInfo.label} Priority</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <User className="w-5 h-5 text-green-400/70" />
                    <div>
                      <p className="text-sm text-green-400/70">Contact Person</p>
                      <p className="text-green-400">{data.name}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-green-400/70" />
                    <div>
                      <p className="text-sm text-green-400/70">Email</p>
                      <p className="text-green-400">{data.email}</p>
                    </div>
                  </div>
                  {data.phone && (
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-green-400/70" />
                      <div>
                        <p className="text-sm text-green-400/70">Phone</p>
                        <p className="text-green-400">{data.phone}</p>
                      </div>
                    </div>
                  )}
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-green-400/70" />
                    <div>
                      <p className="text-sm text-green-400/70">Submitted</p>
                      <p className="text-green-400">{format(new Date(data.createdAt), "PPp")}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Tag className="w-5 h-5 text-green-400/70" />
                    <div>
                      <p className="text-sm text-green-400/70">Type</p>
                      <p className="text-green-400">{isComplaint ? data.category : data.incidentType}</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Case Details */}
          <Card className="bg-black/50 border-green-400/30">
            <CardHeader>
              <CardTitle className="text-green-400 flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Case Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {isComplaint && (
                <>
                  <div>
                    <Label className="text-green-400/70 text-sm">Incident Title</Label>
                    <p className="text-green-400 mt-1">{data.title}</p>
                  </div>
                  <div>
                    <Label className="text-green-400/70 text-sm">Description</Label>
                    <p className="text-green-400 mt-1 whitespace-pre-wrap">{data.description}</p>
                  </div>
                </>
              )}

              {isRecovery && (
                <>
                  <div>
                    <Label className="text-green-400/70 text-sm">Description</Label>
                    <p className="text-green-400 mt-1 whitespace-pre-wrap">{data.description}</p>
                  </div>
                  {data.affectedAccounts && data.affectedAccounts.length > 0 && (
                    <div>
                      <Label className="text-green-400/70 text-sm">Affected Accounts</Label>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {data.affectedAccounts.map((account, index) => (
                          <Badge key={index} variant="outline" className="border-green-400/30 text-green-400">
                            {account}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                  {data.estimatedValue && (
                    <div>
                      <Label className="text-green-400/70 text-sm">Estimated Value</Label>
                      <p className="text-green-400 mt-1">{data.estimatedValue}</p>
                    </div>
                  )}
                  {data.urgencyLevel && (
                    <div>
                      <Label className="text-green-400/70 text-sm">Urgency Level</Label>
                      <p className="text-green-400 mt-1 capitalize">{data.urgencyLevel}</p>
                    </div>
                  )}
                </>
              )}
            </CardContent>
          </Card>

          {/* Progress Timeline */}
          <Card className="bg-black/50 border-green-400/30">
            <CardHeader>
              <CardTitle className="text-green-400 flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Case Timeline
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <div>
                    <p className="text-green-400 font-semibold">Case Submitted</p>
                    <p className="text-green-400/70 text-sm">{format(new Date(data.createdAt), "PPp")}</p>
                  </div>
                </div>

                {data.status !== "submitted" && (
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div>
                      <p className="text-yellow-400 font-semibold">Under Review</p>
                      <p className="text-green-400/70 text-sm">Case assigned to specialist team</p>
                    </div>
                  </div>
                )}

                {["investigating", "resolved", "closed"].includes(data.status) && (
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                    <div>
                      <p className="text-orange-400 font-semibold">Investigation Started</p>
                      <p className="text-green-400/70 text-sm">Active investigation in progress</p>
                    </div>
                  </div>
                )}

                {["resolved", "closed"].includes(data.status) && (
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <div>
                      <p className="text-green-400 font-semibold">
                        {data.status === "resolved" ? "Case Resolved" : "Case Closed"}
                      </p>
                      <p className="text-green-400/70 text-sm">{format(new Date(data.updatedAt), "PPp")}</p>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Notes and Updates */}
          {data.notes && data.notes.length > 0 && (
            <Card className="bg-black/50 border-green-400/30">
              <CardHeader>
                <CardTitle className="text-green-400 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Updates & Notes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {data.notes.map((note) => (
                    <div key={note.id} className="border-l-2 border-green-400/30 pl-4">
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-green-400 font-semibold">{note.author}</p>
                        <p className="text-green-400/70 text-sm">{format(new Date(note.createdAt), "PPp")}</p>
                      </div>
                      <p className="text-green-400/90 whitespace-pre-wrap">{note.content}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Actions */}
          <div className="flex gap-4 justify-center">
            <Button
              onClick={() => (window.location.href = "/track")}
              variant="outline"
              className="border-green-400/30 text-green-400 hover:bg-green-400/10"
            >
              Track Another Case
            </Button>
            <Button
              onClick={() => (window.location.href = "/contact")}
              className="bg-green-400/20 hover:bg-green-400/30 text-green-400 border border-green-400/30"
            >
              Contact Support
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
