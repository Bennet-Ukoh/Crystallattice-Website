"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { motion } from "framer-motion"
import { partners, partnersSection } from "@/lib/content"
import Image from "next/image"

export function Partners() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container px-4 mx-auto">
        <ScrollReveal>
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-balance text-primary">
              {partnersSection.title}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              {partnersSection.description}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <motion.div
                className="flex items-center justify-center p-6 bg-background rounded-lg shadow-sm transition-all"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  width={100} // Approximate width, adjust as needed
                  height={48} // Approximate height, adjust as needed
                  className="max-h-12 w-auto opacity-70 hover:opacity-100 transition-opacity hover:ring-2 hover:ring-accent rounded-md"
                />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
