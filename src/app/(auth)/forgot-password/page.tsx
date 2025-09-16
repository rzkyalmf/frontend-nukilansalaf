"use client";

import { ArrowLeft, Mail } from "lucide-react";
import Link from "next/link";
import { useActionState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { forgotPasswordAction } from "./action";

export default function Page() {
  const [state, formAction, pending] = useActionState(forgotPasswordAction, {
    status: "",
    message: "",
    email: "",
  });

  return (
    <>
      <section>
        <h1>Lupa Password ?</h1>
        <p>Masukkan email anda</p>
      </section>

      <form action={formAction} className="space-y-2">
        <div className="relative">
          <Mail className="input-icon" size={20} />
          <Input className="pl-11" name="email" placeholder="Email" defaultValue={state.email} />
        </div>

        <Button className="w-full" disabled={pending}>
          {pending ? "Sedang proses..." : "Reset Password"}
        </Button>

        {state.status === "error" && <p className="nuksaf-text-danger">{state.message}</p>}
      </form>

      <div className="flex">
        <Link href="/login">
          <p className="nuksaf-hover-primary inline-flex items-center">
            <ArrowLeft size={16} className="mr-2" />
            Kembali ke Login
          </p>
        </Link>
      </div>
    </>
  );
}
