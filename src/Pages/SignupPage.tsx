import React from "react";
import BackHeader from "../components/Common/Header/BackHeader";
import Signup from "../components/Login/Signup";

function SignupPage() {
  return (
    <>
      <BackHeader title="회원가입" />
      <Signup />
    </>
  );
}

export default SignupPage;
