import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { css } from "@emotion/react";

//TODO: 라우팅 제거 시 탭 리스트 수정
const TAB_LIST = [
  ["룸메 찾기", "/community/mate"],
  ["공동구매", "/community/share"],
  ["자유게시판", "/community/bulletin"],
  // ["언어교환", "/community"],
  ["공지사항", "/community/announcement"],
  // ["건의사항", "/rjsdml"],
];

interface TabContainerProps {
  activeTab: number;
  setActiveTab: React.Dispatch<React.SetStateAction<number>>;
}

function TabContainer({ activeTab, setActiveTab }: TabContainerProps) {
  const nav = useNavigate();

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  useEffect(() => {
    const currentUrl = window.location.href;
    const url = new URL(currentUrl);
    const index = TAB_LIST.findIndex((tab) => tab[1] === url.pathname);
    setActiveTab(index);
  }, []);

  return (
    <div css={styles.tabContainer}>
      {TAB_LIST.map((tab, index) => (
        <div
          key={index}
          css={styles.tabItem(activeTab === index)}
          onClick={() => {
            handleTabClick(index);
            nav(tab[1]);
          }}
        >
          {tab[0]}
        </div>
      ))}
      <div css={styles.indicator(activeTab)} />
    </div>
  );
}

export default TabContainer;

const styles = {
  tabContainer: css`
    width: 100%;
    max-width: 390px;
    position: absolute;
    left: 0;
    top: 50px;
    display: flex;
    align-items: center;
    overflow-x: scroll;

    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    ::-webkit-scrollbar {
      display: none;
    }

    border-bottom: 1px solid #d9d9d9;
  `,
  tabItem: (isActive: boolean) => css`
    /* width: 25%; */
    padding: 12px 18px;

    flex-shrink: 0;
    text-align: center;
    font-weight: 700;
    font-size: 16px;
    color: ${isActive ? "black" : "#D9D9D9"};
    border-bottom: ${isActive ? "1px solid #00dd9b" : ""};
    cursor: pointer;
  `,
  indicator: (activeIndex: number) => css`
    position: absolute;
    bottom: -1px;
    left: 0;
    height: 1px;
    background-color: #00dd9b;
    width: 25%; /* 메뉴 개수에 따라 조정 */
    transition: transform 0.3s ease;
    transform: translateX(${activeIndex * 100}%);
  `,
};
