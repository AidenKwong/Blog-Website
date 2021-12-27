import Topbar from "../components/Topbar/Topbar";
import Navbar from "../components/Navbar";
import DropdownMenu from "../components/Topbar/DropdownMenu/DropdownMenu";

import { fetchPosts } from "../api/posts";

import styles from "../styles/main.module.css";

import React, { useState, useEffect } from "react";

export default function Main({ children }) {
  const [navbar, setNavbar] = useState(false);
  const [profileActive, setProfileActive] = useState(false);

  return (
    <div className={navbar ? styles.homeactive : styles.home}>
      <Topbar
        navbar={navbar}
        setNavbar={setNavbar}
        profileActive={profileActive}
        setProfileActive={setProfileActive}
      />
      <div className={styles.overlay} />
      <div className={styles.navbar}>
        <Navbar setNavbar={setNavbar} />
      </div>
      <DropdownMenu
        profileActive={profileActive}
        setProfileActive={setProfileActive}
      />
      <div className={styles.children}>{children}</div>
    </div>
  );
}
