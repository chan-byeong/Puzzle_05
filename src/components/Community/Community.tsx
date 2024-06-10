import CommunityBox from "./CommunityBox";
import Filtering from "../Mate/Filtering";
import PlusBtn from "../Mate/PlusBtn";

function Community() {
  return (
    <div>
      <Filtering />
      <div>
        <CommunityBox />
      </div>
      <div>
        <CommunityBox />
      </div>
      <div>
        <CommunityBox />
      </div>
      <div>
        <CommunityBox />
      </div>
      <PlusBtn path="/" />
    </div>
  );
}

export default Community;
