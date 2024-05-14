import { useState } from "react";
import { useParams } from "react-router-dom";
import { css } from "@emotion/react";

import { SubmitBtn } from "./MateForm.style";
import MateInfoCard from "./MateInfoCard";
import DetailHeader from "../Common/Header/DetailHeader";

function MateDetail() {
  const [view, setVeiw] = useState(0);
  //TODO: uid로 글 정보 단건 조회
  const { uid } = useParams();
  console.log(uid);

  const cards = [<MateInfoCard first />, <MateInfoCard />, <MateInfoCard />, <MateInfoCard />];

  return (
    <div>
      <DetailHeader />
      <div
        css={css`
          position: relative;
        `}
      >
        {cards.map((Card, index) => (
          <div css={styles.wrapper(index, view === index, index < view, view)} onClick={() => setVeiw(index)}>
            {Card}
            <div className="shadow" />
          </div>
        ))}
      </div>
      <SubmitBtn
        css={css`
          position: absolute;
          bottom: 40px;
        `}
      >
        메이트 신청하기
      </SubmitBtn>
    </div>
  );
}

export default MateDetail;
const backColor = ["#E5E5E5", "#cacacaed", "#c0bebe"];
const forwardColor = ["", "#98F0D6", "#C3F5E6", "#E5F7F2"];
const fontColor = ["", "#3A3A3A", "#7A7A7A", "#BBB"];
const txt = ["", "생활패턴", "예민도", "특성"];

const styles = {
  wrapper: (index: number, isFocused: boolean, isForward: boolean, view: number) => css`
    position: absolute;
    top: calc(${index}*60px);
    z-index: ${isFocused ? 15 : isForward ? index : 4 - index};

    /* top: ${isForward && index * 30}px; */
    /* top: ${isFocused && index * 30}px; */
    /* top: ${!isForward && index * 30}px; */
    & > .shadow {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 30px;
      z-index: ${!isFocused ? 6 : 0};
      background-color: ${!isFocused ? (isForward ? backColor[index] : forwardColor[index - view]) : ""};

      &::after {
        display: ${(isFocused || isForward) && "none"};
        content: "${txt[index]}";
        position: absolute;
        bottom: 10px;
        left: 50%;
        transform: translateX(-50%);

        color: ${!isForward && fontColor[index - view]};
        font-size: 22px;
        font-style: normal;
        font-weight: 600;
      }
    }
  `,
};
