"use client";
import { useState } from "react";
import channelsData from "../data/channelsData";
import styles from "./CSS/Iframe.module.css";
import IframeCard from "./IframeCard";
const IframeComponent = () => {
  const [mainPic, setmainPic] = useState("images/beIn sports 1.jpg");
  const [category, setcategory] = useState("sports");
  const [channelName, setchannelName] = useState("BEIN SPORTS1");
  const [others, setothers] = useState("live");
  const [scale, setscale] = useState("1");
  const [contentContainerPosition, setcontentContainerPosition] = useState("1");

  function myFunc(value) {
    setmainPic(`${value.placeHolderImg}`);
    setscale(`1.3`);
    setcontentContainerPosition("0");
    setTimeout(() => {
      setcategory(`${value.category}`);
      setchannelName(`${value.channelName}`);
      setothers(`${value.contentType}`);
      setscale(`1`);
      setcontentContainerPosition("1");
    }, 500);
  }
  return (
    <div className={styles.iframeContainer}>
      <div className={styles.mainImage}>
        <img
          className={styles.iframeImg}
          style={{ transform: `scale(${scale})` }}
          src={mainPic}
          alt=""
        />
      </div>
      <img className={styles.iframeImg} src="./images/filter1.png" alt="" />
      {/* iframe insideContent */}
      <div className={styles.iframeContentContainer}>
        {/* left section */}
        <div
          className={styles.leftContainer}
          style={{ opacity: `${contentContainerPosition}` }}
        >
          <div>
            <div className={styles.category}>{category}</div>
            <div className={styles.movieName}>{channelName}</div>
            <div className={styles.others}>{others}</div>
            <div className={styles.btns}>
              <button>Watch Now</button>
              <button>More info</button>
            </div>
          </div>
        </div>

        {/* right section */}
        <div className={styles.rightContainer}>
          {channelsData.map((e, index) => (
            <IframeCard
              image={e.placeHolderImg}
              title={e.category}
              onClick={() => myFunc(e)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default IframeComponent;
