import ReactDom from "react-dom";
import { publishPosts } from "../api/posts";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { publish } from "../redux/actions/publishedPosts";

import styles from "../styles/modal.module.css";

export default function Modal({ open, formData, onClose }) {
  if (!open) return null;

  const dispatch = useDispatch();

  const router = useRouter();
  const handleSubmit = async () => {
    const response = await publishPosts(formData);
    if (response.status == 201) {
      dispatch(publish(response.data));
      router.push(`/user/publish_success/${response.data._id}`);
    }
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
