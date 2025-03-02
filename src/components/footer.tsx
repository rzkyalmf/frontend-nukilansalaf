import { Mail, Phone, Send } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import FacebookIcon from "./icons/facebook";
import InstagramIcon from "./icons/instagram";
import YoutubeIcon from "./icons/youtube";

interface IFooterItem {
  href: string;
  label: string;
}

const belajarOnline: IFooterItem[] = [
  {
    href: "/#learn",
    label: "Belajar Islam Dari Dasar",
  },
  {
    href: "/#audio",
    label: "Belajar Qur'an Dari Dasar",
  },
  {
    href: "/#produk",
    label: "Belajar Bahasa Arab Dari Dasar",
  },
  {
    href: "/#produk",
    label: "Belajar Siroh Nabawi",
  },
  {
    href: "/#produk",
    label: "Belajar Thibbun Nabawi",
  },
];

const audioIslami: IFooterItem[] = [
  {
    href: "/#learn",
    label: "Audio Murattal",
  },
  {
    href: "/#audio",
    label: "Audio Kajian",
  },
];

const produkKami: IFooterItem[] = [
  {
    href: "/#learn",
    label: "Tanya Ustadz",
  },
  {
    href: "/#audio",
    label: "Umrah & Haji",
  },
  {
    href: "/#audio",
    label: "Kredit Syariah",
  },
  {
    href: "/#audio",
    label: "Parfum Arab",
  },
];

const helpLinks: IFooterItem[] = [
  {
    href: "/#syarat",
    label: "Syarat & Ketentuan",
  },
  {
    href: "/#kebijakan",
    label: "Kebijakan Privasi",
  },
  {
    href: "/#disclaimer",
    label: "Disclaimer",
  },
  {
    href: "/#hubungi",
    label: "Hubungi Kami",
  },
];

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#3c3c3c] px-10 py-20 text-white">
      <div className="mx-auto grid max-w-[1280px] grid-cols-2 items-start justify-between gap-8 md:flex md:flex-row">
        <div className="space-y-5">
          <Image
            src={"/images/logo.png"}
            alt="Logo perusahaan"
            width={100}
            height={100}
          />
          <div className="space-y-1">
            <h5 className="tracking-normal">
              إنا قوم أعزنا الله بالإسلام فلن نبتغي العزة بغيره
            </h5>
            <h6 className="text-sm text-gray-400">
              Menukil kalam Ulama, Qur&apos;an & Hadist
            </h6>
            <div className="flex space-x-4 pt-2">
              <Link href="#" className="text-white hover:text-gray-300">
                <FacebookIcon size={20} />
              </Link>
              <Link href="#" className="text-white hover:text-gray-300">
                <Send size={20} />
              </Link>
              <Link href="#" className="text-white hover:text-gray-300">
                <Phone size={20} />
              </Link>
              <Link href="#" className="text-white hover:text-gray-300">
                <InstagramIcon size={20} />
              </Link>
              <Link href="#" className="text-white hover:text-gray-300">
                <YoutubeIcon size={20} />
              </Link>
            </div>
          </div>
        </div>

        <div>
          <h6 className="pb-3">Belajar Online :</h6>
          {belajarOnline.map((link, index) => (
            <Link
              href={link.href}
              key={index}
              className="flex cursor-pointer pb-2 text-sm text-gray-400 hover:text-gray-300"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div>
          <h6 className="pb-3">Produk Kami :</h6>
          {produkKami.map((link, index) => (
            <Link
              href={link.href}
              key={index}
              className="flex cursor-pointer pb-2 text-sm text-gray-400 hover:text-gray-300"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div>
          <h6 className="pb-3">Audio Islami :</h6>
          {audioIslami.map((link, index) => (
            <Link
              href={link.href}
              key={index}
              className="flex cursor-pointer pb-2 text-sm text-gray-400 hover:text-gray-300"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div>
          <h6 className="pb-3">Panduan & Bantuan :</h6>
          {helpLinks.map((link) => (
            <Link
              href={link.href}
              key={link.href}
              className="flex cursor-pointer pb-2 text-sm text-gray-400 hover:text-gray-300"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div>
          <div className="pb-3">Kontak Kami :</div>
          <h5 className="flex gap-2 pb-2 text-sm text-gray-400">
            <Mail size={20} />
            nukilansalaf@gmail.com
          </h5>
          <h5 className="flex gap-2 pb-2 text-sm text-gray-400">
            <Phone size={20} />
            +62-851-7233-1302
          </h5>
        </div>
      </div>

      <div className="mx-auto mt-8 flex max-w-[1280px] items-center justify-between border-t border-white/20 pt-6">
        <h5 className="text-sm text-gray-400">
          Copyright © 2022-{new Date().getFullYear()} - All rights reserved
        </h5>
        <h5 className="flex gap-1 text-sm text-gray-400">
          Developed by <p className="text-gray-50">Rizky Alam</p>
        </h5>
      </div>
    </footer>
  );
};
