import React from "react";
import { css } from "@emotion/react";

import * as S from "./Share.style";
import useApplyShare from "../../hooks/Share/useApplyShare";
import useAddChatRoom from "../../hooks/Chat/useAddChatRoom";
import useAuth from "../../hooks/Login/useAuth";

interface ShareDetailProps {
  buyPostId: number;
  title: string;
  category: string;
  endDay: string;
  endTime: string;
  counts: number;
  price: number;
  link: string;
  num: number;
  modalSetter: React.Dispatch<React.SetStateAction<number | null>>;
}

const CATEGORY: { [key: string]: string } = {
  delivery: "배달",
  product: "물품",
};

const dateConverter = (date: string) => {
  const today = new Date();
  const todayString = `${today.getMonth() + 1}월 ${today.getDate()}일(${today.toLocaleDateString("ko-KR", {
    weekday: "short",
  })})`;
  if (todayString === date) return "오늘";
  else {
    const regex = /(\d{1,2})월 (\d{1,2})일/;
    const matches = date.match(regex);
    return matches !== null && `${matches[1]}/${matches[2]}`;
  }
};

function ShareDetail(props: ShareDetailProps) {
  const endDay = dateConverter(props.endDay);
  const endDate = `${endDay} ${props.endTime} 까지`;
  const mutation = useApplyShare(props.buyPostId);
  const addChatRoom = useAddChatRoom();
  const auth = useAuth();

  const handleModal = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    setTimeout(() => {
      props.modalSetter(null); // 비동기적으로 상태 변경
    }, 0);
  };

  const onClickApply = () => {
    mutation.mutate(); // invalidate all-share-posts query
    setTimeout(() => {
      props.modalSetter(null); // 비동기적으로 상태 변경
    }, 500);

    addChatRoom.mutate(); // navigate to share chat room
    // navigate to chatRoom - chat/:roomId
  };

  const onClickContainer = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
  };

  return (
    <>
      <S.BackShadow onClick={handleModal} />
      <S.Container onClick={onClickContainer}>
        <div css={styles.wrapper}>
          <S.Profile />
          <S.Text>{auth.roomNum}</S.Text>
        </div>

        <div css={styles.wrapper}>
          {/* prettier-ignore */}
          <S.Tag css={css`margin-right: 12px;`}>{CATEGORY[props.category]}</S.Tag>
          <S.Title>{props.title}</S.Title>
        </div>

        <div css={styles.wrapper} style={{ marginTop: "22px" }}>
          <S.ImgBox imgsrc="" />
          {/* prettier-ignore */}
          <div css={css`margin-left: 22px;`}>
              <div css={styles.wrapper}>
                <S.MapPin />
                <S.Text>가게명</S.Text>
                <S.More/>
              </div>
              <div css={styles.wrapper}>
                <S.Clock />
                <S.Text>{endDate}</S.Text>
              </div>
              <div css={styles.wrapper}>
                <S.Users />
                <S.Text>{props.num} / {props.counts}명</S.Text>
              </div>
              <div css={styles.wrapper}>
                <S.Credit />
                <S.BeforePrice>{props.price}원</S.BeforePrice>
              </div>
              {/* prettier-ignore */}
              <S.Prices css={css`margin-left: 29px;`}> 
                {props.price / props.counts}원
              </S.Prices>
            </div>
        </div>

        <S.Btn css={styles.top_margin} onClick={onClickApply} disabled={props.num >= props.counts}>
          공동구매 신청하기
        </S.Btn>
      </S.Container>
    </>
  );
}

export default ShareDetail;

const styles = {
  wrapper: css`
    flex-shrink: 0;
    display: flex;
    align-items: center;

    margin-top: 10px;
  `,
  top_margin: css`
    margin-top: 22px;
  `,
};
