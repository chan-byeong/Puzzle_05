import { css } from "@emotion/react";

interface AnnouncementBoxProps {
  title: string;
  writer: string;
  date: string;
  visits: string;
}

// TODO: 공지사항 글 정보 props로
function AnnouncementBox({ title, writer, date, visits }: AnnouncementBoxProps) {
  return (
    <div css={styles.container}>
      <div css={styles.title}>{title}</div>
      <p css={styles.info}>
        <span>{date}</span>&nbsp;&nbsp;|&nbsp;&nbsp;<span>{writer}</span>&nbsp;&nbsp;|&nbsp;&nbsp;
        <span>조회 {visits}</span>
      </p>
    </div>
  );
}

export default AnnouncementBox;

const styles = {
  container: css`
    width: 100%;
    max-width: 430px;
    height: 65px;
    border-radius: 15px;
    background: #fff;
    padding: 12px;

    box-shadow: 0px 0px 15px 0px rgba(96, 96, 96, 0.08);

    margin-bottom: 10px;

    cursor: pointer;
  `,
  title: css`
    overflow: hidden;
    color: var(--Black, #3a3a3a);
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 15px;
    font-weight: 600;
    line-height: 21px; /* 140% */
  `,
  info: css`
    color: #919191;
    font-size: 13px;
    font-weight: 400;

    margin-top: 5px;
  `,
};
