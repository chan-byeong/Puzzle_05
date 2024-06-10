import { css } from "@emotion/react";

import user from "./images/big_user.png";
import ProgressBar from "./ProgressBar";
import { DetailMatePostType } from "./MateDetail";
import { DELIVERY, BUG, GAME, TIDYUP, CLEANING } from "./MateForm";

interface MateInfoCardProps {
  first?: boolean;
  second?: boolean;
  data: DetailMatePostType;
}

const GENDER = { female: "여자", male: "남자" };
const SMOKING = { true: "O", false: "X" };

//TODO: 상세 정보 props & 첫장인지 아닌지 구분

function MateInfoCard({ first, data, second }: MateInfoCardProps) {
  const firstPage = (
    <div css={s.container}>
      <div css={s.userbox}>
        <div css={s.imgbox()} />
        <div
          css={css`
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            position: absolute;
            top: 23px;
            left: 120px;
          `}
        >
          <p css={s.major}>비공개</p>
          <p css={s.infos}>
            만 {data.age}세 <span>|</span> {GENDER[data.gender]} <span>|</span> {data.mbti}
          </p>
          <ProgressBar step={80} TOTAL={100} customWidth="130" customLeft="1" customTop="73" customHeigth="10" />
          <label css={s.label}>80</label>
        </div>
      </div>
      <div css={s.detailsWrapper}>
        <div css={s.title}>{data.title}</div>
        <p css={s.description}>{data.contents}</p>
      </div>
    </div>
  );

  const infoPage = (
    <div css={s.container}>
      <div css={s.title_green}>생활 패턴</div>
      <div css={s.detailsWrapper}>
        <p css={s.details}>
          <span className="left">기상시간</span>
          <span className="right">
            {data.wakeUpStart}-{data.wakeUpEnd} 시
          </span>
        </p>
        <p css={s.details}>
          <span className="left">취침시간</span>
          <span className="right">
            {data.sleepStart}-{data.sleepEnd} 시
          </span>
        </p>
        <p css={s.details}>
          <span className="left">거주요일</span>
          <span className="right">{data.dayOfWeek}</span>
        </p>
        <p css={s.details}>
          <span className="left">샤워시간</span>
          <span className="right">
            {data.showerStart}-{data.showerEnd} 시
          </span>
        </p>
      </div>
    </div>
  );

  const infoPage2 = (
    <div css={s.container}>
      <div css={s.title_green}>특성</div>
      <div css={s.detailsWrapper}>
        <p css={s.details}>
          <span className="left">흡연</span>
          <span className="right">{SMOKING[data.smoking]}</span>
        </p>
        <p css={s.details}>
          <span className="left">배달음식</span>
          <span className="right">{DELIVERY[data.deliveryFood]}</span>
        </p>
        <p css={s.details}>
          <span className="left">게임/통화</span>
          <span className="right">{GAME[data.gameAndCall]}</span>
        </p>
        <p css={s.details}>
          <span className="left">정리정돈</span>
          <span className="right">{TIDYUP[data.homeProtector]}</span>
        </p>
        <p css={s.details}>
          <span className="left">청소</span>
          <span className="right">{CLEANING[data.cleaning]}</span>
        </p>
        <p css={s.details}>
          <span className="left">벌레잡기</span>
          <span className="right">{BUG[data.killBug]}</span>
        </p>
      </div>
    </div>
  );

  return first ? firstPage : second ? infoPage : infoPage2;
}

export default MateInfoCard;

const s = {
  container: css`
    width: 358px;
    /* height: 349px; */
    display: flex;
    flex-direction: column;
    /* justify-content: space-evenly; */
    align-items: center;
    padding: 40px 0;

    border-radius: 30px;
    background: #fff;
    box-shadow: 0px 0px 15px 0px rgba(96, 96, 96, 0.08);
  `,

  userbox: css`
    width: 328px;
    height: 133px;
    flex-shrink: 0;
    border-radius: 20px;
    border: 1px solid var(--Mint, #00dd9b);
    background: #fff;
    padding: 0 10px;

    position: relative;
  `,

  imgbox: (src?: string) => css`
    width: 86px;
    height: 86px;
    border-radius: 50%;
    background-image: ${src ? `url(${src})` : `url(${user})`};
    background-size: contain;

    position: absolute;
    top: 23px;
    left: 17px;
  `,

  major: css`
    color: #3a3a3a;
    font-size: 15px;
    font-weight: 700;
    line-height: 22.4px; /* 149.333% */
    width: 180px;
  `,

  infos: css`
    width: 180px;
    color: #3a3a3a;
    font-size: 15px;
    font-weight: 400;
    line-height: 22.4px; /* 149.333% */

    margin-top: 10px;

    & > span {
      color: #afafaf;
      padding: 0 12px;
    }
  `,

  label: css`
    position: absolute;
    left: 153px;
    top: 67px;

    color: #00dd9b;
    font-size: 15px;
    font-weight: 700;
    line-height: 22.4px;
  `,

  title: css`
    color: var(--Black, #3a3a3a);
    text-align: center;
    font-size: 22px;
    font-weight: 600;

    margin-top: 20px;
  `,

  title_green: css`
    color: #00dd9b;
    text-align: center;
    font-size: 22px;
    font-weight: 600;

    /* margin-top: 20px; */
  `,

  detailsWrapper: css`
    /* width: 200px; */
    /* height: 180px; */
    margin: 0 auto;
    /* display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; */
  `,

  description: css`
    padding: 20px;

    color: #3a3a3a;
    text-align: center;
    font-size: 15px;
    font-weight: 400;
    line-height: 24px; /* 160% */

    /* margin-top: 16px; */
  `,

  details: css`
    /* width: 140px; */
    display: flex;
    /* justify-content: space-between; */
    text-align: center;
    margin-top: 20px;
    gap: 30px;
    & > .left {
      width: 82px;
      color: #3a3a3a;
      font-size: 15px;
      font-weight: 400;
      line-height: 24px; /* 160% */
      text-align: end;
    }

    & > .right {
      color: #3a3a3a;
      font-size: 20px;
      font-weight: 600;
      line-height: 24px; /* 160% */
    }
  `,
};
