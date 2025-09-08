import { type NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/db"
import { recoverySchema } from "@/lib/validations"
import { sendRecoveryConfirmation } from "@/lib/email"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const validatedData = recoverySchema.parse(body)

    const recovery = await prisma.recovery.create({
      data: {
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone,
        recoveryType: validatedData.recoveryType,
        assetType: validatedData.assetType,
        description: validatedData.description,
        lossAmount: validatedData.lossAmount,
        lossDate: validatedData.lossDate ? new Date(validatedData.lossDate) : null,
        evidence: validatedData.evidence,
      },
    })

    // Send confirmation email
    try {
      await sendRecoveryConfirmation(
        recovery.email,
        recovery.name,
        recovery.trackingId,
        recovery.recoveryType,
        recovery.assetType,
      )
    } catch (emailError) {
      console.error("Failed to send confirmation email:", emailError)
      // Continue even if email fails
    }

    return NextResponse.json({
      success: true,
      trackingId: recovery.trackingId,
      message: "Recovery request submitted successfully",
    })
  } catch (error) {
    console.error("Error creating recovery request:", error)
    return NextResponse.json({ error: "Failed to submit recovery request" }, { status: 500 })
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

    const [recoveries, total] = await Promise.all([
      prisma.recovery.findMany({
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
      prisma.recovery.count({ where }),
    ])

    return NextResponse.json({
      recoveries,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    })
  } catch (error) {
    console.error("Error fetching recovery requests:", error)
    return NextResponse.json({ error: "Failed to fetch recovery requests" }, { status: 500 })
  }
}
