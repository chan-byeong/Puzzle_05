import React from "react";
import { css } from "@emotion/react";

import down_arrow from "../Mate/images/chevron-down.png";

interface SortingProps {
  sort: string;
  setSort: React.Dispatch<React.SetStateAction<string>>;
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const sortOptions = ["최신순", "조회순", "과거순"];

function Sorting({ sort, setSort, modalOpen, setModalOpen }: SortingProps) {
  return (
    <div css={style.sorting} onClick={() => setModalOpen((pre) => !pre)}>
      {sort}
      {modalOpen && (
        <div css={style.sortBox}>
          {sortOptions.map((item) => {
            if (sort !== item) return <p onClick={() => setSort(item)}>{item}</p>;
          })}
        </div>
      )}
    </div>
  );
}

export default Sorting;

const style = {
  sorting: css`
    position: relative;
    width: 90px;
    height: 30px;
    display: inline-flex;
    justify-content: center;
    align-items: center;

    border-radius: 15.5px;
    background: #fff;
    box-shadow: 0px 0px 15px 0px rgba(96, 96, 96, 0.08);

    color: var(--Grey, #7b7b7b);
    font-size: 15px;
    font-weight: 600;

    &::after {
      content: "";
      display: block;
      width: 24px;
      height: 24px;
      background-image: url(${down_arrow});
      background-size: contain;
      background-position: center;
    }
  `,

  sortBox: css`
    position: absolute;
    width: 65px;
    height: 72px;
    display: inline-flex;
    padding: 12px 13px;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    border-radius: 15px;
    background: #fff;
    box-shadow: 0px 0px 15px 0px rgba(96, 96, 96, 0.08);

    top: 33px;
    left: 0;

    z-index: 3;

    & > p {
      font-size: 15px;
      line-height: normal;
    }
  `,
};
