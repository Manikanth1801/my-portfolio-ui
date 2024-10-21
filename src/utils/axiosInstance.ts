// src/utils/axiosInstance.ts

import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://polls-app-okna.onrender.com',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add a request interceptor to include the token
axiosInstance.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem('access_token');
        if (accessToken) {
            config.headers['Authorization'] = 'Bearer ' + accessToken;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export default axiosInstance;
