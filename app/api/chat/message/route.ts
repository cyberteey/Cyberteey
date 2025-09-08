import { type NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/db"
import { chatMessageSchema } from "@/lib/validations"

// Simple chatbot responses for common queries
const botResponses = {
  greeting: [
    "Hello! How can I help you with your cybersecurity concerns today?",
    "Hi there! I'm here to assist you with any questions about our services.",
    "Welcome to Cyberteey Crime Lab! What can I help you with?",
  ],
  complaint: [
    "I can help you file a complaint. You can submit a detailed report through our complaint form, and you'll receive a tracking ID to monitor progress.",
    "To file a complaint about a cybersecurity incident, please use our complaint form. Our team responds within 24-48 hours.",
  ],
  recovery: [
    "Our recovery services have a 94.2% success rate. I can guide you through the recovery request process for your digital assets.",
    "We specialize in recovering cryptocurrency, accounts, and other digital assets. Would you like to start a recovery request?",
  ],
  tracking: [
    "You can track your case using the tracking ID provided when you submitted your complaint or recovery request. Just enter it on our tracking page.",
    "To check your case status, use the tracking page with your complaint ID or recovery request ID.",
  ],
  services: [
    "We offer digital forensics, cybersecurity consulting, incident response, and digital asset recovery services. What specific service interests you?",
    "Our main services include: complaint investigation, digital asset recovery, cybersecurity consulting, and incident response. How can we help?",
  ],
  contact: [
    "You can reach us through this chat, our contact form, or email us at cybercrimelabofficial@proton.me. For emergencies, we have 24/7 support.",
    "We're available 24/7 for urgent matters. You can also submit requests through our website or email us directly.",
  ],
  default: [
    "I understand you need help. Could you please provide more details about your specific concern?",
    "I'm here to help! Could you clarify what type of assistance you need - complaint filing, recovery services, or general information?",
    "Let me connect you with the right information. Are you looking to file a complaint, request recovery services, or get general information?",
  ],
}

function getBotResponse(message: string): string {
  const lowerMessage = message.toLowerCase()

  if (lowerMessage.includes("hello") || lowerMessage.includes("hi") || lowerMessage.includes("hey")) {
    return botResponses.greeting[Math.floor(Math.random() * botResponses.greeting.length)]
  }

  if (lowerMessage.includes("complaint") || lowerMessage.includes("report") || lowerMessage.includes("incident")) {
    return botResponses.complaint[Math.floor(Math.random() * botResponses.complaint.length)]
  }

  if (
    lowerMessage.includes("recovery") ||
    lowerMessage.includes("recover") ||
    lowerMessage.includes("lost") ||
    lowerMessage.includes("stolen")
  ) {
    return botResponses.recovery[Math.floor(Math.random() * botResponses.recovery.length)]
  }

  if (lowerMessage.includes("track") || lowerMessage.includes("status") || lowerMessage.includes("progress")) {
    return botResponses.tracking[Math.floor(Math.random() * botResponses.tracking.length)]
  }

  if (lowerMessage.includes("service") || lowerMessage.includes("what do you") || lowerMessage.includes("help with")) {
    return botResponses.services[Math.floor(Math.random() * botResponses.services.length)]
  }

  if (
    lowerMessage.includes("contact") ||
    lowerMessage.includes("reach") ||
    lowerMessage.includes("phone") ||
    lowerMessage.includes("email")
  ) {
    return botResponses.contact[Math.floor(Math.random() * botResponses.contact.length)]
  }

  return botResponses.default[Math.floor(Math.random() * botResponses.default.length)]
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const validatedData = chatMessageSchema.parse(body)

    const message = await prisma.chatMessage.create({
      data: {
        sessionId: validatedData.sessionId,
        sender: validatedData.sender,
        message: validatedData.message,
      },
    })

    if (validatedData.sender === "USER") {
      const response = getBotResponse(validatedData.message)

      // Save bot response
      await prisma.chatMessage.create({
        data: {
          sessionId: validatedData.sessionId,
          sender: "AGENT",
          senderName: "Support Agent",
          message: response,
        },
      })

      return NextResponse.json({
        success: true,
        message: {
          id: message.id,
          sender: message.sender,
          message: message.message,
          timestamp: message.timestamp,
        },
        response: {
          id: response.id,
          sender: response.sender,
          message: response.message,
          timestamp: response.timestamp,
        },
      })
    }

    return NextResponse.json({
      success: true,
      message: {
        id: message.id,
        sender: message.sender,
        message: message.message,
        timestamp: message.timestamp,
      },
    })
  } catch (error) {
    console.error("Error processing chat message:", error)
    return NextResponse.json({ error: "Failed to process message" }, { status: 500 })
  }
}
