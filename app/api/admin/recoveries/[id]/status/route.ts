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

    const recovery = await prisma.recoveryRequest.update({
      where: { id: params.id },
      data: {
        status,
        updatedAt: new Date(),
      },
    })

    return NextResponse.json({ recovery })
  } catch (error) {
    console.error("Error updating recovery status:", error)
    return NextResponse.json({ error: "Failed to update recovery status" }, { status: 500 })
  }
}
