import { Suspense } from "react";
import RoomMate from "../components/Mate/RoomMate";
import ErrorBoundary from "../components/Common/ErrorBoundary";
import Loader from "../components/Common/Loader";
import ErrorPage from "../components/Common/ErrorPage";

function RoomMatePage() {
  return (
    <ErrorBoundary fallback={<ErrorPage />}>
      <Suspense fallback={<Loader />}>
        <RoomMate />
      </Suspense>
    </ErrorBoundary>
  );
}

export default RoomMatePage;
