import React from "react";
import styles from "./CSS/IframeCard.module.css";
const IframeCard = () => {
  return (
    <div className={styles.cardContainer}>
      <img className={styles.cardImage} src="./images/nature.jpg" alt="" />
      <div className={styles.text}>most popular</div>
    </div>
  );
};

export default IframeCard;
