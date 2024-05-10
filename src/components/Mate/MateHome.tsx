import { useState } from "react";

import RouteHeader from "../Common/Header/RouteHeader";
import TabContainer from "./TabContainer";
import RoomMate from "./RoomMate";

function MateHome() {
  const [activeTab, setActiveTab] = useState(0);

  const componentRouter = (activeTab: number) => {
    if (activeTab === 1) return <RoomMate />;
  };

  return (
    <>
      <RouteHeader />
      <TabContainer activeTab={activeTab} setActiveTab={setActiveTab} />
      {/* TODO: activeTab 별로 다른 컴포넌트 렌더링 */}
      {componentRouter(activeTab)}
    </>
  );
}

export default MateHome;
