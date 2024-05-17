import React from "react";

import Filtering from "../Mate/Filtering";
import ShareBox from "./ShareBox";

function Share() {
  return (
    <div>
      <Filtering />
      <div style={{ marginTop: "10px" }}>
        <section>
          <ShareBox />
        </section>
        <section>
          <ShareBox />
        </section>
        <section>
          <ShareBox />
        </section>
        <section>
          <ShareBox />
        </section>
        <section>
          <ShareBox />
        </section>
      </div>
    </div>
  );
}

export default Share;
