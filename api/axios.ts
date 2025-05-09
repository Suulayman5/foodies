import axios from "axios";
import axiosRetry from "axios-retry";

const API_BASE_URL = "https://mern-auth-c87i.onrender.com/api";
// const API_BASE_URL = "https://mern-auth-one-kappa.vercel.app/api";

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  // timeout: 30000,
});
axiosRetry(axiosInstance, {
  retries: 3,
  retryDelay: retryCount => retryCount * 1000, // 1s, 2s, 3s
  retryCondition: error =>
    error.code === "ECONNABORTED" || error.message.includes("Network Error"),
});

export default axiosInstance;