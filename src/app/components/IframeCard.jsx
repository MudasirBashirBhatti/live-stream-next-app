import React from "react";
import styles from "./CSS/IframeCard.module.css";
import { IoIosPlayCircle } from "react-icons/io";
const IframeCard = (props) => {
  return (
    <div className={styles.cardContainer} onClick={props.onClick}>
      <img className={styles.cardImage} src={props.image} alt="" />
      <div className={styles.text}>{props.title}</div>
      <IoIosPlayCircle
        className={styles.playIcon}
        style={{ transform: `translate(-50%, -50%) scale(${props.scale})` }}
      />
    </div>
  );
};

export default IframeCard;
