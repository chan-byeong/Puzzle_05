import React from "react";
import { css } from "@emotion/react";

import * as S from "./Share.style";

interface ShareDetailProps {
  buyPostId: number;
  title: string;
  category: string;
  endDay: string;
  endTime: string;
  counts: number;
  price: number;
  link: string;
  setDetailModal: React.Dispatch<React.SetStateAction<number>>;
}

const dateConverter = (date: string) => {
  const today = new Date();
  const todayString = `${today.getMonth() + 1}월 ${today.getDate()}일(${today.toLocaleDateString("ko-KR", {
    weekday: "short",
  })})`;

  if (todayString === date) return "오늘";
  else return `${today.getMonth() + 1}/${today.getDate()}`;
};
//TODO: ShareDetail - props로 데이터 전달

function ShareDetail(props: ShareDetailProps) {
  const endDay = dateConverter(props.endDay);
  const endDate = `${endDay} ${props.endTime} 까지`;

  const handleModal = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    props.setDetailModal(-1);
    console.log("handlemodal");
  };

  const onClickContainer = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    console.log("container");
  };

  return (
    <>
      <S.Container onClick={onClickContainer}>
        <div css={styles.wrapper}>
          <S.Profile />
          <S.Text>202호</S.Text>
        </div>

        <div css={styles.wrapper}>
          {/* prettier-ignore */}
          <S.Tag css={css`margin-right: 12px;`}>{props.category}</S.Tag>
          <S.Title>{props.title}</S.Title>
        </div>

        <div css={styles.wrapper} style={{ marginTop: "22px" }}>
          <S.ImgBox imgsrc="" />
          {/* prettier-ignore */}
          <div css={css`margin-left: 22px;`}>
              <div css={styles.wrapper}>
                <S.MapPin />
                <S.Text>춘리마라탕</S.Text>
                <S.More/>
              </div>
              <div css={styles.wrapper}>
                <S.Clock />
                <S.Text>{endDate}</S.Text>
              </div>
              <div css={styles.wrapper}>
                <S.Users />
                <S.Text>?/{props.counts}명</S.Text>
              </div>
              <div css={styles.wrapper}>
                <S.Credit />
                <S.BeforePrice>100,000원</S.BeforePrice>
              </div>
              {/* prettier-ignore */}
              <S.Prices css={css`margin-left: 29px;`}> 
                {props.price}원
              </S.Prices>
            </div>
        </div>

        <S.Btn css={styles.top_margin}>공동구매 신청하기</S.Btn>
      </S.Container>
      <S.BackShadow onClick={handleModal} />
    </>
  );
}

export default ShareDetail;

const styles = {
  wrapper: css`
    flex-shrink: 0;
    display: flex;
    align-items: center;

    margin-top: 10px;
  `,
  top_margin: css`
    margin-top: 22px;
  `,
};
