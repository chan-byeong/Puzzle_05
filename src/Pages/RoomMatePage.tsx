import { Suspense } from "react";
import RoomMate from "../components/Mate/RoomMate";

function RoomMatePage() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <RoomMate />;
    </Suspense>
  );
}

export default RoomMatePage;
