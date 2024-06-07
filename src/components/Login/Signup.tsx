import { useState } from "react";

import ProgressBar from "../Mate/ProgressBar";
import SignupForm from "./SignupForm";

const TOTAL = 3;

function Signup() {
  const [step, setStep] = useState<number>(1);
  return (
    <>
      <ProgressBar step={step} TOTAL={TOTAL} IsProgress={true} customTop="50" />
      <SignupForm step={step} setStep={setStep} />
    </>
  );
}

export default Signup;
