import React from "react";
import * as H from "./Header.style";
import { useNavigate } from "react-router-dom";

function DetailHeader() {
  const nav = useNavigate();
  return (
    <H.HeaderBox style={{ marginBottom: "40px" }}>
      <H.Back onClick={() => nav(-1)} />
      <H.MoreMenu />
    </H.HeaderBox>
  );
}

export default DetailHeader;
