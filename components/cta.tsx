"use client"

import ContactForm from "./contact-form"
import FadeIn from "./animations/fade-in"
import { motion } from "framer-motion"

export default function CTA() {
  return (
    <section id="contact-section" className="border-t relative overflow-hidden">
      <div className="container py-24 md:py-32">
        <FadeIn direction="up" threshold={0.2}>
          <div className="text-center mb-12">
            <motion.h2
              className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              ¿Listo para impulsar tu negocio?
            </motion.h2>
            <motion.p
              className="max-w-[42rem] mx-auto mt-4 leading-normal text-muted-foreground sm:text-xl sm:leading-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              Cuéntanos sobre tu proyecto y cómo podemos ayudarte a convertir tu idea en realidad.
            </motion.p>
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={0.2} threshold={0.2}>
          <ContactForm />
        </FadeIn>
      </div>

      {/* Elementos decorativos animados */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 right-[20%] w-64 h-64 rounded-full bg-primary/5 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-[20%] w-48 h-48 rounded-full bg-accent/5 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: 2,
          }}
        />
      </div>
    </section>
  )
}

