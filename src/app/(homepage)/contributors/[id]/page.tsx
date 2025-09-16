import { ArrowLeft, BookOpen, Calendar, GraduationCap, Mail, Users } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

interface Article {
  title: string;
  date: string;
  category: string;
  views: number;
}

interface Contact {
  email: string;
  instagram: string;
}

interface Contributor {
  id: number;
  name: string;
  bio: string;
  description: string;
  longDescription: string;
  expertise: string[];
  articles: number;
  followers: number;
  joinDate: string;
  education: string;
  contact: Contact;
  achievements: string[];
  recentArticles: Article[];
}

interface ContributorDetailProps {
  params: {
    id: string;
  };
}

export default function ContributorDetailPage({ params }: ContributorDetailProps) {
  // Mock data - in real app, this would come from API/database
  const contributorData: Record<string, Contributor | undefined> = {
    "1": {
      id: 1,
      name: "Ustadz Abdurahman Dani",
      bio: "Pendakwah dan Pengajar Ilmu Syariah",
      description: "Ustadz Abdurahman Dani adalah seorang pendakwah yang telah berpengalaman lebih dari 15 tahun dalam bidang dakwah Islam. Beliau menguasai berbagai disiplin ilmu syariah termasuk fiqh, aqidah, dan akhlaq. Saat ini aktif mengajar di berbagai pesantren dan masjid di seluruh Indonesia.",
      longDescription: "Perjalanan dakwah Ustadz Abdurahman Dani dimulai sejak beliau menyelesaikan pendidikan S2 di Universitas Al-Azhar, Mesir. Dengan bekal ilmu yang mendalam dan pengalaman yang luas, beliau telah memberikan pencerahan kepada ribuan umat Islam di berbagai daerah. Metode dakwah beliau yang santun namun tegas, serta kemampuan menyampaikan materi yang kompleks dengan bahasa yang mudah dipahami, membuat beliau sangat dihormati di kalangan ulama dan masyarakat umum.",
      expertise: ["Fiqh", "Aqidah", "Akhlaq", "Tafsir"],
      articles: 45,
      followers: 12500,
      joinDate: "Januari 2020",
      education: "S2 Syariah - Universitas Al-Azhar",
      contact: {
        email: "ustadz.dani@nuksaf.com",
        instagram: "@ustadz_dani_official"
      },
      achievements: [
        "Penulis 8 buku tentang fiqh dan akhlaq",
        "Pembicara di 200+ kajian dan seminar",
        "Pengajar di 15 pesantren di Indonesia",
        "Konsultan syariah untuk berbagai lembaga"
      ],
      recentArticles: [
        {
          title: "Adab Menuntut Ilmu dalam Islam",
          date: "15 Januari 2024",
          category: "Akhlaq",
          views: 2500
        },
        {
          title: "Pentingnya Shalat Berjamaah",
          date: "10 Januari 2024",
          category: "Ibadah",
          views: 1800
        },
        {
          title: "Memahami Hakikat Taqwa",
          date: "5 Januari 2024",
          category: "Aqidah",
          views: 3200
        }
      ]
    },
    "2": {
      id: 2,
      name: "Dr. Ahmad Fadhil",
      bio: "Pakar Tafsir dan Hadits",
      description: "Dr. Ahmad Fadhil adalah doktor dalam bidang Tafsir dan Hadits dari Universitas Islam Madinah. Beliau telah menulis lebih dari 20 buku tentang tafsir Al-Quran dan ilmu hadits.",
      longDescription: "Dr. Ahmad Fadhil menyelesaikan pendidikan doktoralnya di Universitas Islam Madinah dengan predikat summa cum laude. Disertasinya tentang metodologi tafsir kontemporer mendapat pengakuan internasional. Beliau aktif sebagai peneliti dan telah menerbitkan puluhan jurnal ilmiah di berbagai universitas Islam terkemuka.",
      expertise: ["Tafsir Al-Quran", "Ilmu Hadits", "Ulum Al-Quran", "Bahasa Arab"],
      articles: 67,
      followers: 18200,
      joinDate: "Maret 2019",
      education: "PhD Tafsir - Universitas Islam Madinah",
      contact: {
        email: "dr.fadhil@nuksaf.com",
        instagram: "@dr_ahmad_fadhil"
      },
      achievements: [
        "Penulis 20+ buku tafsir dan hadits",
        "Dosen tamu di 10 universitas internasional",
        "Peneliti senior di Islamic Research Institute",
        "Penerima penghargaan Best Islamic Scholar 2023"
      ],
      recentArticles: [
        {
          title: "Metodologi Tafsir Modern",
          date: "12 Januari 2024",
          category: "Tafsir",
          views: 4200
        },
        {
          title: "Memahami Hadits Sahih",
          date: "8 Januari 2024",
          category: "Hadits",
          views: 3100
        }
      ]
    }
  };

  const contributor = contributorData[params.id];

  if (!contributor) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Kontributor Tidak Ditemukan</h1>
          <Link href="/contributors">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Kembali ke Daftar Kontributor
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <Link href="/contributors">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Kembali ke Daftar Kontributor
            </Button>
          </Link>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Sidebar - Profile Info */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm sticky top-8">
              {/* Avatar */}
              <div className="text-center mb-6">
                <div className="mx-auto h-32 w-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 mb-4"></div>
                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                  {contributor.name}
                </h1>
                <p className="text-blue-600 font-medium text-lg">{contributor.bio}</p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <BookOpen className="w-6 h-6 mx-auto text-blue-600 mb-2" />
                  <div className="text-2xl font-bold text-gray-900">
                    {contributor.articles}
                  </div>
                  <div className="text-sm text-gray-600">Artikel</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Users className="w-6 h-6 mx-auto text-blue-600 mb-2" />
                  <div className="text-2xl font-bold text-gray-900">
                    {contributor.followers.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-600">Pengikut</div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="w-4 h-4 mr-3" />
                  <span>Bergabung {contributor.joinDate}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <GraduationCap className="w-4 h-4 mr-3" />
                  <span>{contributor.education}</span>
                </div>
              </div>

              {/* Contact Buttons */}
              <div className="space-y-3">
                <Button className="w-full" size="lg">
                  <Mail className="w-4 h-4 mr-2" />
                  Kirim Email
                </Button>
                <Button className="w-full" variant="outline" size="lg">
                  <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  Follow Instagram
                </Button>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Section */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Tentang</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>{contributor.description}</p>
                <p>{contributor.longDescription}</p>
              </div>
            </div>

            {/* Expertise */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Keahlian</h2>
              <div className="flex flex-wrap gap-3">
                {contributor.expertise.map((skill, index) => (
                  <span
                    key={index}
                    className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-4 py-2 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Pencapaian</h2>
              <ul className="space-y-3">
                {contributor.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent Articles */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Artikel Terbaru</h2>
                <Button variant="outline" size="sm">
                  Lihat Semua
                </Button>
              </div>
              <div className="space-y-4">
                {contributor.recentArticles.map((article, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors cursor-pointer">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-gray-900 hover:text-blue-600">
                        {article.title}
                      </h3>
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                        {article.category}
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-sm text-gray-500">
                      <span>{article.date}</span>
                      <span>{article.views.toLocaleString()} views</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}