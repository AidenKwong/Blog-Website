import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/users",
});
// const API = axios.create({
//   baseURL: "https://blog-website-indevelopment.herokuapp.com/users",
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

export const signUp = (userInfo) => API.post("/signup", userInfo);
export const signIn = (userInfo) => API.post("/signin", userInfo);
