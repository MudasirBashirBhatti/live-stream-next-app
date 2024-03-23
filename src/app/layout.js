"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "./components/Navigation";
import MobileNav from "./components/MobileNav";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import Info from "./components/Info";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [bodyOverflow, setbodyOverflow] = useState("initial");
  const [navSlidePosition, setnavSlidePosition] = useState("-100%");
  const [topSlideDelay, settopSlideDelay] = useState("0s");
  const [bottomSlideDelay, setbottomSlideDelay] = useState("0s");
  const [infoBoxScale, setinfoBoxScale] = useState("scale(0)");
  function showNav() {
    setnavSlidePosition("0%");
    settopSlideDelay(".3s");
    setbodyOverflow("hidden");
    setTimeout(() => {
      settopSlideDelay("0s");
    }, 600);
  }
  function crossClick() {
    setnavSlidePosition((prev) => (prev === "-100%" ? "0%" : "-100%"));
    setbodyOverflow("initial");
    setbottomSlideDelay(".4s");
    setTimeout(() => {
      setbottomSlideDelay("0s");
    }, 600);
  }
  function clickLink() {
    console.log("link");
  }

  useEffect(() => {
    setTimeout(() => {
      setinfoBoxScale("scale(1)");
    }, 6000);
  }, []);

  // info box hide container
  function hideInfoBox() {
    setinfoBoxScale("scale(0)");
  }
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${styles.body}`}
        style={{ overflow: bodyOverflow }}
      >
        <MobileNav
          topNavSlidePosition={navSlidePosition}
          bottomNavSlidePosition={navSlidePosition}
          crossOnClick={crossClick}
          topNavSlideTransitionDelay={topSlideDelay}
          bottomNavSlideTransitionDelay={bottomSlideDelay}
          linkClick={clickLink}
        />
        <Navigation onClick={showNav} />
        {children}
        <div>
          <Info infoCross={hideInfoBox} infoContainerTransform={infoBoxScale} />
        </div>
      </body>
    </html>
  );
}
