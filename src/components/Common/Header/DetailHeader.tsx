import React from "react";
import * as H from "./Header.style";
import { useNavigate } from "react-router-dom";

interface DetailHeaderProps {
  title?: string;
}

function DetailHeader({ title }: DetailHeaderProps) {
  const nav = useNavigate();
  return (
    <H.HeaderBox style={{ marginBottom: "40px" }}>
      <H.Back onClick={() => nav(-1)} />
      <H.Title>{title}</H.Title>
      <H.MoreMenu />
    </H.HeaderBox>
  );
}

export default DetailHeader;
