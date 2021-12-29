import styles from "./DropdownMenu.module.css";
import { useState, useEffect } from "react";
import Link from "next/link";
import { IoLogIn, IoLogOut, IoReturnUpForward } from "react-icons/io5";

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
      {auth ? (
        <div className={styles.item}>{auth.result.username}</div>
      ) : (
        <div className={styles.item}>Not yet Signed in</div>
      )}

      {auth ? (
        <div
          className={styles.item}
          onClick={() => {
            localStorage.clear();
            setAuth(null);
          }}
        >
          Sign Out
          <IoLogOut style={{ fontSize: "1.75rem" }} />
        </div>
      ) : (
        <Link href="/user/signin">
          <div className={styles.item}>
            Sign In
            <IoLogIn style={{ fontSize: "1.75rem" }} />
          </div>
        </Link>
      )}

      <Link href="/user/signup">
        <div className={styles.item}>
          Sign up
          <IoReturnUpForward style={{ fontSize: "1.75rem" }} />
        </div>
      </Link>
    </div>
  );
}
