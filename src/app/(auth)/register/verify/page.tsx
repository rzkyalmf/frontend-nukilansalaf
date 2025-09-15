import { Suspense } from "react";

import { RegisterVerify } from "./component";

export default function Page() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <RegisterVerify />
      </Suspense>
    </>
  );
}
