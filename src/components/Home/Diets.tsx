import React from "react";

import * as H from "./Home.style";

export default function Diets() {
  const month = new Date().getMonth();

  // TODO: 주 계산
  // const week = getWeekNumber(new Date()) - 4 * month;

  return (
    <>
      <H.Title>
        <span className="letter">{month}월 첫째주 식단</span>
      </H.Title>
      <H.ViewDiet>
        <p>식수조회</p>
        {/* TODO: 화살표 수정 */}
        <p>&gt;</p>
      </H.ViewDiet>
      <H.WeekMenu />
    </>
  );
}
