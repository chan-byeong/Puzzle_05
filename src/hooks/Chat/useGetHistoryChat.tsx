import { useSuspenseQuery } from "@tanstack/react-query";

import request from "../api";

interface ChatMessageResponse {
  id: number;
  content: string;
  writer: string;
}

const loadChatHistory = async (roomId: string) => {
  try {
    const response = await request<ChatMessageResponse[]>(`/api/v1/rooms/${roomId}/messages`);
    return response.data;
  } catch (error) {
    console.error("채팅 내역 로드 실패", error);
  }
};

function useGetHistoryChat(roomId: string) {
  const { data } = useSuspenseQuery({
    queryKey: ["chats", roomId],
    queryFn: () => loadChatHistory(roomId),
  });

  return data;
}

export default useGetHistoryChat;
