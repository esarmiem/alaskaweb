"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { motion, useAnimation, type Variant } from "framer-motion"

interface StaggerChildrenProps {
  children: React.ReactNode
  delay?: number
  staggerDelay?: number
  threshold?: number
  className?: string
}

export default function StaggerChildren({
  children,
  delay = 0,
  staggerDelay = 0.1,
  threshold = 0.1,
  className = "",
}: StaggerChildrenProps) {
  const controls = useAnimation()
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  const containerVariants = {
    hidden: { opacity: 0 } as Variant,
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: staggerDelay,
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
        rootMargin: "0px 0px -100px 0px",
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
    <motion.div ref={ref} initial="hidden" animate={controls} variants={containerVariants} className={className}>
      {children}
    </motion.div>
  )
}

