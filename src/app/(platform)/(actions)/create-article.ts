"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { sanitizeHTML } from "@/lib/sanitize";
import { BaseResponse } from "@/types/api/responses";

export async function articleAction(_state: unknown, formData: FormData) {
  const token = (await cookies()).get("token")?.value;

  if (!token) {
    return null;
  }

  const title = formData.get("title") as string;
  const content = formData.get("content") as string;

  const sanitize = sanitizeHTML(content);

  try {
    const res = await fetch(`${process.env.API_URL}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Autorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ title, content: sanitize }),
    });

    const data = (await res.json()) as BaseResponse;

    console.log(data);

    if (!res.ok) {
      return {
        status: data.status,
        message: data.message,
        title: title,
      };
    }
  } catch (error) {
    console.error("Create Article error:", error);

    return {
      status: "error",
      message: "Gagal terhubung ke server. Silakan coba lagi nanti.",
      title: title,
    };
  }

  redirect("/dashboard");
}
