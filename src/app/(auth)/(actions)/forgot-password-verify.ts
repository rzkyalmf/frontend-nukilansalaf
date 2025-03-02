"use server";

import { redirect } from "next/navigation";

import { SingleResponse } from "@/types/api/responses";
import { TokenData } from "@/types/models/auth";

export async function verifyForgotPasswordAction(
  _state: { status: string; message: string },
  formData: FormData) {
  const token = formData.get("token") as string;
  const code = formData.get("code") as string;

  const res = await fetch(`${process.env.API_URL}/verify-forgot-password`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token, code }),
  });

  const data = await res.json() as SingleResponse<TokenData>

  console.log (data);

  if (!res.ok) {
    return {
      status: "error",
      message: data.message,
    };
  }

  await new Promise(resolve => setTimeout(resolve, 3000));

  redirect (`/forgot-password/verify/reset?token=${token}`);
}
