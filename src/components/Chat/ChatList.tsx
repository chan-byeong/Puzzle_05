import React from "react";
import { useNavigate } from "react-router-dom";

import BackHeader from "../Common/Header/BackHeader";
import ChatBox from "./ChatBox";
import useGetChatList from "../../hooks/Chat/useGetChatList";

function ChatList() {
  const nav = useNavigate();
  const chatRoom = useGetChatList();

  return (
    <>
      <BackHeader title="채팅방" />
      <section>
        {chatRoom.messageList.map((item, idx) => (
          <div key={"chat" + idx} onClick={() => nav(`/chat/${item.roomId}`)}>
            <ChatBox roomId={item.roomId} />
          </div>
        ))}
      </section>
    </>
  );
}

export default ChatList;
