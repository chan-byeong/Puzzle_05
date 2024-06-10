import React from "react";
import { css } from "@emotion/react";
import user_icon from "../Mate/images/user-icon.png";

function CommunityBox() {
  return (
    <div css={styles.container}>
      <div css={styles.info}>
        <img src={user_icon} alt="profile" width={21} />
        <p className="info">익명</p>
      </div>
      <div css={styles.title}>기숙사</div>
      <div css={styles.description}>팔아요</div>
    </div>
  );
}

export default CommunityBox;

const styles = {
  container: css`
    height: 114px;
    border-radius: 15px;
    background: #fff;
    display: flex;
    padding: 12px;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    margin-top: 10px;

    cursor: pointer;
  `,
  info: css`
    display: flex;
    align-items: center;

    & > img {
      margin-right: 8px;
    }

    & > .info {
      color: #585858;
      font-size: 12px;
      font-weight: 600;
    }
  `,
  title: css`
    color: #3a3a3a;
    font-size: 15px;
    font-weight: 600;
  `,
  description: css`
    overflow: hidden;
    color: #737373;
    text-overflow: ellipsis;
    font-size: 13px;
    font-weight: 400;
    line-height: 18.5px;
  `,
};
