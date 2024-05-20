import { useQuery } from "@tanstack/react-query";

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
  return response;
};

const useGetAllMatePosts = () => {
  const { data } = useQuery({ queryKey: [QUERY_KEYS.allMatePosts], queryFn: getAllMatePosts });

  if (!data) {
    throw new Error("data is undefined");
  }

  return data as MatePostType[];
};

export default useGetAllMatePosts;
