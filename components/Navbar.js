import styles from "../styles/navbar.module.css";
import Link from "next/link";

import {
  IoMdHome,
  IoMdPeople,
  IoIosChatboxes,
  IoMdFlame,
} from "react-icons/io";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.section1}>
        <Link href="/main">
          <div className={styles.navitem}>
            <IoMdHome style={{ fontSize: "xx-large" }} />
            <span>Home</span>
          </div>
        </Link>
        <Link href="/following">
          <div className={styles.navitem}>
            <IoMdPeople style={{ fontSize: "xx-large" }} />
            <span>Following</span>
          </div>
        </Link>
        <Link href="/lastest">
          <div className={styles.navitem}>
            <IoIosChatboxes style={{ fontSize: "xx-large" }} />
            <span>Lastest</span>
          </div>
        </Link>
        <Link href="/trending">
          <div className={styles.navitem}>
            <IoMdFlame style={{ fontSize: "xx-large" }} />
            <span>Trending</span>
          </div>
        </Link>
      </div>
      <div>
        <div className={styles.sectiontitle}>News</div>

        <div className={styles.section2}>
          <Link href="/news/currentaffairs">
            <div className={styles.navitem}>Current affairs</div>
          </Link>
          <Link href="/news/world">
            <div className={styles.navitem}>World</div>
          </Link>
          <Link href="/news/politics">
            <div className={styles.navitem}>Politics</div>
          </Link>
          <Link href="/news/finance">
            <div className={styles.navitem}>Finance</div>
          </Link>
          <Link href="/news/entertainment">
            <div className={styles.navitem}>Entertainment</div>
          </Link>
        </div>
      </div>
      <div>
        <div className={styles.sectiontitle}>Tech</div>

        <div className={styles.section2}>
          <Link href="/tech/mobiles">
            <div className={styles.navitem}>Mobiles</div>
          </Link>
          <Link href="/tech/hardware">
            <div className={styles.navitem}>Hardware</div>
          </Link>
          <Link href="/tech/apps">
            <div className={styles.navitem}>Apps</div>
          </Link>
          <Link href="/tech/software">
            <div className={styles.navitem}>Software</div>
          </Link>
          <Link href="/tech/others">
            <div className={styles.navitem}>Others</div>
          </Link>
        </div>
      </div>
      <div>
        <div className={styles.sectiontitle}>Life Styles</div>

        <div className={styles.section2}>
          <Link href="/lifestyles/creative">
            <div className={styles.navitem}>Creative</div>
          </Link>
          <Link href="/lifestyles/health">
            <div className={styles.navitem}>Health</div>
          </Link>
          <Link href="/lifestyles/food">
            <div className={styles.navitem}>Food</div>
          </Link>
          <Link href="/lifestyles/relationships">
            <div className={styles.navitem}>Relationships</div>
          </Link>
          <Link href="/lifestyles/travel">
            <div className={styles.navitem}>Travel</div>
          </Link>
          <Link href="/lifestyles/career">
            <div className={styles.navitem}>Career</div>
          </Link>
          <Link href="/lifestyles/event">
            <div className={styles.navitem}>Event</div>
          </Link>
          <Link href="/lifestyles/school">
            <div className={styles.navitem}>School</div>
          </Link>
        </div>
      </div>

      <div>
        <div className={styles.sectiontitle}>Hobbies</div>

        <div className={styles.section2}>
          <Link href="/hobbies/sport">
            <div className={styles.navitem}>Sport</div>
          </Link>
          <Link href="/hobbies/game">
            <div className={styles.navitem}>Game</div>
          </Link>
          <Link href="/hobbies/tv">
            <div className={styles.navitem}>TV</div>
          </Link>
          <Link href="/hobbies/anime">
            <div className={styles.navitem}>Anime</div>
          </Link>
          <Link href="/hobbies/photography">
            <div className={styles.navitem}>Photography</div>
          </Link>
          <Link href="/hobbies/music">
            <div className={styles.navitem}>Music</div>
          </Link>
          <Link href="/hobbies/car">
            <div className={styles.navitem}>Car</div>
          </Link>
          <Link href="/hobbies/pet">
            <div className={styles.navitem}>Pet</div>
          </Link>
          <Link href="/hobbies/fashion">
            <div className={styles.navitem}>Fashion</div>
          </Link>
          <Link href="/hobbies/livestreaming">
            <div className={styles.navitem}>Live Streaming</div>
          </Link>
          <Link href="/hobbies/18+">
            <div className={styles.navitem}>18+</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
