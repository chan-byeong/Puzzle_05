import { useNavigate } from "react-router-dom";

import * as H from "./Header.style";

function Header() {
  const nav = useNavigate();

  return (
    <H.HeaderBox>
      <H.Logo />
      <div style={{ display: "flex" }}>
        <H.Message onClick={() => nav("/chat")} />
        <H.User onClick={() => nav("/login")} />
      </div>
    </H.HeaderBox>
  );
}

export default Header;
