import Link from "next/link";
import styles from "./CSS/Navigation.module.css";
export const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.ul}>
        <Link href="/" className={styles.li}>
          MOVIES
        </Link>
        <Link href="/tv-series" className={styles.li}>
          TV SERIES
        </Link>
        <Link href="/channels" className={styles.li}>
          CHANNELS
        </Link>
        <Link href="/our-apps" className={styles.li}>
          APPS
        </Link>
        <Link href="/more-settings" className={styles.li}>
          SETTINGS
        </Link>
      </ul>
    </nav>
  );
};
