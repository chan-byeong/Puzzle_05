import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { BASE_URL } from "../Constans";

interface LoginType {
  email: string;
  pw: string;
}

const requestLogin = async (data: LoginType) => {
  const response = await fetch(`${BASE_URL}/member/login`, {
    method: "post",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Error occurs while requesting login");
  }

  const access_token = response.headers.get("Access_Token");
  const refresh_token = response.headers.get("Refresh_Token");

  if (access_token !== null) {
    localStorage.setItem("access_token", access_token);
    localStorage.setItem("refresh_token", access_token);
  } else console.log(access_token, refresh_token, "access_token is null");

  return response.json();
};

function usePostLogin() {
  const nav = useNavigate();
  const mutation = useMutation({
    mutationKey: ["user-login"],
    mutationFn: (data: LoginType) => requestLogin(data),
    onSuccess: (data) => {
      if (data.status === 200) console.log(data);
      else alert("로그인 실패: 학번,비번을 확인하세요");
    },
    onError: () => alert("로그인 에러!"),
  });
  return mutation;
}

export { requestLogin, usePostLogin };
