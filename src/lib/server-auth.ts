import { cookies } from "next/headers";

import { SingleResponse } from "@/types/api/responses";
import { AuthResponse } from "@/types/models/auth";

export default async function serverAuth() {
  const token = (await cookies()).get("token")?.value;

  if (!token) {
    return null;
  }

  const res = await fetch(`${process.env.API_URL}/me`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    return null;
  }

  const payload = (await res.json()) as SingleResponse<AuthResponse>;
  
  return payload;
}
