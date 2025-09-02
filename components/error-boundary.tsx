"use client"

import type React from "react"

import { useEffect, useState } from "react"
import Link from "next/link"
import { AlertTriangle } from "lucide-react"

import { Button } from "@/components/ui/button"

interface ErrorBoundaryProps {
  children: React.ReactNode
}

export function ErrorBoundary({ children }: ErrorBoundaryProps) {
  const [hasError, setHasError] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const errorHandler = (error: ErrorEvent) => {
      console.error("Caught error:", error)
      setError(error.error)
      setHasError(true)
    }

    window.addEventListener("error", errorHandler)

    return () => {
      window.removeEventListener("error", errorHandler)
    }
  }, [])

  if (hasError) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] p-6 text-center">
        <div className="rounded-full bg-red-100 p-4 mb-6">
          <AlertTriangle className="h-10 w-10 text-red-600" />
        </div>
        <h2 className="text-2xl font-bold mb-2">Something went wrong</h2>
        <p className="text-gray-400 mb-6 max-w-md">
          We apologize for the inconvenience. Please try refreshing the page or contact our support team if the problem
          persists.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button onClick={() => window.location.reload()} className="bg-cyan-600 hover:bg-cyan-700 text-white">
            Refresh Page
          </Button>
          <Link href="/">
            <Button variant="outline" className="border-gray-700 text-gray-200 hover:bg-gray-800">
              Return to Home
            </Button>
          </Link>
        </div>
        {error && process.env.NODE_ENV === "development" && (
          <div className="mt-8 p-4 bg-gray-900 rounded-md text-left overflow-auto max-w-full">
            <p className="text-red-400 font-mono text-sm">{error.toString()}</p>
          </div>
        )}
      </div>
    )
  }

  return <>{children}</>
}
