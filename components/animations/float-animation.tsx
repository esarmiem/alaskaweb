"use client"

import type React from "react"

import { motion } from "framer-motion"

interface FloatAnimationProps {
  children: React.ReactNode
  duration?: number
  delay?: number
  y?: number
  className?: string
}

export default function FloatAnimation({
  children,
  duration = 3,
  delay = 0,
  y = 10,
  className = "",
}: FloatAnimationProps) {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{
        y: [-y, y, -y],
      }}
      transition={{
        duration,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "loop",
        ease: "easeInOut",
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

