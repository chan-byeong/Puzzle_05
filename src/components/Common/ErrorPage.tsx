import React from "react";
import { css } from "@emotion/react";

function ErrorPage() {
  return (
    <div css={styles.container}>
      <p css={styles.text}>
        NETWORK ERROR <br /> <span className="strong">(SERVER OFF)</span>
      </p>
    </div>
  );
}

export default ErrorPage;

const styles = {
  container: css`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    max-width: 390px;
    height: 100%;
    min-height: 600px;
  `,

  text: css`
    font-size: 24px;
    font-weight: 600;
    color: #737373;
    text-align: center;
    line-height: normal;

    & > .strong {
      color: #00dd9b;
    }
  `,
};
