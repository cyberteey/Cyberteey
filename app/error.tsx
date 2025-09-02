"use client"

import { useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { AlertTriangle } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-col items-center justify-center flex-1 px-6 py-24 text-center">
        <div className="relative h-40 w-40 mb-8">
          <Image src="/images/logo.png" alt="Cyberteey Logo" fill className="object-contain opacity-50" />
        </div>
        <div className="rounded-full bg-cyan-900/20 p-4 mb-6">
          <AlertTriangle className="h-10 w-10 text-cyan-500" />
        </div>
        <h1 className="text-4xl font-bold text-white mb-4">Something went wrong</h1>
        <p className="text-gray-400 mb-8 max-w-md">
          We apologize for the inconvenience. Our team has been notified of this issue.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button onClick={reset} className="bg-cyan-600 hover:bg-cyan-700 text-white">
            Try Again
          </Button>
          <Link href="/">
            <Button variant="outline" className="border-gray-700 text-gray-200 hover:bg-gray-800">
              Return to Home
            </Button>
          </Link>
        </div>
        {process.env.NODE_ENV === "development" && error.message && (
          <div className="mt-8 p-4 bg-gray-900 rounded-md text-left overflow-auto max-w-full">
            <p className="text-red-400 font-mono text-sm">{error.message}</p>
          </div>
        )}
      </div>
    </div>
  )
}
