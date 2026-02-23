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
    puntos: ["Modelos a medida", "Automatización de flujos", "Insights accionables"],
  },
  {
    name: "Arquitectura Cloud-Native",
    description: "Soluciones escalables, resilientes y eficientes construidas para el ecosistema de la nube moderna.",
    icon: Cloud,
    puntos: ["Escalabilidad real", "Costos controlados", "Observabilidad integrada"],
  },
  {
    name: "Seguridad de Nivel Empresarial",
    description: "Medidas de seguridad de última generación para proteger tus activos más valiosos.",
    icon: Shield,
    puntos: ["Buenas prácticas OWASP", "Hardening y monitoreo", "Accesos y auditoría"],
  },
  {
    name: "Desarrollo Web y Móvil",
    description: "Desarrollamos aplicaciones web progresivas y apps nativas para iOS y Android.",
    icon: Smartphone,
    puntos: ["UX mobile-first", "Performance y SEO", "Integraciones y APIs"],
  },
]

export default function Features() {
  return (
    <section className="container space-y-16 py-24 md:py-32">
      <FadeIn direction="up" threshold={0.2}>
        <div className="relative mx-auto max-w-[62rem] text-center">
          <div className="inline-flex items-center gap-2 rounded-full border bg-background/60 px-4 py-1.5 text-xs text-muted-foreground backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Capacidades que entregan resultados
          </div>
          <h2 className="mt-5 font-bold text-3xl leading-[1.05] tracking-tight sm:text-4xl md:text-6xl">
            Nuestras <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Soluciones</span>
          </h2>
          <p className="mt-4 text-muted-foreground sm:text-lg">
            Descubre cómo Alaska Tech puede transformar tu negocio con nuestras tecnologías innovadoras.
          </p>
        </div>
      </FadeIn>

      <StaggerChildren threshold={0.1} staggerDelay={0.15}>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-2">
          {features.map((feature, index) => (
            <StaggerItem key={index} direction="up" distance={40}>
              <motion.div
                className="group relative overflow-hidden rounded-xl border bg-background p-7 sm:p-8"
                whileHover={{ y: -6, boxShadow: "0 18px 45px -22px rgba(0, 0, 0, 0.35)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <motion.div
                      className="relative grid h-12 w-12 place-items-center rounded-xl border bg-gradient-to-b from-background to-muted/30"
                      whileHover={{ rotate: 4, scale: 1.05 }}
                      transition={{ duration: 0.25 }}
                    >
                      <feature.icon className="h-6 w-6" />
                      <div className="pointer-events-none absolute -inset-8 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-2xl" />
                      </div>
                    </motion.div>
                    <div>
                      <h3 className="mt-2 font-semibold tracking-tight">{feature.name}</h3>
                    </div>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">{feature.description}</p>

                <ul className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-3">
                  {feature.puntos.map((punto) => (
                    <li
                      key={punto}
                      className="flex items-center gap-2 rounded-lg border bg-background/50 px-3 py-2 text-xs text-muted-foreground backdrop-blur"
                    >
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary/80" />
                      <span className="min-w-0">{punto}</span>
                    </li>
                  ))}
                </ul>

                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute -right-12 -top-16 h-44 w-44 rounded-full bg-primary/10 blur-2xl" />
                  <div className="absolute -left-12 -bottom-16 h-44 w-44 rounded-full bg-accent/10 blur-2xl" />
                </div>

                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </div>
      </StaggerChildren>
    </section>
  )
}
