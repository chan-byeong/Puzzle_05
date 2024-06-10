import { Suspense } from "react";

import ErrorBoundary from "../components/Common/ErrorBoundary";
import Announcement from "../components/Announcement/Announcement";
import Loader from "../components/Common/Loader";
import ErrorPage from "../components/Common/ErrorPage";

function AnnouncementPage() {
  return (
    <>
      <ErrorBoundary fallback={<ErrorPage />}>
        <Suspense fallback={<Loader />}>
          <Announcement />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}

export default AnnouncementPage;
