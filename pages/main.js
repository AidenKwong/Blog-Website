import Topbar from "../components/Topbar/Topbar";
import Navbar from "../components/Navbar";
import DropdownMenu from "../components/Topbar/DropdownMenu/DropdownMenu";
import { authCheck } from "../api/auth";
import ReactDom from "react-dom";

import styles from "../styles/main.module.css";

import React, { useState, useEffect } from "react";

export default function Main({ children }) {
  const [navbar, setNavbar] = useState(false);
  const [profileActive, setProfileActive] = useState(false);
  const [auth, setAuth] = useState();

  useEffect(async () => {
    if (localStorage.getItem("profile")) {
      await authCheck().catch((err) => {
        console.log(err);
        setAuth(false);
        localStorage.clear();
      });
    }
  }, []);
  if (auth === false)
    return ReactDom.createPortal(
      <>
        <div className={styles.OVERLAY_STYLES} />
        <div className={styles.MODAL_STYLES}>
          Your session expired. Try Log in again.
          <div className={styles.BUTTON_CHOICES}>
            <button
              className={styles.BUTTON_CONFIRM}
              onClick={() => setAuth(true)}
            >
              Confirm
            </button>
          </div>
        </div>
      </>,
      document.getElementById("portal")
    );

  return (
    <div className={styles.home}>
      <Topbar
        navbar={navbar}
        setNavbar={setNavbar}
        profileActive={profileActive}
        setProfileActive={setProfileActive}
      />
      {navbar ? (
        <div>
          <div className={styles.overlay} onClick={() => setNavbar(false)} />
          <div className={styles.navbar}>
            <Navbar navbar={navbar} setNavbar={setNavbar} />
          </div>
        </div>
      ) : null}

      <DropdownMenu
        profileActive={profileActive}
        setProfileActive={setProfileActive}
      />
      <div className={styles.children}>{children}</div>
    </div>
  );
}
