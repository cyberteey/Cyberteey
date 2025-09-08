import { type NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/db"
import { getSession } from "@/lib/auth"

export async function GET(request: NextRequest) {
  try {
    const session = await getSession()
    if (!session || session.role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const [
      totalComplaints,
      totalRecoveries,
      pendingComplaints,
      pendingRecoveries,
      resolvedComplaints,
      resolvedRecoveries,
      recentComplaints,
      recentRecoveries,
    ] = await Promise.all([
      prisma.complaint.count(),
      prisma.recoveryRequest.count(),
      prisma.complaint.count({
        where: {
          status: {
            in: ["submitted", "reviewing", "investigating"],
          },
        },
      }),
      prisma.recoveryRequest.count({
        where: {
          status: {
            in: ["submitted", "reviewing", "investigating"],
          },
        },
      }),
      prisma.complaint.count({
        where: {
          status: {
            in: ["resolved", "closed"],
          },
        },
      }),
      prisma.recoveryRequest.count({
        where: {
          status: {
            in: ["resolved", "closed"],
          },
        },
      }),
      prisma.complaint.count({
        where: {
          createdAt: {
            gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // Last 7 days
          },
        },
      }),
      prisma.recoveryRequest.count({
        where: {
          createdAt: {
            gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // Last 7 days
          },
        },
      }),
    ])

    const stats = {
      totalComplaints,
      totalRecoveries,
      pendingCases: pendingComplaints + pendingRecoveries,
      resolvedCases: resolvedComplaints + resolvedRecoveries,
      recentActivity: recentComplaints + recentRecoveries,
    }

    return NextResponse.json(stats)
  } catch (error) {
    console.error("Error fetching stats:", error)
    return NextResponse.json({ error: "Failed to fetch statistics" }, { status: 500 })
  }
}
