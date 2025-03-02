import { Suspense } from "react";

import { Loading } from "@/components/loading";

import { ForgotPasswordVerify } from "./ForgotPasswordVerifyForm";

export default function Page() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <ForgotPasswordVerify />
      </Suspense>
    </>
  );
}
