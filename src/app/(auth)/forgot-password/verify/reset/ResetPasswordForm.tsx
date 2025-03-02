"use client";

import { Lock, LockKeyhole } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useActionState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { resetPasswordAction } from "../../../(actions)/forgot-password-verify-reset";

export const ResetPassword = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [state, formAction, pending] = useActionState(resetPasswordAction, {
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
          <h2 className="gradient-ns font-philosopher text-4xl font-bold tracking-tight">
            Ganti Password
          </h2>
          <p className="font-light tracking-normal text-gray-500">
            Masukan password baru anda!
          </p>
        </div>
      </section>

      <form action={formAction} className="space-y-2">
        <input name="token" defaultValue={token} hidden />

        <div className="relative">
          <Lock
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-400"
            size={20}
          />
          <Input
            className="pl-11 text-slate-600"
            name="password"
            placeholder="Password Baru"
            type="password"
          />
        </div>
        <div className="relative">
          <LockKeyhole
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-400"
            size={20}
          />
          <Input
            className="pl-11 text-slate-600"
            name="confirmPassword"
            placeholder="Confirm Password Baru"
            type="password"
          />
        </div>
        <Button className="w-full" disabled={pending}>
          {pending ? "Sedang mereset..." : "Reset Password"}
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
