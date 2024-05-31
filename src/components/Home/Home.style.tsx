import styled from "@emotion/styled";

import arrow_up_right from "./images/arrow-up-right.png";
import arrow_up_right_b from "./images/arrow-up-right_b.png";
import mate_w from "./images/mate_w.png";
import share_w from "./images/share_w.png";

// export const Container = styled.div`
//   height: 186px;
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   grid-template-rows: repeat(2, 89px);
//   grid-gap: 8px;
// `;

export const Container = styled.div`
  /* height: 186px; */
  display: flex;
  justify-content: space-between;
`;

export const MenuItem = styled.div`
  border-radius: 20px;
  box-shadow: 0px 0px 15px 0px rgba(96, 96, 96, 0.08);
  background-color: #fff;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0 10px 0px;

  font-size: 14px;
  line-height: 19.6px; /* 140% */
  font-weight: 600;

  cursor: pointer;
`;

// export const MenuImg = styled.div`
//   width: 51px;
//   height: 51px;
//   border-radius: 50%;
//   background-color: #d9d9d95e;

//   display: flex;
//   align-items: center;
//   justify-content: center;

//   & > img {
//     width: 36px;
//     height: 36px;
//     object-fit: contain;
//   }
// `;

export const MenuBox = styled.div<{ share?: boolean }>`
  position: relative;
  width: 167px;
  height: 113px;
  border-radius: 15px;
  background: ${({ share }) => (share ? "#3A3A3A" : "#00D394")};
  padding: 16px;

  color: #fff;
  font-size: 24px;
  font-weight: 600;
  line-height: 24px; /* 100% */

  /* Mint Shadow */
  box-shadow: 1px 3px 15px 0px rgba(171, 191, 185, 0.3);

  cursor: pointer;

  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 28px;
    height: 28px;
    background-image: url(${arrow_up_right});
    top: 14px;
    right: 10px;
  }
`;

export const MenuImg = styled.div`
  width: 51px;
  height: 51px;
  background-color: transparent;
  background-size: contain;
  background-position: center;

  margin-top: 10px;
`;

export const MateImg = styled(MenuImg)`
  background-image: url(${mate_w});
`;

export const ShareImg = styled(MenuImg)`
  background-image: url(${share_w});
`;

export const HomeBox = styled.section<{ height?: number }>`
  position: relative;
  width: 100%;
  max-width: 390px;
  /* height: 93px; */
  border-radius: 15px;
  background: #f8f8f8;
  box-shadow: 1px 3px 15px 0px rgba(171, 191, 185, 0.3);
  padding: 16px;

  margin-top: 16px;

  & > :first-child {
    color: var(--Black, #3a3a3a);
    font-size: 24px;
    font-weight: 600;
    line-height: 24px; /* 100% */

    &::after {
      content: "";
      display: block;
      position: absolute;
      width: 28px;
      height: 28px;
      background-image: url(${arrow_up_right_b});
      top: 12px;
      right: 10px;
    }
  }
`;

export const Title = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: end;

  & > .letter {
    color: #3a3a3a;
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    justify-self: end;
  }

  & > .more {
    color: var(--Grey, #7b7b7b);
    font-size: 13px;
    font-weight: 400;
    line-height: 13px;

    cursor: pointer;
  }
`;

const Box = styled.div`
  border-radius: 15px;
  /* background: #fff; */
  box-shadow: 0px 0px 15px 0px rgba(96, 96, 96, 0.08);
`;

export const DormsBox = styled(Box)`
  display: flex;
  width: 100%;
  max-width: 390px;
  height: 44px;

  justify-content: space-evenly;
  align-items: center;

  margin-top: 16px;

  color: var(--Black, #3a3a3a);
  font-size: 15px;
  font-weight: 600;
  line-height: 19.6px; /* 130.667% */

  & > div {
    flex-shrink: 0;
    padding: 10px;
    cursor: pointer;
  }
`;

export const AnnounceBox = styled.div`
  display: inline-flex;
  /* padding: 15px; */
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;

  margin-top: 10px;
  & > p {
    width: 328px;
    /* height: 20px; */
    white-space: nowrap; /* 텍스트를 한 줄에 표시합니다. */
    overflow: hidden;
    color: #3a3a3a;
    text-overflow: ellipsis;
    font-size: 15px;
    font-weight: 400;
    line-height: 21px; /* 140% */

    cursor: pointer;
  }
`;

export const BulletinLine = styled.p`
  display: inline-flex;
  align-items: center;
  width: 328px;
  /* height: 20px; */
  white-space: nowrap; /* 텍스트를 한 줄에 표시합니다. */
  overflow: hidden;
  color: #3a3a3a;
  text-overflow: ellipsis;
  font-size: 15px;
  font-weight: 400;
  line-height: 21px; /* 140% */

  margin-top: 10px;

  cursor: pointer;

  &::before {
    content: "Hot";
    display: flex;
    width: 46px;
    height: 29px;
    justify-content: center;
    align-items: center;
    border-radius: 14px;
    background: var(--Black, #3a3a3a);

    color: #fff;
    font-size: 15px;
    font-weight: 400;
    line-height: 21px; /* 140% */

    margin-right: 12px;
    flex-shrink: 0;
  }
`;

export const HotTag = styled.div`
  display: flex;
  width: 46px;
  height: 29px;
  justify-content: center;
  align-items: center;
  border-radius: 14px;
  background: var(--Black, #3a3a3a);

  color: #fff;
  font-size: 15px;
  font-weight: 400;
  line-height: 21px; /* 140% */
`;

export const ViewDiet = styled(Box)`
  height: 44px;
  padding: 10px 15px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  color: #3a3a3a;
  font-size: 16px;
  font-weight: 600;
  line-height: 19.6px; /* 122.5% */

  margin-top: 10px;
`;

export const WeekMenu = styled(Box)`
  height: 118px;

  margin-top: 10px;
`;
