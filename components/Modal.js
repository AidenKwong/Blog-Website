import ReactDom from "react-dom";
import { useRouter } from "next/router";
import { publishPost } from "../api/posts";

import styles from "../styles/modal.module.css";

export default function Modal({ open, onClose, formData }) {
  const router = useRouter();

  if (!open) return null;

  const handleSubmit = (e) => {
    publishPost(formData)
      .then((response) =>
        router.push(`/user/publish_success/${response.data.Title}`)
      )
      .catch((error) => console.log(error));
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
