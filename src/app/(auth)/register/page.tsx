"use client";

import { AtSign, CircleX, Lock, LockKeyhole, Mail, User } from "lucide-react";
import Link from "next/link";
import { useActionState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { registerAction } from "./action";

export default function Page() {
  const [state, formAction, pending] = useActionState(registerAction, {
    status: "",
    message: "",
    name: "",
    username: "",
    email: "",
  });

  return (
    <>
      <section className="flex items-center justify-between">
        <div>
          <h1>Daftar</h1>
          <p>Buat Akun Nukilan Salaf!</p>
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
          <User className="input-icon" size={20} />
          <Input className="pl-11" name="name" placeholder="Name" defaultValue={state.name} />
        </div>

        <div className="relative">
          <Mail className="input-icon" size={20} />
          <Input className="pl-11" name="email" placeholder="Email" defaultValue={state.email} />
        </div>

        <div className="relative">
          <AtSign className="input-icon" size={19} />
          <Input className="pl-11" name="username" placeholder="Username" defaultValue={state.username} />
        </div>

        <div className="relative">
          <Lock className="input-icon" size={20} />
          <Input className="pl-11" name="password" placeholder="Password" type="password" />
        </div>

        <div className="relative">
          <LockKeyhole className="input-icon" size={20} />
          <Input className="pl-11" name="confirmPassword" placeholder="Confirm Password" type="password" />
        </div>

        <Button className="w-full" disabled={pending}>
          {pending ? "Sedang mendaftarkan..." : "Daftar Sekarang"}
        </Button>

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
          Sudah punya akun ?{" "}
          <Link href="/login">
            <span className="hover-primary">Login</span>
          </Link>
        </p>
      </section>
    </>
  );
}
