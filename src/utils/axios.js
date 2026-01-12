import axios from 'axios';

// Tạo axios instance với base URL từ environment variables
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'https://jsonplaceholder.typicode.com'
});

export default api;