import { useMutation, useQueryClient } from "@tanstack/react-query";
import request from "../api";
import { QUERY_KEYS } from "../Constans";

const applyShare = async (buyPostId: number) => {
  const response = await request(`/buy-posts/${buyPostId}`, { method: "post" });

  return response;
};

function useApplyShare(buyPostId: number) {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: () => applyShare(buyPostId),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.allSharePost] }),
  });
  return mutation;
}

export default useApplyShare;
