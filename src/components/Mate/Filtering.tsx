import { useState } from "react";
import { css } from "@emotion/react";

import x from "./images/x.svg";
import down_arrow from "./images/chevron-down.png";

import Sorting from "../Common/Sorting";

function Filtering() {
  const [filters, setfilters] = useState([]);
  const [sort, setSort] = useState<string>("최신순");
  const [modalOpen, setModalOpen] = useState(false);

  const deletefilter = (index: number) => {
    const tmp = filters;
    tmp.splice(index, 1);
    console.log(tmp);
    setfilters(tmp);
    console.log("click");
  };

  return (
    <div css={styles.wrapper}>
      {/* prettier-ignore */}
      <div css={[styles.container,css`justify-content: start;`,]}>
        {filters.map((filter, index) => {
          return (
            //prettier-ignore
            <div css={[styles.filter, css`margin-left: 5px;`]} key={index}>
              {filter} &nbsp;
              <img src={x} onClick={()=>deletefilter(index)}/>
            </div>
          );
        })}
      </div>

      <div css={styles.container}>
        {/* TODO: 화살표 추가 및 정렬 모달 추가 */}
        {/* <div css={styles.sorting}>최신순&nbsp;</div> */}
        <Sorting sort={sort} setSort={setSort} modalOpen={modalOpen} setModalOpen={setModalOpen} />

        {/* prettier-ignore */}
        <div css={[styles.filter, css`padding: 0 16px;`]}>필터</div>
      </div>
    </div>
  );
}

export default Filtering;

const styles = {
  wrapper: css``,

  container: css`
    /* height: 32px; */
    width: 100%;

    display: flex;
    justify-content: space-between;

    margin-top: 10px;
  `,

  sorting: css`
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

  filter: css`
    height: 30px;
    display: inline-flex;
    justify-content: center;
    align-items: center;

    padding: 0 12px;

    border-radius: 15.5px;
    border: 1px solid var(--Mint, #00dd9b);
    background: #f9f9f9;

    color: var(--Mint, #00dd9b);
    font-size: 15px;
    font-weight: 600;
    line-height: 18px;
  `,
};
