import { useRouter } from "next/router";
import styles from "./publishSuccess.module.css";

export default function id() {
  const router = useRouter();
  const post = router.query;

  return (
    <div className={styles.main}>
      <div className={styles.form}>
        <div className={styles.instruction}>
          {"Congrats! You have successfully publish "}
          <span className={styles.title}>{post.Title}</span> {" in "}
          <span className={styles.title}>{post.Subcategory}</span>.
        </div>
        <button className={styles.button} onClick={() => router.push("/")}>
          Back to Homepage
        </button>
      </div>
    </div>
  );
}
