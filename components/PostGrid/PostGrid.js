import styles from "./postsGrid.module.css";
import no_image from "../../public/images/no-image.jpg";
import moment from "moment";

import { useCallback, useRef } from "react";
import Link from "next/link";

export default function PostGrid({ posts, setPage, loading }) {
  const observer = useRef();
  const lastPostRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPage((page) => page + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading]
  );

  return (
    <div>
      <div className={styles.postGrid}>
        {posts.map((post, index) => {
          if (posts.length === index + 1) {
            return (
              <Link href={`/thread/${post._id}`} key={post._id}>
                <div className={styles.card} ref={lastPostRef}>
                  {post.Thumbnail == "" ? (
                    <img src={no_image.src} className={styles.thumbnail} />
                  ) : (
                    <img className={styles.thumbnail} src={post.Thumbnail} />
                  )}
                  <div className={styles.title}>{post.Title}</div>
                  <span className={styles.publisher}>{post.Publisher}</span>
                  <span className={styles.subcategory}>{post.Subcategory}</span>
                  <span className={styles.publishedAt}>
                    {moment(post.publishedAt).fromNow()}
                  </span>
                </div>
              </Link>
            );
          } else {
            return (
              <Link href={`/thread/${post._id}`} key={post._id}>
                <div className={styles.card}>
                  {post.Thumbnail == "" ? (
                    <img src={no_image.src} className={styles.thumbnail} />
                  ) : (
                    <img className={styles.thumbnail} src={post.Thumbnail} />
                  )}
                  <div className={styles.title}>{post.Title}</div>
                  <span className={styles.publisher}>{post.Publisher}</span>
                  <span className={styles.subcategory}>{post.Subcategory}</span>
                  <span className={styles.publishedAt}>
                    {moment(post.publishedAt).fromNow()}
                  </span>
                </div>
              </Link>
            );
          }
        })}
        {loading && <div>Loading...</div>}
      </div>
    </div>
  );
}
