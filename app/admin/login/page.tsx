"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/components/ui/use-toast"
import { loginSchema, type LoginFormData } from "@/lib/validations"
import { Shield, Lock } from "lucide-react"

export default function AdminLoginPage() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { toast } = useToast()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true)
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (response.ok) {
        toast({
          title: "Login Successful",
          description: "Welcome to the admin dashboard",
        })
        router.push("/admin")
      } else {
        throw new Error(result.error || "Login failed")
      }
    } catch (error) {
      toast({
        title: "Login Failed",
        description: error instanceof Error ? error.message : "Invalid credentials",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono flex items-center justify-center">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-red-500/20 text-red-400 px-4 py-2 rounded-full text-sm mb-6">
            <Lock className="w-4 h-4" />
            RESTRICTED ACCESS
          </div>
          <h1 className="text-3xl font-bold mb-2 text-green-400">Admin Portal</h1>
          <p className="text-green-400/70">Authorized personnel only</p>
        </div>

        <Card className="bg-black/50 border-green-400/30">
          <CardHeader>
            <CardTitle className="text-green-400 flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Secure Login
            </CardTitle>
            <CardDescription className="text-green-400/70">Enter your administrator credentials</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-green-400">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  {...register("email")}
                  className="bg-black/50 border-green-400/30 text-green-400 focus:border-green-400"
                  placeholder="admin@cybercrimelab.com"
                />
                {errors.email && <p className="text-red-400 text-sm">{errors.email.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-green-400">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  {...register("password")}
                  className="bg-black/50 border-green-400/30 text-green-400 focus:border-green-400"
                  placeholder="••••••••"
                />
                {errors.password && <p className="text-red-400 text-sm">{errors.password.message}</p>}
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-green-400/20 hover:bg-green-400/30 text-green-400 border border-green-400/30"
              >
                {isLoading ? "Authenticating..." : "Access Dashboard"}
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="text-center mt-6">
          <Button onClick={() => router.push("/")} variant="ghost" className="text-green-400/70 hover:text-green-400">
            ← Back to Main Site
          </Button>
        </div>
      </div>
    </div>
  )
}
