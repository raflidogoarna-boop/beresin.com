"use client"

import { useState } from "react"
import { Send, Phone, Mail, MapPin, MessageCircle, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

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

const contactInfo = [
  {
    icon: Phone,
    title: "Telepon / WhatsApp",
    value: "+62 878-9818-9047",
    href: "https://wa.me/6287898189047",
  },
  {
    icon: Mail,
    title: "Email",
    value: "hello@beresin.com",
    href: "mailto:hello@beresin.com",
  },
  {
    icon: MapPin,
    title: "Lokasi",
    value: "Medan, Indonesia",
    href: "#",
  },
]

const socialLinks = [
  { icon: Instagram, name: "Instagram", href: "https://www.instagram.com/kitaberesin_?igsh=N21hZDVqNWphY202&utm_source=qr" },
  { icon: TikTokIcon, name: "TikTok", href: "https://tiktok.com/@fan_nyy0" },
  { icon: MessageCircle, name: "WhatsApp", href: "https://wa.me/6287898189047" },
]

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Send to WhatsApp
    const message = `Halo Beresin! 

Nama: ${formData.name}
Email: ${formData.email}
Telepon: ${formData.phone}
Layanan: ${formData.service}

Pesan:
${formData.message}`

    const whatsappUrl = `https://wa.me/6287898189047?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: "", email: "", phone: "", service: "", message: "" })

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <section id="kontak" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Kontak</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-balance">
            Hubungi <span className="text-primary">Kami</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Punya pertanyaan atau ingin memulai proyek? Jangan ragu untuk menghubungi kami!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-6 md:p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-foreground mb-6">Kirim Pesan</h3>
            
            {isSubmitted && (
              <div className="mb-6 p-4 bg-primary/10 border border-primary/20 rounded-lg">
                <p className="text-primary font-medium">
                  Terima kasih! Pesan Anda telah dikirim. Kami akan segera menghubungi Anda.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground">Nama Lengkap</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Masukkan nama Anda"
                    required
                    className="bg-background border-border focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="email@contoh.com"
                    required
                    className="bg-background border-border focus:border-primary"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-foreground">No. WhatsApp</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="08123456789"
                    required
                    className="bg-background border-border focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="service" className="text-foreground">Pilih Layanan</Label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full h-10 px-3 rounded-md bg-background border border-border focus:border-primary text-foreground"
                  >
                    <option value="">Pilih layanan...</option>
                    <option value="Desain Logo">Desain Logo</option>
                    <option value="Desain Grafis">Desain Grafis</option>
                    <option value="Desain Stiker">Desain Stiker</option>
                    <option value="Desain Spanduk">Desain Spanduk</option>
                    <option value="Edit Foto">Edit Foto</option>
                    <option value="Edit Video">Edit Video</option>
                    <option value="Joki Tugas">Joki Tugas</option>
                    <option value="Lainnya">Lainnya</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground">Pesan</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Ceritakan kebutuhan Anda..."
                  rows={5}
                  required
                  className="bg-background border-border focus:border-primary resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 gap-2"
              >
                {isSubmitting ? (
                  "Mengirim..."
                ) : (
                  <>
                    Kirim Pesan
                    <Send size={18} />
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-card rounded-2xl p-6 md:p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-foreground mb-6">Informasi Kontak</h3>
              
              <div className="space-y-6">
                {contactInfo.map((item) => {
                  const IconComponent = item.icon
                  return (
                    <a
                      key={item.title}
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">{item.title}</h4>
                        <p className="text-muted-foreground group-hover:text-primary transition-colors">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  )
                })}
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 md:p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-foreground mb-6">Ikuti Kami</h3>
              
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors group"
                      aria-label={social.name}
                    >
                      <IconComponent className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                    </a>
                  )
                })}
              </div>
            </div>

            <div className="bg-primary rounded-2xl p-6 md:p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-primary-foreground mb-4">Respon Cepat via WhatsApp</h3>
              <p className="text-primary-foreground/80 mb-6">
                Butuh respon cepat? Hubungi kami langsung via WhatsApp untuk konsultasi gratis!
              </p>
              <Button
                asChild
                variant="secondary"
                className="w-full bg-background text-foreground hover:bg-background/90"
              >
                <a
                  href="https://wa.me/6287898189047?text=Halo%20Beresin!%20Saya%20tertarik%20dengan%20layanan%20Anda."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gap-2"
                >
                  <MessageCircle size={18} />
                  Chat via WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
