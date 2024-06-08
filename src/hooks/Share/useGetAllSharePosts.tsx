import { useSuspenseQuery } from "@tanstack/react-query";

import request from "../api";
import { QUERY_KEYS } from "../Constans";

interface SharePostType {
  buyPostId: number;
  title: string;
  category: string;
  endDay: string;
  endTime: string;
  counts: number;
  price: number;
  link: string;
  num: number;
}

const getAllSharePosts = async () => {
  const response = await request<SharePostType[]>("/buy-posts/allposts");
  return response.data;
};

const useGetAllSharePosts = () => {
  const { data = [] } = useSuspenseQuery({ queryKey: [QUERY_KEYS.allSharePost], queryFn: getAllSharePosts });

  if (!data) {
    // throw new Error("data is undefined");
    console.log("data is undefined");
  }

  return data;
};

export default useGetAllSharePosts;
