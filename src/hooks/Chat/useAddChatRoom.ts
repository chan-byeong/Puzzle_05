import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import request from "../api";

const requestAddChatRoom = async () => {
  const response = await request("/api/v1/rooms", {
    method: "post",
  });
  console.log(response);

  return response;
};

const useAddChatRoom = () => {
  const queryClient = useQueryClient();
  const nav = useNavigate();

  const mutation = useMutation({
    mutationKey: ["add-chat-room"],
    mutationFn: requestAddChatRoom,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["Chat-list"] });
      console.log(data);
      // nav(`/chat/${data}`);
      // nav('/chat');
    },
  });

  return mutation;
};

export default useAddChatRoom;
