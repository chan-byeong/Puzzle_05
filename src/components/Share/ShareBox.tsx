import React from "react";
import { css } from "@emotion/react";

import temp_food from "./image/IMG_3203.jpeg";
import user_icon from "./image/users.png";

interface ShareBoxProps {
  buyPostId: number;
  title: string;
  category: string;
  endDay: string;
  endTime: string;
  counts: number;
  price: number;
  link: string;
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

function ShareBox(props: ShareBoxProps) {
  // 날짜 === 오늘 -> 오늘
  // 5월 21일 !== 오늘 -> 5/21
  const endDay = dateConverter(props.endDay);
  const endDate = `${endDay} ${props.endTime} 까지`;

  return (
    <div css={styles.container}>
      <div css={styles.time_tag}>{endDate}</div>
      <div css={styles.type_tag}>{CATEGORY[props.category]}</div>
      <div css={styles.thumbnail(temp_food)}></div>
      <div css={styles.bottom_info}>
        <div css={styles.left}>
          <p className="title">{props.title}</p>
          <p className="people">? / {props.counts}</p>
        </div>
        <div css={styles.right}>
          <p className="before_price">{props.price}원</p>
          <p>{props.price / props.counts}원</p>
        </div>
      </div>
    </div>
  );
}

export default ShareBox;

const styles = {
  container: css`
    width: 100%;
    max-width: 430px;
    height: 208px;

    border-radius: 15px;
    box-shadow: 0px 0px 15px 0px rgba(96, 96, 96, 0.08);
    margin-bottom: 12px;

    position: relative;
  `,

  time_tag: css`
    display: flex;
    min-width: 104px;
    padding: 4px;
    justify-content: center;
    align-items: center;

    border-radius: 12.5px;
    background: var(--Mint, #00dd9b);

    position: absolute;
    top: 10px;
    left: 11px;

    color: #fff;
    font-size: 13px;
    font-weight: 700;

    z-index: 1;
  `,

  type_tag: css`
    display: flex;
    padding: 4px 10px;
    justify-content: center;
    align-items: center;

    border-radius: 12.5px;
    background: #fff;

    position: absolute;
    top: 10px;
    left: 128px;

    color: #00dd9b;
    font-size: 13px;
    font-weight: 700;

    z-index: 1;
  `,

  thumbnail: (imgsrc: string) => css`
    width: 100%;
    max-width: 430px;
    height: 145px;
    border-radius: 15px 15px 0px 0px;

    background-image: url(${imgsrc});
    background-size: contain;
  `,

  bottom_info: () => css`
    width: 100%;
    max-width: 430px;
    height: 63px;
    border-radius: 0px 0px 15px 15px;
    background-color: #fff;
    padding: 12px 15px;

    display: flex;
  `,

  left: css`
    width: 70%;
    & > .title {
      overflow: hidden;
      color: var(--Black, #3a3a3a);
      text-overflow: ellipsis;
      font-size: 15px;
      font-style: normal;
      font-weight: 600;
      line-height: 18px; /* 120% */
    }

    & > .people {
      color: var(--Black, #3a3a3a);
      font-size: 13px;
      font-weight: 400;
      margin-top: 5px;
      padding-left: 18px;

      position: relative;

      &::before {
        content: "";
        display: block;
        width: 12px;
        height: 12px;
        background-image: url(${user_icon});
        background-size: contain;

        position: absolute;
        left: 0;
      }
    }
  `,

  right: css`
    width: 30%;
    overflow: hidden;
    color: var(--Mint, #00dd9b);
    text-overflow: ellipsis;
    font-size: 20px;
    font-weight: 700;
    line-height: 20px; /* 100% */

    & > .before_price {
      color: #737373;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      text-decoration-line: line-through;
      margin-bottom: 5px;
    }
  `,
};
