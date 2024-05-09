import React from "react";
import * as H from "./Header.style";

function RouteHeader() {
  return (
    <H.HeaderBox style={{ marginBottom: "0px" }}>
      <H.Back />
      <H.Title>게시판</H.Title>
      <H.Message />
    </H.HeaderBox>
  );
}

export default RouteHeader;
