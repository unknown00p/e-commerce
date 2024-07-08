// import axios from "axios";
// // import {store} from '../store/store'
// import { refreshToken } from "../store/userSlice"
// // import { Navigate } from "react-router-dom";

// const axiosInstance = axios.create({
//     baseURL: "http://localhost:8080/#/",
//     headers: {
//         'Content-Type': 'application/json',
//     }, withCredentials: true
// }
// )

// // auth.js (continued)

// axiosInstance.interceptors.request.use(
//   (config) => {
//     const accessToken = localStorage.getItem('accessToken'); // Get access token
//     if (accessToken) {
//       config.headers.Authorization = `Bearer ${accessToken}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// axiosInstance.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;
//     if (error.response.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;

//       try {
//         // const refreshToken = localStorage.getItem('refreshToken'); // Get refresh token
//         // const response = await axiosInstance.post('/auth/refresh', { refreshToken }); // Refresh token endpoint

//         const response = await refreshToken()
//         const newAccessToken = response.data.accessToken;

//         localStorage.setItem('accessToken', newAccessToken); // Store new access token

//         originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
//         return axiosInstance(originalRequest); // Retry original request
//       } catch (newAccessToken) {
//         // Handle refresh token failure (e.g., redirect to login)
//         console.error('Failed to refresh token:', newAccessToken);
//         return Promise.reject(newAccessToken);
//       }
//     }
//     return Promise.reject(error);
//   }
// );

// export default axiosInstance