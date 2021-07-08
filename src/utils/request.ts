import axios from "axios";
import baseURL from "./baseURL";

const request = axios.create({
  baseURL,
});

request.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return null;
  }
);

export default request;
