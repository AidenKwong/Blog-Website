import ReactDom from "react-dom";
import { publishPosts } from "../api/posts";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { publish } from "../redux/actions/publishedPosts";

import styles from "../styles/modal.module.css";

export default function Modal({ open, formData, onClose }) {
  const dispatch = useDispatch();

  const router = useRouter();
  const handleSubmit = async () => {
    const response = await publishPosts(formData).then(
      dispatch(publish(response.data)).then(
        router.push(`/user/publish_success/${response.data._id}`)
      )
    );
  };
  if (!open) return null;

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
