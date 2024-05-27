import * as H from "./Header.style";
import { useNavigate } from "react-router-dom";

interface PostHeaderProps {
  title: string;
}

function PostHeader({ title }: PostHeaderProps) {
  const nav = useNavigate();

  return (
    <H.HeaderBox style={{ paddingTop: "8px", marginBottom: "0px" }}>
      <H.XIcon onClick={() => nav(-1)} />
      <H.Title>{title}</H.Title>
      <H.MiddleTxt>임시저장</H.MiddleTxt>
    </H.HeaderBox>
  );
}

export default PostHeader;
