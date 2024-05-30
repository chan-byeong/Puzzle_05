import { Suspense } from "react";

import Share from "../components/Share/Share";
import ErrorBoundary from "../components/Common/ErrorBoundary";

function SharePage() {
  return (
    <ErrorBoundary fallback={<h1>Maybe Server is Off</h1>}>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Share />
      </Suspense>
    </ErrorBoundary>
  );
}

export default SharePage;
