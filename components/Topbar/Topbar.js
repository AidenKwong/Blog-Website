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

export default function Topbar({
  navbar,
  setNavbar,
  profileActive,
  setProfileActive,
}) {
  return (
    <div className={styles.topbar}>
      <div className={styles.division1}>
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
          <div className={styles.websiteName}>Opinet</div>
        </div>
      </div>

      <div className={styles.division2}>
        <div className={styles.searchbox}>
          <input className={styles.searchbar} placeholder="Search"></input>
          <button className={styles.searchbutton}>
            <IoMdSearch style={{ fontSize: "xx-large" }} />
          </button>
        </div>
      </div>
      <div className={styles.division3}>
        <div className={styles.others}>
          <Link href="/user/publish">
            <div className={styles.othersItem}>
              <IoMdCreate />
            </div>
          </Link>
          <Link href="#">
            <div className={styles.othersItem}>
              <IoMdNotifications />
            </div>
          </Link>

          <div
            className={`${styles.othersItem} ${styles.profileButton} ${
              profileActive && styles.profileButtonActive
            }`}
            onClick={() => {
              setProfileActive(!profileActive);
            }}
          >
            <IoMdPerson />
          </div>

          <Link href="#">
            <div className={styles.othersItem}>
              <IoMdSettings />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
