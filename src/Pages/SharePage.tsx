import { Suspense } from "react";

import Share from "../components/Share/Share";
import ErrorBoundary from "../components/Common/ErrorBoundary";
import Loader from "../components/Common/Loader";

function SharePage() {
  return (
    <ErrorBoundary fallback={<h1>Maybe Server is Off</h1>}>
      <Suspense fallback={<Loader />}>
        <Share />
      </Suspense>
    </ErrorBoundary>
  );
}

export default SharePage;
