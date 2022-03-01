import axios from "axios";

export const publicRequest = axios.create({
  baseURL: import.meta.env.VITE_API_BACKEND,
  params: {
    api_key: import.meta.env.VITE_API_KEY,
  },
});
