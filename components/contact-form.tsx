"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Send } from "lucide-react"
import { motion } from "framer-motion"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectDescription: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulación de envío de formulario
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Aquí iría la lógica real para enviar el formulario a contactalaskatech@gmail.com
    console.log("Formulario enviado a contactalaskatech@gmail.com:", formData)

    setIsSubmitting(false)
    setSubmitted(true)
    setFormData({
      name: "",
      email: "",
      projectDescription: "",
    })

    // Resetear el estado de enviado después de 5 segundos
    setTimeout(() => setSubmitted(false), 5000)
  }

  const formVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <div className="w-full max-w-md mx-auto">
      {submitted ? (
        <motion.div
          className="text-center p-6 bg-primary/10 rounded-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h3
            className="text-xl font-bold mb-2"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            ¡Gracias por contactarnos!
          </motion.h3>
          <motion.p
            className="text-muted-foreground"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Hemos recibido tu solicitud. Nos pondremos en contacto contigo pronto.
          </motion.p>
        </motion.div>
      ) : (
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-4"
          variants={formVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="space-y-2" variants={itemVariants}>
            <Label htmlFor="name">Nombre</Label>
            <Input
              id="name"
              name="name"
              placeholder="Tu nombre"
              value={formData.name}
              onChange={handleChange}
              required
              className="transition-all duration-300 focus:ring-2 focus:ring-primary/50"
            />
          </motion.div>

          <motion.div className="space-y-2" variants={itemVariants}>
            <Label htmlFor="email">Correo electrónico</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="tu@email.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="transition-all duration-300 focus:ring-2 focus:ring-primary/50"
            />
          </motion.div>

          <motion.div className="space-y-2" variants={itemVariants}>
            <Label htmlFor="projectDescription">Describe tu proyecto</Label>
            <Textarea
              id="projectDescription"
              name="projectDescription"
              placeholder="Cuéntanos sobre el software que deseas desarrollar..."
              rows={4}
              value={formData.projectDescription}
              onChange={handleChange}
              required
              className="transition-all duration-300 focus:ring-2 focus:ring-primary/50"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <Button type="submit" className="w-full relative overflow-hidden group" disabled={isSubmitting}>
              <span className="relative z-10 flex items-center justify-center">
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Enviando...
                  </span>
                ) : (
                  <span className="flex items-center">
                    Enviar mensaje
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "loop",
                        ease: "easeInOut",
                        delay: 1,
                      }}
                    >
                      <Send className="ml-2 h-4 w-4" />
                    </motion.span>
                  </span>
                )}
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.4 }}
              />
            </Button>
          </motion.div>
        </motion.form>
      )}
    </div>
  )
}

