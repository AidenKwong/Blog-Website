import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";

import { fetchPosts } from "../api/posts";

import styles from "../styles/main.module.css";

import React, { useState, useEffect } from "react";

export default function Main({ children }) {
  const [navbar, setNavbar] = useState(false);
  const [fetchedPosts, setFetchedPosts] = useState();

  useEffect(() => {
    async function fetchData() {
      const data = await fetchPosts();
      setFetchedPosts(data);
    }
    fetchData();
  }, []);

  return (
    <div
      className={navbar ? styles.homeactive : styles.home}
      onBlur={() => setNavbar(false)}
    >
      <Topbar navbar={navbar} setNavbar={setNavbar} />
      <div className={styles.overlay} />

      <div className={styles.navbar}>
        <Navbar />
      </div>
      <div className={styles.children}>{children}</div>
    </div>
  );
}
