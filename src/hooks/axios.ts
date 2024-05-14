import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://13.125.48.96",
  withCredentials: true,
});

export default axiosInstance;
