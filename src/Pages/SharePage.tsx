import { Suspense } from "react";

import Share from "../components/Share/Share";

function SharePage() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Share />;
    </Suspense>
  );
}

export default SharePage;
