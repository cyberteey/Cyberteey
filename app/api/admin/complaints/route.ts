import { type NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/db"
import { getSession } from "@/lib/auth"

export async function GET(request: NextRequest) {
  try {
    const session = await getSession()
    if (!session || session.role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const complaints = await prisma.complaint.findMany({
      orderBy: { createdAt: "desc" },
      take: 50, // Limit to recent 50 complaints
    })

    return NextResponse.json({ complaints })
  } catch (error) {
    console.error("Error fetching complaints:", error)
    return NextResponse.json({ error: "Failed to fetch complaints" }, { status: 500 })
  }
}
