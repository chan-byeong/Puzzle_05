import { useEffect, useState } from "react";

import Filtering from "../Mate/Filtering";
import ShareBox from "./ShareBox";
import ShareDetail from "./ShareDetail";
import PlusBtn from "../Mate/PlusBtn";

import useGetAllSharePosts from "../../hooks/Mate/get/useGetAllSharePosts";

function Share() {
  const [detailModal, setDetailModal] = useState(-1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const sharePosts = useGetAllSharePosts();
  console.log(sharePosts);

  // 모달 열렸을 시 스크롤 방지
  useEffect(() => {
    detailModal === -1 ? setIsModalOpen(false) : setIsModalOpen(true);
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [detailModal]);

  return (
    <div>
      <Filtering />
      <div style={{ marginTop: "10px" }}>
        {sharePosts.map((item, index) => (
          <section onClick={() => setDetailModal(index)}>
            <ShareBox {...item} />
            {detailModal === index && <ShareDetail {...item} setDetailModal={setDetailModal} />}
          </section>
        ))}
      </div>
      <PlusBtn path="/community/share-post" />
    </div>
  );
}

export default Share;
