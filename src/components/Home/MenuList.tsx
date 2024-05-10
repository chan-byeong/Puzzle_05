import React from "react";
// import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";

import * as H from "./Home.style";

import all from "./images/all_icon.png";
import mate from "./images/mate_icon.png";
import share from "./images/share_icon.png";
import lang from "./images/lang_icon.png";
import free from "./images/free_star.png";
import question from "./images/question_icon.png";

const MENU_LIST = [
  ["전체", "/community"],
  ["룸메 찾기", "/community/mate"],
  ["공동구매", "/community/share"],
  ["언어교환", "/dhlqkr"],
  ["자유게시판", "/reservation"],
  ["건의사항", "/rjsdml"],
];

const menuImgs: { [key: string]: string } = {
  전체: all,
  "룸메 찾기": mate,
  공동구매: share,
  언어교환: lang,
  자유게시판: free,
  건의사항: question,
};

function MenuList() {
  const navigate = useNavigate();

  return (
    <H.Container>
      {MENU_LIST.map((item, idx) => (
        <H.MenuItem key={idx} onClick={() => navigate(item[1])}>
          <H.MenuImg>
            <img src={menuImgs[item[0]]} alt={item[0]} />
          </H.MenuImg>
          <span>{item[0]}</span>
        </H.MenuItem>
      ))}
    </H.Container>
  );
}

export default MenuList;
