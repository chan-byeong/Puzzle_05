import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { css } from "@emotion/react";

import { SubmitBtn } from "./MateForm.style";
import MateInfoCard from "./MateInfoCard";
import DetailHeader from "../Common/Header/DetailHeader";
import Modal from "../Common/Modal";
import useGetDetailMatePost from "../../hooks/Mate/get/useGetDetailMatePost";
import useAddChatRoom from "../../hooks/Chat/useAddChatRoom";

export interface DetailMatePostType {
  title: string;
  contents: string;
  gender: string;
  age: number;
  mbti: string;
  wakeUpStart: number;
  wakeUpEnd: number;
  sleepStart: number;
  sleepEnd: number;
  showerStart: number;
  showerEnd: number;
  dayOfWeek: string;
  smoking: string;
  deliveryFood: number;
  gameAndCall: number;
  homeProtector: number;
  cleaning: number;
  killBug: number;
}

function MateDetail() {
  const [view, setVeiw] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [apply, setApply] = useState(false);
  const mutation = useAddChatRoom();
  const nav = useNavigate();

  //TODO: uid로 글 정보 단건 조회
  const { matePostId } = useParams();
  const data = useGetDetailMatePost(matePostId);

  const cards = [<MateInfoCard first data={data} />, <MateInfoCard second data={data} />, <MateInfoCard data={data} />];

  useEffect(() => {
    if (apply) {
      mutation.mutate();
      nav("/chat");
    }
  }, [apply]);

  return (
    <>
      <div>
        <DetailHeader />
        <div
          css={css`
            position: relative;
            display: flex;
            justify-content: center;
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
          onClick={() => setModalOpen(true)}
        >
          메이트 신청하기
        </SubmitBtn>
      </div>
      <Modal isOpen={modalOpen} setIsOpen={setModalOpen} setApply={setApply} title="메이트 신청을 할까요?" />
    </>
  );
}

export default MateDetail;
const backColor = ["#E5E5E5", "#cacacaed", "#c0bebe"];
const forwardColor = ["", "#98F0D6", "#C3F5E6", "#E5F7F2"];
const fontColor = ["", "#3A3A3A", "#7A7A7A", "#BBB"];
const txt = ["", "생활패턴", "특성"];

const styles = {
  wrapper: (index: number, isFocused: boolean, isForward: boolean, view: number) => css`
    position: absolute;
    /* top: calc(${index}*70px); */
    top: ${index === 0 ? "10px" : index === 1 ? "115px" : "100px"}; // first
    top: ${isFocused && index === 1 ? "65px" : index === 2 && view === 1 ? "50px" : ""}; //second
    top: ${isFocused && index === 2 ? "90px" : index === 1 && view === 2 ? "55px" : ""}; //third

    z-index: ${isFocused ? 15 : isForward ? index + 1 : 5 - index};

    z-index: ${view === 1 && index === 2 && 0};

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
        bottom: 20px;
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
