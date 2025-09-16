import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Input } from "@/components/ui/input";

export const Header = () => {
  return (
    <header className="fixed top-0 z-50 w-full py-6 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between">
          {/* Navigation Menu - Left Side */}
          <nav className="flex items-center">
            <div className="ml-6 hidden items-center space-x-8 md:flex">
              <Link href="/">
                <Image
                  src={"/images/logo3.png"}
                  alt="Nukilan Salaf Logo"
                  className="mx-auto w-5 transition-all duration-1000 ease-in-out hover:scale-110"
                  width={50}
                  height={50}
                />
              </Link>
              <Link href="/contributors">
                <span className="nuksaf-hover-primary">Kontributor</span>
              </Link>
              <Link href="/articles">
                <span className="nuksaf-hover-primary">Artikel</span>
              </Link>
              <Link href="/nukilan-salaf">
                <span className="nuksaf-hover-primary">Nukilan Salaf</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button className="ml-4 rounded-lg p-2 transition-colors hover:bg-gray-100 md:hidden">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </nav>

          {/* Search Form - Right Side */}
          <form className="relative max-w-xl flex-1" role="search">
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
      </div>
    </header>
  );
};
