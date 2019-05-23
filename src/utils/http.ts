import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  // Method,
  // AxiosResponse
} from 'axios';

const API_BASE_URL = 'http://localhost:4000/api/'; // TODO: take from configs
const http: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

export { AxiosRequestConfig };
export default http;
