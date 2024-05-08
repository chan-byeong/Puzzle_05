import React from "react";

import RouteHeader from "../Common/Header/RouteHeader";
import TabContainer from "./TabContainer";
import { Outlet } from "react-router-dom";

function MateHome() {
  return (
    <>
      <RouteHeader />
      <TabContainer />
      <Outlet />
    </>
  );
}

export default MateHome;
