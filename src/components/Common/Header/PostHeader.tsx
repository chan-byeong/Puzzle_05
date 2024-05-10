import * as H from "./Header.style";

function PostHeader() {
  return (
    <H.HeaderBox style={{ paddingTop: "8px", marginBottom: "0px" }}>
      <H.XIcon />
      <H.Title>글쓰기</H.Title>
      <H.MiddleTxt>임시저장</H.MiddleTxt>
    </H.HeaderBox>
  );
}

export default PostHeader;
