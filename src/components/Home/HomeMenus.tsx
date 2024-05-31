import React from "react";
import { useNavigate } from "react-router-dom";

import * as H from "./Home.style";

function HomeMenus() {
  const nav = useNavigate();

  return (
    <>
      <H.HomeBox onClick={() => nav("/community/bulletin")}>
        <div>게시판</div>
        <section>
          <H.BulletinLine>기숙사 세탁기 고장나서 빨래 못 돌리게 됐는데 어떻게 해야될까요</H.BulletinLine>
        </section>
      </H.HomeBox>
      <H.DormsBox>
        <div>외박 신청/조회</div>
        <p style={{ width: "1px", height: "24px", backgroundColor: "#D9D9D9" }} />
        <div>공유시설 예약</div>
      </H.DormsBox>
      <H.HomeBox onClick={() => nav("/community/announcement")}>
        <div>공지사항</div>
        <H.AnnounceBox>
          <p>[신청모집] 2024년 하계방학 현입주생 입주연장 신청 안내</p>
          <p>[안내] 전자레인지 사용 시 주의사항 안내</p>
          <p>[안내] 레이크홀 1층 글로컬카페 이용안내</p>
        </H.AnnounceBox>
      </H.HomeBox>
    </>
  );
}

export default HomeMenus;

/**
 * 
 * <H.Title>
        <span className="letter">공지사항</span>
        <span className="more">더보기 &gt;</span>
      </H.Title>
      <H.AnnounceBox>
        <p>[신청모집] 2024년 하계방학 현입주생 입주연장 신청 안내</p>
        <p>[안내] 전자레인지 사용 시 주의사항 안내</p>
        <p>[안내] 레이크홀 1층 글로컬카페 이용안내</p>
      </H.AnnounceBox>
 */
