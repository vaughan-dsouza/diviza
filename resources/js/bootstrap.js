import axios from 'axios';

window.axios = axios;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

// Set initial token if present
const token = localStorage.getItem('token');
if (token) {
    window.axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

// 🔁 Always inject latest token before every request
// axios.interceptors.request.use(config => {
//     const token = localStorage.getItem('token');
//     if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
// }, error => {
//     return Promise.reject(error);
// });
