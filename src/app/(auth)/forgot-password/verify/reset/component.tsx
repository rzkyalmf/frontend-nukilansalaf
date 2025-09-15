"use client";

import { Lock, LockKeyhole } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useActionState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { resetPasswordAction } from "./action";

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
          <h1>Ganti Password</h1>
          <p>Masukan password baru anda!</p>
        </div>
      </section>

      <form action={formAction} className="space-y-2">
        <input name="token" defaultValue={token} hidden />

        <div className="relative">
          <Lock className="input-icon" size={20} />
          <Input className="pl-11" name="password" placeholder="Password Baru" type="password" />
        </div>

        <div className="relative">
          <LockKeyhole className="input-icon" size={20} />
          <Input className="pl-11" name="confirmPassword" placeholder="Confirm Password Baru" type="password" />
        </div>
        <Button className="w-full" disabled={pending}>
          {pending ? "Sedang mereset..." : "Reset Password"}
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
