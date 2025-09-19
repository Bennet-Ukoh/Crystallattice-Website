"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { partners, partnersSection } from "@/lib/content"
import Image from "next/image"

export function PartnersSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 bg-muted/30">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#B4E9A9] mb-6">
            {partnersSection.title.split(' ')[0]}{' '}
            <span className="text-[#FFB84F]">
              {partnersSection.title.split(' ').slice(1).join(' ')}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {partnersSection.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative overflow-hidden"
        >
          <motion.div
            animate={{
              x: [0, -100 * partners.length],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            className="flex gap-16 items-center"
            style={{ width: `${200 * partners.length}%` }}
          >
            {[...partners, ...partners].map((partner, index) => (
              <motion.div
                key={`${partner.name}-${index}`}
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.3 },
                }}
                className="flex-shrink-0 w-32 h-32 bg-gradient-to-br from-[#B4E9A9]/10 to-[#FFB84F]/10 rounded-2xl flex items-center justify-center border border-[#B4E9A9]/20 hover:border-[#FFB84F]/40 transition-all duration-300 grayscale hover:grayscale-0"
              >
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  width={100} // Approximate width, adjust as needed
                  height={60} // Approximate height, adjust as needed
                  className="max-h-12 w-auto opacity-70 transition-opacity"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
