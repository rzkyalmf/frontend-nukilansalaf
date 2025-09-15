"use server";

import { cookies } from "next/headers";

import { ListResponse } from "@/types/api/responses";
import { Article } from "@/types/models/article";

export async function getArticles() {
  const token = (await cookies()).get("token")?.value;

  if (!token) {
    return null;
  }

  try {
    const res = await fetch(`${process.env.API_URL}/posts`, {
      method: "GET",
      cache: "no-store",
      headers: {
        Accept: "application/json",
        Autorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      throw new Error("HTTP error!");
    }

    const data = (await res.json()) as ListResponse<Article>;

    return data.data;
  } catch (error) {
    console.error("Create Article error:", error);
  }
}
