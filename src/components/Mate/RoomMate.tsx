import { useNavigate } from "react-router-dom";

import MateBox from "./MateBox";
import Filtering from "./Filtering";
import PlusBtn from "./PlusBtn";

import useGetAllMatePosts from "../../hooks/Mate/get/useGetAllMatePosts";

function RoomMate() {
  const nav = useNavigate();
  //TODO: 데이터 로드
  //TODO: 데이터 필터링 후 리렌더링 -> 필터 선택 상태 관리

  const matePosts = useGetAllMatePosts();
  return (
    <div>
      <Filtering />
      {matePosts.map((item) => (
        <div key={item.matePostId} onClick={() => nav(`${item.matePostId}`)}>
          <MateBox {...item} />
        </div>
      ))}
      <PlusBtn path="/community/mate-post" />
    </div>
  );
}

export default RoomMate;
