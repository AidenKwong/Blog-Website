import ReactDom from "react-dom";
import { useRouter } from "next/router";
import { publishPost } from "../api/auth";
import { useState } from "react";

import styles from "../styles/modal.module.css";

export default function Modal({ open, onClose, formData }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  if (!open) return null;

  const handleSubmit = async () => {
    setLoading("loading...");
    await publishPost(formData)
      .then((response) => {
        console.log(response);
        router.push({
          pathname: `/user/publish_success/${response.data._id}`,
          query: {
            Title: response.data.Title,
            Subcategory: response.data.Subcategory,
          },
        });
      })
      .catch((error) => {
        console.log(error);
        setLoading("Publish failed.");
      });
  };

  return ReactDom.createPortal(
    <>
      <div className={styles.OVERLAY_STYLES} />
      <div className={styles.MODAL_STYLES}>
        Do you want to submit this post?
        {loading ? (
          <div>{loading}</div>
        ) : (
          <div className={styles.BUTTON_CHOICES}>
            <button className={styles.BUTTON_CANCEL} onClick={onClose}>
              Cancel
            </button>
            <button className={styles.BUTTON_CONFIRM} onClick={handleSubmit}>
              Confirm
            </button>
          </div>
        )}
      </div>
    </>,
    document.getElementById("portal")
  );
}
