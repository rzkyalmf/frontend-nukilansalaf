"use server";

import { redirect } from "next/navigation";

import { BaseResponse } from "@/types/api/responses";

export async function verifyRegisterAction(_state: unknown, formData: FormData) {
  const token = formData.get("token") as string;
  const code = formData.get("code") as string;

  try {
    const res = await fetch(`${process.env.API_URL}/verify`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token, code }),
  });

  const data = await res.json() as BaseResponse

  console.log (data);

  if (!res.ok) {
    return {
      status: data.status,
      message: data.message,
    };
  }

  await new Promise(resolve => setTimeout(resolve, 3000));

  redirect("/login");
    
 } catch (error) {
   console.error("Register Verify error:", error);
    
    return {
      status: "error",
      message: "Gagal terhubung ke server. Silakan coba lagi nanti.",
    };
  }
}
