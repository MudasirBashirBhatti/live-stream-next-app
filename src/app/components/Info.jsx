"use client";
import React from "react";
import styles from "./CSS/info.module.css";
import { ImCross } from "react-icons/im";
const Info = (props) => {
  return (
    <div
      className={styles.parent}
      style={{
        transform: `translate(-50%, -50%) ${props.infoContainerTransform}`,
      }}
    >
      <ImCross className={styles.infoCross} onClick={props.infoCross} />
      <div className={styles.siteName}>LiveStreams</div>
      {/* web technoloy */}
      <div className={styles.innerSection}>
        <div className={styles.heading}>Web Technologies:</div>
        <div className={styles.content}>Next.js + Vanila css</div>
      </div>

      {/* web technoloy */}
      <div className={styles.innerSection}>
        <div className={styles.heading}>Web App detail</div>
        <div className={styles.content}>
          web app for live channel streaming, anytime, anywhere. Enjoy seamless
          entertainment!
        </div>
      </div>

      {/* web technoloy */}
      <div className={styles.innerSection}>
        <div className={styles.heading}>Developed By:</div>
        <div className={styles.content}>Mudasir Web Solutions</div>
      </div>

      {/* web technoloy */}
      <div className={styles.innerSection}>
        <div className={styles.heading}>LinkedIn:</div>
        <a
          className={styles.link}
          href="https://www.linkedin.com/in/mudasir-bashir-43b4651b3/"
          target="_blank"
        >
          https://www.linkedin.com/..
        </a>
      </div>
    </div>
  );
};

export default Info;
