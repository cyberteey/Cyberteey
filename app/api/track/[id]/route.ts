import { type NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/db"

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const trackingId = params.id

    // Try to find complaint first
    const complaint = await prisma.complaint.findUnique({
      where: { trackingId },
      include: {
        notes: {
          include: {
            author: {
              select: { name: true, email: true },
            },
          },
          orderBy: { createdAt: "desc" },
        },
      },
    })

    if (complaint) {
      return NextResponse.json({
        id: complaint.id,
        trackingId: complaint.trackingId,
        type: "complaint",
        name: complaint.name,
        email: complaint.email,
        phone: complaint.phone,
        status: complaint.status,
        createdAt: complaint.createdAt,
        updatedAt: complaint.updatedAt,
        category: complaint.category,
        subject: complaint.subject,
        description: complaint.description,
        notes: complaint.notes.map((note) => ({
          id: note.id,
          content: note.content,
          createdAt: note.createdAt,
          author: note.author.name || note.author.email,
        })),
      })
    }

    // Try to find recovery request
    const recovery = await prisma.recovery.findUnique({
      where: { trackingId },
      include: {
        notes: {
          include: {
            author: {
              select: { name: true, email: true },
            },
          },
          orderBy: { createdAt: "desc" },
        },
      },
    })

    if (recovery) {
      return NextResponse.json({
        id: recovery.id,
        trackingId: recovery.trackingId,
        type: "recovery",
        name: recovery.name,
        email: recovery.email,
        phone: recovery.phone,
        status: recovery.status,
        createdAt: recovery.createdAt,
        updatedAt: recovery.updatedAt,
        recoveryType: recovery.recoveryType,
        assetType: recovery.assetType,
        description: recovery.description,
        notes: recovery.notes.map((note) => ({
          id: note.id,
          content: note.content,
          createdAt: note.createdAt,
          author: note.author.name || note.author.email,
        })),
      })
    }

    return NextResponse.json({ error: "Case not found" }, { status: 404 })
  } catch (error) {
    console.error("Error fetching case:", error)
    return NextResponse.json({ error: "Failed to fetch case information" }, { status: 500 })
  }
}
