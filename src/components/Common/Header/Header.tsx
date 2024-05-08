import * as H from "./Header.style";

function Header() {
  return (
    <H.HeaderBox>
      <H.Logo />
      <div style={{ display: "flex" }}>
        <H.Message />
        <H.User />
      </div>
    </H.HeaderBox>
  );
}

export default Header;
