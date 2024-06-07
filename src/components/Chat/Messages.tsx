import React from "react";
import { css } from "@emotion/react";

interface CounterChatProps {
  mine?: boolean;
  user: string;
  message: string;
}

function Messages({ user, message, mine }: CounterChatProps) {
  return mine ? (
    <div style={{ alignSelf: "flex-end" }}>
      <div css={styles.my_message}>{message}</div>
    </div>
  ) : (
    <div>
      <div css={styles.info}>{user}</div>
      <p css={styles.message}>{message}</p>
    </div>
  );
}

export default Messages;

const styles = {
  info: css`
    color: #797979;
    font-size: 13px;
    font-weight: 500;
    line-height: 140%; /* 18.2px */
  `,
  message: css`
    display: inline-flex;
    padding: 9px 13px;
    justify-content: center;
    align-items: center;

    border-radius: 3px 15px 15px 15px;
    background: #ebebeb;

    color: var(--Black, #3a3a3a);
    font-size: 15px;
    font-weight: 400;
    line-height: 140%; /* 21px */
  `,
  my_message: css`
    display: inline-flex;
    padding: 9px 13px;
    justify-content: center;
    align-items: center;

    border-radius: 15px 15px 3px 15px;
    background: var(--Mint, #00dd9b);

    color: #fff;
    /* text-align: right; */
    font-size: 15px;
    font-weight: 400;
    line-height: 140%; /* 21px */
  `,
};
