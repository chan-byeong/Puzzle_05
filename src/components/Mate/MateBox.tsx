import { css } from "@emotion/react";

import user_icon from "./images/user-icon.png";

function MateBox() {
  //TODO: 데이터 prop으로 받음

  return (
    <div css={styles.container}>
      <div css={styles.info}>
        <img src={user_icon} alt="profile" width={21} />
        <p className="info">만 21세 | 여자 | 2학년</p>
      </div>
      <div css={styles.title}>레이크홀 룸메 구함</div>
      <div css={styles.description}>
        안녕하세요 2024학년도 1학기 레이크홀 룸메 구합니다. 예민하지 않고 깨끗합니다. 같이 즐거운 한 학기
        보내요~~아아ㅏㅇㅇ아ㅏㅏ아ㅏ아아ㅏㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅏ저씨씨ㅣ씨씨씨
      </div>
    </div>
  );
}

export default MateBox;

const styles = {
  container: css`
    height: 114px;
    border-radius: 15px;
    background: #fff;
    display: flex;
    padding: 12px;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    margin-top: 10px;

    cursor: pointer;
  `,
  info: css`
    display: flex;
    align-items: center;

    & > img {
      margin-right: 8px;
    }

    & > .info {
      color: #585858;
      font-size: 12px;
      font-weight: 600;
    }
  `,
  title: css`
    color: #3a3a3a;
    font-size: 15px;
    font-weight: 600;
  `,
  description: css`
    overflow: hidden;
    color: #737373;
    text-overflow: ellipsis;
    font-size: 13px;
    font-weight: 400;
    line-height: 18.5px;
  `,
};
