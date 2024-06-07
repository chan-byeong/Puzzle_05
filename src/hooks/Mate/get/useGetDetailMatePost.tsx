import { useQuery } from "@tanstack/react-query";

import request from "../../api";
import { QUERY_KEYS } from "../../Constans";

interface DetailMatePostType {
  title: string;
  contents: string;
  gender: string;
  age: number;
  mbti: string;
  wakeUpStart: number;
  wakeUpEnd: number;
  sleepStart: number;
  sleepEnd: number;
  showerStart: number;
  showerEnd: number;
  dayOfWeek: string;
  snoring: string;
  noiseSense: number;
  light: number;
  noisiness: number;
  smoking: string;
  personalTime: number;
  familiarity: number;
  deliveryFood: number;
  homeProtector: number;
  gameAndCall: number;
}

const getAllMatePosts = async (matePostId: string) => {
  const response = await request<DetailMatePostType>(`/mate-posts/${matePostId}`);
  return response.data;
};

const useGetDetailMatePost = (matePostId: string) => {
  const { data, isError } = useQuery({
    queryKey: [QUERY_KEYS.matePost, matePostId],
    queryFn: () => getAllMatePosts(matePostId),
  });

  if (isError) {
    // throw new Error("Error while fetching mate detail data");
    console.log("Error while fetching mate detail data");
  }

  return data;
};

export default useGetDetailMatePost;
