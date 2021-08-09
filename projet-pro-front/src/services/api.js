import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4444/api/",
});


api.interceptors.request.use(
  (confing) => {
    const token = localStorage.getItem("token");
    if (token) {
      confing.headers.Authorization = "Bearer " + token;
    }
    return confing;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default api;
