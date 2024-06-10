import React from "react";
import { css } from "@emotion/react";

interface ModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  setApply?: React.Dispatch<React.SetStateAction<boolean>>;
}

function Modal({ isOpen, setIsOpen, title, setApply }: ModalProps) {
  const handleModal = (e) => {
    e.target.innerText === "네" ? setApply(true) : setApply(false);
    setIsOpen((pre) => !pre);
  };

  return (
    <>
      {isOpen && (
        <>
          <div css={styles.container}>
            <div css={styles.title}>{title}</div>
            <div css={styles.btn_box}>
              <button css={styles.btn_n} onClick={handleModal}>
                아니오
              </button>
              <button css={styles.btn_y} onClick={handleModal}>
                네
              </button>
            </div>
          </div>
          <div css={styles.backshadow} onClick={handleModal} />
        </>
      )}
    </>
  );
}

export default Modal;

const styles = {
  container: css`
    width: 330px;
    height: 211px;

    padding: 20px;
    border-radius: 30px;
    background: #fff;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -88%);

    z-index: 30;
  `,
  backshadow: css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    max-width: 390px;
    height: 100%;

    background-color: #0000005c;
    z-index: 25;
  `,
  title: css`
    color: var(--Black, #3a3a3a);
    text-align: center;
    font-size: 22px;
    font-weight: 600;
    line-height: 30.8px; /* 140% */

    margin: 45px 0 46px 0;
  `,
  btn_box: css`
    display: flex;
    justify-content: space-around;
  `,
  btn_y: css`
    width: 141px;
    height: 49px;
    display: inline-flex;
    padding: 15px 20px;
    justify-content: center;
    align-items: center;

    border-radius: 15px;
    background: var(--Mint, #00dd9b);
    color: #fff;
    text-align: center;
    font-size: 16px;
    font-weight: 600;

    border: none;
  `,

  btn_n: css`
    width: 141px;
    height: 49px;
    display: inline-flex;
    justify-content: center;
    align-items: center;

    border-radius: 15px;
    background: #d9d9d9;
    color: #fff;
    text-align: center;
    font-size: 16px;
    font-weight: 600;

    border: none;
  `,
};
