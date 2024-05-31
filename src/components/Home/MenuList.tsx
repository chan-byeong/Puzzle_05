import { useNavigate } from "react-router-dom";

import * as H from "./Home.style";

function MenuList() {
  const navigate = useNavigate();

  return (
    <H.Container>
      <H.MenuBox onClick={() => navigate("/community/mate")}>
        <div>룸메찾기</div>
        <H.MateImg />
      </H.MenuBox>

      <H.MenuBox share onClick={() => navigate("/community/share")}>
        <div>공동구매</div>
        <H.ShareImg />
      </H.MenuBox>
    </H.Container>
  );
}

export default MenuList;
