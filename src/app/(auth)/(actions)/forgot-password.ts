"use server";

import { redirect } from "next/navigation";

import { SingleResponse } from "@/types/api/responses";
import { TokenData } from "@/types/models/auth";

export async function forgotPasswordAction(_state: unknown, formData: FormData) {
  const email = formData.get("email") as string;

  const res = await fetch(`${process.env.API_URL}/forgot-password`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
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
    
  const token = data.data.token;

  await new Promise(resolve => setTimeout(resolve, 3000));

  redirect (`/forgot-password/verify?token=${token}`);
}
