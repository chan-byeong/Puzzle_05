import { useForm, useController, SubmitHandler, FieldValues } from "react-hook-form";
import { useState } from "react";
import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";

import * as F from "./MateForm.style";
import DotSlider from "./DotSlider";
import usePostMatePost from "../../hooks/Mate/post/usePostMatePost";
import left_arrow from "./images/chevron-left-w.png";

type FormData = {
  title: string;
  contents: string;
  gender: string;
  age: number;
  mbti: string;
  wakeUpStart: number;
  wakeUpEnd: number;
  sleepStart: number;
  sleepEnd: number;
  showerStart: number;
  showerEnd: number;
  dayOfWeek: string;
  smoking: string;
  deliveryFood: number;
  gameAndCall: number;
  homeProtector: number;
  cleaning: number;
  killBug: number;
};

const MBTI = [
  "INFP",
  "INFJ",
  "INTJ",
  "INTP",
  "ISFP",
  "ISFJ",
  "ISTP",
  "ISTJ",
  "ENFP",
  "ENFJ",
  "ENTP",
  "ENTJ",
  "ESFP",
  "ESFJ",
  "ESTP",
  "ESTJ",
];
const WEEK = ["월", "화", "수", "목", "금", "토", "일"];

export const DELIVERY = ["안 먹음", "일주일 1번 이하", "일주일 2-3번", "일주일 4-5번", "매일"];
export const GAME = ["거의 안함", "일주일 1번 이하", "일주일 2-3번", "일주일 4-5번", "매일"];
export const TIDYUP = ["바닥에 던져둠", "필요할 때만", "가끔 어지러운 편", "정해진 위치에만", "언제나 각잡히게"];
export const CLEANING = [" 전혀 안함", "더러우면 가끔", "일주일에 2-3번", "일주일에 4-5번", "매일"];
export const BUG = ["아예 못 잡음", "  초소형벌레 가능", "  중형 벌레 가능", "  바퀴벌레 가능", "  벌레와 친함"];
// const delivery = [""]

interface MateFormProps {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

function MateForm({ step, setStep }: MateFormProps) {
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  // prettier-ignore
  const { register, handleSubmit, control , watch, setValue } = useForm();
  const nav = useNavigate();

  const mutation = usePostMatePost();

  const onSubmit: SubmitHandler<FieldValues> = (data: FieldValues) => {
    const formData: FormData = data as FormData; // FormData로 변환
    console.log(formData);
    data.age = parseInt(data.age);
    data.wakeUpStart = parseInt(data.wakeUpStart);
    data.wakeUpEnd = parseInt(data.wakeUpEnd);
    data.sleepStart = parseInt(data.sleepStart);
    data.sleepEnd = parseInt(data.sleepEnd);
    data.showerStart = parseInt(data.showerStart);
    data.showerEnd = parseInt(data.showerEnd);
    mutation.mutate(formData);
  };
  if (mutation.isSuccess) nav(-1);

  const handleDayClick = (day: string) => {
    const updatedDays = selectedDays.includes(day) ? selectedDays.filter((d) => d !== day) : [...selectedDays, day];

    setSelectedDays(updatedDays);
    setValue("dayOfWeek", updatedDays); // React Hook Form의 setValue를 사용하여 상태 업데이트
  };

  const { field: homeProtector } = useController({
    name: "homeProtector",
    control,
  });

  const { field: cleaning } = useController({
    name: "cleaning",
    control,
  });

  const { field: deliveryFood } = useController({
    name: "deliveryFood",
    control,
  });

  const { field: killBug } = useController({
    name: "killBug",
    control,
  });

  const { field: gameAndCall } = useController({
    name: "gameAndCall",
    control,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Step 1 */}
      <F.FormSection step={step} index={1}>
        <F.TextSection>
          <label>제목</label>
          <input className="title" {...register("title", { required: true })} placeholder="제목을 입력해주세요" />
          {/* {errors.name && <p>이름은 필수 입력 사항입니다.</p>} */}
        </F.TextSection>
      </F.FormSection>

      {/* Step 2 */}
      <F.FormSection step={step} index={2}>
        {/* 성별 */}
        <F.Question>
          <label className="star">성별</label>
          <div>
            <F.BinaryBtn
              type="button"
              selected={watch("gender") === "male"}
              onClick={(e) => {
                e.preventDefault();
                setValue("gender", "male");
              }}
              {...register("gender")}
            >
              남자
            </F.BinaryBtn>
            <F.BinaryBtn
              selected={watch("gender") === "female"}
              onClick={(e) => {
                e.preventDefault();
                setValue("gender", "female");
              }}
              {...register("gender")}
            >
              여자
            </F.BinaryBtn>
          </div>
        </F.Question>

        {/* 나이 */}
        <F.Question>
          <label className="star">나이</label>
          <div>
            만&nbsp; <F.NumberInput {...register("age", { required: true })} placeholder="20" maxLength={2} /> &nbsp;세
          </div>
        </F.Question>

        {/* MBTI */}
        <F.Question>
          <label>MBTI</label>
          <div className="mbti">
            {MBTI.map((item, index) => (
              <F.Mbti
                key={index + item}
                selected={watch("mbti") === item}
                onClick={(e) => {
                  e.preventDefault();
                  setValue("mbti", item);
                }}
                {...register("mbti")}
              >
                {item}
              </F.Mbti>
            ))}
          </div>
        </F.Question>
      </F.FormSection>

      {/* Step 3 */}
      <F.FormSection step={step} index={3}>
        {/* TODO: 시간 데이터 형식 설정해서 register 시켜야한다. */}
        {/* 기상시간  */}
        <F.Question>
          <label className="star">기상시간</label>
          <div>
            <F.NumberInput placeholder="10" maxLength={2} {...register("wakeUpStart", { required: true })} />
            &nbsp;&nbsp;~&nbsp;&nbsp;
            <F.NumberInput placeholder="11" maxLength={2} {...register("wakeUpEnd", { required: true })} />
            &nbsp;&nbsp;시
          </div>
        </F.Question>

        <F.Question>
          <label className="star">취침시간</label>
          <div>
            <F.NumberInput placeholder="2" maxLength={2} {...register("sleepStart", { required: true })} />
            &nbsp;&nbsp;~&nbsp;&nbsp;
            <F.NumberInput placeholder="3" maxLength={2} {...register("sleepEnd", { required: true })} />
            &nbsp;&nbsp;시
          </div>
        </F.Question>

        <F.Question>
          <label className="star">샤워시간</label>
          <div>
            <F.NumberInput placeholder="10" maxLength={2} {...register("showerStart", { required: true })} />
            &nbsp;&nbsp;~&nbsp;&nbsp;
            <F.NumberInput placeholder="11" maxLength={2} {...register("showerEnd", { required: true })} />
            &nbsp;&nbsp;시
          </div>
        </F.Question>

        {/* TODO: 중복선택 */}
        <F.Question>
          <label className="star">거주요일</label>
          <div className="mbti">
            {WEEK.map((item, index) => (
              <F.WeekDays
                key={item + index}
                onClick={(e) => {
                  e.preventDefault();
                  handleDayClick(item);
                }}
                selected={selectedDays.includes(item)}
                {...register("dayOfWeek")}
              >
                {item}
              </F.WeekDays>
            ))}
          </div>
        </F.Question>
      </F.FormSection>

      {/* Step 4 */}
      <F.FormSection step={step} index={4}>
        {/* 흡연 */}
        <F.Question>
          <label className="star">흡연</label>
          <div>
            <F.BinaryBtn
              selected={watch("smoking") === "true"}
              onClick={(e) => {
                e.preventDefault();
                setValue("smoking", "true");
              }}
              {...register("smoking")}
            >
              O
            </F.BinaryBtn>
            <F.BinaryBtn
              selected={watch("smoking") === "false"}
              onClick={(e) => {
                e.preventDefault();
                setValue("smoking", "false");
              }}
              {...register("smoking")}
            >
              X
            </F.BinaryBtn>
          </div>
        </F.Question>

        <F.Question>
          <label className="star">배달 음식</label>
          <div className="slider">
            <DotSlider
              key="deliveryFood"
              ranges={DELIVERY}
              value={deliveryFood.value}
              setValue={deliveryFood.onChange}
            />
          </div>
        </F.Question>

        <F.Question>
          <label className="star">게임 / 통화</label>
          <div className="slider">
            <DotSlider key="gameAndCall" ranges={GAME} value={gameAndCall.value} setValue={gameAndCall.onChange} />
          </div>
        </F.Question>

        <F.Question>
          <label className="star">정리정돈</label>
          <div className="slider">
            <DotSlider
              key="homeProtector"
              ranges={TIDYUP}
              value={homeProtector.value}
              setValue={homeProtector.onChange}
            />
          </div>
        </F.Question>

        <F.Question>
          <label className="star">청소</label>
          <div className="slider">
            <DotSlider key="cleaning" ranges={CLEANING} value={cleaning.value} setValue={cleaning.onChange} />
          </div>
        </F.Question>

        <F.Question>
          <label className="star">벌레잡기</label>
          <div className="slider">
            <DotSlider key="killBug" ranges={BUG} value={killBug.value} setValue={killBug.onChange} />
          </div>
        </F.Question>
      </F.FormSection>

      <F.FormSection step={step} index={5}>
        <F.TextSection>
          <label>룸메에게 한 마디</label>
          <textarea className="contents" {...register("contents")} placeholder="자기소개" />
        </F.TextSection>
      </F.FormSection>

      <div css={styles.container}>
        <button css={styles.back(step)} disabled={step === 1} onClick={() => setStep((pre) => pre - 1)}></button>
        {step !== 5 && (
          <div css={styles.next} onClick={() => setStep((pre) => pre + 1)}>
            확인
          </div>
        )}
        {step === 5 && (
          <button type="submit" css={styles.next}>
            작성완료
          </button>
        )}
      </div>
    </form>
  );
}

export default MateForm;

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
};
