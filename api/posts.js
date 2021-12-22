import axios from "axios";
import { route } from "next/dist/server/router";
import { useRouter } from "next/router";

const API = axios.create({
  baseURL: "https://blog-website-indevelopment.herokuapp.com",
});
// const API = axios.create({
//   baseURL: "http://localhost:5000/",
// });

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

export const fetchPosts = (page) =>
  API.get("/posts", { params: { page: page } });

export const publishPost = (newPost) => API.post("/posts", newPost);
