import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold">Alaska Tech</span>
          <div className="w-6 h-6 relative">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/invertido-RjDarRpDon5QVAHeFOZ4nQ8iX5XaoO.png"
              alt="Alaska Tech Logo"
              width={24}
              height={24}
              className="invert dark:invert-0"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/soluciones" className="text-sm font-medium transition-colors hover:text-primary">
            Soluciones
          </Link>
          <Link href="/industrias" className="text-sm font-medium transition-colors hover:text-primary">
            Industrias
          </Link>
          <Link href="/nosotros" className="text-sm font-medium transition-colors hover:text-primary">
            Nosotros
          </Link>
          <Button variant="ghost" size="sm">
            Contacto
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[250px] sm:w-[300px]">
            <nav className="flex flex-col gap-6 mt-10">
              <Link href="/soluciones" className="text-lg font-medium transition-colors hover:text-primary">
                Soluciones
              </Link>
              <Link href="/industrias" className="text-lg font-medium transition-colors hover:text-primary">
                Industrias
              </Link>
              <Link href="/nosotros" className="text-lg font-medium transition-colors hover:text-primary">
                Nosotros
              </Link>
              <a href="https://wa.me/573217805287?text=Hola%20Alaska%20Tech,%20estoy%20interesado%20en%20sus%20servicios" target="_blank" rel="noopener noreferrer">
                <Button className="mt-4 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 30 30">
                    <path d="M 15 3 C 8.373 3 3 8.373 3 15 C 3 17.251208 3.6323415 19.350068 4.7109375 21.150391 L 3.1074219 27 L 9.0820312 25.431641 C 10.829354 26.425062 12.84649 27 15 27 C 21.627 27 27 21.627 27 15 C 27 8.373 21.627 3 15 3 z M 10.892578 9.4023438 C 11.087578 9.4023438 11.287937 9.4011562 11.460938 9.4101562 C 11.674938 9.4151563 11.907859 9.4308281 12.130859 9.9238281 C 12.395859 10.509828 12.972875 11.979906 13.046875 12.128906 C 13.120875 12.277906 13.173313 12.453437 13.070312 12.648438 C 12.972312 12.848437 12.921344 12.969484 12.777344 13.146484 C 12.628344 13.318484 12.465078 13.532109 12.330078 13.662109 C 12.181078 13.811109 12.027219 13.974484 12.199219 14.271484 C 12.371219 14.568484 12.968563 15.542125 13.851562 16.328125 C 14.986562 17.342125 15.944188 17.653734 16.242188 17.802734 C 16.540187 17.951734 16.712766 17.928516 16.884766 17.728516 C 17.061766 17.533516 17.628125 16.864406 17.828125 16.566406 C 18.023125 16.268406 18.222188 16.319969 18.492188 16.417969 C 18.766188 16.515969 20.227391 17.235766 20.525391 17.384766 C 20.823391 17.533766 21.01875 17.607516 21.09375 17.728516 C 21.17075 17.853516 21.170828 18.448578 20.923828 19.142578 C 20.676828 19.835578 19.463922 20.505734 18.919922 20.552734 C 18.370922 20.603734 17.858562 20.7995 15.351562 19.8125 C 12.327563 18.6215 10.420484 15.524219 10.271484 15.324219 C 10.122484 15.129219 9.0605469 13.713906 9.0605469 12.253906 C 9.0605469 10.788906 9.8286563 10.071437 10.097656 9.7734375 C 10.371656 9.4754375 10.692578 9.4023438 10.892578 9.4023438 z"></path>
                  </svg>
                  Contacto
                </Button>
              </a>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

