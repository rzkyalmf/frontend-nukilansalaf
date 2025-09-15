import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Sticky Header with Search */}
      <header className="fixed top-0 z-50 w-full py-10 backdrop-blur-sm">
        <div className="mx-auto px-4">
          <form className="relative mx-auto max-w-3xl" role="search">
            <label htmlFor="search-input" className="sr-only">
              Cari konten islami
            </label>
            <Input
              id="search-input"
              type="search"
              placeholder="Cari Artikel Islami..."
              className="w-full rounded-full py-6 pl-11 transition-shadow duration-300 hover:shadow-md focus:shadow-md"
              aria-label="Cari konten islami"
            />
            <Search className="input-icon" size={20} aria-hidden="true" />
          </form>
        </div>
      </header>

      {/* Main Content - Center */}
      <main className="my-40 flex flex-col items-center justify-center">
        <section className="max-w-2xl space-y-6 py-48 text-center">
          <Image
            src={"/images/logo3.png"}
            alt="Nukilan Salaf Logo"
            className="mx-auto w-40 transition-all duration-1000 ease-in-out hover:-translate-y-2 hover:scale-110"
            width={1000}
            height={1000}
            style={{
              animation: "float 6s ease-in-out infinite",
            }}
          />

          <h1 className="text-5xl font-bold leading-tight">
            Menukil kalam Ulama, <br /> Qur&apos;an & Hadist
          </h1>

          <p className="text-lg text-gray-600">
            Kumpulan nukilan dari para ulama, ayat Al-Qur&apos;an, dan hadist shahih untuk memperkaya khazanah ilmu agama
          </p>
        </section>

        {/* Section Artikel Terbaru */}
        <section className="max-w-7xl space-y-16 py-36 text-center">
          <div className="space-y-4">
            <h1 className="text-5xl font-bold leading-tight">Artikel Terbaru</h1>
            <p className="text-lg text-gray-600">Bacaan terbaru seputar Islam dan kehidupan</p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Adab Menuntut Ilmu dalam Islam",
                excerpt:
                  "Menuntut ilmu adalah kewajiban setiap muslim. Artikel ini membahas adab-adab yang harus dijaga saat menuntut ilmu.",
                date: "15 Januari 2024",
                category: "Akhlaq",
                readTime: "5 menit",
              },
              {
                title: "Hikmah di Balik Shalat Berjamaah",
                excerpt: "Shalat berjamaah memiliki banyak hikmah dan keutamaan. Mari kita pelajari lebih dalam tentang hal ini.",
                date: "12 Januari 2024",
                category: "Ibadah",
                readTime: "7 menit",
              },
              {
                title: "Mengelola Harta Sesuai Syariah",
                excerpt: "Islam mengajarkan cara mengelola harta yang baik dan berkah. Simak tips-tips praktisnya di sini.",
                date: "10 Januari 2024",
                category: "Muamalah",
                readTime: "6 menit",
              },
              {
                title: "Pentingnya Silaturahmi dalam Islam",
                excerpt: "Silaturahmi adalah salah satu amalan yang sangat dianjurkan dalam Islam. Ketahui manfaat dan caranya.",
                date: "8 Januari 2024",
                category: "Sosial",
                readTime: "4 menit",
              },
              {
                title: "Doa-doa Harian yang Mustajab",
                excerpt: "Kumpulan doa-doa harian yang dianjurkan Rasulullah SAW untuk diamalkan setiap hari.",
                date: "5 Januari 2024",
                category: "Doa",
                readTime: "8 menit",
              },
              {
                title: "Memahami Konsep Tawakal",
                excerpt: "Tawakal bukan berarti pasrah tanpa usaha. Mari pahami konsep tawakal yang benar dalam Islam.",
                date: "3 Januari 2024",
                category: "Aqidah",
                readTime: "6 menit",
              },
            ].map((article, index) => (
              <article
                key={index}
                className="flex min-h-[280px] cursor-pointer flex-col items-center justify-center rounded-2xl border border-gray-200 bg-white p-7 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="space-y-5">
                  {/* Category Badge */}
                  <div className="flex items-center justify-between">
                    <small className="rounded-full border px-3 py-1">{article.category}</small>
                    <small>{article.readTime}</small>
                  </div>

                  {/* Article Title */}
                  <h2>{article.title}</h2>

                  {/* Article Excerpt */}
                  <p>{article.excerpt}</p>

                  {/* Article Meta */}
                  <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                    <small>{article.date}</small>
                    <small className="hover-secondary">Baca Selengkapnya →</small>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <Button variant={"outline"}>
            <Link href="#">
              <p>Tampilkan Lagi</p>
            </Link>
          </Button>
        </section>

        {/* Contributors Section */}
        <section className="max-w-4xl space-y-16 py-36 text-center">
          <div className="space-y-4">
            <h1 className="text-5xl font-bold leading-tight">Kontributor</h1>
            <p className="text-lg text-gray-600">Ahli Ilmu yang berkontribusi dalam menyebarkan ilmu dunya & agama</p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Mock Data Contributors */}
            {[
              {
                name: "Ustadz Abdurrahman Dani",
                bio: "Pengajar Ilmu Syariah",
              },
              {
                name: "Ustadz Ahmad Fadhil",
                bio: "Ahli Hadist & Penulis Kitab",
              },
              {
                name: "Dr. Muhammad Salim",
                bio: "Dosen Tafsir Al-Qur'an",
              },
              {
                name: "Ustadz Ibrahim Hasan",
                bio: "Dai & Pembimbing Rohani",
              },
              {
                name: "Prof. Abdullah Rahman",
                bio: "Pakar Fiqh & Ushul Fiqh",
              },
              {
                name: "Ustadz Yusuf Mansur",
                bio: "Motivator Islami & Pendakwah",
              },
            ].map((contributor, index) => (
              <div
                key={index}
                className={`rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md contributor-card-${(index + 1).toString()}`}
              >
                <div className="space-y-3">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#C2B59B] to-[#746C5B]">
                    <span className="text-xl font-bold text-white">{contributor.name.split(" ")[1]?.[0] || contributor.name[0]}</span>
                  </div>
                  <div>
                    <h5>{contributor.name}</h5>
                    <p>{contributor.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Button variant={"outline"}>
            <Link href="#">
              <p>Lihat Semua Kontributor</p>
            </Link>
          </Button>
        </section>
      </main>

      {/* Sticky Footer */}
      <footer className="fixed bottom-0 z-50 w-full py-7 backdrop-blur-sm">
        <div className="mx-auto px-4 text-center">
          <small className="text-gray-600">&copy; 2024 Nukilan Salaf. Semua hak cipta dilindungi.</small>
        </div>
      </footer>
    </div>
  );
}
