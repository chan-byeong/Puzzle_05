import React from "react";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { css } from "@emotion/react";
import { useMutation } from "@tanstack/react-query";

import * as S from "../Mate/MateForm.style";
import DropDown from "../Common/DropDown";
import { OptionType } from "../Common/DropDown";
import left_arrow from "../Mate/images/chevron-left-w.png";
import request from "../../hooks/api";

interface ShareFormProps {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

interface SharePostDataType {
  title: string;
  category: string;
  endDay: string;
  endTime: string;
  counts: number;
  price: number;
  link: string;
}

const generateOptions = (): OptionType[] => {
  const options: OptionType[] = [];

  for (let hour = 1; hour <= 24; hour++) {
    const formattedHour = hour < 10 ? `0${hour}:00` : `${hour}:00`;
    options.push({ value: formattedHour, label: formattedHour });

    if (hour !== 24) {
      const formattedHalfHour = hour < 10 ? `0${hour}:30` : `${hour}:30`;
      options.push({ value: formattedHalfHour, label: formattedHalfHour });
    }
  }

  return options;
};

const generateDateOptions = (): OptionType[] => {
  const options: OptionType[] = [];
  const today = new Date();

  for (let i = 0; i < 7; i++) {
    const currentDate = new Date(today);
    currentDate.setDate(today.getDate() + i);

    const month = `${currentDate.getMonth() + 1}`.padStart(2, "0");
    const date = `${currentDate.getDate()}`.padStart(2, "0");
    const day = currentDate.toLocaleDateString("ko-KR", { weekday: "short" });

    const formattedDate = `${month}월 ${date}일(${day})`;
    options.push({ value: formattedDate, label: formattedDate });
  }

  return options;
};

const timeOptions = generateOptions();
const dateOptions = generateDateOptions();

function ShareForm({ step, setStep }: ShareFormProps) {
  const { register, handleSubmit, watch, setValue } = useForm();

  const mutation = useMutation({
    mutationKey: ["share-form"],
    mutationFn: (data: SharePostDataType) => request("/buy-posts", { method: "post", body: JSON.stringify(data) }),
  });

  const onSubmit: SubmitHandler<FieldValues> = (data: FieldValues) => {
    data.counts = parseInt(data.counts);
    data.price = parseInt(data.price);
    const formData: SharePostDataType = data as SharePostDataType; // FormData로 변환
    console.log(formData);
    mutation.mutate(formData);
  };

  const handelSelectChange = (field: keyof SharePostDataType) => (selectedOption: OptionType | null) => {
    if (selectedOption) {
      console.log(field, selectedOption);
      setValue(field, selectedOption.value);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <S.FormSection step={step} index={1}>
        <S.TextSection>
          <label className="star">제목</label>
          <input className="title" {...register("title", { required: true })} placeholder="제목을 입력해주세요" />
          {/* {errors.name && <p>이름은 필수 입력 사항입니다.</p>} */}
        </S.TextSection>
        <S.Question>
          <label className="star">카테고리</label>
          <div>
            <S.BinaryBtn
              type="button"
              selected={watch("category") === "delivery"}
              onClick={(e) => {
                e.preventDefault();
                setValue("category", "delivery");
              }}
              {...(register("category"), { required: true })}
            >
              배달
            </S.BinaryBtn>
            <S.BinaryBtn
              selected={watch("category") === "product"}
              onClick={(e) => {
                e.preventDefault();
                setValue("category", "product");
              }}
              {...(register("category"), { required: true })}
            >
              물품
            </S.BinaryBtn>
          </div>
        </S.Question>
      </S.FormSection>
      <S.FormSection step={step} index={2}>
        <S.Question>
          <label className="star">모집 마감시간</label>
          <div style={{ display: "flex" }}>
            <DropDown
              options={dateOptions}
              styleOption="date"
              placeholder="일자"
              onChange={handelSelectChange("endDay")}
            />
            <div css={styles.divider} />
            <DropDown
              options={timeOptions}
              styleOption="time"
              placeholder="마감 시간"
              onChange={handelSelectChange("endTime")}
            />
          </div>
        </S.Question>

        <S.Question>
          <label className="star">모집 인원 수</label>
          <div>
            <S.NumberInput {...register("counts")} /> 명
          </div>
        </S.Question>

        <S.Question>
          <label className="star">총 가격</label>
          <div>
            <S.NumberInput {...register("price")} style={{ width: "113px" }} /> 원
          </div>
        </S.Question>

        <S.TextSection>
          <label>매장 링크</label>
          <input style={{ fontSize: "15px" }} {...register("link")} />
        </S.TextSection>
      </S.FormSection>

      <div css={styles.container}>
        <button css={styles.back(step)} disabled={step === 1} onClick={() => setStep((pre) => pre - 1)}></button>
        {step !== 2 && (
          <div css={styles.next} onClick={() => setStep((pre) => pre + 1)}>
            확인
          </div>
        )}
        {step === 2 && (
          <button type="submit" css={styles.next}>
            작성완료
          </button>
        )}
      </div>
    </form>
  );
}

export default ShareForm;

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
