import React from "react";
import { useNavigate } from "react-router-dom";
import { css } from "@emotion/react";
import { SubmitHandler, useForm, FieldValues } from "react-hook-form";

import { usePostLogin } from "../../hooks/Login/usePostLogin";
import logo from "../Common/Header/images/kull-icon2.png";

interface LoginType {
  email: string;
  pw: string;
}

function Login() {
  const nav = useNavigate();
  const { register, handleSubmit } = useForm();
  const mutation = usePostLogin();

  const onSubmit: SubmitHandler<FieldValues> = async (data: FieldValues) => {
    const userLogin = data as LoginType;
    mutation.mutate(userLogin);
  };

  return (
    <section css={style.container}>
      <div css={style.logo} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <input css={style.input} placeholder="학번" {...register("email", { required: true })} />
        <input css={style.input} type="password" placeholder="비밀번호" {...register("pw", { required: true })} />
        <p css={style.caption}>
          비밀번호는 쿨하우스(http://kulhouse.konkuk.ac.kr)
          <br /> 의 로그인 비밀번호와 동일합니다.
        </p>
        <button css={style.submit} type="submit">
          로그인
        </button>
      </form>
      <p css={style.caption} style={{ cursor: "pointer" }} onClick={() => nav("/signup")}>
        회원가입
      </p>
    </section>
  );
}

export default Login;

const style = {
  container: css`
    display: flex;
    width: 330px;
    margin: 0 auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `,

  logo: css`
    width: 200px;
    height: 47px;
    background-image: url(${logo});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;

    margin-bottom: 48px;
  `,

  caption: css`
    color: #737373;
    text-align: center;
    font-size: 13px;
    font-weight: 400;
    line-height: 18.2px; /* 140% */

    margin-bottom: 34px;
  `,

  input: css`
    width: 100%;
    max-width: 330px;
    height: 48px;
    padding: 15px;

    border-radius: 15px;
    background: #ededed;

    color: #3a3a3a;
    font-size: 20px;
    font-weight: 500;
    text-align: start;
    border: none;

    margin-bottom: 15px;
    &::placeholder {
      color: #a0a0a0;
      font-size: 20px;
      font-weight: 500;
      text-align: start;
    }
    &:focus {
      outline: none;
    }
  `,

  submit: css`
    width: 100%;
    max-width: 330px;
    height: 48px;

    border-radius: 15px;
    background: var(--Mint, #00dd9b);
    box-shadow: 0px 0px 15px 0px rgba(96, 96, 96, 0.08);

    color: #fff;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    line-height: normal;

    margin-bottom: 6px;
  `,
};
