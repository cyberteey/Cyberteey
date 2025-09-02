"use client"

import { useState, useEffect } from "react"
import { MatrixRain } from "@/components/matrix-rain"

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(() => setIsLoading(false), 500)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 100)

    return () => clearInterval(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      <MatrixRain />
      <div className="relative z-10 text-center">
        <div className="text-green-500 font-mono text-2xl mb-8">INITIALIZING CYBER CRIME LAB...</div>
        <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden">
          <div className="h-full bg-green-500 transition-all duration-300 ease-out" style={{ width: `${progress}%` }} />
        </div>
        <div className="text-green-500 font-mono text-sm mt-4">{Math.round(progress)}% COMPLETE</div>
      </div>
    </div>
  )
}
