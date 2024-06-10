import React from "react";
import { css } from "@emotion/react";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

function Settings() {
  const queryClient = useQueryClient();
  const nav = useNavigate();

  const onClickLogOut = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    queryClient.invalidateQueries({ queryKey: ["user-profile"] });
    nav("/");
  };

  return (
    <div>
      <section css={styles.container}>
        <p css={styles.lang(false)}>한국어</p>
        <p css={styles.lang}>English</p>
        <p css={styles.lang}>日本語</p>
        <p css={styles.lang}>中國語</p>
      </section>
      <section css={styles.container2}>
        <p css={styles.menu}>설치버전</p>
        <p css={styles.menu}>비밀번호 변경</p>
        <p css={styles.menu} onClick={onClickLogOut}>
          로그아웃
        </p>
      </section>
    </div>
  );
}

export default Settings;

const styles = {
  container: css`
    position: absolute;
    top: 185px;
    left: 0;
    width: 100%;
    max-width: 390px;
    padding: 12px 25px;
    background-color: #fff;

    display: flex;
    justify-content: space-evenly;
  `,
  lang: (nselected?: boolean) => css`
    display: inline-flex;
    justify-content: center;
    align-items: center;

    width: 71px;
    height: 30px;
    border-radius: 15.5px;
    background: ${nselected ? "#EDEDED" : "#3a3a3a"};

    color: ${nselected ? "#7B7B7B" : "#fff"};
    font-size: 15px;
    font-weight: 400;
    line-height: normal;
  `,
  container2: css`
    position: absolute;
    top: 255px;
    left: 0;
    width: 100%;
    max-width: 390px;
    padding: 12px 25px;
    background-color: #fff;

    display: flex;
    flex-direction: column;
    gap: 5px;
  `,
  menu: css`
    color: var(--Black, #3a3a3a);
    font-size: 15px;
    font-weight: 500;
    line-height: normal;

    padding: 10px;
  `,
};
