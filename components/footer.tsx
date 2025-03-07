import Link from "next/link"
import { Mail, Linkedin } from "lucide-react"
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
                <Link href="https://www.linkedin.com/company/alaskatech/about" target="blank" className="text-muted-foreground transition-colors hover:text-primary">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="https://www.linkedin.com/company/alaskatech/jobs" target="blank" className="text-muted-foreground transition-colors hover:text-primary">
                  Carreras
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Conecta</h3>
            <div className="flex space-x-4">
              <Link
                href="mailto:contact.alaskatech@gmail.com"
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="20"
                  height="20"
                  viewBox="0 0 30 30"
                  className="h-5 w-5"
                  fill="currentColor"
                >
                  <path d="M 15 3 C 8.373 3 3 8.373 3 15 C 3 17.251208 3.6323415 19.350068 4.7109375 21.150391 L 3.1074219 27 L 9.0820312 25.431641 C 10.829354 26.425062 12.84649 27 15 27 C 21.627 27 27 21.627 27 15 C 27 8.373 21.627 3 15 3 z M 10.892578 9.4023438 C 11.087578 9.4023438 11.287937 9.4011562 11.460938 9.4101562 C 11.674938 9.4151563 11.907859 9.4308281 12.130859 9.9238281 C 12.395859 10.509828 12.972875 11.979906 13.046875 12.128906 C 13.120875 12.277906 13.173313 12.453437 13.070312 12.648438 C 12.972312 12.848437 12.921344 12.969484 12.777344 13.146484 C 12.628344 13.318484 12.465078 13.532109 12.330078 13.662109 C 12.181078 13.811109 12.027219 13.974484 12.199219 14.271484 C 12.371219 14.568484 12.968563 15.542125 13.851562 16.328125 C 14.986562 17.342125 15.944188 17.653734 16.242188 17.802734 C 16.540187 17.951734 16.712766 17.928516 16.884766 17.728516 C 17.061766 17.533516 17.628125 16.864406 17.828125 16.566406 C 18.023125 16.268406 18.222188 16.319969 18.492188 16.417969 C 18.766188 16.515969 20.227391 17.235766 20.525391 17.384766 C 20.823391 17.533766 21.01875 17.607516 21.09375 17.728516 C 21.17075 17.853516 21.170828 18.448578 20.923828 19.142578 C 20.676828 19.835578 19.463922 20.505734 18.919922 20.552734 C 18.370922 20.603734 17.858562 20.7995 15.351562 19.8125 C 12.327563 18.6215 10.420484 15.524219 10.271484 15.324219 C 10.122484 15.129219 9.0605469 13.713906 9.0605469 12.253906 C 9.0605469 10.788906 9.8286563 10.071437 10.097656 9.7734375 C 10.371656 9.4754375 10.692578 9.4023438 10.892578 9.4023438 z"></path>
                </svg>
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