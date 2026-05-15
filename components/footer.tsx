"use client"

import Image from "next/image"
import Link from "next/link"
import { Instagram, MessageCircle, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

// Custom TikTok Icon
function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className={className}
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
    </svg>
  )
}

const footerLinks = {
  layanan: [
    { name: "Desain Logo", href: "#layanan" },
    { name: "Desain Grafis", href: "#layanan" },
    { name: "Desain Stiker", href: "#layanan" },
    { name: "Desain Spanduk", href: "#layanan" },
    { name: "Edit Foto", href: "#layanan" },
    { name: "Edit Video", href: "#layanan" },
    { name: "Joki Tugas", href: "#layanan" },
  ],
  perusahaan: [
    { name: "Tentang Kami", href: "#tentang" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Testimoni", href: "#testimoni" },
    { name: "Kontak", href: "#kontak" },
  ],
}

const socialLinks = [
  { icon: Instagram, name: "Instagram", href: "https://www.instagram.com/kitaberesin_?igsh=N21hZDVqNWphY202&utm_source=qr" },
  { icon: TikTokIcon, name: "TikTok", href: "https://tiktok.com/@fan_nyy0" },
  { icon: MessageCircle, name: "WhatsApp", href: "https://wa.me/6287898189047" },
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/beresin-logo.jpeg"
                alt="Beresin Logo"
                width={140}
                height={40}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Solusi kreatif untuk semua kebutuhan desain, editing, dan tugas Anda. 
              Profesional, terjangkau, dan tepat waktu.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors group"
                    aria-label={social.name}
                  >
                    <IconComponent className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Layanan */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Layanan</h4>
            <ul className="space-y-3">
              {footerLinks.layanan.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Perusahaan */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Perusahaan</h4>
            <ul className="space-y-3">
              {footerLinks.perusahaan.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Mulai Proyek</h4>
            <p className="text-muted-foreground mb-4">
              Siap untuk memulai proyek kreatif Anda? Hubungi kami sekarang!
            </p>
            <Button
              asChild
              className="bg-primary text-primary-foreground hover:bg-primary/90 w-full"
            >
              <a
                href="https://wa.me/6287898189047?text=Halo%20Beresin!%20Saya%20tertarik%20dengan%20layanan%20Anda."
                target="_blank"
                rel="noopener noreferrer"
                className="gap-2"
              >
                <MessageCircle size={18} />
                Hubungi via WhatsApp
              </a>
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} Beresin. All rights reserved.
          </p>
          
          <Button
            variant="outline"
            size="icon"
            onClick={scrollToTop}
            className="border-border hover:border-primary hover:text-primary"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </Button>
        </div>
      </div>
    </footer>
  )
}
