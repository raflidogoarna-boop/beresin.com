"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { name: "Beranda", href: "#beranda" },
  { name: "Layanan", href: "#layanan" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Tentang", href: "#tentang" },
  { name: "Kontak", href: "#kontak" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/beresin-logo.jpeg"
              alt="Beresin Logo"
              width={140}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="text-foreground/80 hover:text-primary transition-colors font-medium"
              >
                {item.name}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button
              onClick={() => handleNavClick("#kontak")}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Hubungi Kami
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="text-foreground/80 hover:text-primary transition-colors font-medium text-left py-2"
                >
                  {item.name}
                </button>
              ))}
              <Button
                onClick={() => handleNavClick("#kontak")}
                className="bg-primary text-primary-foreground hover:bg-primary/90 mt-2"
              >
                Hubungi Kami
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
