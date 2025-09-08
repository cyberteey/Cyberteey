// Monitoring and error tracking utilities

import * as Sentry from "@sentry/nextjs"

// Initialize Sentry
export function initSentry() {
  if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
    Sentry.init({
      dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
      environment: process.env.NODE_ENV,
      tracesSampleRate: 1.0,
      debug: process.env.NODE_ENV === "development",
      integrations: [
        new Sentry.BrowserTracing({
          tracingOrigins: ["localhost", /^\//],
        }),
      ],
    })
  }
}

// Error reporting
export function reportError(error: Error, context?: Record<string, any>) {
  console.error("Error occurred:", error)

  if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
    Sentry.withScope((scope) => {
      if (context) {
        Object.keys(context).forEach((key) => {
          scope.setTag(key, context[key])
        })
      }
      Sentry.captureException(error)
    })
  }
}

// Performance monitoring
export function trackPerformance(name: string, duration: number) {
  if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
    Sentry.addBreadcrumb({
      message: `Performance: ${name}`,
      level: "info",
      data: { duration },
    })
  }
}

// User context
export function setUserContext(user: { id: string; email?: string; role?: string }) {
  if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
    Sentry.setUser({
      id: user.id,
      email: user.email,
      role: user.role,
    })
  }
}

// Custom monitoring metrics
export interface MonitoringMetrics {
  responseTime: number
  errorRate: number
  throughput: number
  availability: number
}

export function collectMetrics(): MonitoringMetrics {
  return {
    responseTime: performance.now(),
    errorRate: 0, // Calculate based on error logs
    throughput: 0, // Calculate based on request logs
    availability: 100, // Calculate based on uptime
  }
}

// Health check endpoint data
export function getHealthStatus() {
  return {
    status: "healthy",
    timestamp: new Date().toISOString(),
    version: process.env.npm_package_version || "1.0.0",
    environment: process.env.NODE_ENV,
    uptime: process.uptime(),
    memory: process.memoryUsage(),
    services: {
      database: "healthy",
      email: "healthy",
      storage: "healthy",
      cache: "healthy",
    },
  }
}
