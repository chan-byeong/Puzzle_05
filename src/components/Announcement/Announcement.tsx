import { css } from "@emotion/react";

import Filtering from "../Mate/Filtering";
import AnnouncementBox from "./AnnouncementBox";
import useGetNotices from "../../hooks/Announcement/useGetNotices";

//TODO: 공지사항 리스트 GET
function Announcement() {
  const notices = useGetNotices();

  return (
    <div>
      <Filtering />
      <div
        css={css`
          margin-top: 12px;
        `}
      >
        {notices.map((item, index) => (
          <div key={index} onClick={() => window.open(item.url)}>
            <AnnouncementBox {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Announcement;
