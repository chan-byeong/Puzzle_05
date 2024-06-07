import { BASE_URL } from "./Constans";

interface ResponseType<T> {
  msg: string;
  status: number;
  data: T;
}

const request = async <T>(endpoint: string, options?: RequestInit): Promise<ResponseType<T>> => {
  const defaultOptions: RequestInit = {
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  };
  // 토큰이 필요한 요청에만 토큰 넣는 FLOW
  // if (endpoint.includes("/member")) {
  //   const access_token = localStorage.getItem("access_token");
  //   if (access_token !== null) {
  //     defaultOptions["Authorization"] = `Bearer ${access_token}`;
  //   }
  // }
  const access_token = localStorage.getItem("access_token");
  if (access_token !== null) {
    // defaultOptions["Authorization"] = `Bearer ${access_token}`;
    defaultOptions["headers"] = { ...defaultOptions["headers"], Access_Token: access_token };
  }
  console.log(defaultOptions);
  const requestOptions = { ...defaultOptions, ...options };

  const response = await fetch(`${BASE_URL}${endpoint}`, requestOptions);

  if (!response.ok) {
    throw new Error(`Error occured ${response.status}, ${response.statusText}`);
  }

  if (response.status === 204) {
    console.log("데이터 정합성 오류");
  }

  return response.json() as Promise<ResponseType<T>>;
};

export default request;
