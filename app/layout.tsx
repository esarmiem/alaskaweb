import "./globals.css"
import { Inter } from "next/font/google"
import type React from "react"
import type { Metadata } from "next"
import MouseMoveEffect from "@/components/mouse-move-effect"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Alaska Tech - Soluciones de Software Personalizadas",
  description:
    "Creamos soluciones de software personalizadas que impulsan el crecimiento de tu negocio. Construimos aplicaciones web y móviles de alta calidad.",
    generator: 'v0.dev',
    icons: {
      icon: '/favicon.png',
    }, //favicon
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
        <MouseMoveEffect />
        {children}
      </body>
    </html>
  )
}



import './globals.css'