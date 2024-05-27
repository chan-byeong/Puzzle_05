import styled from "@emotion/styled";

import clock from "./image/clock.png";
import map from "./image/map-pin.png";
import right_arrow from "./image/right_arrow_sm.png";
import users from "./image/users2.png";
import credit from "./image/credit-card.png";
import profile from "./image/profile_grn.png";

export const Prices = styled.div`
  width: 95px;
  overflow: hidden;
  color: var(--Mint, #00dd9b);
  text-overflow: ellipsis;
  font-size: 20px;
  font-weight: 700;
  line-height: 20px; /* 100% */

  & > .before_price {
    color: #737373;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-decoration-line: line-through;
    margin-bottom: 5px;
  }
`;

export const BeforePrice = styled.div`
  color: #737373;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-decoration-line: line-through;
`;

export const BackShadow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 390px;
  height: ${window.innerHeight < 844 ? "844px" : "100vh"};
  background-color: rgba(57, 57, 57, 0.5);
  z-index: 25;
`;

export const Container = styled.section`
  width: 100%;
  max-width: 430px;
  height: 368px;
  border-radius: 30px 30px 0px 0px;
  background: #fff;
  padding: 20px 16px 0 16px;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: absolute;
  top: calc(${innerHeight}px - 368px);
  left: 0;

  // animation bottom -> top
  z-index: 30;
`;

// css prop?
export const TextWrapper = styled.div`
  flex-shrink: 0;
  display: flex;
`;

export const Title = styled.p`
  color: var(--Black, #3a3a3a);
  font-size: 20px;
  font-weight: 600;
`;

export const Tag = styled.div`
  padding: 4.5px 10px;
  border-radius: 12.5px;
  border: 1px solid var(--Mint, #00dd9b);
  background: #fff;

  color: var(--Mint, #00dd9b);
  font-size: 13px;
  font-weight: 700;
`;

export const Icon = styled.div`
  width: 24px;
  height: 24px;
  background-size: contain;
  background-position: center;

  margin-right: 5px;
`;

export const Clock = styled(Icon)`
  background-image: url(${clock});
`;
export const MapPin = styled(Icon)`
  background-image: url(${map});
`;
export const More = styled(Icon)`
  width: 18px;
  height: 18px;
  background-image: url(${right_arrow});
  margin-right: 0px;
  margin-left: 6px;
`;
export const Users = styled(Icon)`
  background-image: url(${users});
`;
export const Credit = styled(Icon)`
  background-image: url(${credit});
`;
export const Profile = styled(Icon)`
  width: 21px;
  height: 21px;
  background-image: url(${profile});

  margin-right: 8px;
`;

export const Text = styled.span`
  color: var(--Black, #3a3a3a);
  font-size: 15px;
  font-weight: 500;
`;

export const ImgBox = styled.div<{ imgsrc: string }>`
  width: 158px;
  height: 158px;
  border-radius: 15px;

  background-image: ${({ imgsrc }) => `url(${imgsrc})`};
  background: lightgray 50% / cover no-repeat;
`;

export const Btn = styled.button`
  display: flex;
  /* width: 358px; */
  width: 100%;
  max-width: 430px;
  height: 49px;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  background: var(--Mint, #00dd9b);
  box-shadow: 0px 0px 15px 0px rgba(96, 96, 96, 0.08);

  color: #fff;
  font-size: 16px;
  font-weight: 600;
`;
