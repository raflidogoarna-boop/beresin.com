"use client"

import { ArrowRight, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTASection() {
  const handleScrollToServices = () => {
    const element = document.querySelector("#layanan")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Siap Untuk <span className="text-primary">Memulai Proyek</span> Anda?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Jangan ragu untuk menghubungi kami. Konsultasi gratis untuk semua kebutuhan desain dan kreativitas Anda!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2"
            >
              <a
                href="https://wa.me/6287898189047?text=Halo%20Beresin!%20Saya%20tertarik%20dengan%20layanan%20Anda."
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={20} />
                Chat via WhatsApp
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={handleScrollToServices}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground gap-2"
            >
              Lihat Layanan
              <ArrowRight size={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
