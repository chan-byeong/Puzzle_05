import React from "react";
import { css } from "@emotion/react";

import temp_food from "./image/IMG_3203.jpeg";
import user_icon from "./image/users.png";

function ShareBox() {
  return (
    <div css={styles.container}>
      <div css={styles.time_tag}>~~까지</div>
      <div css={styles.type_tag}>배달</div>
      <div css={styles.thumbnail(temp_food)}></div>
      <div css={styles.bottom_info}>
        <div css={styles.left}>
          <p className="title">밤에 먹어도 죄책감 없는 마라탕</p>
          <p className="people">1/2</p>
        </div>
        <div css={styles.right}>
          <p className="before_price">100000원</p>
          <p>20000원</p>
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
    width: 104px;
    padding: 4px 0;
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
    left: 120px;

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
