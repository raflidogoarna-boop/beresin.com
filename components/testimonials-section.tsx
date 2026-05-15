"use client"

import { useState } from "react"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Andi Pratama",
    role: "Owner UMKM",
    rating: 5,
    text: "Beresin benar-benar membantu bisnis saya berkembang! Logo yang dibuat sangat profesional dan sesuai dengan visi brand saya. Recommended banget!",
  },
  {
    id: 2,
    name: "Siti Rahayu",
    role: "Content Creator",
    rating: 5,
    text: "Editing video dari Beresin selalu memuaskan. Hasilnya ciamik dan sesuai dengan brief yang saya berikan. Pasti order lagi!",
  },
  {
    id: 3,
    name: "Budi Santoso",
    role: "Mahasiswa",
    rating: 5,
    text: "Joki tugas dari Beresin sangat membantu! Kualitas pekerjaannya bagus dan tepat waktu. Sangat terbantu untuk deadline yang mepet.",
  },
  {
    id: 4,
    name: "Lisa Permata",
    role: "Event Organizer",
    rating: 5,
    text: "Desain spanduk dan banner dari Beresin selalu eye-catching! Banyak klien yang memuji desain event kami. Thanks Beresin!",
  },
  {
    id: 5,
    name: "Rudi Hartono",
    role: "Owner F&B",
    rating: 5,
    text: "Stiker produk dari Beresin keren banget! Desainnya menarik dan detail. Produk saya jadi lebih premium dengan packaging baru.",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Testimoni</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-balance">
            Apa Kata <span className="text-primary">Klien</span> Kami
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Kepuasan klien adalah prioritas utama kami. Lihat apa yang mereka katakan tentang layanan Beresin.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-card rounded-2xl p-8 md:p-12 shadow-lg">
            <Quote className="absolute top-6 left-6 w-12 h-12 text-primary/20" />
            
            <div className="relative z-10">
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-lg md:text-xl text-foreground text-center leading-relaxed mb-8">
                {`"${currentTestimonial.text}"`}
              </p>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">
                    {currentTestimonial.name.charAt(0)}
                  </span>
                </div>
                <h4 className="font-semibold text-foreground">{currentTestimonial.name}</h4>
                <p className="text-sm text-muted-foreground">{currentTestimonial.role}</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={goToPrevious}
              className="border-border hover:border-primary hover:text-primary"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? "bg-primary" : "bg-border hover:bg-primary/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={goToNext}
              className="border-border hover:border-primary hover:text-primary"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
