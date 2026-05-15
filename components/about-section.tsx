"use client"

import { Target, Eye, Award, Users } from "lucide-react"
import Image from "next/image"

const values = [
  {
    icon: Target,
    title: "Visi",
    description: "Menjadi penyedia jasa kreatif terdepan yang membantu bisnis dan individu berkembang melalui desain berkualitas tinggi.",
  },
  {
    icon: Eye,
    title: "Misi",
    description: "Memberikan solusi desain dan kreatif yang inovatif, profesional, dan terjangkau untuk setiap kebutuhan klien.",
  },
  {
    icon: Award,
    title: "Kualitas",
    description: "Kami berkomitmen untuk menghasilkan karya terbaik dengan memperhatikan setiap detail dan kepuasan klien.",
  },
  {
    icon: Users,
    title: "Kolaborasi",
    description: "Bekerja sama dengan klien untuk memahami kebutuhan dan menghasilkan solusi yang tepat sasaran.",
  },
]

export function AboutSection() {
  return (
    <section id="tentang" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-primary/20 rounded-3xl transform rotate-6" />
              <div className="relative bg-card rounded-3xl overflow-hidden shadow-xl">
                <div className="aspect-square flex items-center justify-center p-8">
                  <Image
                    src="/images/beresin-logo.jpeg"
                    alt="Tentang Beresin"
                    width={400}
                    height={400}
                    className="rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Tentang Kami</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-balance">
                Kenali <span className="text-primary">Beresin</span> Lebih Dekat
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Beresin adalah penyedia jasa kreatif yang didirikan dengan semangat untuk membantu 
                bisnis dan individu dalam memenuhi kebutuhan desain mereka. Dengan pengalaman dan 
                dedikasi tinggi, kami siap memberikan layanan terbaik untuk Anda.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mt-4">
                Dari desain logo hingga editing video, kami menyediakan berbagai layanan kreatif 
                yang dapat disesuaikan dengan kebutuhan dan budget Anda. Tim kami terdiri dari 
                desainer berpengalaman yang selalu mengikuti tren terkini.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {values.map((value) => {
                const IconComponent = value.icon
                return (
                  <div key={value.title} className="space-y-3">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground">{value.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
