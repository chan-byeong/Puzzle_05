import { Suspense } from "react";

import Share from "../components/Share/Share";
import ErrorBoundary from "../components/Common/ErrorBoundary";
import Loader from "../components/Common/Loader";
import ErrorPage from "../components/Common/ErrorPage";

function SharePage() {
  return (
    <ErrorBoundary fallback={<ErrorPage />}>
      <Suspense fallback={<Loader />}>
        <Share />
      </Suspense>
    </ErrorBoundary>
  );
}

export default SharePage;
