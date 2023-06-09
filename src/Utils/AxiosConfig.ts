import axios from "axios";
import { apiBaseUrl } from "../Constants/Constants";

const request = axios.create({
  baseURL: apiBaseUrl,
});

request.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error.response)
);

export default request;
