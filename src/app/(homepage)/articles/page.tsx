import { BookOpen, Clock, Flame } from "lucide-react";
import Link from "next/link";

import FeaturedCard from "@/components/FeaturedCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Page() {
  const articles = [
    {
      id: 1,
      title: "Adab Menuntut Ilmu dalam Islam",
      excerpt: "Menuntut ilmu adalah kewajiban setiap muslim. Artikel ini membahas adab-adab yang harus dijaga saat menuntut ilmu.",
      date: "15 Januari 2024",
      category: "Akhlaq",
      readTime: "5 menit",
      views: 1250,
      author: "Ustadz Abdurahman Dani",
      slug: "adab-menuntut-ilmu-dalam-islam",
      featured: true,
    },
    {
      id: 2,
      title: "Hikmah di Balik Shalat Berjamaah",
      excerpt: "Shalat berjamaah memiliki banyak hikmah dan keutamaan. Mari kita pelajari lebih dalam tentang hal ini.",
      date: "12 Januari 2024",
      category: "Ibadah",
      readTime: "7 menit",
      views: 2980,
      author: "Dr. Ahmad Fadhil",
      slug: "hikmah-di-balik-shalat-berjamaah",
    },
    {
      id: 3,
      title: "Mengelola Harta Sesuai Syariah",
      excerpt: "Islam mengajarkan cara mengelola harta yang baik dan berkah. Simak tips-tips praktisnya di sini.",
      date: "10 Januari 2024",
      category: "Muamalah",
      readTime: "6 menit",
      views: 1450,
      author: "Ustadz Abdurahman Dani",
      slug: "mengelola-harta-sesuai-syariah",
    },
    {
      id: 4,
      title: "Pentingnya Silaturahmi dalam Islam",
      excerpt: "Silaturahmi adalah salah satu amalan yang sangat dianjurkan dalam Islam. Ketahui manfaat dan caranya.",
      date: "8 Januari 2024",
      category: "Sosial",
      readTime: "4 menit",
      views: 750,
      author: "Ustadzah Siti Khadijah",
      slug: "pentingnya-silaturahmi-dalam-islam",
    },
    {
      id: 5,
      title: "Doa-doa Harian yang Mustajab",
      excerpt: "Kumpulan doa-doa harian yang dianjurkan Rasulullah SAW untuk diamalkan setiap hari.",
      date: "5 Januari 2024",
      category: "Doa",
      readTime: "8 menit",
      views: 3100,
      author: "Dr. Ahmad Fadhil",
      slug: "doa-doa-harian-yang-mustajab",
    },
    {
      id: 6,
      title: "Memahami Konsep Tawakal",
      excerpt: "Tawakal bukan berarti pasrah tanpa usaha. Mari pahami konsep tawakal yang benar dalam Islam.",
      date: "3 Januari 2024",
      category: "Aqidah",
      readTime: "6 menit",
      views: 1680,
      author: "Ustadz Abdurahman Dani",
      slug: "memahami-konsep-tawakal",
    },
    {
      id: 7,
      title: "Keutamaan Membaca Al-Quran",
      excerpt: "Al-Quran adalah kitab suci yang penuh berkah. Pelajari keutamaan dan adab membaca Al-Quran yang benar.",
      date: "1 Januari 2024",
      category: "Al-Quran",
      readTime: "5 menit",
      views: 2320,
      author: "Dr. Ahmad Fadhil",
      slug: "keutamaan-membaca-al-quran",
    },
    {
      id: 8,
      title: "Etika Bermuamalah dalam Islam",
      excerpt: "Islam mengatur segala aspek kehidupan termasuk dalam bermuamalah. Ketahui etika yang harus dijaga.",
      date: "28 Desember 2023",
      category: "Muamalah",
      readTime: "7 menit",
      views: 890,
      author: "Ustadzah Siti Khadijah",
      slug: "etika-bermuamalah-dalam-islam",
    },
    {
      id: 9,
      title: "Hikmah Puasa Ramadhan",
      excerpt: "Puasa Ramadhan bukan hanya menahan lapar dan haus. Pelajari hikmah mendalam di balik ibadah mulia ini.",
      date: "25 Desember 2023",
      category: "Ibadah",
      readTime: "6 menit",
      views: 1850,
      author: "Ustadz Abdurahman Dani",
      slug: "hikmah-puasa-ramadhan",
    },
  ];

  const _categories = ["Akhlaq", "Ibadah", "Muamalah", "Sosial", "Doa", "Aqidah", "Al-Quran"];
  const featuredArticle = articles.find((article) => article.featured);
  const latestArticles = articles.slice(0, 4);
  const _popularArticles = articles.sort((a, b) => b.views - a.views).slice(0, 5);

  return (
    <div className="min-h-screen space-y-10">
      {/* Header Section */}
      <section className="mx-auto max-w-xl space-y-3 text-center">
        <h1 className="text-6xl font-bold leading-tight">Portal Artikel</h1>
        <p className="text-lg text-gray-600">
          Kumpulan artikel pilihan seputar Islam, kehidupan, dan pengembangan diri dari para ahli
        </p>
      </section>

      <div className="flex max-w-7xl gap-5 rounded-xl p-6">
        {/* Main Content */}
        <div className="w-[685px] space-y-12">
          {/* Featured Article */}
          {featuredArticle && (
            <section className="space-y-5">
              <h2>Artikel Unggulan</h2>

              <article className="cursor-pointer overflow-hidden rounded-3xl border border-gray-200 bg-gray-50 shadow-sm transition-all duration-300 hover:shadow-lg">
                {/* Featured Image Placeholder */}
                <FeaturedCard title={featuredArticle.title} size="large" />

                <div className="space-y-5 p-6">
                  <div className="flex items-center gap-4">
                    <Badge>{featuredArticle.category}</Badge>
                    <div className="flex items-center gap-1">
                      <Clock size={14} className="text-gray-600" />
                      <small className="text-gray-600">{featuredArticle.readTime}</small>
                    </div>
                    <div className="flex items-center gap-1">
                      <Flame className="nuksaf-text-danger" size={14} />
                      <small className="nuksaf-text-danger font-medium">{featuredArticle.views.toLocaleString()}</small>
                    </div>
                  </div>

                  <div>
                    <h4>{featuredArticle.title}</h4>
                    <p>{featuredArticle.excerpt}</p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="nuksaf-bg-primary flex h-11 w-11 items-center justify-center rounded-full">
                        <small className="font-medium text-white">
                          {featuredArticle.author
                            .split(" ")
                            .map((name) => name[0])
                            .join("")
                            .slice(0, 2)}
                        </small>
                      </div>
                      <div className="flex flex-col gap-1">
                        <h6 className="text-sm font-normal text-gray-600">{featuredArticle.author}</h6>
                        <small className="text-xs">{featuredArticle.date}</small>
                      </div>
                    </div>
                    <span className="nuksaf-hover-primary nuksaf-text-secondary font-medium transition-colors">
                      Baca selengkapnya →
                    </span>
                  </div>
                </div>
              </article>
            </section>
          )}

          {/* Latest Articles */}
          <section className="space-y-5">
            <div className="mb-6 flex items-center gap-2">
              <h2>Artikel Terbaru</h2>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {latestArticles.map((article) => (
                <Link href={`/articles/${article.slug}`} key={article.id}>
                  <article className="cursor-pointer rounded-xl border bg-gray-50 p-6 shadow-sm transition-all duration-300 hover:shadow-lg">
                    <div className="space-y-5">
                      <div className="flex items-center gap-3 text-sm text-gray-500">
                        <Badge>{article.category}</Badge>
                        <div className="flex items-center gap-1">
                          <Clock size={12} className="text-gray-600" />
                          <small className="text-gray-600">{article.readTime}</small>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h4>{article.title}</h4>
                        <p>{article.excerpt}</p>
                      </div>

                      <div className="flex items-center justify-between border-t border-gray-200 pt-3">
                        <small>{article.date}</small>
                        <div className="flex items-center gap-1">
                          <Flame className="nuksaf-text-danger" size={14} />
                          <small className="nuksaf-text-danger font-medium">{article.views.toLocaleString()}</small>
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="sticky top-32 w-[595px] space-y-8 self-start pl-10">
          {/* Popular Articles */}
          <section className="space-y-4 rounded-xl border bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2">
              <h3>Artikel Terpopuler</h3>
            </div>

            <div className="space-y-6">
              {_popularArticles.map((article, index) => (
                <Link href={`/articles/${article.slug}`} key={article.id}>
                  <article className="mb-4 cursor-pointer gap-4 rounded-lg p-2 transition-colors hover:bg-gray-50">
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                        <small className="nuksaf-text-secondary font-bold">{index + 1}</small>
                      </div>
                      <div>
                        <h6>{article.title}</h6>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <small>{article.category}</small>
                          <span>•</span>
                          <div className="flex items-center gap-1">
                            <Flame className="nuksaf-text-danger" size={12} />
                            <small className="nuksaf-text-danger">{article.views.toLocaleString()}</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </section>

          {/* Categories */}
          <section className="space-y-4 rounded-xl border bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2">
              <h3>Kategori</h3>
            </div>

            <div className="space-y-2">
              {_categories.map((category) => {
                const count = articles.filter((article) => article.category === category).length;
                return (
                  <Link href={`/articles/category/${category.toLowerCase()}`} key={category}>
                    <div className="group flex cursor-pointer items-center justify-between rounded-lg p-2 transition-colors hover:bg-gray-50">
                      <div className="flex items-center gap-2">
                        <span>•</span>
                        <h6>{category}</h6>
                      </div>
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-gray-100">
                        <small className="nuksaf-text-secondary font-bold">{count}</small>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        </div>
      </div>

      {/* Load More Section */}
      <section className="border-t bg-white py-8">
        <div className="text-center">
          <Button variant="outline" className="rounded-full px-8">
            <BookOpen className="mr-2 h-4 w-4" />
            Muat Lebih Banyak Artikel
          </Button>
        </div>
      </section>
    </div>
  );
}
