import styles from "./thread.module.css";

import { useRouter } from "next/router";
import { viewPost } from "../../api/posts";

export const getServerSideProps = async (context) => {
  const res = await viewPost(context.params.id);

  if (!res) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  `enter code here`;
  return {
    props: { post: res.data }, // will be passed to the page component as props
  };
};

export default function Post({ post }) {
  const router = useRouter();
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
          <img src={post.Thumbnail} />
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
