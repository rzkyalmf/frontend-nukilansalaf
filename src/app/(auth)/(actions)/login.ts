"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { SingleResponse } from "@/types/api/responses";
import { TokenData } from "@/types/models/auth";

export async function loginAction(_state: unknown, formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  try {
    const res = await fetch(`${process.env.API_URL}/login`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json() as SingleResponse<TokenData>

  console.log (data);

  if (!res.ok) {
    return {
      status: data.status,
      message: data.message,
      email: email
    };
  }

  const cookie = await cookies();
  cookie.set("token", data.data.token, {
    httpOnly: true,
    // secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: 5 * 24 * 60 * 60,
  });
    
  await new Promise(resolve => setTimeout(resolve, 3000));

  redirect("/dashboard");
    
  } catch (error) {
   console.error("Login error:", error);
    
    return {
      status: "error",
      message: "Gagal terhubung ke server. Silakan coba lagi nanti.",
      email: email
    };
  }
  
}
