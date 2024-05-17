import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://18.234.83.190",
  withCredentials: true,
});

export default axiosInstance;
