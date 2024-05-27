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
  console.log(matePosts);

  // 메이트 박스 -> 해당 유저가 쓴 글에 대한 모든 정보 전달 -> 클릭 시 상세 페이지로 라우팅
  return (
    <div>
      <Filtering />
      {matePosts.map((item) => (
        <div key={item.matePostId} onClick={() => nav(item.matePostId)}>
          <MateBox {...item} />
        </div>
      ))}
      <PlusBtn path="/community/mate-post" />
    </div>
  );
}

export default RoomMate;
