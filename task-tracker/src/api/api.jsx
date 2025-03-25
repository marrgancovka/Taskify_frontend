import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api/v1',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Перехватчик запросов (добавление токена)
// api.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       config.headers['Authorization'] = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// Перехватчик ответов (обработка ошибок)
// api.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     console.error('Ошибка запроса:', error.response?.data?.message || error.message);
//     if (error.response?.status === 401) {
//       console.log('Неавторизован! Выполняется выход...');
//       localStorage.removeItem('token');
//       window.location.href = '/login'; // Перенаправление на логин при 401
//     }
//     return Promise.reject(error);
//   }
// );

export default api;
