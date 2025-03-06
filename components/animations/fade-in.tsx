"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { motion, useAnimation, type Variant } from "framer-motion"

interface FadeInProps {
  children: React.ReactNode
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  distance?: number
  duration?: number
  threshold?: number
  className?: string
}

export default function FadeIn({
  children,
  delay = 0,
  direction = "up",
  distance = 50,
  duration = 0.5,
  threshold = 0.1,
  className = "",
}: FadeInProps) {
  const controls = useAnimation()
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

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

  const variants = {
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
        delay,
        ease: [0.25, 0.1, 0.25, 1.0], // Curva de easing suave
      },
    } as Variant,
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
          controls.start("visible")
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -100px 0px", // Activa un poco antes de que el elemento sea visible
      },
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [controls, isVisible, threshold])

  return (
    <motion.div ref={ref} initial="hidden" animate={controls} variants={variants} className={className}>
      {children}
    </motion.div>
  )
}

