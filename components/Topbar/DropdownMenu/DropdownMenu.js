import styles from "./DropdownMenu.module.css";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function DropdownMenu({ profileActive }) {
  const [auth, setAuth] = useState();

  useEffect(async () => {
    setAuth(JSON.parse(localStorage.getItem("profile")));
  }, []);
  if (profileActive === false) return null;
  return (
    <div className={styles.profileMenu} tabIndex="0">
      <div>
        {auth ? (
          <div>{auth.result.username}</div>
        ) : (
          <div>Not yet signed in</div>
        )}
      </div>
      <div>Manage your Account</div>
      {auth ? (
        <div>
          <button
            onClick={() => {
              localStorage.clear();
              setAuth(null);
            }}
          >
            Sign Out
          </button>
        </div>
      ) : (
        <div>
          <Link href="/user/signin">Sign In</Link>
        </div>
      )}

      <div>
        <Link href="/user/signup">Sign up</Link>
      </div>
    </div>
  );
}
