import * as H from "./Header.style";
import { useNavigate } from "react-router-dom";

function PostHeader() {
  const nav = useNavigate();

  return (
    <H.HeaderBox style={{ paddingTop: "8px", marginBottom: "0px" }}>
      <H.XIcon onClick={() => nav(-1)} />
      <H.Title>글쓰기</H.Title>
      <H.MiddleTxt>임시저장</H.MiddleTxt>
    </H.HeaderBox>
  );
}

export default PostHeader;
