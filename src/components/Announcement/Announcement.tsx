import React from "react";
import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";

import Filtering from "../Mate/Filtering";
import AnnouncementBox from "./AnnouncementBox";

//TODO: 공지사항 리스트 GET
function Announcement() {
  const nav = useNavigate();

  return (
    <div>
      <Filtering />
      <div
        css={css`
          margin-top: 12px;
        `}
      >
        <div onClick={() => nav(`${1}`)}>
          <AnnouncementBox />
        </div>
        <AnnouncementBox />
        <AnnouncementBox />
        <AnnouncementBox />
        <AnnouncementBox />
        <AnnouncementBox />
      </div>
    </div>
  );
}

export default Announcement;
