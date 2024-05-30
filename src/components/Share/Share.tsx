import { useEffect, useState } from "react";

import Filtering from "../Mate/Filtering";
import ShareBox from "./ShareBox";
import ShareDetail from "./ShareDetail";
import PlusBtn from "../Mate/PlusBtn";

import useGetAllSharePosts from "../../hooks/Mate/get/useGetAllSharePosts";

const tempSharePosts = [
  {
    buyPostId: 1,
    title: "가을 자전거 도로 여행",
    category: "여행",
    endDay: "2024-10-05",
    endTime: "18:00",
    counts: 5,
    price: 100000,
    link: "https://example.com/travel/biking",
  },
  {
    buyPostId: 2,
    title: "집들이 선물 공동구매",
    category: "가구",
    endDay: "2024-11-12",
    endTime: "23:59",
    counts: 10,
    price: 250000,
    link: "https://example.com/home/gifts",
  },
  {
    buyPostId: 3,
    title: "프로그래밍 도서 공구",
    category: "도서",
    endDay: "2024-09-30",
    endTime: "20:00",
    counts: 15,
    price: 45000,
    link: "https://example.com/books/programming",
  },
  {
    buyPostId: 4,
    title: "콘서트 그룹 티켓 구매",
    category: "이벤트",
    endDay: "2024-12-25",
    endTime: "19:00",
    counts: 8,
    price: 80000,
    link: "https://example.com/concerts/live",
  },
  {
    buyPostId: 5,
    title: "신년 맞이 필기구 할인 구매",
    category: "문구",
    endDay: "2025-01-01",
    endTime: "12:00",
    counts: 20,
    price: 30000,
    link: "https://example.com/stationery/newyear",
  },
];

function Share() {
  const [detailModal, setDetailModal] = useState<number | null>(null);

  // const sharePosts = useGetAllSharePosts();

  // 모달 열렸을 시 스크롤 방지
  useEffect(() => {
    if (detailModal !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [detailModal]);

  return (
    <div>
      <Filtering />
      <div style={{ marginTop: "10px" }}>
        {/* {sharePosts.map((item, index) => (
          <section key={item.buyPostId} onClick={() => setDetailModal(index)}>
            <ShareBox {...item} />
            {detailModal === index && <ShareDetail {...item} modalSetter={setDetailModal} />}
          </section>
        ))} */}
        {tempSharePosts.map((item, index) => (
          <section key={item.buyPostId} onClick={() => setDetailModal(index)}>
            <ShareBox {...item} />
            {detailModal === index && <ShareDetail {...item} modalSetter={setDetailModal} />}
          </section>
        ))}
      </div>
      <PlusBtn path="/community/share-post" />
    </div>
  );
}

export default Share;
