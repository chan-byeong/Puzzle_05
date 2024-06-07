import React from "react";
import { useQuery } from "@tanstack/react-query";

import BackHeader from "../Common/Header/BackHeader";
import ChatBox from "./ChatBox";
import useGetChatList from "../../hooks/Chat/useGetChatList";
import useAddChatRoom from "../../hooks/Chat/useAddChatRoom";

interface ChatRoom {
  roomId: number;
}

function ChatList() {
  const data = useGetChatList();
  console.log(data);
  const mutation = useAddChatRoom();

  return (
    <>
      <BackHeader title="채팅방" />
      <section>
        <ChatBox />
        <ChatBox />
        <ChatBox />
        <ChatBox />
      </section>
      <div onClick={() => mutation.mutate()}>만들기</div>
    </>
  );
}

export default ChatList;
