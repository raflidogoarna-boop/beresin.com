"use client";

import { useState, useEffect } from "react";
import { Star } from "lucide-react";

interface Review {
  nama: string;
  rating: string;
  komentar: string;
}

export default function ReviewSection() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [nama, setNama] = useState("");
  const [rating, setRating] = useState(5);
  const [komentar, setKomentar] = useState("");
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);

  const API_URL = "https://sheetdb.io/api/v1/5x9cioybby7bf";

  // 1. Ambil data dari Google Sheets saat halaman dibuka
  const fetchReviews = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      if (Array.isArray(data)) {
        setReviews(data);
      }
    } catch (error) {
      console.error("Gagal mengambil data review:", error);
    } finally {
      setFetching(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  // 2. Fungsi Kirim Review ke Google Sheets
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!nama || !komentar) return alert("Isi nama dan komentar dulu ya Lek!");

    setLoading(true);
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: [
            {
              nama: nama,
              rating: rating.toString(),
              komentar: komentar,
            },
          ],
        }),
      });

      if (res.ok) {
        // Refresh data setelah berhasil kirim
        setNama("");
        setKomentar("");
        setRating(5);
        await fetchReviews();
        alert("Review berhasil dikirim! Mantap Lek!");
      }
    } catch (error) {
      alert("Waduh gagal kirim, coba lagi Lek!");
    } finally {
      setLoading(false);
    }
  };

  // 3. Logika Hitung Statistik Otomatis
  const totalProyek = reviews.length;
  const klienPuas = reviews.filter((r) => parseInt(r.rating) >= 4).length;
  const rataRating =
    totalProyek > 0
      ? (reviews.reduce((acc, curr) => acc + parseInt(curr.rating), 0) / totalProyek).toFixed(1)
      : "0.0";

  return (
    <section className="py-16 bg-background text-foreground container mx-auto px-4 max-w-5xl">
      {/* BAGIAN STATISTIK OTOMATIS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mb-16">
        <div className="p-6 bg-card border rounded-xl shadow-sm">
          <h3 className="text-4xl font-bold text-primary mb-2">
            {fetching ? "..." : totalProyek}
          </h3>
          <p className="text-muted-foreground font-medium">Proyek Selesai</p>
        </div>
        <div className="p-6 bg-card border rounded-xl shadow-sm">
          <h3 className="text-4xl font-bold text-primary mb-2">
            {fetching ? "..." : klienPuas}
          </h3>
          <p className="text-muted-foreground font-medium">Klien Puas</p>
        </div>
        <div className="p-6 bg-card border rounded-xl shadow-sm">
          <h3 className="text-4xl font-bold text-primary mb-2 flex items-center justify-center gap-2">
            {fetching ? "..." : rataRating} <Star className="w-8 h-8 fill-yellow-400 text-yellow-400" />
          </h3>
          <p className="text-muted-foreground font-medium">Rata-rata Rating</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* FORM INPUT REVIEW */}
        <div className="bg-card p-6 border rounded-xl shadow-sm h-fit">
          <h2 className="text-2xl font-bold mb-6">Berikan Penilaian Anda</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Nama Anda</label>
              <input
                type="text"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                className="w-full p-2 border rounded-md bg-transparent"
                placeholder="Masukkan nama Anda"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Rating Bintang</label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    className="focus:outline-none"
                  >
                    <Star
                      className={`w-8 h-8 ${
                        star <= rating
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Komentar / Ulasan</label>
              <textarea
                value={komentar}
                onChange={(e) => setKomentar(e.target.value)}
                className="w-full p-2 border rounded-md bg-transparent h-24 resize-none"
                placeholder="Tulis ulasan hasil desain kami di sini..."
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary text-primary-foreground font-semibold py-2 rounded-md hover:opacity-90 transition disabled:opacity-50"
            >
              {loading ? "Mengirim..." : "Kirim Review"}
            </button>
          </form>
        </div>

        {/* DAFTAR KOMENTAR KLIEN */}
        <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
          <h2 className="text-2xl font-bold mb-4">Ulasan Klien ({reviews.length})</h2>
          {fetching ? (
            <p className="text-muted-foreground">Memuat ulasan ustadz...</p>
          ) : reviews.length === 0 ? (
            <p className="text-muted-foreground">Belum ada ulasan. Jadi yang pertama memberi ulasan!</p>
          ) : (
            reviews.map((rev, index) => (
              <div key={index} className="p-4 bg-card border rounded-lg shadow-sm space-y-2">
                <div className="flex justify-between items-center">
                  <h4 className="font-semibold text-base">{rev.nama}</h4>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{rev.rating}</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{rev.komentar}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
