"use client"

import { useState } from "react"
import { 
  Palette, 
  PenTool, 
  Sticker, 
  LayoutTemplate, 
  ImageIcon, 
  Video, 
  FileText, 
  ArrowRight,
  Check
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    id: "logo",
    icon: Palette,
    title: "Desain Logo",
    description: "Logo profesional yang mencerminkan identitas brand Anda",
    features: ["3 Konsep Desain", "Revisi Unlimited", "File Format Lengkap", "Source File"],
    price: "Mulai Rp 150.000",
  },
  {
    id: "grafis",
    icon: PenTool,
    title: "Desain Grafis",
    description: "Desain visual menarik untuk berbagai kebutuhan bisnis",
    features: ["Brosur & Flyer", "Poster", "Kartu Nama", "Undangan"],
    price: "Mulai Rp 50.000",
  },
  {
    id: "stiker",
    icon: Sticker,
    title: "Desain Stiker",
    description: "Stiker kreatif untuk produk dan branding Anda",
    features: ["Stiker Produk", "Stiker Label", "Stiker Custom", "Die Cut Design"],
    price: "Mulai Rp 30.000",
  },
  {
    id: "spanduk",
    icon: LayoutTemplate,
    title: "Desain Spanduk",
    description: "Spanduk dan banner yang eye-catching untuk promosi",
    features: ["Banner Digital", "Spanduk Cetak", "Roll Banner", "Backdrop"],
    price: "Mulai Rp 50.000",
  },
  {
    id: "foto",
    icon: ImageIcon,
    title: "Edit Foto",
    description: "Editing foto profesional untuk hasil yang sempurna",
    features: ["Retouch Wajah", "Background Remove", "Color Correction", "Manipulasi Foto"],
    price: "Mulai Rp 15.000",
  },
  {
    id: "video",
    icon: Video,
    title: "Edit Video",
    description: "Editing video berkualitas untuk konten Anda",
    features: ["Video Promosi", "Video Sosmed", "Motion Graphics", "Cinematic Edit"],
    price: "Mulai Rp 50.000",
  },
  {
    id: "tugas",
    icon: FileText,
    title: "Joki Tugas",
    description: "Bantuan pengerjaan tugas akademik dengan kualitas terbaik",
    features: ["Makalah & Essay", "Presentasi PPT", "Laporan Praktikum", "Tugas Desain"],
    price: "Mulai Rp 10.000",
  },
]

export function ServicesSection() {
  const [activeService, setActiveService] = useState<string | null>(null)

  const handleOrderClick = (serviceTitle: string) => {
    const message = `Halo Beresin! Saya tertarik dengan layanan ${serviceTitle}. Bisa bantu saya?`
    const whatsappUrl = `https://wa.me/6287898189047?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section id="layanan" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Layanan Kami</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-balance">
            Solusi Lengkap untuk <span className="text-primary">Kebutuhan Kreatif</span> Anda
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Dari desain hingga editing, kami siap membantu mewujudkan visi kreatif Anda dengan hasil profesional
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service) => {
            const IconComponent = service.icon
            const isActive = activeService === service.id

            return (
              <Card
                key={service.id}
                className={`bg-card border-border hover:border-primary/50 transition-all duration-300 cursor-pointer group ${
                  isActive ? "border-primary ring-2 ring-primary/20" : ""
                }`}
                onClick={() => setActiveService(isActive ? null : service.id)}
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className={`space-y-3 overflow-hidden transition-all duration-300 ${
                    isActive ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                  }`}>
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-foreground/80">
                        <Check size={16} className="text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-border">
                    <div className="flex items-center justify-between">
                      <span className="text-primary font-semibold">{service.price}</span>
                      <Button
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation()
                          handleOrderClick(service.title)
                        }}
                        className="bg-primary text-primary-foreground hover:bg-primary/90 gap-1"
                      >
                        Order
                        <ArrowRight size={14} />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
