import React from "react";
import { css } from "@emotion/react";

function Profile() {
  return (
    <div css={styles.container}>
      <div css={styles.profile} />
      <section>
        <p css={styles.name}>홍길동</p>
        <p css={styles.caption}>202013002 · 2학년</p>
        <p css={styles.caption}>레이크홀 1202호</p>
      </section>
    </div>
  );
}

export default Profile;

const styles = {
  container: css`
    width: 100%;
    max-width: 390px;
    height: 100px;
    padding: 12px;
    background-color: #fff;

    display: flex;
  `,
  profile: (imgsrc: string) => css`
    width: 70px;
    height: 70px;
    border-radius: 50%;

    background-image: url(${imgsrc});
    background-position: center;
    background-size: contain;
  `,
  name: css`
    color: var(--Black, #3a3a3a);
    font-size: 22px;
    font-weight: 600;
    line-height: normal;
  `,
  caption: css`
    color: var(--Grey, #7b7b7b);
    font-size: 15px;
    font-weight: 400;
    line-height: 24px; /* 160% */
  `,
};
