import axios from "axios";

const request = axios.create({
  baseURL: "http://127.0.0.1:3001/api",
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
