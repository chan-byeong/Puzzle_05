import React from "react";
import { css } from "@emotion/react";

// TODO: 공지사항 글 정보 props로
function AnnouncementBox() {
  return (
    <div css={styles.container}>
      <div css={styles.title}>[장학] 2024.1학기 쿨나눔 장학생 합격 발표 안내 (약정서약 확인)</div>
      <p css={styles.info}>
        <span>24.05.10</span>&nbsp;&nbsp;|&nbsp;&nbsp;<span>행정실</span>&nbsp;&nbsp;|&nbsp;&nbsp;<span>조회 100</span>
      </p>
    </div>
  );
}

export default AnnouncementBox;

const styles = {
  container: css`
    width: 100%;
    max-width: 430px;
    height: 65px;
    border-radius: 15px;
    background: #fff;
    padding: 12px;

    box-shadow: 0px 0px 15px 0px rgba(96, 96, 96, 0.08);

    margin-bottom: 10px;

    cursor: pointer;
  `,
  title: css`
    overflow: hidden;
    color: var(--Black, #3a3a3a);
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 15px;
    font-weight: 600;
    line-height: 21px; /* 140% */
  `,
  info: css`
    color: #919191;
    font-size: 13px;
    font-weight: 400;

    margin-top: 5px;
  `,
};
