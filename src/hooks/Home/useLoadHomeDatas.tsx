import { useSuspenseQuery } from "@tanstack/react-query";

import request from "../api";

export interface NoticeType {
  noticePostId: number;
  title: string;
  writer: string;
  date: string;
  visits: string;
  url: string;
}

export interface MealType {
  date: string;
  menu: string;
  mealType: string;
  mealTime: string;
}

const requestNotice = async () => {
  const response = await request<NoticeType[]>("/homepage/notice", { method: "get" });

  return response.data;
};

const requestMeal = async () => {
  const response = await request<MealType[]>("/homepage/meal");

  return response.data;
};

function useLoadHomeDatas(which: string) {
  let requestFn;
  if (which === "notice") requestFn = requestNotice;
  else requestFn = requestMeal;

  const { data } = useSuspenseQuery({ queryKey: ["homePage-data"], queryFn: requestFn });

  return data;
}

export default useLoadHomeDatas;
