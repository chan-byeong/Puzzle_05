import { useQuery } from "@tanstack/react-query";

import request from "../api";

const requestChatList = async () => {
  const response = await request("/api/v1/rooms?size=5");
  console.log(response);

  return response.data;
};

const useGetChatList = () => {
  const { data = [] } = useQuery({ queryKey: ["Chat-list"], queryFn: requestChatList });

  return data;
};

export default useGetChatList;
