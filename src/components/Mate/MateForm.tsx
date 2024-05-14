import { useForm, useController, SubmitHandler, FieldValues } from "react-hook-form";
import { useState } from "react";

import * as F from "./MateForm.style";
import DotSlider from "./DotSlider";
import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../../hooks/axios";

type FormData = {
  age: string;
  contents: string;
  day: string;
  deliveryFood: number;
  familiarity: number;
  gameAndCall: number;
  gender: string;
  homeProtector: number;
  light: number;
  mbti: string;
  noiseSense: number;
  noisiness: number;
  personalTime: number;
  showerEnd: string;
  showerStart: string;
  sleepEnd: string;
  sleepStart: string;
  smoking: string;
  snoring: string;
  title: string;
  wakeUpEnd: string;
  wakeUpStart: string;
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
const ranges = ["하나", "두울", "세엣", "네엣", "다섯"];

function MateForm() {
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  // prettier-ignore
  const { register, handleSubmit, control , watch, setValue } = useForm();

  // console.log("12");
  // const mutation = usePostMateWritings();
  // console.log("34");

  const mutation = useMutation({ mutationFn: (data: FormData) => axiosInstance.post("/mate-posts", data) });

  const onSubmit: SubmitHandler<FieldValues> = (data: FieldValues) => {
    const formData: FormData = data as FormData; // FormData로 변환
    console.log(formData);
    console.log("onsubmit");
    mutation.mutate(formData);
  };

  const handleDayClick = (day: string) => {
    const updatedDays = selectedDays.includes(day) ? selectedDays.filter((d) => d !== day) : [...selectedDays, day];

    setSelectedDays(updatedDays);
    setValue("day", updatedDays); // React Hook Form의 setValue를 사용하여 상태 업데이트
  };

  const { field: noiseSense } = useController({
    name: "noiseSense",
    control,
  });

  const { field: light } = useController({
    name: "light",
    control,
  });

  const { field: noisiness } = useController({
    name: "noisiness",
    control,
  });

  const { field: personalTime } = useController({
    name: "personalTime",
    control,
  });

  const { field: familiarity } = useController({
    name: "familiarity",
    control,
  });

  const { field: deliveryFood } = useController({
    name: "deliveryFood",
    control,
  });

  const { field: homeProtector } = useController({
    name: "homeProtector",
    control,
  });

  const { field: gameAndCall } = useController({
    name: "gameAndCall",
    control,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <F.FormSection>
        <F.TextSection>
          <label>제목</label>
          <input className="title" {...register("title", { required: true })} placeholder="이름" />
          {/* {errors.name && <p>이름은 필수 입력 사항입니다.</p>} */}
        </F.TextSection>

        <F.TextSection>
          <label>룸메에게 한 마디</label>
          <textarea className="contents" {...register("contents")} placeholder="자기소개" />
        </F.TextSection>
      </F.FormSection>

      <F.FormSection>
        {/* 성별 */}
        <F.Question>
          <label>성별</label>
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
          <label>나이</label>
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

      <F.FormSection>
        {/* TODO: 시간 데이터 형식 설정해서 register 시켜야한다. */}
        {/* 기상시간  */}
        <F.Question>
          <label>기상시간</label>
          <div>
            <F.NumberInput placeholder="10" maxLength={2} {...register("wakeUpStart", { required: true })} />
            &nbsp;&nbsp;~&nbsp;&nbsp;
            <F.NumberInput placeholder="11" maxLength={2} {...register("wakeUpEnd", { required: true })} />
            &nbsp;&nbsp;시
          </div>
        </F.Question>

        <F.Question>
          <label>취침시간</label>
          <div>
            <F.NumberInput placeholder="2" maxLength={2} {...register("sleepStart", { required: true })} />
            &nbsp;&nbsp;~&nbsp;&nbsp;
            <F.NumberInput placeholder="3" maxLength={2} {...register("sleepEnd", { required: true })} />
            &nbsp;&nbsp;시
          </div>
        </F.Question>

        <F.Question>
          <label>샤워시간</label>
          <div>
            <F.NumberInput placeholder="10" maxLength={2} {...register("showerStart", { required: true })} />
            &nbsp;&nbsp;~&nbsp;&nbsp;
            <F.NumberInput placeholder="11" maxLength={2} {...register("showerEnd", { required: true })} />
            &nbsp;&nbsp;시
          </div>
        </F.Question>

        {/* TODO: 중복선택 */}
        <F.Question>
          <label>거주요일</label>
          <div className="mbti">
            {WEEK.map((item, index) => (
              <F.WeekDays
                key={item + index}
                onClick={(e) => {
                  e.preventDefault();
                  handleDayClick(item);
                }}
                selected={selectedDays.includes(item)}
                {...register("day")}
              >
                {item}
              </F.WeekDays>
            ))}
          </div>
        </F.Question>
      </F.FormSection>

      <F.FormSection>
        {/* 코골이 */}
        <F.Question>
          <label>코골이</label>
          <div>
            <F.BinaryBtn
              selected={watch("snoring") === "true"}
              onClick={(e) => {
                e.preventDefault();
                setValue("snoring", "true");
              }}
              {...register("snoring")}
            >
              O
            </F.BinaryBtn>
            <F.BinaryBtn
              selected={watch("snoring") === "false"}
              onClick={(e) => {
                e.preventDefault();
                setValue("snoring", "false");
              }}
              {...register("snoring")}
            >
              X
            </F.BinaryBtn>
          </div>
        </F.Question>

        {/* 소음 예민도 */}
        <F.Question>
          <label>소음 예민도</label>
          <div className="slider">
            <DotSlider ranges={ranges} value={noiseSense.value} setValue={noiseSense.onChange} />
          </div>
        </F.Question>

        {/* 조명 예민도 */}
        <F.Question>
          <label>조명 예민도</label>
          <div className="slider">
            <DotSlider ranges={ranges} value={light.value} setValue={light.onChange} />
          </div>
        </F.Question>

        <F.Question>
          <label>시끄러운 정도</label>
          <div className="slider" style={{ marginBottom: "20px" }}>
            <DotSlider ranges={ranges} value={noisiness.value} setValue={noisiness.onChange} />
          </div>
        </F.Question>
      </F.FormSection>

      {/* 흡연 */}
      <F.Question>
        <label>흡연</label>
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
        <label>개인 시간 필요도</label>
        <div className="slider">
          <DotSlider key="personalTime" ranges={ranges} value={personalTime.value} setValue={personalTime.onChange} />
        </div>
      </F.Question>

      <F.Question>
        <label>친해질 정도</label>
        <div className="slider">
          <DotSlider key="familiarity" ranges={ranges} value={familiarity.value} setValue={familiarity.onChange} />
        </div>
      </F.Question>

      <F.Question>
        <label>배달 음식</label>
        <div className="slider">
          <DotSlider key="deliveryFood" ranges={ranges} value={deliveryFood.value} setValue={deliveryFood.onChange} />
        </div>
      </F.Question>

      <F.Question>
        <label>집에 있는 시간</label>
        <div className="slider">
          <DotSlider
            key="homeProtector"
            ranges={ranges}
            value={homeProtector.value}
            setValue={homeProtector.onChange}
          />
        </div>
      </F.Question>

      <F.Question>
        <label>게임 / 통화</label>
        <div className="slider">
          <DotSlider key="gameAndCall" ranges={ranges} value={gameAndCall.value} setValue={gameAndCall.onChange} />
        </div>
      </F.Question>

      <F.SubmitBtn type="submit">작성완료</F.SubmitBtn>
    </form>
  );
}

export default MateForm;
