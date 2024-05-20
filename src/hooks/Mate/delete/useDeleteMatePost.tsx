import { useMutation, useQueryClient } from "@tanstack/react-query";

import request from "../../api";
import { QUERY_KEYS } from "../../Constans";

const deleteMatePost = async (matePostId: number) => {
  const response = await request(`/mate-posts/${matePostId}`, { method: "delete" });
  return response;
};

const useDeleteMatePost = () => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: (matePostId: number) => deleteMatePost(matePostId),
    onSuccess: (_, variables) => queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.matePost, variables] }),
  });

  return mutate;
};

export default useDeleteMatePost;
