import React from "react";

import * as H from "./Home.style";

function Announcement() {
  return (
    <>
      <H.Title>
        <span className="letter">공지사항</span>
        <span className="more">더보기 &gt;</span>
      </H.Title>
      <H.AnnounceBox>
        <p>[신청모집] 2024년 하계방학 현입주생 입주연장 신청 안내</p>
        <p>[안내] 전자레인지 사용 시 주의사항 안내</p>
        <p>[안내] 레이크홀 1층 글로컬카페 이용안내</p>
      </H.AnnounceBox>
    </>
  );
}

export default Announcement;
