import React from "react";
import { css } from "@emotion/react";

import MenuList from "./MenuList";
import HomeMenus from "./HomeMenus";
import Diets from "./Diets";

import useAuth from "../../hooks/Login/useAuth";

function Home() {
  const profile = useAuth();
  console.log(profile);

  return (
    <>
      <MenuList />
      <HomeMenus />
      {/* prettier-ignore */}
      <div css={css`height: 40px;`}></div>
      <Diets />
    </>
  );
}

export default Home;
