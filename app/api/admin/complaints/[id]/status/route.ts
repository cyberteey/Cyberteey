import { type NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/db"
import { getSession } from "@/lib/auth"

export async function PATCH(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const session = await getSession()
    if (!session || session.role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const body = await request.json()
    const { status } = body

    if (!status) {
      return NextResponse.json({ error: "Status is required" }, { status: 400 })
    }

    const complaint = await prisma.complaint.update({
      where: { id: params.id },
      data: {
        status,
        updatedAt: new Date(),
      },
    })

    return NextResponse.json({ complaint })
  } catch (error) {
    console.error("Error updating complaint status:", error)
    return NextResponse.json({ error: "Failed to update complaint status" }, { status: 500 })
  }
}
