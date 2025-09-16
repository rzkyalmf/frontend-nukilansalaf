import Image from "next/image";

export const HeroSection = () => {
  return (
    <section className="max-w-2xl space-y-6 text-center">
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

      <h1 className="text-6xl font-bold leading-tight">
        Menukil kalam Ulama, <br /> Qur&apos;an & Hadist
      </h1>

      <p className="text-lg text-gray-600">
        Kumpulan nukilan dari para ulama, ayat Al-Qur&apos;an, dan hadist shahih untuk memperkaya khazanah ilmu agama
      </p>
    </section>
  );
};
