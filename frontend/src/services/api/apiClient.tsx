import axios from "axios";

// Base URL untuk dipakai berulang-ulang
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
