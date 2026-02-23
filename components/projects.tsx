"use client"

import { useMemo, useState } from "react"
import { ArrowUpRight, Globe } from "lucide-react"
import { motion } from "framer-motion"
import FadeIn from "./animations/fade-in"
import StaggerChildren from "./animations/stagger-children"
import StaggerItem from "./animations/stagger-item"
import { Button } from "@/components/ui/button"

type Proyecto = {
  nombre: string
  url: string
  descripcion: string
}

const proyectos: Proyecto[] = [
  {
    nombre: "TravelKit",
    url: "https://web.travelkit.us/",
    descripcion: "Plataforma web enfocada en experiencia de viaje y servicios digitales.",
  },
  {
    nombre: "VeciApp",
    url: "https://veciapp.com.co/",
    descripcion:
      "App social y comunitaria que conecta emprendedores con oportunidades de compra y venta en el vecindario.",
  },
  {
    nombre: "LogiCarga",
    url: "https://logicarga-saas.vercel.app/",
    descripcion: "WMS para gestión de almacenes: operaciones, control y visibilidad del inventario.",
  },
  {
    nombre: "TalentMatcher",
    url: "https://talentmatcher.vercel.app/",
    descripcion: "Analiza hojas de vida, compara candidatos y encuentra el mejor match para vacantes.",
  },
  {
    nombre: "Boda Digital",
    url: "https://boda-juan-y-karla.vercel.app/",
    descripcion: "Sitio tipo invitación digital con identidad visual y experiencia mobile-first.",
  },
]

function getHostname(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, "")
  } catch {
    return url
  }
}

export default function Projects() {
  const [iframesLoaded, setIframesLoaded] = useState<Record<string, boolean>>({})

  const hostnames = useMemo(() => {
    const map: Record<string, string> = {}
    for (const p of proyectos) map[p.url] = getHostname(p.url)
    return map
  }, [])

  return (
    <section className="container space-y-16 py-24 md:py-32">
      <FadeIn direction="up" threshold={0.2}>
        <div className="mx-auto max-w-[62rem] text-center">
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Proyectos</h2>
          <p className="mt-4 text-muted-foreground sm:text-lg">
            Una muestra de productos que hemos construido y llevado a producción.
          </p>
        </div>
      </FadeIn>

      <StaggerChildren threshold={0.1} staggerDelay={0.12}>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-2">
          {proyectos.map((proyecto) => {
            const cargado = Boolean(iframesLoaded[proyecto.url])

            return (
              <StaggerItem key={proyecto.url} direction="up" distance={40}>
                <motion.div
                  className="group relative overflow-hidden rounded-xl border bg-background"
                  whileHover={{ y: -6, boxShadow: "0 18px 45px -22px rgba(0, 0, 0, 0.35)" }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="relative flex items-center gap-3 border-b bg-gradient-to-b from-background to-background/70 px-5 py-4">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
                      <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
                      <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="truncate font-semibold leading-none">{proyecto.nombre}</h3>
                        <span className="inline-flex items-center gap-1 rounded-full border bg-background/60 px-2 py-0.5 text-xs text-muted-foreground">
                          <Globe className="h-3 w-3" />
                          {hostnames[proyecto.url]}
                        </span>
                      </div>
                      <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{proyecto.descripcion}</p>
                    </div>

                    <Button asChild variant="outline" size="sm" className="shrink-0">
                      <a href={proyecto.url} target="_blank" rel="noreferrer">
                        Abrir
                        <ArrowUpRight className="ml-1 h-4 w-4" />
                      </a>
                    </Button>

                    <motion.div
                      className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100"
                      transition={{ duration: 0.3 }}
                    >
                      <div className="absolute -right-10 -top-14 h-40 w-40 rounded-full bg-primary/10 blur-2xl" />
                      <div className="absolute -left-10 -bottom-16 h-40 w-40 rounded-full bg-accent/10 blur-2xl" />
                    </motion.div>
                  </div>

                  <div className="relative aspect-[16/10] bg-muted/30">
                    <motion.div
                      className="absolute inset-0 grid place-items-center"
                      initial={false}
                      animate={{ opacity: cargado ? 0 : 1 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="w-full px-6">
                        <div className="mx-auto max-w-md space-y-3 rounded-lg border bg-background/60 p-4 backdrop-blur">
                          <div className="h-2 w-32 rounded bg-muted" />
                          <div className="h-2 w-56 rounded bg-muted" />
                          <div className="h-2 w-44 rounded bg-muted" />
                          <p className="pt-2 text-xs text-muted-foreground">
                            Vista previa cargando… si no aparece, ábrelo con el botón “Abrir”.
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    <motion.iframe
                      key={proyecto.url}
                      title={`Vista previa ${proyecto.nombre}`}
                      src={proyecto.url}
                      className="absolute inset-0 h-full w-full"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      onLoad={() => setIframesLoaded((prev) => ({ ...prev, [proyecto.url]: true }))}
                      initial={false}
                      animate={{ opacity: cargado ? 1 : 0 }}
                      transition={{ duration: 0.35 }}
                      allowFullScreen
                    />

                    <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            )
          })}
        </div>
      </StaggerChildren>
    </section>
  )
}
