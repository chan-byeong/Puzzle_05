import React from "react";
import { css } from "@emotion/react";

function ChatBox() {
  return (
    <div css={styles.container}>
      <div css={styles.imgbox} />
      <div>
        <p css={styles.title}>22학번 컴퓨터공학부</p>
        <p css={styles.caption}>
          안녕하세요 2024학년도 1학기 레이크홀 룸메 구합니다. 예민하지 않고 깨끗합니다. 같이 즐거운 한 학기 보내요~~
        </p>
      </div>
    </div>
  );
}

export default ChatBox;

const styles = {
  container: css`
    width: 358px;
    height: 80px;

    border-radius: 15px;
    background: #fff;
    box-shadow: 0px 0px 15px 0px rgba(96, 96, 96, 0.08);
    padding: 20px 18px;

    display: flex;
    align-items: center;

    margin-top: 10px;
  `,
  imgbox: css`
    width: 56px;
    height: 56px;

    background-color: #eee;
    margin-right: 12px;
  `,
  title: css`
    color: #585858;
    font-size: 15px;
    font-weight: 600;
    line-height: normal;

    margin-bottom: 5px;
  `,
  caption: css`
    width: 216px;
    height: 20px;
    overflow: hidden;
    color: #737373;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 13px;
    font-weight: 400;
    line-height: 18.5px;
  `,
};
