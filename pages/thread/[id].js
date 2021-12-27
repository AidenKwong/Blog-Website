import styles from "./thread.module.css";

import { useRouter } from "next/router";
import { viewPost } from "../../api/posts";
import { useEffect, useState } from "react";

export default function Post() {
  const router = useRouter();
  const postId = router.query.id;
  const [post, setPost] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(async () => {
    await viewPost(postId).then((res) => {
      setPost(res.data);
      setLoading(false);
    });
  }, []);
  if (loading) return <div>loading...</div>;
  return (
    <div className={styles.main}>
      <span onClick={() => router.back()} className={styles.goBack}>
        Click here to go back
      </span>
      <div className={styles.postContainer}>
        <div className={styles.header}>
          <div className={styles.categories}>{post.Category}</div>
          <div className={styles.categories}>{post.Subcategory}</div>
        </div>
        <div className={styles.container}>
          <div className={styles.title}>{post.Title}</div>
          <div className={styles.publisher}>{post.Publisher}</div>
          <img className={styles.thumbnail} src={post.Thumbnail} />
          <div className={styles.content}>{post.Content}</div>
          <div>
            <span className={styles.like}>{post.likeCount}</span>
            <span>{post.dislikeCount}</span>
          </div>

          <div>#{post.tags}</div>
        </div>
      </div>
    </div>
  );
}
