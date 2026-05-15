"use client"

import { useState } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const categories = ["Semua", "Logo", "Grafis", "Stiker", "Spanduk", "Edit Foto", "Edit Video"]

const portfolioItems = [
  { id: 9, category: "Grafis", title: "Poster Seminar Inspiratif", image: "/portfolio/poster-seminar.jpg", color: "bg-primary/80" },
  { id: 10, category: "Edit Foto", title: "Foto Produk Dodol Khas", image: "/portfolio/dodol-product.jpg", color: "bg-primary/70" },
  { id: 11, category: "Stiker", title: "Stiker Produk Skincare", image: "/portfolio/skincare-sticker.png", color: "bg-primary/60" },
  { id: 12, category: "Grafis", title: "Menu Miedle", image: "/portfolio/menu-miedle.jpg", color: "bg-primary/80" },
  { id: 13, category: "Spanduk", title: "Spanduk SMKN 10 Medan", image: "/portfolio/spanduk-smkn10.jpg", color: "bg-primary/70" },
  { id: 14, category: "Logo", title: "Logo Miedle", image: "/portfolio/logo-miedle.jpg", color: "bg-primary/60" },
  { id: 15, category: "Logo", title: "Logo Coffee Book", image: "/portfolio/logo-coffeebook.jpg", color: "bg-primary/50" },
]

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("Semua")
  const [selectedItem, setSelectedItem] = useState<number | null>(null)

  const filteredItems = activeCategory === "Semua" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory)

  const currentIndex = selectedItem !== null 
    ? filteredItems.findIndex(item => item.id === selectedItem)
    : -1

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setSelectedItem(filteredItems[currentIndex - 1].id)
    }
  }

  const goToNext = () => {
    if (currentIndex < filteredItems.length - 1) {
      setSelectedItem(filteredItems[currentIndex + 1].id)
    }
  }

  const selectedItemData = portfolioItems.find(item => item.id === selectedItem)

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Portfolio</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-balance">
            Karya <span className="text-primary">Terbaik</span> Kami
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Lihat hasil karya yang telah kami kerjakan untuk berbagai klien dari berbagai industri
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className={
                activeCategory === category
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "border-border text-foreground hover:border-primary hover:text-primary"
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item.id)}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer"
            >
              {item.image.startsWith('/portfolio/') ? (
                <>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="text-center p-4">
                      <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                      <p className="text-sm text-primary">{item.category}</p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className={`absolute inset-0 ${item.color} flex items-center justify-center`}>
                    <span className="text-primary-foreground font-semibold text-lg">{item.category}</span>
                  </div>
                  <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="text-center p-4">
                      <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-sm text-primary">{item.category}</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedItem !== null && selectedItemData && (
          <div 
            className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-4"
            onClick={() => setSelectedItem(null)}
          >
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 p-2 text-foreground hover:text-primary transition-colors"
              aria-label="Close"
            >
              <X size={32} />
            </button>

            {currentIndex > 0 && (
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  goToPrevious()
                }}
                className="absolute left-4 p-2 text-foreground hover:text-primary transition-colors"
                aria-label="Previous"
              >
                <ChevronLeft size={40} />
              </button>
            )}

            {currentIndex < filteredItems.length - 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  goToNext()
                }}
                className="absolute right-4 p-2 text-foreground hover:text-primary transition-colors"
                aria-label="Next"
              >
                <ChevronRight size={40} />
              </button>
            )}

            <div 
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl w-full"
            >
              {selectedItemData.image.startsWith('/portfolio/') ? (
                <>
                  <div className="rounded-xl overflow-hidden">
                    <img
                      src={selectedItemData.image}
                      alt={selectedItemData.title}
                      className="w-full h-auto max-h-[70vh] object-contain"
                    />
                  </div>
                </>
              ) : (
                <div className={`aspect-video rounded-xl ${selectedItemData.color} flex items-center justify-center`}>
                  <span className="text-primary-foreground font-bold text-3xl">{selectedItemData.category}</span>
                </div>
              )}
              <div className="mt-4 text-center">
                <h3 className="text-xl font-bold text-foreground">{selectedItemData.title}</h3>
                <p className="text-primary mt-1">{selectedItemData.category}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
