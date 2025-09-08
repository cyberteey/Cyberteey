"use client"

import { useState, useEffect } from "react"
import { Shield } from "lucide-react"

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="text-center">
        <Shield className="mx-auto h-16 w-16 animate-pulse text-primary" />
        <p className="mt-4 text-lg font-semibold">Cyberteey Crime Lab</p>
        <p className="text-sm text-muted-foreground">Initializing Security Protocols...</p>
      </div>
    </div>
  )
}
