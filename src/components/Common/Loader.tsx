import { CSSProperties } from "react";
import styled from "@emotion/styled";

import DotLoader from "react-spinners/DotLoader";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  height: "",
};

function Loader() {
  return (
    <Container>
      <DotLoader color="#00DD9B" loading={true} cssOverride={override} size={30} />
    </Container>
  );
}

export default Loader;

const Container = styled.div`
  width: 100%;
  max-width: 390px;
  height: 100%;
  min-height: 800px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
