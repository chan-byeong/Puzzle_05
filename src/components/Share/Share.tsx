import { useEffect, useState } from "react";

import Filtering from "../Mate/Filtering";
import ShareBox from "./ShareBox";
import ShareDetail from "./ShareDetail";
import PlusBtn from "../Mate/PlusBtn";

import useGetAllSharePosts from "../../hooks/Share/useGetAllSharePosts";

function Share() {
  const [detailModal, setDetailModal] = useState<number | null>(null);

  const sharePosts = useGetAllSharePosts();
  console.log(sharePosts);
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
        {sharePosts.map((item, index) => (
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
