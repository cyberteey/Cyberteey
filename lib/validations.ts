import { z } from "zod"

export const complaintSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  category: z.enum([
    "ACCOUNT_HACK",
    "IDENTITY_THEFT",
    "FINANCIAL_FRAUD",
    "CYBERBULLYING",
    "PHISHING",
    "MALWARE",
    "DATA_BREACH",
    "RANSOMWARE",
    "SOCIAL_ENGINEERING",
    "ONLINE_SCAM",
    "CRYPTOCURRENCY_THEFT",
    "EMAIL_COMPROMISE",
    "WEBSITE_DEFACEMENT",
    "OTHER",
  ]),
  priority: z.enum(["LOW", "MEDIUM", "HIGH", "URGENT", "EMERGENCY"]).default("MEDIUM"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  description: z.string().min(20, "Description must be at least 20 characters"),
  evidence: z.string().optional(),
})

export const recoverySchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  recoveryType: z.enum([
    "ACCOUNT_RECOVERY",
    "CRYPTOCURRENCY_RECOVERY",
    "DATA_RECOVERY",
    "EMAIL_RECOVERY",
    "SOCIAL_MEDIA_RECOVERY",
    "FINANCIAL_RECOVERY",
    "IDENTITY_RECOVERY",
    "DEVICE_RECOVERY",
  ]),
  assetType: z.enum([
    "CRYPTOCURRENCY",
    "BANK_ACCOUNT",
    "EMAIL_ACCOUNT",
    "SOCIAL_MEDIA",
    "GAMING_ACCOUNT",
    "CLOUD_STORAGE",
    "DOMAIN_NAME",
    "WEBSITE",
    "MOBILE_WALLET",
    "TRADING_ACCOUNT",
    "PAYPAL_ACCOUNT",
    "DIGITAL_WALLET",
    "OTHER",
  ]),
  description: z.string().min(20, "Description must be at least 20 characters"),
  lossAmount: z.string().optional(),
  lossDate: z.string().optional(),
  evidence: z.string().optional(),
})

export const chatMessageSchema = z.object({
  sessionId: z.string(),
  message: z.string().min(1, "Message cannot be empty"),
  sender: z.enum(["USER", "AGENT", "BOT"]).default("USER"),
})

export const trackingSchema = z.object({
  trackingId: z.string().min(1, "Tracking ID is required"),
})

export type ComplaintFormData = z.infer<typeof complaintSchema>
export type RecoveryFormData = z.infer<typeof recoverySchema>
export type ChatMessageData = z.infer<typeof chatMessageSchema>
export type TrackingData = z.infer<typeof trackingSchema>
