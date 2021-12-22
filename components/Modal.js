import ReactDom from "react-dom";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { publish } from "../redux/actions/publishedPosts";

import styles from "../styles/modal.module.css";

export default function Modal({ open, onClose, formData }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const publishedPost = useSelector((state) => state.publishedPost);
  if (!open) return null;

  const handleSubmit = (e) => {
    dispatch(publish(formData)).then(router.push("/user/publish_success"));
  };

  return ReactDom.createPortal(
    <>
      <div className={styles.OVERLAY_STYLES} />
      <div className={styles.MODAL_STYLES}>
        Do you want to submit this post?
        <div className={styles.BUTTON_CHOICES}>
          <button className={styles.BUTTON_CANCEL} onClick={onClose}>
            Cancel
          </button>
          <button className={styles.BUTTON_CONFIRM} onClick={handleSubmit}>
            Confirm
          </button>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}
