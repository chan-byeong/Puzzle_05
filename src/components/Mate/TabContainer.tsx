import { useState } from "react";
import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";

const TAB_LIST = [
  ["룸메", "/mate/room-mate"],
  ["밥메", "/mate/bob-mate"],
  ["언어교환", "/mate/lang-exchange"],
  ["기타", "/mate/others"],
];

function TabContainer() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number, path: string) => {
    setActiveTab(index);
    navigate(path);
  };

  return (
    <div css={styles.tabContainer}>
      {TAB_LIST.map((tab, index) => (
        <div
          key={index}
          css={styles.tabItem(activeTab === index)}
          onClick={() => handleTabClick(index, tab[1])}
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
    position: relative;
    display: flex;
    width: 100%;
    max-width: 358px;
    align-items: center;

    border-bottom: 1px solid #d9d9d9;
  `,
  tabItem: (isActive: boolean) => css`
    width: 25%;
    padding: 12px 0;
    text-align: center;
    font-weight: 700;
    font-size: 16px;
    color: ${isActive ? "black" : "#D9D9D9"};
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
