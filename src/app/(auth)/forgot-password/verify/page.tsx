import { Suspense } from "react";

import { ForgotPasswordVerify } from "./component";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ForgotPasswordVerify />
    </Suspense>
  );
}
