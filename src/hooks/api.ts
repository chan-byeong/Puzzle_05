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

  const access_token = localStorage.getItem("access_token");
  if (access_token !== null) {
    // defaultOptions["Authorization"] = `Bearer ${access_token}`;
    defaultOptions["headers"] = { ...defaultOptions["headers"], Access_Token: access_token };
  }

  const requestOptions = { ...defaultOptions, ...options };

  const response = await fetch(`${BASE_URL}${endpoint}`, requestOptions);

  if (!response.ok) {
    throw new Error(`Error occured ${response.status}, ${response.statusText}`);
  }
  // console.log(response);

  return response.json() as Promise<ResponseType<T>>;
};

export default request;
