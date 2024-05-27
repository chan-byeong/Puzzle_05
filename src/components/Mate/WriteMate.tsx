import { useState } from "react";

import MateForm from "./MateForm";
import PostHeader from "../Common/Header/PostHeader";
import ProgressBar from "./ProgressBar";

const TOTAL = 5;

function WriteMate() {
  const [step, setStep] = useState(1);

  return (
    <>
      <PostHeader title="글쓰기" />
      <ProgressBar step={step} TOTAL={TOTAL} IsProgress={true} customTop="50" />
      <MateForm step={step} setStep={setStep} />
    </>
  );
}

export default WriteMate;
