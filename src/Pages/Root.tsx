import { Outlet } from "react-router-dom";
import { css } from "@emotion/react";

function Root() {
  const mlayout = css`
    position: relative;
    font-family: "Pretendard Variable";
    padding: 47px 16px 34px 16px;
    min-height: 844px;
    max-width: 390px;
    margin: 0 auto;
    background-color: #f9f9f9;
  `;
  return (
    <div css={mlayout}>
      <Outlet />
    </div>
  );
}

export default Root;
