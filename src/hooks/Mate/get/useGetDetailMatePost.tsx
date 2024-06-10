import { useSuspenseQuery } from "@tanstack/react-query";

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
  smoking: string;
  deliveryFood: number;
  gameAndCall: number;
  homeProtector: number;
  cleaning: number;
  killBug: number;
}

const getDetailMatePosts = async (matePostId: string) => {
  const response = await request<DetailMatePostType>(`/mate-posts/${matePostId}`);
  return response.data;
};

const useGetDetailMatePost = (matePostId: string) => {
  const { data, isError } = useSuspenseQuery({
    queryKey: [QUERY_KEYS.matePost, matePostId],
    queryFn: () => getDetailMatePosts(matePostId),
  });

  if (isError) {
    console.log("Error while fetching mate detail data");
  }

  return data;
};

export default useGetDetailMatePost;
