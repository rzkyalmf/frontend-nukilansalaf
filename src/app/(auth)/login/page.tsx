"use client";

import { CircleX, Lock, Mail } from "lucide-react";
import Link from "next/link";
import { useActionState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { loginAction } from "./action";

export default function Page() {
  const [state, formAction, pending] = useActionState(loginAction, {
    status: "",
    message: "",
    email: "",
  });

  return (
    <>
      <section className="flex items-center justify-between">
        <div>
          <h1>Masuk</h1>
          <p>Selamat Datang Kembali!</p>
        </div>
        <div>
          <Link href="/">
            <span className="hover-primary">
              <CircleX size={22} strokeWidth={1.4} />
            </span>
          </Link>
        </div>
      </section>

      <form action={formAction} className="space-y-2">
        <div className="relative">
          <Mail className="input-icon" size={20} />
          <Input className="pl-11" name="email" placeholder="Email" defaultValue={state.email} />
        </div>

        <div className="relative">
          <Lock className="input-icon" size={20} />
          <Input className="pl-11" name="password" placeholder="Password" type="password" />
        </div>

        <Button className="w-full" disabled={pending}>
          {pending ? "Sedang masuk..." : "Masuk"}
        </Button>

        <div>
          <Link href="/forgot-password">
            <p className="hover-primary">Lupa Password ?</p>
          </Link>
        </div>

        {state.status === "error" && <p className="text-danger">{state.message}</p>}
      </form>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center">
          <small className="bg-white px-3">Atau</small>
        </div>
      </div>

      <section className="flex items-center justify-center">
        <p>
          Belum punya akun ?{" "}
          <Link href="/register">
            <span className="hover-primary">Daftar</span>
          </Link>
        </p>
      </section>
    </>
  );
}
