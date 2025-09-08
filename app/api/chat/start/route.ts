import { type NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/db"

export async function POST(request: NextRequest) {
  try {
    const sessionId = `chat_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`

    const chatSession = await prisma.chatSession.create({
      data: {
        sessionId,
        status: "ACTIVE",
      },
      include: {
        messages: true,
      },
    })

    return NextResponse.json({
      sessionId: chatSession.sessionId,
      status: chatSession.status,
      messages: [],
    })
  } catch (error) {
    console.error("Error starting chat session:", error)
    return NextResponse.json({ error: "Failed to start chat session" }, { status: 500 })
  }
}
