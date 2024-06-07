import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import request from "../api";

interface SignupType {
  email: string;
  pw: string;
  name: string;
  grade: number;
  hall: string;
  roomNum: string;
}

function usePostSignup() {
  const nav = useNavigate();

  const mutation = useMutation({
    mutationKey: ["sign-up"],
    mutationFn: (data: SignupType) => request("/member/signup", { method: "post", body: JSON.stringify(data) }),
    onSuccess: () => nav("/login"),
    onError: () => alert("로그인 실패"),
  });

  return mutation;
}

export default usePostSignup;
