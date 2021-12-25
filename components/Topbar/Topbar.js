import Image from "next/image";
import Link from "next/link";

import styles from "./topbar.module.css";

import { useState, useEffect } from "react";
import { authCheck } from "../../api/auth";

import {
  IoMdMenu,
  IoMdSearch,
  IoMdCreate,
  IoMdNotifications,
  IoMdPerson,
  IoMdSettings,
} from "react-icons/io";

import websitelogo from "../../public/images/speech-bubble.png";

export default function Topbar({ navbar, setNavbar }) {
  const [profileActive, setProfileActive] = useState(false);
  const [auth, setAuth] = useState();

  useEffect(async () => {
    setAuth(JSON.parse(localStorage.getItem("profile")));
  }, []);

  return (
    <div className={styles.topbar}>
      <div className={styles.logobox}>
        <button
          className={styles.navbarbutton}
          onClick={() => setNavbar(!navbar)}
        >
          <IoMdMenu style={{ fontSize: "xx-large" }} />
        </button>
        <div className={styles.logo}>
          <Image src={websitelogo} width={40} height={40} quality={100} />
        </div>
      </div>
      <div className={styles.searchbox}>
        <input className={styles.searchbar} placeholder="Search"></input>
        <button className={styles.searchbutton}>
          <IoMdSearch style={{ fontSize: "xx-large" }} />
        </button>
      </div>

      <div className={styles.others}>
        <Link href="/user/publish">
          <button className={styles.othersItem}>
            <IoMdCreate />
          </button>
        </Link>
        <Link href="/user/publish">
          <button className={styles.othersItem}>
            <IoMdNotifications />
          </button>
        </Link>

        <button
          className={`${styles.othersItem} ${styles.profileButton} ${
            profileActive && styles.profileButtonActive
          }`}
          onClick={() => {
            setProfileActive(!profileActive);
          }}
        >
          <IoMdPerson />
        </button>
        <div
          className={styles.profileMenu}
          tabIndex="0"
          onBlur={() => {
            setProfileActive(false);
          }}
        >
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

        <Link href="/user/publish">
          <button className={styles.othersItem}>
            <IoMdSettings />
          </button>
        </Link>
      </div>
    </div>
  );
}
