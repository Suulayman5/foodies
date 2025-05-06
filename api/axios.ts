import axios from "axios";

const API_BASE_URL = "https://mern-auth-c87i.onrender.com/api";
// const API_BASE_URL = "http://localhost:3003/api";

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

export default axiosInstance;