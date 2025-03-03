"use server";

import { redirect } from "next/navigation";

import { SingleResponse } from "@/types/api/responses";
import { TokenData } from "@/types/models/auth";

export async function registerAction(_state: unknown, formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;
  const confirmPassword = formData.get("confirmPassword") as string;

  if (password !== confirmPassword) {
    return {
      status: "error",
      message: "Password tidak sama",
      name: name,
      email: email,
      username: username,
    };
  }

  try {
    const res = await fetch(`${process.env.API_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, username, email, password }),
  });

  const data = await res.json() as SingleResponse<TokenData>

  console.log (data);

  if (!res.ok) {
    return {
      status: data.status,
      message: data.message,
      name: name,
      email: email,
      username: username,
    };
  }

  const token = data.data.token;

  await new Promise(resolve => setTimeout(resolve, 3000));

  redirect (`/register/verify?token=${token}`);
 } catch (error) {
   console.error("Register error:", error);
    
    return {
      status: "error",
      message: "Gagal terhubung ke server. Silakan coba lagi nanti.",
      name: name,
      email: email,
      username: username,
    };
  }
  
}
