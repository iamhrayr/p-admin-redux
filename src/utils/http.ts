import axios from 'axios';

const API_BASE_URL = 'http://localhost:4000/api/'; // TODO: take from configs
const http = axios.create({
  baseURL: API_BASE_URL
});

export default http;
