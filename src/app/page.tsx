import { Search } from "lucide-react";
import Image from "next/image";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <main>
      <Header />
      <div>
        <div className="mx-auto my-80 flex flex-col items-center justify-center gap-3">
          <Image
            src={"/images/logo3.png"}
            alt="logo"
            className="w-36 transition-all duration-1000 ease-in-out hover:-translate-y-2 hover:scale-110"
            width={1000}
            height={1000}
          />

          <div className="space-y-1 text-center">
            <h1 className="font-philosopher gradient-ns">
              Menukil kalam Ulama, <br /> Qur&apos;an & Hadist
            </h1>
            <h4 className="font-light text-gray-500">
              {/* &quot;Menukil kalam Ulama, Qur&apos;an & Hadist&quot; */}
            </h4>
          </div>

          <div className="relative w-2/5 py-8">
            <Input
              type="text"
              placeholder="Search Content..."
              className="w-full rounded-full py-7 pl-14 text-lg font-light transition-shadow duration-500 placeholder:text-gray-400 hover:shadow-lg focus:shadow-md"
            />
            <Search
              className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 transform text-[#746C5B]"
              size={21}
            />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
