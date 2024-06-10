import React, { Suspense } from "react";

import Header from "../components/Common/Header/Header";
import Home from "../components/Home/Home";
import Loader from "../components/Common/Loader";
import ErrorBoundary from "../components/Common/ErrorBoundary";
import ErrorPage from "../components/Common/ErrorPage";
function HomePage() {
  return (
    <>
      <ErrorBoundary fallback={<ErrorPage />}>
        <Suspense fallback={<Loader />}>
          <Header />
          <Home />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}

export default HomePage;
