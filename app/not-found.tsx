import Link from "next/link"
import Image from "next/image"
import { AlertTriangle } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-col items-center justify-center flex-1 px-6 py-24 text-center">
        <div className="relative h-40 w-40 mb-8">
          <Image src="/images/logo.png" alt="Cyberteey Logo" fill className="object-contain opacity-50" />
        </div>
        <div className="rounded-full bg-cyan-900/20 p-4 mb-6">
          <AlertTriangle className="h-10 w-10 text-cyan-500" />
        </div>
        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
        <h2 className="text-2xl font-bold text-white mb-2">Page Not Found</h2>
        <p className="text-gray-400 mb-8 max-w-md">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/">
            <Button className="bg-cyan-600 hover:bg-cyan-700 text-white">Return to Home</Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" className="border-gray-700 text-gray-200 hover:bg-gray-800">
              Contact Support
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
