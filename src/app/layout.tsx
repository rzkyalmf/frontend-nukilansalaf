import "@/styles/globals.css";

import type { Metadata } from "next";
import { Inter, Philosopher } from "next/font/google";

import { TooltipProvider } from "@/components/ui/tooltip";

const inter = Inter({ subsets: ["latin"] });
const philosopher = Philosopher({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-philosopher",
});

export const metadata: Metadata = {
  title: "Nukilan Salaf",
  description: "Menukil kalam Ulama, Qur'an & Hadist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={philosopher.variable}>
      <body className={`${inter.className} font-sans`}>
        <TooltipProvider>{children} </TooltipProvider>
      </body>
    </html>
  );
}
