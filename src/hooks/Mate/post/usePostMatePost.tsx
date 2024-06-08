import { useMutation, useQueryClient } from "@tanstack/react-query";

import request from "../../api";
import { QUERY_KEYS } from "../../Constans";

type FormData = {
  age: string;
  contents: string;
  dayOfWeek: string;
  deliveryFood: number;
  familiarity: number;
  gameAndCall: number;
  gender: string;
  homeProtector: number;
  light: number;
  mbti: string;
  personalTime: number;
  showerEnd: number;
  showerStart: number;
  sleepEnd: number;
  sleepStart: number;
  smoking: string;
  title: string;
  wakeUpEnd: number;
  wakeUpStart: number;
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
