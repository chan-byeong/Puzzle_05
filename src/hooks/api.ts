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
      //'Authorization': `Bearer ${token}`,
    },
  };

  const requestOptions = { ...defaultOptions, ...options };

  const response = await fetch(`${BASE_URL}${endpoint}`, requestOptions);

  if (!response.ok) {
    throw new Error(`Error occured ${response.status}, ${response.statusText}`);
  }

  return response.json() as Promise<ResponseType<T>>;
};

export default request;
