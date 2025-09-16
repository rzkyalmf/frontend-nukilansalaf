import Link from "next/link";

import { Button } from "@/components/ui/button";

export const ContributorsSection = () => {
  const contributors = [
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
  ];

  return (
    <section className="max-w-4xl space-y-16 py-36 text-center">
      <div className="space-y-4">
        <h1 className="text-5xl font-bold leading-tight">Kontributor</h1>
        <p className="text-lg text-gray-600">Ahli Ilmu yang berkontribusi dalam menyebarkan ilmu dunya & agama</p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {contributors.map((contributor, index) => (
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
        <Link href="/contributors">
          <p>Lihat Semua Kontributor</p>
        </Link>
      </Button>
    </section>
  );
};
