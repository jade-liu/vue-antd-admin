import axios from "axios";

// create an axios instance
const service = axios.create({
  timeout: 5000, // request timeout
});

// respone拦截器
service.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      return response.data;
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default service;
