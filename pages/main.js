import Topbar from "../components/Topbar/Topbar";
import Navbar from "../components/Navbar";

import { fetchPosts } from "../api/posts";

import styles from "../styles/main.module.css";

import React, { useState, useEffect } from "react";

export default function Main({ children }) {
  const [navbar, setNavbar] = useState(false);

  return (
    <div className={navbar ? styles.homeactive : styles.home}>
      <Topbar navbar={navbar} setNavbar={setNavbar} />
      <div className={styles.overlay} />
      <div className={styles.navbar}>
        <Navbar setNavbar={setNavbar} />
      </div>
      <div className={styles.children}>{children}</div>
    </div>
  );
}
