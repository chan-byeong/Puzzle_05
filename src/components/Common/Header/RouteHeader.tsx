import React from "react";
import { useLocation } from "react-router-dom";
import * as H from "./Header.style";

const PATH2TITLE: { [key: string]: string } = {
  mate: "메이트 찾기",
};

function RouteHeader() {
  const location = useLocation();
  const title = PATH2TITLE[location.pathname.split("/")[1]];

  return (
    <H.HeaderBox style={{ marginBottom: "0px" }}>
      <H.Back />
      <H.Title>{title}</H.Title>
      <H.SearchIcon />
    </H.HeaderBox>
  );
}

export default RouteHeader;
