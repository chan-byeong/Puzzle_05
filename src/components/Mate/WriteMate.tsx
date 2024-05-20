import { useState } from "react";

import MateForm from "./MateForm";
import PostHeader from "../Common/Header/PostHeader";
import ProgressBar from "./ProgressBar";

const TOTAL = 5;

function WriteMate() {
  const [step, setStep] = useState(1);

  return (
    <>
      <PostHeader />
      <ProgressBar step={step} TOTAL={TOTAL} />
      <MateForm step={step} setStep={setStep} />
    </>
  );
}

export default WriteMate;
