import axios from "axios";

const API_URL_DEV = process.env.API_URL_DEV;

export const authAPI = axios.create({
  baseURL: API_URL_DEV,
  timeout: 10000, // 10s
  headers: {
    "Content-Type": "application/json",
  },
});
