import { Suspense } from "react";
import RoomMate from "../components/Mate/RoomMate";
import ErrorBoundary from "../components/Common/ErrorBoundary";

function RoomMatePage() {
  return (
    <ErrorBoundary fallback={<h1>Maybe Server is Off</h1>}>
      <Suspense fallback={<h1>Loading...</h1>}>
        <RoomMate />
      </Suspense>
    </ErrorBoundary>
  );
}

export default RoomMatePage;
