"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import FadeIn from "./animations/fade-in"
import FloatAnimation from "./animations/float-animation"

export default function Hero() {
  return (
    <section className="container flex min-h-[calc(100vh-3.5rem)] max-w-screen-2xl flex-col items-center justify-center space-y-8 py-24 text-center md:py-32">
      <div className="space-y-4">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex items-center bg-gradient-to-br from-foreground from-30% via-foreground/90 to-foreground/70 bg-clip-text text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            {/* Solo animamos el logo */}
            <motion.span
              className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 inline-block mr-1"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                type: "spring",
                stiffness: 100,
              }}
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/invertido-RjDarRpDon5QVAHeFOZ4nQ8iX5XaoO.png"
                alt="Alaska Tech Logo"
                fill
                className="invert dark:invert-0 object-contain"
                priority
              />
            </motion.span>

            {/* Texto estático sin animación y con color visible */}
            <span className="text-white">laska Tech</span>
          </div>
        </div>

        <FadeIn delay={1.6} direction="up" duration={0.8}>
          <p className="mx-auto max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Creamos soluciones de software personalizadas que impulsan el crecimiento de tu negocio. Construimos
            aplicaciones web y móviles de alta calidad, utilizando las últimas tecnologías.
          </p>
        </FadeIn>
      </div>

      <FadeIn delay={2.0} direction="up" duration={0.8}>
        <FloatAnimation y={5} duration={4}>
          <Button size="lg" className="relative overflow-hidden group">
            <span className="relative z-10 flex items-center">
              Explorar Soluciones
              <motion.span
                initial={{ x: 0 }}
                animate={{ x: [0, 5, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                <ArrowRight className="ml-2 h-4 w-4" />
              </motion.span>
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.4 }}
            />
          </Button>
        </FloatAnimation>
      </FadeIn>

      {/* Partículas de fondo */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              opacity: [0, 0.7, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
    </section>
  )
}

