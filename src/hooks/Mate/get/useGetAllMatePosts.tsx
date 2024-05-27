import { useSuspenseQuery } from "@tanstack/react-query";

import request from "../../api";
import { QUERY_KEYS } from "../../Constans";

interface MatePostType {
  matePostId: number;
  title: string;
  contents: string;
  age: number;
  gender: string;
  grade: string;
}

const getAllMatePosts = async () => {
  const response = await request<MatePostType[]>("/mate-posts/allposts");
  return response.data;
};

const useGetAllMatePosts = () => {
  const { data } = useSuspenseQuery({ queryKey: [QUERY_KEYS.allMatePosts], queryFn: getAllMatePosts });

  if (!data) {
    // throw new Error("data is undefined");
    console.log("data is undefined");
  }

  return data;
};

export default useGetAllMatePosts;
