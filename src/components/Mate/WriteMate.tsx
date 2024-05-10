import { useState } from "react";
import { css } from "@emotion/react";

import MateForm from "./MateForm";
import PostHeader from "../Common/Header/PostHeader";
import ProgressBar from "./ProgressBar";

const TOTAL = 5;

function WriteMate() {
  const [step, setStep] = useState(1);

  return (
    <>
      <PostHeader />
      {/* <ProgressBar step={step} TOTAL={TOTAL} /> */}
      <MateForm />
      {/* <div css={styles.container}>
        <div css={styles.back}></div>
        <div css={styles.next}>확인</div>
      </div> */}
    </>
  );
}

export default WriteMate;

const styles = {
  container: css`
    display: flex;
    justify-content: space-between;
  `,

  back: css`
    display: flex;
    width: 61px;
    height: 49px;
    justify-content: center;
    align-items: center;

    border-radius: 15px;
    background: var(--Mint, #00dd9b);
    box-shadow: 0px 0px 15px 0px rgba(96, 96, 96, 0.08);

    cursor: pointer;
  `,

  next: css`
    display: flex;
    width: 288px;
    justify-content: center;
    align-items: center;

    border-radius: 15px;
    background: var(--Mint, #00dd9b);
    box-shadow: 0px 0px 15px 0px rgba(96, 96, 96, 0.08);

    color: #fff;
    font-size: 16px;
    font-weight: 600;

    border: none;
  `,
};
