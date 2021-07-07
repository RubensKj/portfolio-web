import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://35.247.213.97:8080/api',
})

export default api;
