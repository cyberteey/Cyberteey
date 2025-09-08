"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, X, Send, User, Bot, Headphones } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

interface Message {
  id: string
  sender: "USER" | "AGENT" | "BOT"
  message: string
  timestamp: string
}

interface ChatSession {
  sessionId: string
  status: "ACTIVE" | "CLOSED" | "TRANSFERRED"
  messages: Message[]
}

const botResponses = {
  greeting: "Hello! I'm here to help you with your cybersecurity concerns. How can I assist you today?",
  complaint:
    "I can help you file a complaint. You can submit a detailed complaint form on our complaint page, or I can connect you with a human agent for immediate assistance.",
  recovery:
    "For asset recovery, we offer specialized services with a 94.2% success rate. Would you like to start a recovery request or speak with a recovery specialist?",
  tracking:
    "You can track your case using the tracking ID provided when you submitted your request. Visit our tracking page or provide your tracking ID here.",
  emergency:
    "For emergency situations, I'm connecting you with our priority support team. Please hold while I transfer you to a human agent.",
  default:
    "I understand your concern. Let me connect you with one of our cybersecurity experts who can provide specialized assistance.",
}

export function LiveChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [session, setSession] = useState<ChatSession | null>(null)
  const [message, setMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [isConnected, setIsConnected] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const { toast } = useToast()

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [session?.messages])

  const startChat = async () => {
    setIsConnected(true)
    try {
      const response = await fetch("/api/chat/start", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      })

      if (response.ok) {
        const data = await response.json()
        setSession(data)

        // Add welcome message
        setTimeout(() => {
          addBotMessage(botResponses.greeting)
        }, 1000)
      }
    } catch (error) {
      toast({
        title: "Connection Failed",
        description: "Unable to start chat session. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsConnected(false)
    }
  }

  const addBotMessage = (text: string) => {
    if (!session) return

    const newMessage: Message = {
      id: Date.now().toString(),
      sender: "BOT",
      message: text,
      timestamp: new Date().toISOString(),
    }

    setSession((prev) =>
      prev
        ? {
            ...prev,
            messages: [...prev.messages, newMessage],
          }
        : null,
    )
  }

  const getBotResponse = (userMessage: string): string => {
    const msg = userMessage.toLowerCase()

    if (msg.includes("complaint") || msg.includes("report") || msg.includes("fraud")) {
      return botResponses.complaint
    }
    if (msg.includes("recovery") || msg.includes("recover") || msg.includes("lost") || msg.includes("stolen")) {
      return botResponses.recovery
    }
    if (msg.includes("track") || msg.includes("status") || msg.includes("progress")) {
      return botResponses.tracking
    }
    if (msg.includes("emergency") || msg.includes("urgent") || msg.includes("help now")) {
      return botResponses.emergency
    }

    return botResponses.default
  }

  const sendMessage = async () => {
    if (!message.trim() || !session) return

    const userMessage: Message = {
      id: Date.now().toString(),
      sender: "USER",
      message: message.trim(),
      timestamp: new Date().toISOString(),
    }

    setSession((prev) =>
      prev
        ? {
            ...prev,
            messages: [...prev.messages, userMessage],
          }
        : null,
    )

    setMessage("")
    setIsTyping(true)

    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse = getBotResponse(userMessage.message)
      addBotMessage(botResponse)
      setIsTyping(false)
    }, 1500)

    // Send to API
    try {
      await fetch("/api/chat/message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sessionId: session.sessionId,
          message: userMessage.message,
          sender: "USER",
        }),
      })
    } catch (error) {
      setIsTyping(false)
      toast({
        title: "Message Failed",
        description: "Unable to send message. Please try again.",
        variant: "destructive",
      })
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  const openChat = () => {
    setIsOpen(true)
    if (!session) {
      startChat()
    }
  }

  const endChat = () => {
    setSession(null)
    setIsOpen(false)
    toast({
      title: "Chat Ended",
      description: "Thank you for contacting Cyberteey Crime Lab support.",
    })
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-96 h-[500px] flex flex-col">
      <Card className="flex-1 flex flex-col shadow-xl">
        <CardHeader className="bg-blue-600 text-white rounded-t-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Headphones className="w-5 h-5" />
              <div>
                <CardTitle className="text-lg">Live Support</CardTitle>
                <div className="flex items-center gap-2 text-blue-100 text-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Online</span>
                </div>
              </div>
            </div>
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)} className="text-white hover:bg-blue-700">
              <X className="w-4 h-4" />
            </Button>
          </div>
        </CardHeader>

        <CardContent className="flex-1 flex flex-col p-0">
          {!session ? (
            <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
              <MessageCircle className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="font-semibold mb-2">Start Live Chat</h3>
              <p className="text-gray-600 text-sm mb-4">
                Connect with our cybersecurity experts for immediate assistance
              </p>
              <Button onClick={startChat} disabled={isConnected} className="bg-blue-600 hover:bg-blue-700">
                {isConnected ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                    Connecting...
                  </>
                ) : (
                  <>
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Start Chat
                  </>
                )}
              </Button>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {session.messages.map((msg) => (
                  <div key={msg.id} className={`flex ${msg.sender === "USER" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-[80%] rounded-lg p-3 ${
                        msg.sender === "USER" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      <div className="flex items-center space-x-2 mb-1">
                        {msg.sender === "USER" ? <User className="w-3 h-3" /> : <Bot className="w-3 h-3" />}
                        <span className="text-xs opacity-75">{msg.sender === "USER" ? "You" : "Support Bot"}</span>
                      </div>
                      <p className="text-sm">{msg.message}</p>
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                      <div className="flex items-center space-x-2 mb-1">
                        <Bot className="w-3 h-3" />
                        <span className="text-xs text-gray-600">Support Bot</span>
                      </div>
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              <div className="border-t p-4">
                <div className="flex gap-2">
                  <Input
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    className="flex-1"
                  />
                  <Button onClick={sendMessage} disabled={!message.trim()} className="bg-blue-600 hover:bg-blue-700">
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span>Avg response time: 2 min</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={endChat}
                    className="text-xs text-gray-500 hover:text-gray-700"
                  >
                    End Chat
                  </Button>
                </div>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
