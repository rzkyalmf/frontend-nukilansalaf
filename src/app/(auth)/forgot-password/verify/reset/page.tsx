import { Suspense } from "react";

import { Loading } from "@/components/loading";

import { ResetPassword } from "./ResetPasswordForm";

export default function Page() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <ResetPassword />
      </Suspense>
    </>
  );
}
