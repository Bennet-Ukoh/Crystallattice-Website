"use client"

import { AuthProvider } from "@/lib/auth.tsx"
import type React from "react"

export function AuthProviderWrapper({ children }: { children: React.ReactNode }) {
  return <AuthProvider>{children}</AuthProvider>
}
