"use client";

import { KeyRound } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useActionState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { verifyForgotPasswordAction } from "../../(actions)/forgot-password-verify";

const initialState = {
  message: "",
  status: "",
};

export const ForgotPasswordVerify = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [state, formAction, pending] = useActionState(
    verifyForgotPasswordAction,
    initialState,
  );

  if (!token) {
    return null;
  }

  return (
    <>
      <section>
        <div>
          <h2 className="gradient-ns font-philosopher text-4xl font-bold tracking-tight">
            OTP Lupa Password
          </h2>
          <p className="font-light tracking-normal text-gray-500">
            <b className="font-medium underline">Cek email</b> anda untuk kode
            verifikasi
          </p>
        </div>
      </section>

      <form action={formAction} className="space-y-2">
        <input name="token" defaultValue={token} hidden />

        <div className="relative">
          <KeyRound
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-400"
            size={20}
          />
          <Input
            className="pl-11 text-slate-600"
            name="code"
            maxLength={6}
            placeholder="Kode OTP"
          />
        </div>
        <Button className="w-full" disabled={pending}>
          {pending ? "Sedang memverifikasi..." : "Verifikasi"}
        </Button>

        {state.status === "error" && (
          <p className="text-red-500">{state.message}</p>
        )}
      </form>

      <section className="">
        <p className="font-light tracking-normal text-gray-500">
          Belum menerima kode ?{" "}
          <Link href="#" className="font-normal hover:text-[#C2B59B]">
            Kirim Ulang
          </Link>
        </p>
      </section>
    </>
  );
};
