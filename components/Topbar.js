import Image from "next/image";
import Link from "next/link";

import styles from "../styles/topbar.module.css";

import {
  IoMdMenu,
  IoMdSearch,
  IoMdCreate,
  IoMdNotifications,
  IoMdPerson,
  IoMdSettings,
} from "react-icons/io";

import websitelogo from "../public/images/speech-bubble.png";

export default function Topbar({ navbar, setNavbar }) {
  return (
    <div>
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
            <div className={styles.othersItem}>
              <IoMdCreate style={{ fontSize: "xx-large" }} />
            </div>
          </Link>

          <IoMdNotifications style={{ fontSize: "xx-large" }} />
          <IoMdPerson style={{ fontSize: "xx-large" }} />
          <IoMdSettings style={{ fontSize: "xx-large" }} />
        </div>
      </div>
    </div>
  );
}
