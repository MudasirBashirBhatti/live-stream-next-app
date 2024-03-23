"use client";
import { useState } from "react";
import channelsData from "../data/channelsData";
import styles from "./CSS/Iframe.module.css";
import IframeCard from "./IframeCard";
const IframeComponent = () => {
  const [mainPic, setmainPic] = useState("images/beIn sports 1.jpg");
  const [channelUrl, setchannelUrl] = useState(
    "https://diflucantab.com/channel.html?id=yayinstar"
  );
  const [category, setcategory] = useState("sports");
  const [channelName, setchannelName] = useState("BEIN SPORTS1");
  const [others, setothers] = useState("sports. football. live.");
  const [moreInfoContent, setmoreInfoContent] = useState(
    "Premier destination for live football matches globally. Exclusive coverage, expert analysis, and thrilling action. Your ultimate football experience!"
  );
  const [scale, setscale] = useState("1");
  const [contentContainerPosition, setcontentContainerPosition] = useState("1");
  const [iframeLeftContainer, setiframeLeftContainer] = useState("0%");
  const [hideContentSection, sethideContentSection] = useState("block");
  const [tvScreen, settvScreen] = useState("-100%");
  const [tvDisplay, settvDisplay] = useState("none");
  const [moreInfoDetail, setmoreInfoDetail] = useState("0px");
  const [moreInfoText, setmoreInfoText] = useState("More Info");
  const [activeCardIndex, setactiveCardIndex] = useState(0);

  // function to hide iframe above content and pictures
  function hideIframeElements() {
    setiframeLeftContainer("-100%");
    setTimeout(() => {
      sethideContentSection("none");
      settvDisplay("block");
    }, 300);
    setTimeout(() => {
      settvScreen("0%");
    }, 600);
  }

  function myFunc(value, index) {
    setchannelUrl(value.channelUrl);
    setscale(`1.3`);
    setcontentContainerPosition("0");

    // hide and show tv
    setiframeLeftContainer("0%");
    sethideContentSection("block");
    settvDisplay("none");
    settvScreen("-100%");
    // hide and show tv end
    setTimeout(() => {
      setmainPic(`${value.placeHolderImg}`);
      setcategory(`${value.category}`);
      setchannelName(`${value.channelName}`);
      setothers(`${value.contentType}`);
      setmoreInfoContent(`${value.description}`);
      setscale(`1`);
      setcontentContainerPosition("1");
    }, 500);

    setactiveCardIndex(index);
  }

  // function for more info button
  function moreInfo() {
    setmoreInfoDetail((prev) => (prev == "0px" ? "100px" : "0px"));
    setmoreInfoText((prev) =>
      prev == "More Info" ? "Hide Info" : "More Info"
    );
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
        <img className={styles.iframeImg} src="./images/filter2.png" alt="" />
      </div>
      {/* iframe insideContent */}
      <div className={styles.iframeContentContainer}>
        {/* left section */}
        <div className={styles.leftContainer}>
          <div
            style={{
              opacity: `${contentContainerPosition}`,
              transform: `translateX(${iframeLeftContainer})`,
              display: `${hideContentSection}`,
              transition: ".3s",
            }}
          >
            <div className={styles.category}>{category}</div>
            <div className={styles.movieName}>{channelName}</div>
            <div className={styles.others}>{others}</div>
            <div className={styles.btns}>
              <button onClick={() => hideIframeElements()}>Watch Now</button>
              <button onClick={() => moreInfo()}>{moreInfoText}</button>
            </div>
            <div
              className={styles.moreInfoContainer}
              style={{ height: `${moreInfoDetail}` }}
            >
              <img src="images/live.png" alt="" />
              <div>{moreInfoContent}</div>
            </div>
          </div>
          {/* tv iframe */}
          <div
            className={styles.iframeOuterStyle}
            style={{
              transform: `translateX(${tvScreen})`,
              display: `${tvDisplay}`,
            }}
          >
            <img src="images/tv screen.png" alt="" />
            <iframe
              className={styles.originalIframe}
              src={channelUrl}
              frameborder="0"
            ></iframe>
          </div>
        </div>

        {/* right section */}
        <div className={styles.rightContainer}>
          {channelsData.map((e, index) => (
            <IframeCard
              image={e.placeHolderImg}
              title={e.category}
              onClick={() => myFunc(e, index)}
              scale={activeCardIndex === index ? "1" : "0"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default IframeComponent;
