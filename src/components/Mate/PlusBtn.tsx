import { MouseEvent, useState } from "react";
import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";

import plus from "./images/plus.png";
import plus_b from "./images/plus_b.png";
import arrow from "./images/corner-down-right.png";

function PlusBtn() {
  const nav = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handlePlusBtn = (e: MouseEvent) => {
    e.preventDefault();
    setIsOpen((pre) => !pre);
  };

  // TODO: 새로쓰기 , 불러오기 네비게이터 연결
  return (
    <>
      <div css={styles.plus_btn} onClick={handlePlusBtn} />
      {isOpen && (
        <>
          <div css={styles.modal}>
            <span onClick={() => nav("/community/mate-post")}>
              <div css={styles.icon(plus_b)} />
              <p>새로 쓰기</p>
            </span>
            <span>
              <div css={styles.icon(arrow)} />
              <p>불러 오기</p>
            </span>
          </div>
          <div css={styles.backshadow} onClick={handlePlusBtn} />
        </>
      )}
    </>
  );
}

export default PlusBtn;

const styles = {
  plus_btn: css`
    position: fixed;
    bottom: 35px;
    right: 16px;

    width: 52px;
    height: 52px;
    border-radius: 50%;
    background-color: var(--Mint, #00dd9b);

    cursor: pointer;
    z-index: 10;
    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: block;
      width: 24px;
      height: 24px;
      background-image: url(${plus});
      background-size: contain;
    }
  `,
  modal: css`
    position: fixed;
    bottom: 25px;
    right: 70px;

    width: 118px;
    height: 70px;
    border-radius: 15px;
    background: #fff;
    box-shadow: 0px 0px 15px 0px rgba(96, 96, 96, 0.08);
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    color: var(--Black, #3a3a3a);
    font-size: 12px;
    font-weight: 400;

    z-index: 10;

    & > span {
      display: flex;
      align-items: center;
      padding: 6px 5px;
    }
  `,
  icon: (src: string) => css`
    width: 18px;
    height: 18px;
    background-image: url(${src});
    background-size: contain;

    margin-right: 15px;
  `,
  backshadow: css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;

    background-color: #00000014;
    z-index: 8;
  `,
};
