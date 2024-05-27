import { useState } from "react";

import PostHeader from "../Common/Header/PostHeader";
import ProgressBar from "../Mate/ProgressBar";
import ShareForm from "./ShareForm";

const TOTAL = 2;

function WriteShare() {
  const [step, setStep] = useState(1);

  return (
    <>
      <PostHeader title="공동구매 글쓰기" />
      <ProgressBar step={step} TOTAL={TOTAL} IsProgress={true} customTop="50" />
      <ShareForm step={step} setStep={setStep} />
    </>
  );
}

export default WriteShare;
