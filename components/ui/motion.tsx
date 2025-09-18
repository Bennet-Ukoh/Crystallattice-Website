"use client"

import { motion } from "framer-motion"

// Pre-configured motion components for common use cases
export const MotionDiv = motion.div
export const MotionSection = motion.section
export const MotionArticle = motion.article
export const MotionHeader = motion.header
export const MotionMain = motion.main
export const MotionFooter = motion.footer
export const MotionNav = motion.nav
export const MotionAside = motion.aside
export const MotionH1 = motion.h1
export const MotionH2 = motion.h2
export const MotionH3 = motion.h3
export const MotionP = motion.p
export const MotionSpan = motion.span
export const MotionButton = motion.button
export const MotionA = motion.a
export const MotionImg = motion.img
export const MotionUl = motion.ul
export const MotionLi = motion.li

// Common animation variants
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
}

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
}

export const slideInLeft = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 20 },
}

export const slideInRight = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 },
}

export const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.9 },
}

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

// Transition presets
export const springTransition = {
  type: "spring",
  stiffness: 100,
  damping: 15,
}

export const easeTransition = {
  duration: 0.3,
  ease: [0.4, 0, 0.2, 1],
}

export const slowTransition = {
  duration: 0.6,
  ease: [0.4, 0, 0.2, 1],
}
