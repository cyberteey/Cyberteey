import { type NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/db"
import { getSession } from "@/lib/auth"

export async function GET(request: NextRequest) {
  try {
    const session = await getSession()
    if (!session || session.role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const recoveries = await prisma.recoveryRequest.findMany({
      orderBy: { createdAt: "desc" },
      take: 50, // Limit to recent 50 recovery requests
    })

    return NextResponse.json({ recoveries })
  } catch (error) {
    console.error("Error fetching recovery requests:", error)
    return NextResponse.json({ error: "Failed to fetch recovery requests" }, { status: 500 })
  }
}
