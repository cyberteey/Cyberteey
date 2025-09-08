"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setShowConsent(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setShowConsent(false)
  }

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined")
    setShowConsent(false)
  }

  if (!showConsent) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:left-auto md:max-w-md">
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Cookie Consent</CardTitle>
          <CardDescription className="text-sm">
            We use cookies to enhance your experience and analyze site usage.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex gap-2 pt-0">
          <Button size="sm" onClick={acceptCookies}>
            Accept
          </Button>
          <Button size="sm" variant="outline" onClick={declineCookies}>
            Decline
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
