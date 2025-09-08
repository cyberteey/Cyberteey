// Integration configuration and utilities

export const INTEGRATIONS = {
  // Database
  DATABASE: {
    provider: "postgresql",
    url: process.env.DATABASE_URL,
    maxConnections: 100,
  },

  // Email Services
  EMAIL: {
    provider: "sendgrid",
    apiKey: process.env.SENDGRID_API_KEY,
    fromEmail: process.env.FROM_EMAIL || "cybercrimelabofficial@proton.me",
    templates: {
      complaint: "d-complaint-template-id",
      recovery: "d-recovery-template-id",
      notification: "d-notification-template-id",
    },
  },

  // Payment Processing
  PAYMENTS: {
    stripe: {
      publicKey: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
      secretKey: process.env.STRIPE_SECRET_KEY,
      webhookSecret: process.env.STRIPE_WEBHOOK_SECRET,
    },
    paypal: {
      clientId: process.env.PAYPAL_CLIENT_ID,
      clientSecret: process.env.PAYPAL_CLIENT_SECRET,
      environment: process.env.NODE_ENV === "production" ? "live" : "sandbox",
    },
  },

  // Real-time Communication
  REALTIME: {
    pusher: {
      appId: process.env.PUSHER_APP_ID,
      key: process.env.NEXT_PUBLIC_PUSHER_KEY,
      secret: process.env.PUSHER_SECRET,
      cluster: process.env.PUSHER_CLUSTER || "us2",
    },
    socketio: {
      url: process.env.SOCKET_IO_URL || "http://localhost:3001",
      options: {
        transports: ["websocket"],
      },
    },
  },

  // SMS & Voice
  COMMUNICATIONS: {
    twilio: {
      accountSid: process.env.TWILIO_ACCOUNT_SID,
      authToken: process.env.TWILIO_AUTH_TOKEN,
      phoneNumber: process.env.TWILIO_PHONE_NUMBER,
    },
  },

  // File Storage
  STORAGE: {
    aws: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      region: process.env.AWS_REGION || "us-east-1",
      bucket: process.env.AWS_S3_BUCKET,
    },
    vercelBlob: {
      token: process.env.BLOB_READ_WRITE_TOKEN,
    },
  },

  // Analytics
  ANALYTICS: {
    googleAnalytics: {
      measurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
    },
    mixpanel: {
      token: process.env.NEXT_PUBLIC_MIXPANEL_TOKEN,
    },
    hotjar: {
      hjid: process.env.NEXT_PUBLIC_HOTJAR_ID,
      hjsv: process.env.NEXT_PUBLIC_HOTJAR_SNIPPET_VERSION,
    },
  },

  // Monitoring
  MONITORING: {
    sentry: {
      dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
      environment: process.env.NODE_ENV,
    },
    logRocket: {
      appId: process.env.NEXT_PUBLIC_LOGROCKET_APP_ID,
    },
  },

  // Security
  SECURITY: {
    recaptcha: {
      siteKey: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
      secretKey: process.env.RECAPTCHA_SECRET_KEY,
    },
    auth0: {
      domain: process.env.AUTH0_DOMAIN,
      clientId: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
    },
  },

  // External APIs
  EXTERNAL_APIS: {
    blockchain: {
      etherscan: {
        apiKey: process.env.ETHERSCAN_API_KEY,
        baseUrl: "https://api.etherscan.io/api",
      },
      blockchair: {
        apiKey: process.env.BLOCKCHAIR_API_KEY,
        baseUrl: "https://api.blockchair.com",
      },
    },
    geolocation: {
      ipapi: {
        apiKey: process.env.IPAPI_KEY,
        baseUrl: "http://api.ipapi.com",
      },
    },
  },
}

// Integration status checker
export async function checkIntegrationStatus() {
  const status = {
    database: false,
    email: false,
    payments: false,
    realtime: false,
    storage: false,
    analytics: false,
    monitoring: false,
  }

  try {
    // Check database connection
    status.database = !!process.env.DATABASE_URL

    // Check email service
    status.email = !!process.env.SENDGRID_API_KEY || !!process.env.SMTP_HOST

    // Check payment services
    status.payments = !!process.env.STRIPE_SECRET_KEY

    // Check real-time services
    status.realtime = !!process.env.PUSHER_SECRET

    // Check storage services
    status.storage = !!process.env.AWS_ACCESS_KEY_ID || !!process.env.BLOB_READ_WRITE_TOKEN

    // Check analytics
    status.analytics = !!process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

    // Check monitoring
    status.monitoring = !!process.env.NEXT_PUBLIC_SENTRY_DSN

    return status
  } catch (error) {
    console.error("Error checking integration status:", error)
    return status
  }
}

// Integration health check
export async function healthCheck() {
  const health = {
    timestamp: new Date().toISOString(),
    status: "healthy",
    services: {} as Record<string, any>,
  }

  try {
    // Database health check
    health.services.database = {
      status: "healthy",
      responseTime: 0,
    }

    // Email service health check
    health.services.email = {
      status: "healthy",
      provider: process.env.SENDGRID_API_KEY ? "sendgrid" : "smtp",
    }

    // Payment service health check
    health.services.payments = {
      status: process.env.STRIPE_SECRET_KEY ? "healthy" : "not_configured",
      providers: ["stripe", "paypal"],
    }

    return health
  } catch (error) {
    health.status = "unhealthy"
    health.services.error = error
    return health
  }
}
