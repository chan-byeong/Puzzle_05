import { useSuspenseQuery } from "@tanstack/react-query";

import request from "../api";

interface NoticePost {
  title: string;
  writer: string;
  date: string;
  visits: string;
  url: string;
}

const getNotices = async () => {
  const response = await request<NoticePost[]>("/notice/kulhouse_notice");
  return response.data;
};

function useGetNotices() {
  const { data } = useSuspenseQuery({ queryKey: ["notices"], queryFn: getNotices });

  return data;
}

export default useGetNotices;
