import styles from "./CSS/Navigation.module.css";
export const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.ul}>
        <li className={styles.li}>MOVIES</li>
        <li className={styles.li}>TV SERIES</li>
        <li className={styles.li}>CHANNELS</li>
        <li className={styles.li}>APPS</li>
        <li className={styles.li}>SETTINGS</li>
      </ul>
    </nav>
  );
};
