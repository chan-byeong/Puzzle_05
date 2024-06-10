import React from "react";
import { css } from "@emotion/react";
import * as H from "./Home.style";

export default function Diets() {
  const month = new Date().getMonth();

  // TODO: 주 계산
  // const week = getWeekNumber(new Date()) - 4 * month;

  return (
    <>
      <H.Title>
        <span className="letter">{month + 1}월 둘째주 식단</span>
      </H.Title>
      <H.ViewDiet>
        <p>식수조회</p>
        {/* TODO: 화살표 수정 */}
        <p>&gt;</p>
      </H.ViewDiet>
      <H.WeekMenu>
        <p css={styles.day}>
          {new Date().getMonth() + 1}월 {new Date().getDate()}일 식단
        </p>
        <div css={styles.wrapper}>
          <p>짜장덮밥, 흰밥, 제육순대볶음, 팽이장국, 깐풍기, 마카로니샐러드, 단무지부추무침, 도토리묵무침</p>
        </div>
      </H.WeekMenu>
    </>
  );
}

const styles = {
  wrapper: css`
    border-radius: 15px;
    border: 1px solid var(--grey-2, #d9d9d9);
    background: #f8f8f8;

    display: inline-flex;
    padding: 13px;
    justify-content: center;
    align-items: center;
    gap: 10px;
  `,
  day: css`
    font-size: 16px;
    font-weight: 700;
    color: #00dd9b;
    margin-bottom: 5px;
  `,
};
