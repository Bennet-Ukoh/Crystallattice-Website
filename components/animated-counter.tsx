"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useTransform, animate } from "framer-motion"

interface AnimatedCounterProps {
  from: number
  to: number
  duration?: number
  className?: string
}

export function AnimatedCounter({ from, to, duration = 2, className }: AnimatedCounterProps) {
  const count = useMotionValue(from)
  const rounded = useTransform(count, (latest) => Math.round(latest))
  const [displayValue, setDisplayValue] = useState(from)

  useEffect(() => {
    const controls = animate(count, to, { duration })

    const unsubscribe = rounded.on("change", (latest) => {
      setDisplayValue(latest)
    })

    return () => {
      controls.stop()
      unsubscribe()
    }
  }, [count, rounded, to, duration])

  return (
    <motion.span className={className} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      {displayValue.toLocaleString()}
    </motion.span>
  )
}
