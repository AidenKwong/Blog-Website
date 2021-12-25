import axios from "axios";

// const API = axios.create({
//   baseURL: "https://blog-website-indevelopment.herokuapp.com/posts",
// });
const API = axios.create({
  baseURL: "http://localhost:5000/posts",
});

API.interceptors.request.use(
  function (config) {
    if (localStorage.getItem("profile")) {
      config.headers.authorization = `Bearer ${
        JSON.parse(localStorage.getItem("profile")).token
      }`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export const fetchPosts = (page) => API.get("/", { params: { page: page } });

export const viewPost = (id) => API.get("/viewpost", { params: { id: id } });

export const publishPost = (newPost) => API.post("/", newPost);
