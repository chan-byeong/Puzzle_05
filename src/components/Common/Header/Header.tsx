import { useNavigate } from "react-router-dom";

import * as H from "./Header.style";
import useAuth from "../../../hooks/Login/useAuth";

function Header() {
  const nav = useNavigate();
  const auth = useAuth();

  const handleOnClick = (routes: string) => {
    if (auth === undefined) nav("/login");
    else nav(routes);
  };

  return (
    <H.HeaderBox>
      <H.Logo />
      <div style={{ display: "flex" }}>
        <H.Message onClick={() => handleOnClick("/chat")} />
        <H.User onClick={() => handleOnClick("/profile")} />
      </div>
    </H.HeaderBox>
  );
}

export default Header;
