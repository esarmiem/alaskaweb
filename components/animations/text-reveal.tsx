"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useAnimation, type Variant } from "framer-motion"

interface TextRevealProps {
  text: string
  delay?: number
  duration?: number
  staggerDelay?: number
  threshold?: number
  className?: string
  wordClassName?: string
}

export default function TextReveal({
  text,
  delay = 0,
  duration = 0.5,
  staggerDelay = 0.03,
  threshold = 0.1,
  className = "",
  wordClassName = "",
}: TextRevealProps) {
  const controls = useAnimation()
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  const words = text.split(" ")

  const containerVariants = {
    hidden: {} as Variant,
    visible: {
      transition: {
        delayChildren: delay,
        staggerChildren: staggerDelay,
      },
    } as Variant,
  }

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    } as Variant,
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        ease: [0.25, 0.1, 0.25, 1.0],
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
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={wordVariants}
          className={`inline-block ${wordClassName}`}
          style={{ marginRight: "0.25em" }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}

