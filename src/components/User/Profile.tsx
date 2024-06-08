import React from "react";
import { css } from "@emotion/react";

import useAuth from "../../hooks/Login/useAuth";
import user from "./images/user.png";

function Profile() {
  const { name, hall, email, grade, roomNum } = useAuth();

  return (
    <div css={styles.container}>
      <div css={styles.profile(user)} />
      <section>
        <p css={styles.name}>{name}</p>
        <p css={styles.caption}>
          {email} · {grade}학년
        </p>
        <p css={styles.caption}>
          {hall} {roomNum}
        </p>
      </section>
    </div>
  );
}

export default Profile;

const styles = {
  container: css`
    position: absolute;
    left: 0;
    top: 72px;
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
    background-color: #d9d9d9;

    background-image: url(${imgsrc});
    background-position: center;
    background-size: contain;

    margin-right: 24px;
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
