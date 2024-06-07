import { Suspense } from "react";
import RoomMate from "../components/Mate/RoomMate";
import ErrorBoundary from "../components/Common/ErrorBoundary";
import Loader from "../components/Common/Loader";

function RoomMatePage() {
  return (
    <ErrorBoundary fallback={<h1>Maybe Server is Off</h1>}>
      <Suspense fallback={<Loader />}>
        <RoomMate />
      </Suspense>
    </ErrorBoundary>
  );
}

export default RoomMatePage;
