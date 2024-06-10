import React from "react";
import { useNavigate } from "react-router-dom";

import * as H from "./Home.style";
import useLoadHomeDatas, { MealType, NoticeType } from "../../hooks/Home/useLoadHomeDatas";

function HomeMenus() {
  const nav = useNavigate();
  // const notice = useLoadHomeDatas("notice") as NoticeType[];

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
          {/* {notice.map((item, index) => (
            <p key={index}>{item.title}</p>
          ))} */}
        </H.AnnounceBox>
      </H.HomeBox>
    </>
  );
}

export default HomeMenus;
