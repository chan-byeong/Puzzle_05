import * as H from "./Header.style";
import { useNavigate } from "react-router-dom";

interface PostHeaderProps {
  title?: string;
}

function BackHeader({ title }: PostHeaderProps) {
  const nav = useNavigate();

  return (
    <H.HeaderBox style={{ paddingTop: "8px", marginBottom: "0px" }}>
      <H.Back onClick={() => nav("/")} />
      <H.Title>{title}</H.Title>
      <p></p>
    </H.HeaderBox>
  );
}

export default BackHeader;
