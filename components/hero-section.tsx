"use client"

import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  const handleScrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="beranda" className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <Sparkles size={16} />
              <span>Solusi Kreatif Terpercaya</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
              <span className="text-primary">Beresin</span> Semua{" "}
              <span className="text-primary">Kebutuhan</span> Desain &amp; Kreativitas Anda
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              Kami menyediakan jasa desain logo, grafis, stiker, spanduk, edit foto &amp; video, 
              hingga joki tugas. Hasil profesional dengan harga terjangkau.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => handleScrollToSection("#layanan")}
                className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2"
              >
                Lihat Layanan
                <ArrowRight size={20} />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => handleScrollToSection("#kontak")}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Konsultasi Gratis
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">8+</div>
                <div className="text-sm text-muted-foreground">Proyek Selesai</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Klien Puas</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">5★</div>
                <div className="text-sm text-muted-foreground">Rating</div>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl" />
              <div className="relative z-10 flex items-center justify-center h-full">
                <Image
                  src="/images/beresin-logo.jpeg"
                  alt="Beresin"
                  width={350}
                  height={350}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
