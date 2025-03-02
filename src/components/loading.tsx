"use client";

import { Loader2 } from "lucide-react";

export const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <Loader2 className="h-8 w-8 animate-spin text-primary" />
      <p className="mt-2 text-gray-500">Sedang memuat halaman...</p>
    </div>
  );
};
