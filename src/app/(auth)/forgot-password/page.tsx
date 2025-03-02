"use client";

import { ArrowLeft, Mail } from "lucide-react";
import Link from "next/link";
import { useActionState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { forgotPasswordAction } from "../(actions)/forgot-password";

export default function Page() {
  const [state, formAction, pending] = useActionState(forgotPasswordAction, {
    status: "",
    message: "",
    email: "",
  });

  return (
    <>
      <section>
        <h2 className="gradient-ns font-philosopher text-4xl font-bold tracking-tight">
          Lupa Password ?
        </h2>
        <p className="mb-6 font-light tracking-normal text-gray-500">
          Masukkan email anda
        </p>
      </section>

      <form action={formAction} className="space-y-2">
        <div className="relative">
          <Mail
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-400"
            size={20}
          />
          <Input
            className="pl-11 text-slate-600"
            name="email"
            placeholder="Email"
            defaultValue={state.email}
          />
        </div>
        <Button className="w-full" disabled={pending}>
          {pending ? "Sedang proses..." : "Reset Password"}
        </Button>

        {state.status === "error" && (
          <p className="text-red-500">{state.message}</p>
        )}
      </form>

      <div className="flex">
        <Link
          href="/login"
          className="inline-flex items-center font-light tracking-normal text-gray-500 hover:text-[#C2B59B]"
        >
          <ArrowLeft size={16} className="mr-2" />
          Kembali ke Login
        </Link>
      </div>
    </>
  );
}
