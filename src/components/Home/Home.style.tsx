import styled from "@emotion/styled";

export const Container = styled.div`
  height: 186px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 89px);
  grid-gap: 8px;
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

export const MenuImg = styled.div`
  width: 51px;
  height: 51px;
  border-radius: 50%;
  background-color: #d9d9d95e;

  display: flex;
  align-items: center;
  justify-content: center;

  & > img {
    width: 36px;
    height: 36px;
    object-fit: contain;
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
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 0px 15px 0px rgba(96, 96, 96, 0.08);
`;

export const AnnounceBox = styled(Box)`
  display: inline-flex;
  padding: 15px;
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
