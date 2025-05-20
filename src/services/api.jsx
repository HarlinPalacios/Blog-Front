import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3003/blogAprende/v1", 
  headers: {
    "Content-Type": "application/json", 
  },
});

export default api;