import { cookies } from "next/headers"

export async function getCurrentUser() {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get("auth_token")

    if (!token) {
      return null
    }

    // In a real app, verify the JWT token and fetch user data
    // For now, return mock user data
    return {
      id: "1",
      name: "John Doe",
      email: "john@example.com",
      avatar: "/placeholder.svg?height=40&width=40",
      role: "student" as const,
    }
  } catch (error) {
    console.error("Failed to get current user:", error)
    return null
  }
}
