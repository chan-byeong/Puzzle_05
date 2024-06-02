import React from "react";
import * as H from "./Header.style";
import { useNavigate } from "react-router-dom";

function RouteHeader() {
  const nav = useNavigate();

  return (
    <H.HeaderBox style={{ marginBottom: "42px" }}>
      <H.Back onClick={() => nav("/")} />
      <H.Title>게시판</H.Title>
      <H.Message style={{ marginRight: "0" }} />
    </H.HeaderBox>
  );
}

export default RouteHeader;
