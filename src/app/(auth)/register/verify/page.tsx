import { Suspense } from "react";

import { Loading } from "@/components/loading";

import { RegisterVerify } from "./RegisterVerifyForm";

export default function Page() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <RegisterVerify />
      </Suspense>
    </>
  );
}
