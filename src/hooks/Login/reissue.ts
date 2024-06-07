import request from "../api";

export const reissue = async () => {
  const refreshToken = localStorage.getItem("refresh-token");
  const response = await request("/reissue", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${refreshToken}`,
    },
  });

  // TODO: 헤더에 토큰 끼우기 OR 로컬 스토리지나 캐시에 새로운 토큰으로 바꾸기

  return response;
};
