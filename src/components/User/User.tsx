import React from "react";
import BackHeader from "../Common/Header/BackHeader";
import Profile from "./Profile";
import Settings from "./Settings";

function User() {
  return (
    <>
      <BackHeader />
      <section style={{ marginTop: "25px" }}>
        <Profile />
        <Settings />
      </section>
    </>
  );
}

export default User;
