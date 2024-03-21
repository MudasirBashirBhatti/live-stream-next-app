import React from "react";
import styles from "./CSS/IframeCard.module.css";
const IframeCard = (props) => {
  return (
    <div className={styles.cardContainer} onClick={props.onClick}>
      <img className={styles.cardImage} src={props.image} alt="" />
      <div className={styles.text}>{props.title}</div>
    </div>
  );
};

export default IframeCard;
