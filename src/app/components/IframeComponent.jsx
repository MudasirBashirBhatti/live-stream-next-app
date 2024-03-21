import styles from "./CSS/Iframe.module.css";
import IframeCard from "./IframeCard";
const IframeComponent = () => {
  return (
    <div className={styles.iframeContainer}>
      <img className={styles.iframeImg} src="./images/greenery.jpg" alt="" />
      <img className={styles.iframeImg} src="./images/filter1.png" alt="" />
      {/* iframe insideContent */}
      <div className={styles.iframeContentContainer}>
        {/* left section */}
        <div className={styles.leftContainer}>
          <div>
            <div className={styles.category}>trending</div>
            <div className={styles.movieName}>wonder woman</div>
            <div className={styles.others}>
              action. adventure. fantasy <span>2H 21MIN</span>
            </div>
            <div className={styles.btns}>
              <button>Watch Now</button>
              <button>More info</button>
            </div>
          </div>
        </div>

        {/* right section */}
        <div className={styles.rightContainer}>
          <IframeCard />
          <IframeCard />
          <IframeCard />
          <IframeCard />
          <IframeCard />
          <IframeCard />
          <IframeCard />
          <IframeCard />
        </div>
      </div>
    </div>
  );
};

export default IframeComponent;
