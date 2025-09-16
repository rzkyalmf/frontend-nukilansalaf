import Link from "next/link";

import { Button } from "@/components/ui/button";

export const ArticlesSection = () => {
  const articles = [
    {
      title: "Adab Menuntut Ilmu dalam Islam",
      excerpt: "Menuntut ilmu adalah kewajiban setiap muslim. Artikel ini membahas adab-adab yang harus dijaga saat menuntut ilmu.",
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
  ];

  return (
    <section className="max-w-7xl space-y-16 py-36 text-center">
      <div className="space-y-4">
        <h1 className="text-5xl font-bold leading-tight">Artikel Terbaru</h1>
        <p className="text-lg text-gray-600">Bacaan terbaru seputar Islam dan kehidupan</p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article, index) => (
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
                <small className="nuksaf-hover-secondary">Baca Selengkapnya →</small>
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
  );
};
