import axios from "axios";

export const publicRequest = axios.create({
  baseURL: process.env.REACT_APP_API_BACKEND,
  params: {
    api_key: process.env.REACT_APP_API_KEY,
  },
});
