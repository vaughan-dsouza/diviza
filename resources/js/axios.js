import axios from 'axios'

const instance = axios.create({
    baseURL: '',
});

// Add token to each request if exists
instance.interceptors.request.use((config) => {
const token = localStorage.getItem('token');

if (token) {
    config.headers.Authorization = `Bearer ${token}`;
}

return config;
});
  
export default instance;