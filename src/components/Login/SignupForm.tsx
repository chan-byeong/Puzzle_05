import React from "react";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { css } from "@emotion/react";

import * as S from "../Mate/MateForm.style";
import DropDown from "../Common/DropDown";
import left_arrow from "../Mate/images/chevron-left-w.png";
import { OptionType } from "../Common/DropDown";
import usePostSignup from "../../hooks/Login/usePostSignup";

interface SignupType {
  email: string;
  pw: string;
  name: string;
  grade: number;
  hall: string;
  roomNum: string;
}

interface SignupFormProps {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const gradeOptions = [
  { value: 1, label: "1학년" },
  { value: 2, label: "2학년" },
  { value: 3, label: "3학년" },
  { value: 4, label: "4학년" },
];

const hallOptions = [
  { value: "레이크홀", label: "레이크홀" },
  { value: "비전홀", label: "비전홀" },
  { value: "프론티어홀", label: "프론티어홀" },
];

function SignupForm({ step, setStep }: SignupFormProps) {
  const { register, handleSubmit, setValue } = useForm();
  const mutation = usePostSignup();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const signUpData = data as SignupType;
    console.log(data);
    mutation.mutate(signUpData);
  };

  const handelSelectChange = (field: keyof SignupType) => (selectedOption: OptionType | null) => {
    if (selectedOption) {
      console.log(field, selectedOption);
      setValue(field, selectedOption.value);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <S.FormSection step={step} index={1}>
        <S.TextSection>
          <label className="star">이름</label>
          <input className="title" {...register("name", { required: true })} placeholder="이름을 입력해주세요" />
          {/* {errors.name && <p>이름은 필수 입력 사항입니다.</p>} */}
        </S.TextSection>
        <S.TextSection>
          <label className="star">학번</label>
          <input className="title" {...register("email", { required: true })} placeholder="학번을 입력해주세요" />
          {/* {errors.name && <p>이름은 필수 입력 사항입니다.</p>} */}
        </S.TextSection>
        <S.Question>
          <label className="star">학년</label>
          <div style={{ display: "flex" }}>
            <DropDown
              options={gradeOptions}
              styleOption="time"
              placeholder="학년"
              onChange={handelSelectChange("grade")}
            />
          </div>
        </S.Question>
      </S.FormSection>

      <S.FormSection step={step} index={2}>
        <S.TextSection>
          <label className="star">비밀번호</label>
          <input type="password" className="title" placeholder="비밀번호을 입력해주세요" />
          {/* {errors.name && <p>이름은 필수 입력 사항입니다.</p>} */}
        </S.TextSection>
        <S.TextSection>
          <label className="star">비밀번호 확인</label>
          <input
            type="password"
            className="title"
            {...register("pw", { required: true })}
            placeholder="비밀번호을 입력해주세요"
          />
          {/* {errors.name && <p>이름은 필수 입력 사항입니다.</p>} */}
        </S.TextSection>
      </S.FormSection>

      <S.FormSection step={step} index={3}>
        <S.Question>
          <label>홀</label>
          <div style={{ display: "flex" }}>
            <DropDown
              options={hallOptions}
              styleOption="date"
              placeholder="미정"
              onChange={handelSelectChange("hall")}
            />
          </div>
        </S.Question>
        <S.TextSection>
          <label>호수</label>
          <input className="title" {...register("roomNum")} placeholder="방 호수를 입력해주세요" />
        </S.TextSection>
      </S.FormSection>

      <div css={styles.container}>
        <button css={styles.back(step)} disabled={step === 1} onClick={() => setStep((pre) => pre - 1)}></button>
        {step !== 3 && (
          <div css={styles.next} onClick={() => setStep((pre) => pre + 1)}>
            확인
          </div>
        )}
        {step === 3 && (
          <button type="submit" css={styles.next}>
            작성완료
          </button>
        )}
      </div>
    </form>
  );
}

export default SignupForm;

const styles = {
  container: css`
    width: 90%;
    max-width: 358px;
    display: flex;
    justify-content: space-between;

    position: fixed;
    bottom: 35px;
  `,

  back: (step: number) => css`
    display: flex;
    width: 16%;
    height: 49px;
    justify-content: center;
    align-items: center;

    border-radius: 15px;
    background: ${step === 1 ? "#B7E5D7" : "#00dd9b"};
    box-shadow: 0px 0px 15px 0px rgba(96, 96, 96, 0.08);

    &::before {
      content: "";
      width: 30px;
      height: 30px;
      background-image: url(${left_arrow});
      background-position: center;
      background-size: contain;
    }
  `,

  next: css`
    display: flex;
    width: 80%;
    justify-content: center;
    align-items: center;

    border-radius: 15px;
    background: var(--Mint, #00dd9b);
    box-shadow: 0px 0px 15px 0px rgba(96, 96, 96, 0.08);

    color: #fff;
    font-size: 16px;
    font-weight: 600;

    border: none;
  `,

  divider: css`
    width: 10px;
  `,
};
