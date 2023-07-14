import axios from "axios";

const api = axios.create({
  baseURL: "https://myblog-mern-blog-website.onrender.com",
});

export default api;
