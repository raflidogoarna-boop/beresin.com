"use client"

import { useState, useEffect } from "react"
import { MessageCircle, X } from "lucide-react"

export function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    // Show tooltip after 3 seconds
    const timer = setTimeout(() => {
      setShowTooltip(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const handleClick = () => {
    const message = "Halo Beresin! Saya tertarik dengan layanan Anda. Bisa bantu saya?"
    const whatsappUrl = `https://wa.me/6287898189047?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-100 translate-y-0 md:opacity-0 md:translate-y-4"
      }`}
    >
      {/* Tooltip */}
      {showTooltip && (
        <div className="hidden md:flex items-center bg-card border border-border rounded-lg shadow-lg px-4 py-3 animate-in fade-in slide-in-from-right-4 duration-300">
          <p className="text-sm text-foreground mr-2">Butuh bantuan? Chat kami!</p>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-muted-foreground hover:text-foreground"
            aria-label="Close tooltip"
          >
            <X size={16} />
          </button>
        </div>
      )}

      {/* WhatsApp Button */}
      <button
        onClick={handleClick}
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform animate-bounce"
        aria-label="Chat via WhatsApp"
        style={{ animationDuration: "2s" }}
      >
        <MessageCircle size={28} />
      </button>
    </div>
  )
}
