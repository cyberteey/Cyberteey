// Analytics integration utilities

declare global {
  interface Window {
    gtag: (...args: any[]) => void
    mixpanel: any
    hj: (...args: any[]) => void
  }
}

// Google Analytics 4
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

export function gtag(...args: any[]) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag(...args)
  }
}

export function trackEvent(eventName: string, parameters?: Record<string, any>) {
  gtag("event", eventName, parameters)
}

export function trackPageView(url: string) {
  gtag("config", GA_MEASUREMENT_ID, {
    page_location: url,
  })
}

// Mixpanel Analytics
export function initMixpanel() {
  if (typeof window !== "undefined" && window.mixpanel) {
    window.mixpanel.init(process.env.NEXT_PUBLIC_MIXPANEL_TOKEN)
  }
}

export function trackMixpanelEvent(eventName: string, properties?: Record<string, any>) {
  if (typeof window !== "undefined" && window.mixpanel) {
    window.mixpanel.track(eventName, properties)
  }
}

// Hotjar Integration
export function initHotjar() {
  if (typeof window !== "undefined") {
    const hjid = process.env.NEXT_PUBLIC_HOTJAR_ID
    const hjsv = process.env.NEXT_PUBLIC_HOTJAR_SNIPPET_VERSION

    if (hjid && hjsv) {
      window.hj =
        window.hj ||
        ((...args) => {
          ;(window.hj.q = window.hj.q || []).push(args)
        })
      window.hj("init", hjid, hjsv)
    }
  }
}

// Custom Analytics Events
export const ANALYTICS_EVENTS = {
  // User Actions
  USER_SIGNUP: "user_signup",
  USER_LOGIN: "user_login",
  USER_LOGOUT: "user_logout",

  // Case Management
  COMPLAINT_FILED: "complaint_filed",
  RECOVERY_REQUESTED: "recovery_requested",
  CASE_TRACKED: "case_tracked",

  // Engagement
  LIVE_CHAT_STARTED: "live_chat_started",
  CONTACT_FORM_SUBMITTED: "contact_form_submitted",
  NEWSLETTER_SIGNUP: "newsletter_signup",

  // Business
  PAYMENT_INITIATED: "payment_initiated",
  PAYMENT_COMPLETED: "payment_completed",
  SERVICE_PURCHASED: "service_purchased",

  // Performance
  PAGE_LOAD_TIME: "page_load_time",
  API_RESPONSE_TIME: "api_response_time",
  ERROR_OCCURRED: "error_occurred",
}

// Track business metrics
export function trackBusinessMetric(metric: string, value: number, properties?: Record<string, any>) {
  trackEvent(metric, {
    value,
    currency: "USD",
    ...properties,
  })

  trackMixpanelEvent(metric, {
    value,
    ...properties,
  })
}

// Track user journey
export function trackUserJourney(step: string, properties?: Record<string, any>) {
  trackEvent("user_journey", {
    step,
    timestamp: new Date().toISOString(),
    ...properties,
  })
}

// Track performance metrics
export function trackPerformance(metric: string, value: number) {
  trackEvent("performance_metric", {
    metric,
    value,
    timestamp: new Date().toISOString(),
  })
}

// Error tracking
export function trackError(error: Error, context?: Record<string, any>) {
  trackEvent(ANALYTICS_EVENTS.ERROR_OCCURRED, {
    error_message: error.message,
    error_stack: error.stack,
    ...context,
  })
}
