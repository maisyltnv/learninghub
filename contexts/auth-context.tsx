"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"

interface User {
  id: string
  name: string
  email: string
  avatar?: string
  role: "student" | "instructor" | "admin"
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<void>
  register: (name: string, email: string, password: string) => Promise<void>
  logout: () => void
  loading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check for existing session on mount
    checkAuth()
  }, [])

  const checkAuth = async () => {
    try {
      // In a real app, this would check for a valid JWT token
      const token = typeof window !== "undefined" ? localStorage.getItem("auth_token") : null
      if (token) {
        // Mock user data - replace with actual API call
        setUser({
          id: "1",
          name: "John Doe",
          email: "john@example.com",
          avatar: "/placeholder.svg?height=40&width=40",
          role: "student",
        })
      }
    } catch (error) {
      console.error("Auth check failed:", error)
    } finally {
      setLoading(false)
    }
  }

  const login = async (email: string, password: string) => {
    try {
      // Mock login - replace with actual API call
      await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate API call

      // Mock successful login
      const mockUser = {
        id: "1",
        name: "John Doe",
        email: email,
        avatar: "/placeholder.svg?height=40&width=40",
        role: "student" as const,
      }

      if (typeof window !== "undefined") {
        localStorage.setItem("auth_token", "mock_token_123")
      }
      setUser(mockUser)
    } catch (error) {
      throw new Error("Login failed")
    }
  }

  const register = async (name: string, email: string, password: string) => {
    try {
      // Mock registration - replace with actual API call
      await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate API call

      // Mock successful registration
      const mockUser = {
        id: "1",
        name: name,
        email: email,
        avatar: "/placeholder.svg?height=40&width=40",
        role: "student" as const,
      }

      if (typeof window !== "undefined") {
        localStorage.setItem("auth_token", "mock_token_123")
      }
      setUser(mockUser)
    } catch (error) {
      throw new Error("Registration failed")
    }
  }

  const logout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("auth_token")
    }
    setUser(null)
  }

  return <AuthContext.Provider value={{ user, login, register, logout, loading }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
