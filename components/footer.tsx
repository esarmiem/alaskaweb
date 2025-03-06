import Link from "next/link"
import { Mail, Linkedin, MessageCircle } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col gap-8 py-8 md:flex-row md:py-12">
        <div className="flex-1 space-y-4">
          <div className="flex items-center space-x-2">
            <h2 className="font-bold">Alaska Tech</h2>
            <div className="w-5 h-5 relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/invertido-RjDarRpDon5QVAHeFOZ4nQ8iX5XaoO.png"
                alt="Alaska Tech Logo"
                width={20}
                height={20}
                className="invert dark:invert-0"
              />
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            La buena compañía en un viaje hace que el camino sea más corto.
          </p>
        </div>
        <div className="grid flex-1 grid-cols-2 gap-12 sm:grid-cols-3">
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Soluciones</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/analisis-ia" className="text-muted-foreground transition-colors hover:text-primary">
                  Análisis con IA
                </Link>
              </li>
              <li>
                <Link href="/servicios-cloud" className="text-muted-foreground transition-colors hover:text-primary">
                  Servicios Cloud
                </Link>
              </li>
              <li>
                <Link
                  href="/desarrollo-web-movil"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Desarrollo Web y Móvil
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Empresa</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/nosotros" className="text-muted-foreground transition-colors hover:text-primary">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/carreras" className="text-muted-foreground transition-colors hover:text-primary">
                  Carreras
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Conecta</h3>
            <div className="flex space-x-4">
              <Link
                href="mailto:contactalaskatech@gmail.com"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
              <Link
                href="https://wa.me/573217805287?text=Hola%20Alaska%20Tech,%20estoy%20interesado%20en%20sus%20servicios"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <MessageCircle className="h-5 w-5" />
                <span className="sr-only">WhatsApp</span>
              </Link>
              <Link
                href="https://www.linkedin.com/company/alaskatech/"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container border-t py-6">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Alaska Tech. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}

