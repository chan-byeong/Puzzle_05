import { Suspense } from "react";

import ErrorBoundary from "../components/Common/ErrorBoundary";
import Announcement from "../components/Announcement/Announcement";
import Loader from "../components/Common/Loader";
import RouterProtecter from "../components/Common/RouterProtecter";

function AnnouncementPage() {
  return (
    <>
      <RouterProtecter>
        <ErrorBoundary fallback={<h1>Error While Fetching Notices</h1>}>
          <Suspense fallback={<Loader />}>
            <Announcement />
          </Suspense>
        </ErrorBoundary>
      </RouterProtecter>
    </>
  );
}

export default AnnouncementPage;
