"use client"

import type React from "react"

import { motion, type Variant } from "framer-motion"

interface StaggerItemProps {
  children: React.ReactNode
  direction?: "up" | "down" | "left" | "right" | "none"
  distance?: number
  duration?: number
  className?: string
}

export default function StaggerItem({
  children,
  direction = "up",
  distance = 30,
  duration = 0.5,
  className = "",
}: StaggerItemProps) {
  // Configurar las variantes de animación según la dirección
  const getDirectionOffset = (): { x: number; y: number } => {
    switch (direction) {
      case "up":
        return { x: 0, y: distance }
      case "down":
        return { x: 0, y: -distance }
      case "left":
        return { x: distance, y: 0 }
      case "right":
        return { x: -distance, y: 0 }
      case "none":
        return { x: 0, y: 0 }
      default:
        return { x: 0, y: distance }
    }
  }

  const offset = getDirectionOffset()

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: offset.x,
      y: offset.y,
    } as Variant,
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    } as Variant,
  }

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  )
}

