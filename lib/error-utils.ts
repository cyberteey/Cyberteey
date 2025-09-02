/**
 * Utility functions for error handling throughout the application
 */

/**
 * Formats an error message for display to users
 * @param error The error object or message
 * @returns A user-friendly error message
 */
export function formatErrorMessage(error: unknown): string {
  if (error instanceof Error) {
    return error.message
  }

  if (typeof error === "string") {
    return error
  }

  return "An unexpected error occurred. Please try again later."
}

/**
 * Logs an error to the console with additional context
 * @param error The error object
 * @param context Additional context about where the error occurred
 */
export function logError(error: unknown, context?: string): void {
  const errorMessage = formatErrorMessage(error)
  const contextMessage = context ? ` [${context}]` : ""

  console.error(`Error${contextMessage}: ${errorMessage}`)

  if (error instanceof Error && error.stack) {
    console.error(error.stack)
  }
}

/**
 * Determines if an error is a network-related error
 * @param error The error to check
 * @returns True if the error is network-related
 */
export function isNetworkError(error: unknown): boolean {
  if (!(error instanceof Error)) return false

  const networkErrorMessages = ["network", "connection", "offline", "failed to fetch", "internet"]

  return networkErrorMessages.some((msg) => error.message.toLowerCase().includes(msg))
}

/**
 * Creates a standardized error response object
 * @param message Error message
 * @param code Optional error code
 * @returns Standardized error object
 */
export function createErrorResponse(message: string, code?: string) {
  return {
    error: true,
    message,
    code: code || "ERROR",
    timestamp: new Date().toISOString(),
  }
}
