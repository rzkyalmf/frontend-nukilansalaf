import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Page() {
  const contributors = [
    {
      id: 1,
      name: "Ustadz Abdurahman Dani",
      bio: "Pendakwah dan Pengajar Ilmu Syariah",
      description:
        "Ustadz Abdurahman Dani adalah seorang pendakwah yang telah berpengalaman lebih dari 15 tahun dalam bidang dakwah Islam. Beliau menguasai berbagai disiplin ilmu syariah termasuk fiqh, aqidah, dan akhlaq. Saat ini aktif mengajar di berbagai pesantren dan masjid di seluruh Indonesia.",
      expertise: ["Fiqh", "Aqidah", "Akhlaq", "Tafsir"],
      articles: 45,
      followers: 12500,
      joinDate: "Januari 2020",
      education: "S2 Syariah - Universitas Al-Azhar",
      contact: {
        email: "ustadz.dani@nuksaf.com",
        instagram: "@ustadz_dani_official",
      },
    },
    {
      id: 2,
      name: "Dr. Ahmad Fadhil",
      bio: "Pakar Tafsir dan Hadits",
      description:
        "Dr. Ahmad Fadhil adalah doktor dalam bidang Tafsir dan Hadits dari Universitas Islam Madinah. Beliau telah menulis lebih dari 20 buku tentang tafsir Al-Quran dan ilmu hadits. Aktif sebagai dosen dan peneliti di berbagai universitas Islam terkemuka.",
      expertise: ["Tafsir Al-Quran", "Ilmu Hadits", "Ulum Al-Quran", "Bahasa Arab"],
      articles: 67,
      followers: 18200,
      joinDate: "Maret 2019",
      education: "PhD Tafsir - Universitas Islam Madinah",
      contact: {
        email: "dr.fadhil@nuksaf.com",
        instagram: "@dr_ahmad_fadhil",
      },
    },
    {
      id: 3,
      name: "Ustadzah Siti Khadijah",
      bio: "Pengajar Fiqh Wanita",
      description:
        "Ustadzah Siti Khadijah adalah pakar dalam bidang fiqh wanita dan keluarga Islam. Beliau telah mengabdikan hidupnya untuk mendidik muslimah tentang hak dan kewajiban mereka dalam Islam. Aktif memberikan kajian khusus untuk muslimah di berbagai daerah.",
      expertise: ["Fiqh Wanita", "Keluarga Islam", "Pendidikan Anak", "Akhlaq Muslimah"],
      articles: 38,
      followers: 9800,
      joinDate: "Juni 2020",
      education: "S2 Fiqh - IAIN Jakarta",
      contact: {
        email: "ustadzah.khadijah@nuksaf.com",
        instagram: "@ustadzah_khadijah",
      },
    },
    {
      id: 4,
      name: "Muhammad Rizki",
      bio: "Developer dan Content Creator",
      description:
        "Muhammad Rizki adalah seorang developer yang juga aktif sebagai content creator di bidang teknologi dan Islam. Beliau menggabungkan keahlian teknologi dengan dakwah digital untuk menyebarkan ilmu Islam melalui platform digital modern.",
      expertise: ["Web Development", "Content Creation", "Digital Marketing", "Dakwah Digital"],
      articles: 29,
      followers: 7500,
      joinDate: "September 2021",
      education: "S1 Teknik Informatika - ITB",
      contact: {
        email: "rizki@nuksaf.com",
        instagram: "@rizki_dev_muslim",
      },
    },
    {
      id: 5,
      name: "Fatimah Az-Zahra",
      bio: "Editor dan Penulis Artikel",
      description:
        "Fatimah Az-Zahra adalah seorang editor profesional dan penulis artikel Islam. Beliau memiliki keahlian dalam menulis konten yang mudah dipahami dan menarik untuk berbagai kalangan. Aktif menulis di berbagai media Islam terkemuka.",
      expertise: ["Content Writing", "Editing", "Jurnalistik Islam", "Media Digital"],
      articles: 52,
      followers: 6200,
      joinDate: "Februari 2021",
      education: "S1 Jurnalistik - Universitas Indonesia",
      contact: {
        email: "fatimah@nuksaf.com",
        instagram: "@fatimah_writer",
      },
    },
    {
      id: 6,
      name: "Abdullah Al-Farisi",
      bio: "Desainer dan Multimedia",
      description:
        "Abdullah Al-Farisi adalah seorang desainer grafis dan multimedia specialist yang mengkhususkan diri dalam konten visual Islam. Beliau menciptakan desain-desain yang indah dan bermakna untuk mendukung dakwah Islam di era digital.",
      expertise: ["Graphic Design", "Video Editing", "Animation", "Visual Branding"],
      articles: 21,
      followers: 4800,
      joinDate: "November 2021",
      education: "S1 Desain Komunikasi Visual - ISI Yogyakarta",
      contact: {
        email: "abdullah@nuksaf.com",
        instagram: "@abdullah_designer",
      },
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="relative mx-auto max-w-2xl space-y-5 px-4 text-center">
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
          <h1 className="text-6xl font-bold leading-tight">Kontributor Kami</h1>
          <p className="text-lg text-gray-600">
            Bertemu dengan para ahli ilmu yang berdedikasi menyebarkan pengetahuan Islam dan kehidupan
          </p>

          {/* Search Bar */}
          <div className="relative">
            <Search className="input-icon" size={18} />
            <Input
              type="search"
              placeholder="Cari kontributor..."
              className="rounded-full border-gray-200 py-6 pl-10 focus:border-[#C2B59B] focus:ring-[#C2B59B]"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-b-2 py-12">
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 px-4 md:grid-cols-3">
          <div className="text-center">
            <h1>{contributors.reduce((sum, c) => sum + c.articles, 0)}</h1>
            <p>Total Artikel</p>
          </div>
          <div className="text-center">
            <h1>{contributors.length}</h1>
            <p>Total Kontributor</p>
          </div>
          <div className="text-center">
            <h1>{contributors.reduce((sum, c) => sum + c.followers, 0).toLocaleString()}</h1>
            <p>Total View</p>
          </div>
        </div>
      </section>

      {/* Contributors Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {contributors.map((contributor) => (
              <div
                key={contributor.id}
                className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Card Header */}
                <div className="bg-gray-50 p-6 text-center">
                  <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full shadow-lg">
                    <span className="gradient-ns text-2xl font-bold text-white">
                      {contributor.name.split(" ")[1]?.[0] || contributor.name[0]}
                    </span>
                  </div>
                  <h3>{contributor.name}</h3>
                  <p>{contributor.bio}</p>
                </div>

                {/* Card Body */}
                <div className="space-y-4 p-6">
                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-lg bg-gray-50 p-3 text-center">
                      <h4 className="font-bold">{contributor.articles}</h4>
                      <small className="text-gray-600">Artikel</small>
                    </div>

                    <div className="rounded-lg bg-gray-50 p-3 text-center">
                      <h4 className="font-bold">{Math.floor(contributor.followers * 2.5).toLocaleString()}</h4>
                      <small className="text-gray-600">Views</small>
                    </div>
                  </div>

                  {/* Description */}
                  <small className="line-clamp-3 text-gray-600">{contributor.description}</small>
                </div>

                {/* Card Footer */}
                <div className="border-t p-4">
                  <Link href={`/contributors/${contributor.id.toString()}`}>
                    <Button variant={"outline"} className="w-full">
                      Lihat Profil Lengkap
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
