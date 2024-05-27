import { css } from "@emotion/react";

interface ProgressBarProps {
  step: number;
  TOTAL: number;
  IsProgress?: boolean;
  customWidth?: string;
  customTop?: string;
  customLeft?: string;
  customHeigth?: string;
}

function ProgressBar({ step, TOTAL, IsProgress, customWidth, customLeft, customTop, customHeigth }: ProgressBarProps) {
  return (
    <div css={styles.container(IsProgress, customWidth, customTop, customLeft, customHeigth)}>
      <div css={styles.bar(step, TOTAL, IsProgress, customHeigth)} />
      {/* <label css={styles.label(step, TOTAL)}>{(step / TOTAL) * 100}</label> */}
    </div>
  );
}

export default ProgressBar;

const styles = {
  container: (
    IsProgress?: boolean,
    customWidth?: string,
    customTop?: string,
    customLeft?: string,
    customHeigth?: string
  ) => css`
    width: ${customWidth ? `${customWidth}px` : "100%"};
    height: ${customHeigth ? `${customHeigth}px` : "5px"};
    background-color: #d9d9d9;

    position: absolute;
    left: ${customLeft ? `${customLeft}px` : "0"};
    top: ${customTop ? `${customTop}px` : "0"};

    border-radius: ${IsProgress ? "0px" : "5px"};
  `,
  bar: (step: number, TOTAL: number, IsProgress?: boolean, customHeigth?: string) => css`
    width: calc(${(step / TOTAL) * 100}%);
    height: ${customHeigth ? `${customHeigth}px` : "5px"};
    ${IsProgress
      ? css`
          border-top-right-radius: 5px;
          border-bottom-right-radius: 5px;
        `
      : css`
          border-radius: 5px;
        `}
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
