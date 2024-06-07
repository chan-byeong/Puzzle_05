import { useQuery } from "@tanstack/react-query";

import request from "../api";

interface ProfileType {
  email: string;
  name: string;
  grade: number;
  hall: string;
  roomNum: string;
}

const requestProfile = async () => {
  const response = await request<ProfileType>("/member/profile");
  console.log(response);
  return response.data;
};

function useAuth() {
  const { data } = useQuery({ queryKey: ["user-profile"], queryFn: requestProfile });

  return data;
}

export default useAuth;
