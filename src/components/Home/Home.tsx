import React from "react";
import { css } from "@emotion/react";

import MenuList from "./MenuList";
import AnnouncementHome from "./AnnouncementHome";
import Diets from "./Diets";

function Home() {
  return (
    <>
      <MenuList />
      {/* prettier-ignore */}
      <div css={css`height: 40px;`}></div>
      <AnnouncementHome />
      {/* prettier-ignore */}
      <div css={css`height: 40px;`}></div>
      <Diets />
    </>
  );
}

export default Home;
