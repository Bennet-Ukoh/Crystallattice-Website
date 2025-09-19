import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"
import { Footer } from "@/components/footer"
import { AuthProviderWrapper } from "@/components/auth-provider-wrapper"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  title: "Crystallattice Ltd - Software Solutions & Training",
  description:
    "Empowering firms, governments, and students with world-class software solutions and training. Expert engineers providing software development, embedded systems, and training programs.",
    
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-background font-sans antialiased">
        <AuthProviderWrapper>
          {children}
        </AuthProviderWrapper>
        <Toaster />
        <Footer />
      </body>
    </html>
  )
}
