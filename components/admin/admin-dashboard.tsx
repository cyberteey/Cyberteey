"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/components/ui/use-toast"
import { Shield, CheckCircle, Clock, FileText, TrendingUp, LogOut, RefreshCw } from "lucide-react"
import { format } from "date-fns"

interface Stats {
  totalComplaints: number
  totalRecoveries: number
  pendingCases: number
  resolvedCases: number
  recentActivity: number
}

interface Case {
  id: string
  trackingId: string
  name: string
  email: string
  status: string
  priority: string
  createdAt: string
  type: "complaint" | "recovery"
  category?: string
  incidentType?: string
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats | null>(null)
  const [complaints, setComplaints] = useState<Case[]>([])
  const [recoveries, setRecoveries] = useState<Case[]>([])
  const [loading, setLoading] = useState(true)
  const [updating, setUpdating] = useState<string | null>(null)
  const { toast } = useToast()

  const fetchData = async () => {
    try {
      const [statsRes, complaintsRes, recoveriesRes] = await Promise.all([
        fetch("/api/admin/stats"),
        fetch("/api/admin/complaints"),
        fetch("/api/admin/recoveries"),
      ])

      if (statsRes.ok) {
        const statsData = await statsRes.json()
        setStats(statsData)
      }

      if (complaintsRes.ok) {
        const complaintsData = await complaintsRes.json()
        setComplaints(complaintsData.complaints || [])
      }

      if (recoveriesRes.ok) {
        const recoveriesData = await recoveriesRes.json()
        setRecoveries(recoveriesData.recoveries || [])
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch dashboard data",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const updateStatus = async (id: string, type: "complaint" | "recovery", status: string) => {
    setUpdating(id)
    try {
      const endpoint =
        type === "complaint" ? `/api/admin/complaints/${id}/status` : `/api/admin/recoveries/${id}/status`

      const response = await fetch(endpoint, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
      })

      if (response.ok) {
        toast({
          title: "Status Updated",
          description: `Case status updated to ${status}`,
        })
        fetchData() // Refresh data
      } else {
        throw new Error("Failed to update status")
      }
    } catch (error) {
      toast({
        title: "Update Failed",
        description: "Failed to update case status",
        variant: "destructive",
      })
    } finally {
      setUpdating(null)
    }
  }

  const logout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" })
      window.location.href = "/admin/login"
    } catch (error) {
      toast({
        title: "Logout Failed",
        description: "Failed to logout properly",
        variant: "destructive",
      })
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-green-400 font-mono flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-400 mx-auto mb-4"></div>
          <p>Loading dashboard...</p>
        </div>
      </div>
    )
  }

  const statusConfig = {
    submitted: { label: "Submitted", color: "bg-blue-500/20 text-blue-400 border-blue-500/30" },
    reviewing: { label: "Reviewing", color: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30" },
    investigating: { label: "Investigating", color: "bg-orange-500/20 text-orange-400 border-orange-500/30" },
    resolved: { label: "Resolved", color: "bg-green-500/20 text-green-400 border-green-500/30" },
    closed: { label: "Closed", color: "bg-gray-500/20 text-gray-400 border-gray-500/30" },
  }

  const priorityConfig = {
    low: { label: "Low", color: "bg-green-500/20 text-green-400 border-green-500/30" },
    medium: { label: "Medium", color: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30" },
    high: { label: "High", color: "bg-orange-500/20 text-orange-400 border-orange-500/30" },
    critical: { label: "Critical", color: "bg-red-500/20 text-red-400 border-red-500/30" },
  }

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-green-400 mb-2">Admin Dashboard</h1>
            <p className="text-green-400/70">Cyber Crime Lab Management Portal</p>
          </div>
          <div className="flex items-center gap-4">
            <Button
              onClick={fetchData}
              variant="outline"
              className="border-green-400/30 text-green-400 hover:bg-green-400/10 bg-transparent"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Refresh
            </Button>
            <Button
              onClick={logout}
              variant="outline"
              className="border-red-400/30 text-red-400 hover:bg-red-400/10 bg-transparent"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        {stats && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
            <Card className="bg-black/50 border-green-400/30">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm text-green-400/70 flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  Total Complaints
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-400">{stats.totalComplaints}</div>
              </CardContent>
            </Card>

            <Card className="bg-black/50 border-green-400/30">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm text-green-400/70 flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  Recovery Requests
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-400">{stats.totalRecoveries}</div>
              </CardContent>
            </Card>

            <Card className="bg-black/50 border-yellow-400/30">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm text-yellow-400/70 flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Pending Cases
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-yellow-400">{stats.pendingCases}</div>
              </CardContent>
            </Card>

            <Card className="bg-black/50 border-green-400/30">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm text-green-400/70 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  Resolved Cases
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-400">{stats.resolvedCases}</div>
              </CardContent>
            </Card>

            <Card className="bg-black/50 border-blue-400/30">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm text-blue-400/70 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-400">{stats.recentActivity}</div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Cases Management */}
        <Tabs defaultValue="complaints" className="space-y-6">
          <TabsList className="bg-black/50 border border-green-400/30">
            <TabsTrigger value="complaints" className="data-[state=active]:bg-green-400/20">
              Security Complaints ({complaints.length})
            </TabsTrigger>
            <TabsTrigger value="recoveries" className="data-[state=active]:bg-green-400/20">
              Recovery Requests ({recoveries.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="complaints">
            <Card className="bg-black/50 border-green-400/30">
              <CardHeader>
                <CardTitle className="text-green-400">Security Complaints</CardTitle>
                <CardDescription className="text-green-400/70">
                  Manage and track security incident reports
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {complaints.map((complaint) => (
                    <div key={complaint.id} className="border border-green-400/20 rounded-lg p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-green-400 font-semibold">{complaint.trackingId}</h3>
                          <p className="text-green-400/70 text-sm">
                            {complaint.name} • {complaint.email}
                          </p>
                          <p className="text-green-400/50 text-sm">{format(new Date(complaint.createdAt), "PPp")}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge className={priorityConfig[complaint.priority as keyof typeof priorityConfig]?.color}>
                            {priorityConfig[complaint.priority as keyof typeof priorityConfig]?.label}
                          </Badge>
                          <Badge className={statusConfig[complaint.status as keyof typeof statusConfig]?.color}>
                            {statusConfig[complaint.status as keyof typeof statusConfig]?.label}
                          </Badge>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <Select
                          value={complaint.status}
                          onValueChange={(value) => updateStatus(complaint.id, "complaint", value)}
                          disabled={updating === complaint.id}
                        >
                          <SelectTrigger className="w-48 bg-black/50 border-green-400/30">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent className="bg-black border-green-400/30">
                            <SelectItem value="submitted">Submitted</SelectItem>
                            <SelectItem value="reviewing">Reviewing</SelectItem>
                            <SelectItem value="investigating">Investigating</SelectItem>
                            <SelectItem value="resolved">Resolved</SelectItem>
                            <SelectItem value="closed">Closed</SelectItem>
                          </SelectContent>
                        </Select>

                        <Button
                          onClick={() => window.open(`/track/${complaint.trackingId}`, "_blank")}
                          variant="outline"
                          size="sm"
                          className="border-green-400/30 text-green-400 hover:bg-green-400/10"
                        >
                          View Details
                        </Button>
                      </div>
                    </div>
                  ))}

                  {complaints.length === 0 && (
                    <div className="text-center py-8 text-green-400/70">No complaints found</div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="recoveries">
            <Card className="bg-black/50 border-green-400/30">
              <CardHeader>
                <CardTitle className="text-green-400">Recovery Requests</CardTitle>
                <CardDescription className="text-green-400/70">Manage digital asset recovery cases</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recoveries.map((recovery) => (
                    <div key={recovery.id} className="border border-green-400/20 rounded-lg p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-green-400 font-semibold">{recovery.trackingId}</h3>
                          <p className="text-green-400/70 text-sm">
                            {recovery.name} • {recovery.email}
                          </p>
                          <p className="text-green-400/50 text-sm">{format(new Date(recovery.createdAt), "PPp")}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge className={priorityConfig[recovery.priority as keyof typeof priorityConfig]?.color}>
                            {priorityConfig[recovery.priority as keyof typeof priorityConfig]?.label}
                          </Badge>
                          <Badge className={statusConfig[recovery.status as keyof typeof statusConfig]?.color}>
                            {statusConfig[recovery.status as keyof typeof statusConfig]?.label}
                          </Badge>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <Select
                          value={recovery.status}
                          onValueChange={(value) => updateStatus(recovery.id, "recovery", value)}
                          disabled={updating === recovery.id}
                        >
                          <SelectTrigger className="w-48 bg-black/50 border-green-400/30">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent className="bg-black border-green-400/30">
                            <SelectItem value="submitted">Submitted</SelectItem>
                            <SelectItem value="reviewing">Reviewing</SelectItem>
                            <SelectItem value="investigating">Investigating</SelectItem>
                            <SelectItem value="resolved">Resolved</SelectItem>
                            <SelectItem value="closed">Closed</SelectItem>
                          </SelectContent>
                        </Select>

                        <Button
                          onClick={() => window.open(`/track/${recovery.trackingId}`, "_blank")}
                          variant="outline"
                          size="sm"
                          className="border-green-400/30 text-green-400 hover:bg-green-400/10"
                        >
                          View Details
                        </Button>
                      </div>
                    </div>
                  ))}

                  {recoveries.length === 0 && (
                    <div className="text-center py-8 text-green-400/70">No recovery requests found</div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
