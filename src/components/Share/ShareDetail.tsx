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
  modalSetter: React.Dispatch<React.SetStateAction<number | null>>;
}

const CATEGORY: { [key: string]: string } = {
  delivery: "배달",
  product: "물품",
};

const dateConverter = (date: string) => {
  console.log(date);
  const today = new Date();
  const todayString = `${today.getMonth() + 1}월 ${today.getDate()}일(${today.toLocaleDateString("ko-KR", {
    weekday: "short",
  })})`;
  if (todayString === date) return "오늘";
  else {
    const regex = /(\d{1,2})월 (\d{1,2})일/;
    const matches = date.match(regex);
    console.log(matches);
    return matches !== null && `${matches[1]}/${matches[2]}`;
  }
};

function ShareDetail(props: ShareDetailProps) {
  const endDay = dateConverter(props.endDay);
  const endDate = `${endDay} ${props.endTime} 까지`;

  const handleModal = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    setTimeout(() => {
      props.modalSetter(null); // 비동기적으로 상태 변경
    }, 0);
    console.log("shadow Clicked");
  };

  const onClickContainer = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    console.log("container");
  };

  return (
    <>
      <S.BackShadow onClick={handleModal} />
      <S.Container onClick={onClickContainer}>
        <div css={styles.wrapper}>
          <S.Profile />
          <S.Text>202호</S.Text>
        </div>

        <div css={styles.wrapper}>
          {/* prettier-ignore */}
          <S.Tag css={css`margin-right: 12px;`}>{CATEGORY[props.category]}</S.Tag>
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
                <S.BeforePrice>{props.price}원</S.BeforePrice>
              </div>
              {/* prettier-ignore */}
              <S.Prices css={css`margin-left: 29px;`}> 
                {props.price / props.counts}원
              </S.Prices>
            </div>
        </div>

        <S.Btn css={styles.top_margin}>공동구매 신청하기</S.Btn>
      </S.Container>
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
