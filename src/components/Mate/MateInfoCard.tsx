import { css } from "@emotion/react";
import { UserCard } from "../Common/UserCard";

import user from "./images/big_user.png";
import ProgressBar from "./ProgressBar";

interface MateInfoCardProps {
  first?: boolean;
}

//TODO: 상세 정보 props & 첫장인지 아닌지 구분
function MateInfoCard({ first }: MateInfoCardProps) {
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
          <p css={s.major}>22학번 컴퓨터공학부</p>
          <p css={s.infos}>
            만 21세 <span>|</span> 여자 <span>|</span> ISTJ
          </p>
          <ProgressBar step={80} TOTAL={100} customWidth="130" customLeft="1" customTop="73" customHeigth="10" />
          <label css={s.label}>80</label>
        </div>
      </div>
      <div css={s.detailsWrapper}>
        <div css={s.title}>룸메 구함</div>
        <p css={s.description}>
          안녕하세요 2024학년도 1학기 레이크홀 룸메 구합니다. 예민하지 않고 깨끗합니다. 같이 즐거운 한 학기 보내요~
        </p>
      </div>
    </div>
  );

  const infoPage = (
    <div css={s.container}>
      <div css={s.title}>생활 패턴</div>
      <div css={s.detailsWrapper}>
        <p css={s.details}>
          <span className="left">기상시간</span>
          <span className="right">10-11 시</span>
        </p>
        <p css={s.details}>
          <span className="left">기상시간</span>
          <span className="right">10-11 시</span>
        </p>
        <p css={s.details}>
          <span className="left">기상시간</span>
          <span className="right">10-11 시</span>
        </p>
        <p css={s.details}>
          <span className="left">기상시간</span>
          <span className="right">10-11 시</span>
        </p>
      </div>
    </div>
  );

  return first ? firstPage : infoPage;
}

export default MateInfoCard;

const s = {
  container: css`
    width: 358px;
    height: 349px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 20px 0;

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
    /* width: calc(${(step / TOTAL) * 100}%); */
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

  detailsWrapper: css`
    /* width: 200px; */
    height: 180px;
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
    width: 140px;
    display: flex;
    justify-content: space-between;
    text-align: center;
    margin-top: 20px;

    & > .left {
      color: #3a3a3a;
      font-size: 15px;
      font-weight: 400;
      line-height: 24px; /* 160% */
    }

    & > .right {
      color: #3a3a3a;
      font-size: 15px;
      font-weight: 700;
      line-height: 24px; /* 160% */
    }
  `,
};
