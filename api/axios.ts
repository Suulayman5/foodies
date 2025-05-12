import axios from "axios";

const API_BASE_URL = "https://mern-auth-c87i.onrender.com/api";
// const API_BASE_URL = "https://mern-auth-one-kappa.vercel.app/api";

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  // timeout: 30000,
});

export default axiosInstance;