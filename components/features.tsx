"use client"

import { Brain, Cloud, Shield, Smartphone } from "lucide-react"
import StaggerChildren from "./animations/stagger-children"
import StaggerItem from "./animations/stagger-item"
import FadeIn from "./animations/fade-in"
import { motion } from "framer-motion"

const features = [
  {
    name: "Análisis con IA",
    description: "Aprovecha el poder del aprendizaje automático para obtener información valiosa de tus datos.",
    icon: Brain,
  },
  {
    name: "Arquitectura Cloud-Native",
    description: "Soluciones escalables, resilientes y eficientes construidas para el ecosistema de la nube moderna.",
    icon: Cloud,
  },
  {
    name: "Seguridad de Nivel Empresarial",
    description: "Medidas de seguridad de última generación para proteger tus activos más valiosos.",
    icon: Shield,
  },
  {
    name: "Desarrollo Web y Móvil",
    description: "Desarrollamos aplicaciones web progresivas y apps nativas para iOS y Android.",
    icon: Smartphone,
  },
]

export default function Features() {
  return (
    <section className="container space-y-16 py-24 md:py-32">
      <FadeIn direction="up" threshold={0.2}>
        <div className="mx-auto max-w-[58rem] text-center">
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Nuestras Soluciones</h2>
          <p className="mt-4 text-muted-foreground sm:text-lg">
            Descubre cómo Alaska Tech puede transformar tu negocio con nuestras tecnologías innovadoras.
          </p>
        </div>
      </FadeIn>

      <StaggerChildren threshold={0.1} staggerDelay={0.15}>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
          {features.map((feature, index) => (
            <StaggerItem key={index} direction="up" distance={40}>
              <motion.div
                className="relative overflow-hidden rounded-lg border bg-background p-8"
                whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.2)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-4">
                  <motion.div whileHover={{ rotate: 5, scale: 1.1 }} transition={{ duration: 0.3 }}>
                    <feature.icon className="h-8 w-8" />
                  </motion.div>
                  <h3 className="font-bold">{feature.name}</h3>
                </div>
                <p className="mt-2 text-muted-foreground">{feature.description}</p>

                {/* Efecto de gradiente en hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-transparent opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </StaggerItem>
          ))}
        </div>
      </StaggerChildren>
    </section>
  )
}

