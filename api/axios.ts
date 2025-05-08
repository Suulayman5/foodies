import axios from "axios";

const API_BASE_URL = "https://mern-auth-c87i.onrender.com/api";

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

export default axiosInstance;