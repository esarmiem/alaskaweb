import Link from "next/link";
import { Mail, Linkedin } from "lucide-react";
import Image from "next/image";

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
                <Link
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Análisis con IA
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Servicios Cloud
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  onClick={(e) => e.preventDefault()}
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
                <Link
                  href="https://www.linkedin.com/company/alaskatech/about"
                  target="blank"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Nosotros
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/company/alaskatech/jobs"
                  target="blank"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Carreras
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Conecta</h3>
            <div className="flex space-x-4">
              {/* Email */}
              <Link
                href="mailto:contact.alaskatech@gmail.com"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>

              {/* WhatsApp */}
              <Link
                href="https://wa.me/573217805287?text=Hola%20Alaska%20Tech,%20estoy%20interesado%20en%20sus%20servicios"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  className="h-5 w-5"
                  fill="currentColor"
                >
                  <path d="M16 .4C7.5.4.5 7.4.5 16c0 2.8.7 5.6 2.2 8.1L1 31l7.2-1.9C10.3 30.6 13.1 31.5 16 31.5c8.6 0 15.6-7 15.6-15.6S24.6.4 16 .4zm0 28.4c-2.6 0-5.1-.7-7.2-2.1l-.5-.3-4.3 1.2 1.2-4.2-.3-.5c-1.4-2.2-2.1-4.7-2.1-7.3 0-7.5 6.1-13.6 13.6-13.6s13.6 6.1 13.6 13.6-6.1 13.2-13.6 13.2zm7.4-9.8c-.4-.2-2.5-1.2-2.9-1.3-.4-.2-.7-.2-1 .2-.3.4-1.1 1.3-1.3 1.5-.2.2-.5.3-.9.1-.4-.2-1.6-.6-3-1.9-1.1-1-1.9-2.2-2.1-2.6-.2-.4 0-.6.1-.8.1-.1.4-.5.5-.7.2-.2.2-.4.4-.6.1-.2.1-.5 0-.7-.1-.2-1-2.4-1.3-3.2-.3-.7-.7-.6-1-.6h-.9c-.3 0-.7.1-1 .5-.3.4-1.3 1.3-1.3 3.2 0 1.9 1.4 3.7 1.6 4 .2.2 2.7 4.1 6.6 5.7.9.4 1.6.6 2.1.8.9.3 1.7.3 2.3.2.7-.1 2.5-1 2.9-1.9.4-.9.4-1.6.3-1.9-.1-.2-.3-.3-.7-.5z" />
                </svg>
                <span className="sr-only">WhatsApp</span>
              </Link>

              {/* LinkedIn */}
              <Link
                href="https://www.linkedin.com/company/alaskatech/"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>

              {/* Instagram */}
              <Link
                href="https://www.instagram.com/alaskatechcol"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="currentColor"
                >
                  <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10zm-5 3c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zm0 2c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3zm4.5-.5c-.276 0-.5.224-.5.5s.224.5.5.5.5-.224.5-.5-.224-.5-.5-.5z" />
                </svg>
                <span className="sr-only">Instagram</span>
              </Link>

              {/* TikTok */}
              <Link
                href="https://www.tiktok.com/@alaskatechcol"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  className="h-5 w-5"
                  fill="currentColor"
                >
                  <path d="M30.13 4H24v28.38c0 2.41-1.95 4.37-4.36 4.37A4.37 4.37 0 0 1 15.27 32.4a4.36 4.36 0 0 1 4.37-4.36c.47 0 .91.08 1.33.23V22a10.33 10.33 0 0 0-1.33-.09c-5.81 0-10.52 4.7-10.52 10.52S13.83 43 19.64 43c5.81 0 10.52-4.7 10.52-10.52V19.47a13.3 13.3 0 0 0 7.71 2.46v-6.15a7.09 7.09 0 0 1-7.74-7.78z" />
                </svg>
                <span className="sr-only">TikTok</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container border-t py-6">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Alaska Tech. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}
