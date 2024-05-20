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

const getAllMatePosts = async (matePostId: number) => {
  const response = await request<DetailMatePostType>(`/mate-posts/${matePostId}`);
  return response;
};

const useGetDetailMatePost = (matePostId: number) => {
  const { data } = useQuery({
    queryKey: [QUERY_KEYS.matePost, matePostId],
    queryFn: () => getAllMatePosts(matePostId),
  });

  if (!data) {
    throw new Error("data is undefined");
  }

  return data as DetailMatePostType;
};

export default useGetDetailMatePost;
