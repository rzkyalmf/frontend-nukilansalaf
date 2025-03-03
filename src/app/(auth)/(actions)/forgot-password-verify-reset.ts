"use server";

import { redirect } from "next/navigation";

import { BaseResponse } from "@/types/api/responses";

export async function resetPasswordAction(_state: unknown, formData: FormData) {
  const token = formData.get("token") as string;
  const password = formData.get("password") as string;
  const confirmPassword = formData.get("confirmPassword") as string;

  if (password !== confirmPassword) {
    return {
      status: "error",
      message: "Password tidak sama",
    };
  }

  try {
    const res = await fetch(`${process.env.API_URL}/reset-password`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token, password }),
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
   console.error("Forgot Password Reset error:", error);
    
    return {
      status: "error",
      message: "Gagal terhubung ke server. Silakan coba lagi nanti.",
    };
  }
  
}
