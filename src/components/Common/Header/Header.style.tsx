import styled from "@emotion/styled";

import kull_logo from "./images/kull-icon.png";
import user_icon from "./images/user-icon.png";
import message from "./images/message-circle.png";
import back_icon from "./images/chevron-left.png";
import search_icon from "./images/search.png";

export const HeaderBox = styled("div")`
  height: 50px;
  width: 100%;
  max-width: 390px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 15px;
`;

const ImgBox = styled.div`
  background-position: center;
  background-size: contain;
`;

export const Logo = styled(ImgBox)`
  width: 50px;
  height: 25px;
  background-image: url(${kull_logo});
`;

export const Message = styled(ImgBox)`
  width: 30px;
  height: 30px;
  background-image: url(${message});

  margin-right: 15px;
`;

export const User = styled(ImgBox)`
  width: 30px;
  height: 30px;
  background-image: url(${user_icon});
`;

export const Back = styled(ImgBox)`
  width: 24px;
  height: 24px;
  background-image: url(${back_icon});
`;

export const SearchIcon = styled(ImgBox)`
  width: 24px;
  height: 24px;
  background-image: url(${search_icon});
`;

export const Title = styled.span`
  color: #3a3a3a;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
