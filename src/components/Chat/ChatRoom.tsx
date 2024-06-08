import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { css } from "@emotion/react";
import { Client, IMessage } from "@stomp/stompjs";

import DetailHeader from "../Common/Header/DetailHeader";
import Messages from "./Messages";
import request from "../../hooks/api";
import useAuth from "../../hooks/Login/useAuth";
import up_arrow from "./images/upArrow.png";

interface ChatMessageReqeust {
  from: string;
  text: string;
  roomId: number;
}
interface ChatMessageResponse {
  id: number;
  content: string;
  writer: string;
}

function ChatRoom() {
  const { roomId } = useParams();
  const user = useAuth();
  const [stompClient, setStompClient] = useState<Client | null>(null);
  const [messages, setMessages] = useState<ChatMessageResponse[]>([]);
  const [newMessage, setNewMessage] = useState<string>("");

  //TODO: 웹소켓을 활용한 실시간 메세지 받아오기

  useEffect(() => {
    const loadChatHistory = async () => {
      try {
        const response = await request(`/api/v1/rooms/${roomId}/messages`);
        console.log("chat history", response);
        const messages = response.data as ChatMessageResponse[];
        setMessages(messages);
      } catch (error) {
        console.error("채팅 내역 로드 실패", error);
      }
    };

    loadChatHistory();

    const client = new Client({
      brokerURL: "ws://43.203.234.191/chat", // 서버 WebSocket URL
      reconnectDelay: 5000,
      onConnect: () => {
        client.subscribe(`/topic/public/rooms/${roomId}`, (message: IMessage) => {
          const msg: ChatMessageResponse = JSON.parse(message.body);
          console.log(msg);
          console.log("prev", messages);
          setMessages((prevMessages) => [...prevMessages, msg]);
        });
      },
    });
    client.activate();
    setStompClient(client);
    return () => {
      client.deactivate();
    };
  }, [roomId]);

  const sendMessage = () => {
    if (stompClient && newMessage) {
      const chatMessage: ChatMessageReqeust = {
        from: user.name,
        text: newMessage,
        roomId: parseInt(roomId || ""),
      };
      stompClient.publish({
        destination: `/app/chat/rooms/${roomId}/send`,
        body: JSON.stringify(chatMessage),
      });
      console.log(messages);
      setNewMessage("");
    }
  };

  return (
    <>
      <DetailHeader title="밤에 먹어도 죄책감 없는 마라탕" />
      <section css={styles.container}>
        <Messages mine user="202호" message="재료 뭐 원하세요?" />
        {messages.map((item, index) => (
          <Messages
            key={roomId + index + item.writer}
            mine={item.writer === user.name}
            user={item.writer}
            message={item.content}
          />
        ))}
      </section>
      <div css={styles.input_box}>
        <input
          css={styles.input}
          type="text"
          placeholder="메세지 보내기"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button css={styles.send_btn} onClick={sendMessage} />
      </div>
    </>
  );
}

export default ChatRoom;

const styles = {
  container: css`
    display: flex;
    flex-direction: column;
    gap: 15px;
    & > .mine {
      align-self: flex-end;
    }
  `,
  input_box: css`
    width: 100%;
    max-width: 390px;
    background: #ededed;
    box-shadow: 0px -6px 20px 0px rgba(255, 255, 255, 0.1);
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translate(-50%);
    height: 83px;

    display: flex;
    align-items: center;
    justify-content: center;
  `,
  input: css`
    width: 370px;
    height: 46px;

    border-radius: 27px;
    background: #fff;

    outline: none;
    border: none;
    padding: 12px 50px 12px 15px;

    color: rgba(8, 8, 8, 0.5);
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%; /* 21px */

    &::placeholder {
      color: rgba(58, 58, 58, 0.5);
      font-size: 15px;
      font-style: normal;
      font-weight: 500;
      line-height: 140%; /* 21px */
    }
  `,
  send_btn: css`
    position: absolute;
    right: 19px;
    width: 33px;
    height: 33px;

    background-color: #00dd9b;
    border-radius: 50%;
    padding: 5px;

    background-image: url(${up_arrow});
    background-position: center;
    background-size: 50%;
    background-repeat: no-repeat;
  `,
};
