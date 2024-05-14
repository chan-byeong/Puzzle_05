import styled from "@emotion/styled";
import { css } from "@emotion/react";

import user from "../Mate/images/user-icon.png";
import ProgressBar from "../Mate/ProgressBar";

interface UserCardProps {
  profileImg?: string;
  age?: string;
  gender?: string;
  mbti?: string;
  major?: string;
}

export const UserCard: React.FC<UserCardProps> = ({ profileImg, age, gender, mbti, major }) => {
  return (
    <Container>
      <ImgBox />
      <div>
        <p css={styles.major}>major</p>
        <p css={styles.infos}>
          age
          <span>|</span>
          gender
          <span>|</span>
          mbti
        </p>

        <ProgressBar customWidth="130" step={80} TOTAL={100} />
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  position: relative;
`;

const ImgBox = styled.div<{ src?: string }>`
  width: 86px;
  height: 86px;
  border-radius: 50%;
  background-image: ${({ src }) => (src ? `url(${src})` : `url(${user})`)};
  background-size: contain;
`;

const styles = {
  major: css`
    color: #3a3a3a;
    font-size: 15px;
    font-weight: 700;
    line-height: 22.4px; /* 149.333% */
  `,

  infos: css`
    color: #3a3a3a;
    font-size: 15px;
    font-weight: 400;
    line-height: 22.4px; /* 149.333% */
  `,

  vbar: css`
    color: #afafaf;
    padding: 0 4px;
  `,
};
