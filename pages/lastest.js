import Main from "./main";
import { useState, useEffect } from "react";
import { fetchPosts } from "../api/posts";
import styles from "../styles/postsGrid.module.css";

export default function Lastest() {
  const [posts, setPosts] = useState([]);

  useEffect(async () => {
    async function fetchData() {
      const data = await fetchPosts();
      setPosts(data);
    }
    fetchData();
  }, []);
  console.log(posts);
  return (
    <div>
      <Main />
      <div className={styles.postGrid}>
        {posts.map((post) => (
          <div className={styles.card} key={post._id}>
            <img className={styles.thumbnail} src={post.Thumbnail} />
            <div>{post.Title}</div>
            <span>{post.Publisher}</span>
            <span>{new Date(post.publishedAt).toLocaleString()}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
