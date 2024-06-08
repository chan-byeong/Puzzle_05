import React from "react";
import { css } from "@emotion/react";

interface ChatBoxProps {
  roomId: string;
}

function ChatBox({ roomId }: ChatBoxProps) {
  return (
    <div css={styles.container}>
      <div css={styles.imgbox} />
      <div>
        <p css={styles.title}>{roomId}번 채팅방</p>
        <p css={styles.caption}>마지막 채팅 내역</p>
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

    cursor: pointer;
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
