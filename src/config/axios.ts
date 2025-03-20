import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:4000/api",
  timeout: 10000, // 10s
  headers: {
    "Content-Type": "application/json",
  },
});
