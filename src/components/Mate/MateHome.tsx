import { useState } from "react";
import { Outlet } from "react-router-dom";

import RouteHeader from "../Common/Header/RouteHeader";
import TabContainer from "./TabContainer";

function MateHome() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <>
      <RouteHeader />
      <TabContainer activeTab={activeTab} setActiveTab={setActiveTab} />
      <Outlet />
    </>
  );
}

export default MateHome;
