import axios from 'axios';

// create http client for sending requests to Youtube Data API
const API_BASE_URL = 'http://localhost:4000/api/';
const http = axios.create({
  baseURL: API_BASE_URL
});

export default http;
