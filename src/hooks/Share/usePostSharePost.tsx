import { useMutation, useQueryClient } from "@tanstack/react-query";

import { QUERY_KEYS } from "../Constans";
import request from "../api";

interface SharePostDataType {
  title: string;
  category: string;
  endDay: string;
  endTime: string;
  counts: number;
  price: number;
  link: string;
}
function usePostSharePost() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationKey: ["share-form"],
    mutationFn: (data: SharePostDataType) => request("/buy-posts", { method: "post", body: JSON.stringify(data) }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.allSharePost] }),
  });

  const saveDataToCache = (data: SharePostDataType) => {
    queryClient.setQueryData([QUERY_KEYS.TEMP_SHARE_DATA], data);
  };

  return { mutation, saveDataToCache };
}

export default usePostSharePost;
