"use client";

import { KeyRound } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useActionState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { verifyRegisterAction } from "./action";

export const RegisterVerify = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [state, formAction, pending] = useActionState(verifyRegisterAction, {
    status: "",
    message: "",
  });

  if (!token) {
    return null;
  }

  return (
    <>
      <section>
        <div>
          <h1>Kode OTP</h1>
          <p>
            <b className="underline">Cek email</b> anda untuk kode verifikasi
          </p>
        </div>
      </section>

      <form action={formAction} className="space-y-2">
        <input name="token" defaultValue={token} hidden />

        <div className="relative">
          <KeyRound className="input-icon" size={20} />
          <Input className="pl-11" name="code" maxLength={6} placeholder="Kode OTP" />
        </div>
        <Button className="w-full" disabled={pending}>
          {pending ? "Sedang memverifikasi..." : "Verifikasi"}
        </Button>

        {state.status === "error" && <p className="text-danger">{state.message}</p>}
      </form>

      <section>
        <p>
          Belum menerima kode ?{" "}
          <Link href="#">
            <span className="hover-primary">Kirim Ulang</span>
          </Link>
        </p>
      </section>
    </>
  );
};
