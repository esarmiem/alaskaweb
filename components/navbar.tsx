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
              <Button className="mt-4">Contacto</Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

