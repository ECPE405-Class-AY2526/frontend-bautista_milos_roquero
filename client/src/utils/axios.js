import axios from "axios";
import API_CONFIG from "../config/api.config";

const api = axios.create({
  ...API_CONFIG,
  validateStatus: function (status) {
    return status >= 200 && status < 500; // Handle all non-server errors in the application
  }
});

// Add request interceptor
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      const originalRequest = error.config;
      const status = error.response.status;

      // Handle 401 Unauthorized
      if (status === 401) {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        window.location.href = '/login';
        return Promise.reject(error);
      }

      return Promise.reject(error);
    } else if (error.request) {
      // The request was made but no response was received
      // Try alternative URL if it's a network error
      if (error.code === 'ERR_NETWORK') {
        const hostname = window.location.hostname;
        const alternateURL = `http://${hostname}:5001`;
        
        try {
          const originalRequest = error.config;
          originalRequest.baseURL = alternateURL;
          return await axios(originalRequest);
        } catch (retryError) {
          return Promise.reject(retryError);
        }
      }
      return Promise.reject(error);
    } else {
      // Something happened in setting up the request that triggered an Error
      return Promise.reject(error);
    }
  }
);

export default api;