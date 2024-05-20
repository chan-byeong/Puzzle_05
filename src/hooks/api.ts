import { BASE_URL } from "./Constans";

const request = async <T>(endpoint: string, options?: RequestInit) => {
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

  return response.json() as Promise<T>;
};

export default request;
