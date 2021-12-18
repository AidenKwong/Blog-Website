import axios from "axios";

const API = axios.create({
  baseURL: "https://blog-website-indevelopment.herokuapp.com",
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

export const fetchPosts = async () => {
  const { data } = await API.get("/posts").catch((error) => console.log(error));

  return data;
};

export const publishPosts = async (post) => {
  const data = await API.post("/posts", post).catch((error) =>
    console.log(error)
  );

  return data;
};
