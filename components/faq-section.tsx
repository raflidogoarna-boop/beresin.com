"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "Berapa lama waktu pengerjaan?",
    answer: "Waktu pengerjaan tergantung kompleksitas proyek. Untuk desain logo biasanya 2-3 hari, desain grafis 1-2 hari, edit foto 1 hari, dan edit video 2-5 hari. Untuk joki tugas, kami akan diskusikan deadline sesuai kebutuhan Anda.",
  },
  {
    question: "Apakah ada revisi?",
    answer: "Ya, tentu! Kami menyediakan revisi untuk memastikan hasil sesuai dengan keinginan Anda. Untuk desain logo tersedia revisi unlimited, sedangkan untuk layanan lain tersedia 2-3 kali revisi gratis.",
  },
  {
    question: "Bagaimana cara order?",
    answer: "Anda bisa order melalui WhatsApp dengan menghubungi kami langsung. Jelaskan kebutuhan Anda, kami akan memberikan penawaran harga, dan setelah deal, proses pengerjaan akan segera dimulai.",
  },
  {
    question: "Metode pembayaran apa saja yang tersedia?",
    answer: "Kami menerima pembayaran melalui transfer bank (BCA, Mandiri, BNI, BRI), e-wallet (GoPay, OVO, DANA, ShopeePay), dan QRIS. Sistem pembayaran 50% DP di awal dan pelunasan setelah proyek selesai.",
  },
  {
    question: "Apakah file source/mentahan disertakan?",
    answer: "Ya, untuk semua layanan desain, file source/mentahan akan disertakan (format AI, PSD, atau sesuai kebutuhan). Anda akan mendapatkan file dalam berbagai format (JPG, PNG, PDF, dll) plus file editablenya.",
  },
  {
    question: "Apakah hasil desain bisa digunakan untuk komersial?",
    answer: "Ya, semua hasil desain yang kami buat menjadi hak milik Anda sepenuhnya dan dapat digunakan untuk keperluan komersial tanpa batasan.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">FAQ</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-balance">
            Pertanyaan yang <span className="text-primary">Sering Ditanyakan</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Temukan jawaban untuk pertanyaan umum tentang layanan kami
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-card rounded-xl border border-border overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
