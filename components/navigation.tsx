"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { navLinks, siteInfo } from "@/lib/content"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo + Brand */}
          <Link
            href="/"
            className="flex items-center gap-2 font-extrabold text-xl tracking-tight text-primary hover:text-accent transition-colors"
          >
            <Image
              src={siteInfo.logo} // Add your logo in siteInfo.logo
              alt={`${siteInfo.name} logo`}
              width={32}
              height={32}
              className="rounded-md"
              priority
            />
            <span>{siteInfo.name}</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative transition-colors ${
                    isActive
                      ? "text-primary font-semibold"
                      : "text-foreground/80 hover:text-accent"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-primary rounded"></span>
                  )}
                </Link>
              )
            })}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-primary hover:text-accent"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="md:hidden py-4 border-t"
            >
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`transition-colors ${
                        isActive
                          ? "text-primary font-semibold"
                          : "text-foreground/80 hover:text-accent"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
