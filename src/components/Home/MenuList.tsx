import React from "react";
import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";

import * as H from "./Home.style";
import tmp_img from "../Common/Header/images/message-circle.png";

const MENU_LIST = [
  ["메이트 찾기", "/mate"],
  ["공동구매", "/purchase"],
  ["정보공유", "/info-share"],
  ["외박신청/조회", "/dhlqkr"],
  ["공유시설 예약", "/reservation"],
  ["건의사항", "/rjsdml"],
];

function MenuList() {
  const navigate = useNavigate();

  return (
    <H.Container>
      {MENU_LIST.map((item, idx) => (
        <H.MenuItem key={idx} onClick={() => navigate(item[1])}>
          <img
            css={css`
              width: 37px;
              height: 37px;
            `}
            src={tmp_img}
            alt="menu_icon"
          />
          <span>{item[0]}</span>
        </H.MenuItem>
      ))}
    </H.Container>
  );
}

export default MenuList;
