import React from "react";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Header />

      <main className="my-40 flex flex-col items-center justify-center">{children}</main>

      <Footer />
    </div>
  );
}
