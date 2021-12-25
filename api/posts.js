import axios from "axios";

// const API = axios.create({
//   baseURL: "https://blog-website-indevelopment.herokuapp.com/posts",
// });
const API = axios.create({
  baseURL: "http://localhost:5000/posts",
});

export const fetchPosts = (page) => API.get("/", { params: { page: page } });

export const viewPost = (id) => API.get("/viewpost", { params: { id: id } });

export const publishPost = (newPost) => API.post("/", newPost);
