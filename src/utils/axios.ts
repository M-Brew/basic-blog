import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_AXIOS_BASE_URL;

export default axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});
