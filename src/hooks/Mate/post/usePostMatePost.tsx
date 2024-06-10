import { useMutation, useQueryClient } from "@tanstack/react-query";

import request from "../../api";
import { QUERY_KEYS } from "../../Constans";

type FormData = {
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
};

function usePostMatePost() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationKey: ["mate-form"],
    mutationFn: (data: FormData) => request("/mate-posts", { method: "post", body: JSON.stringify(data) }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.allMatePosts] }),
  });

  return mutation;
}

export default usePostMatePost;
