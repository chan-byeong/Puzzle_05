import { useMutation, useQueryClient } from "@tanstack/react-query";

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

interface MutationFnProps {
  matePostId: number;
  post: DetailMatePostType;
}

const putDetailMatePost = async ({ matePostId, post }: MutationFnProps) => {
  const response = await request(`/mate-posts/${matePostId}`, { method: "put", body: JSON.stringify(post) });

  return response;
};

const usePutDetailMatePost = () => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: ({ matePostId, post }: MutationFnProps) => putDetailMatePost({ matePostId, post }),
    onSuccess: (_, variables) =>
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.matePost, variables.matePostId] }),
  });

  return mutate;
};

export default usePutDetailMatePost;
