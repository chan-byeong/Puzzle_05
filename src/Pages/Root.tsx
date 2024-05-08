import { Outlet } from "react-router-dom";
import { css } from "@emotion/react";

function Root() {
  const mlayout = css`
    font-family: "Pretendard Variable";
    padding: 47px 16px 34px 16px;
    min-height: 844px;
  `;
  return (
    <div css={mlayout}>
      <Outlet />
    </div>
  );
}

export default Root;
