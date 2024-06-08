import { useQuery } from "@tanstack/react-query";

import request from "../api";

interface ProfileType {
  email: string;
  name: string;
  grade: number;
  hall: string;
  roomNum: string;
}

const initialData = {
  email: 0,
  name: "x",
  grade: 0,
  hall: "x",
  roomNum: "x",
};

const requestProfile = async () => {
  const response = await request<ProfileType>("/member/profile");
  return response.data;
};

function useAuth() {
  const { data = initialData } = useQuery({ queryKey: ["user-profile"], queryFn: requestProfile });

  if (typeof data === "string") return undefined;

  return data;
}

export default useAuth;
