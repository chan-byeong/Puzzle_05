import { useQuery } from "@tanstack/react-query";

import request from "../api";

interface ChatRoom {
  roomId: number;
}

interface ChatRoomResponse {
  messageList: ChatRoom[];
  hasNext: boolean;
}

const initialData = {
  messageList: [],
  hasNext: false,
};

const requestChatList = async () => {
  const response = await request<ChatRoomResponse>("/api/v1/rooms?size=10");

  return response.data;
};

const useGetChatList = () => {
  const { data = initialData } = useQuery({ queryKey: ["Chat-list"], queryFn: requestChatList });

  return data;
};

export default useGetChatList;
