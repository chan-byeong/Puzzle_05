import { useMutation } from "@tanstack/react-query";

import request from "../api";

const requestAddChatRoom = async () => {
  const response = await request("/api/v1/rooms", {
    method: "post",
  });
  console.log(response);

  return response;
};

const useAddChatRoom = () => {
  const mutation = useMutation({
    mutationKey: ["add-chat-room"],
    mutationFn: requestAddChatRoom,
    onSuccess: (data) => console.log(data),
  });

  return mutation;
};

export default useAddChatRoom;
