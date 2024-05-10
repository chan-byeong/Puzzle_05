import styled from "@emotion/styled";

export const NumberInput = styled.input`
  width: 63px;
  height: 48px;
  padding: 20px;
  border-radius: 15px;
  background: #e5e5e5;
  border: none;

  color: #3a3a3a;
  font-size: 15px;
  font-weight: 500;
  text-align: center;

  &::placeholder {
    color: #a0a0a0;
    font-size: 15px;
    font-weight: 500;
  }
  &:focus {
    outline: none;
  }
`;

const Btn = styled.button<{ selected: boolean }>`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  border-radius: 15px;
  font-size: 15px;
  font-weight: 500;
  border: none;

  background: ${({ selected }) => (selected ? "#3A3A3A" : "#e5e5e5")};
  color: ${({ selected }) => (selected ? "#F9F9F9" : "#7B7B7B")};
`;

export const BinaryBtn = styled(Btn)`
  width: 93px;
  height: 40px;
  border-radius: 20px;

  margin-right: 10px;
`;

export const WeekDays = styled(Btn)`
  width: 44px;
  height: 48px;
`;

export const Mbti = styled(Btn)`
  width: 82px;
  height: 48px;
`;

export const TextSection = styled.div`
  margin-top: 20px;
  width: 100%;
  flex-shrink: 0;
  & > label {
    color: var(--Black, #3a3a3a);
    font-size: 15px;
    font-weight: 600;
  }

  & > input,
  textarea {
    width: 100%;
    padding: 15px;
    border-radius: 15px;
    background: #e5e5e5;
    border: none;

    color: #3a3a3a;
    font-size: 15px;
    font-weight: 500;

    margin-top: 5px;
    &:focus {
      outline: none;
    }
  }

  & > input::placeholder,
  textarea::placeholder {
    color: #a0a0a0;
    font-size: 15px;
    font-weight: 500;
  }

  & > .title {
    height: 48px;
  }
  & > .description {
    height: 134px;
  }
`;

export const Question = styled.div`
  margin-top: 20px;

  & > label {
    color: var(--Black, #3a3a3a);
    font-size: 15px;
    font-weight: 600;
  }
  & > div {
    margin-top: 5px;
    color: #3a3a3a;
    font-size: 15px;
  }

  & > .mbti {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
  }

  & > .slider {
    margin-bottom: 42px;
  }
`;

export const FormSection = styled.div`
  /* height: calc(100vh - 200px);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */

  padding-bottom: 20px;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    display: block;
    width: 390px;
    height: 0.5px;
    background-color: #a0a0a0;
    bottom: 0;
    left: -16px;
  }
`;

export const SubmitBtn = styled.button`
  display: flex;
  width: 358px;
  padding: 15px 128px;
  justify-content: center;
  align-items: center;

  border-radius: 15px;
  background: var(--Mint, #00dd9b);
  box-shadow: 0px 0px 15px 0px rgba(96, 96, 96, 0.08);

  color: #fff;
  font-size: 16px;
  font-weight: 600;

  margin-top: 48px;

  border: none;
`;
