import { css } from "@emotion/react";

interface ProgressBarProps {
  step: number;
  TOTAL: number;
}

function ProgressBar({ step, TOTAL }: ProgressBarProps) {
  return (
    <div css={styles.container}>
      <div css={styles.bar(step, TOTAL)} />
      <label css={styles.label(step, TOTAL)}>{(step / TOTAL) * 100}</label>
    </div>
  );
}

export default ProgressBar;

const styles = {
  container: css`
    width: 100%;
    height: 5px;
    background-color: #d9d9d9;

    position: absolute;
    left: 0;
  `,
  bar: (step: number, TOTAL: number) => css`
    width: calc(${(step / TOTAL) * 100}%);
    height: 5px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    background-color: #00dd9b;

    position: absolute;
    left: 0;
    top: 0;

    transition: width 0.5s;
  `,
  label: (step: number, TOTAL: number) => css`
    /* width: calc(${(step / TOTAL) * 100}%); */
    position: absolute;
    left: calc(${(step / TOTAL) * 100 - 3}%);
    top: 8px;

    color: #00dd9b;
    font-size: 15px;
    font-weight: 700;
    line-height: 22.4px;
  `,
};
