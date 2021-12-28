import styles from "./DropdownMenu.module.css";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function DropdownMenu({ profileActive, setProfileActive }) {
  const [auth, setAuth] = useState();

  useEffect(async () => {
    setAuth(JSON.parse(localStorage.getItem("profile")));
  }, []);
  if (profileActive === false) return null;
  return (
    <div
      className={styles.profileMenu}
      tabIndex="0"
      onBlur={() => setProfileActive(false)}
    >
      <div className={styles.item}>
        {auth ? (
          <div>{auth.result.username}</div>
        ) : (
          <div>Not yet signed in</div>
        )}
      </div>
      {auth ? (
        <div>
          <button
            className={styles.item}
            onClick={() => {
              localStorage.clear();
              setAuth(null);
            }}
          >
            Sign Out
          </button>
        </div>
      ) : (
        <div className={styles.item}>
          <Link href="/user/signin">Sign In</Link>
        </div>
      )}

      <div className={styles.item}>
        <Link href="/user/signup">Sign up</Link>
      </div>
    </div>
  );
}
