import { type NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/db"
import { complaintSchema } from "@/lib/validations"
import { sendComplaintConfirmation } from "@/lib/email"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const validatedData = complaintSchema.parse(body)

    const complaint = await prisma.complaint.create({
      data: {
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone,
        category: validatedData.category,
        priority: validatedData.priority,
        subject: validatedData.subject,
        description: validatedData.description,
        evidence: validatedData.evidence,
      },
    })

    // Send confirmation email
    try {
      await sendComplaintConfirmation(complaint.email, complaint.name, complaint.trackingId, complaint.category)
    } catch (emailError) {
      console.error("Failed to send confirmation email:", emailError)
      // Continue even if email fails
    }

    return NextResponse.json({
      success: true,
      trackingId: complaint.trackingId,
      message: "Complaint submitted successfully",
    })
  } catch (error) {
    console.error("Error creating complaint:", error)
    return NextResponse.json({ error: "Failed to submit complaint" }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const page = Number.parseInt(searchParams.get("page") || "1")
    const limit = Number.parseInt(searchParams.get("limit") || "10")
    const status = searchParams.get("status")

    const where = status ? { status } : {}
    const skip = (page - 1) * limit

    const [complaints, total] = await Promise.all([
      prisma.complaint.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: "desc" },
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
      }),
      prisma.complaint.count({ where }),
    ])

    return NextResponse.json({
      complaints,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    })
  } catch (error) {
    console.error("Error fetching complaints:", error)
    return NextResponse.json({ error: "Failed to fetch complaints" }, { status: 500 })
  }
}
