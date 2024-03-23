"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "./components/Navigation";
import MobileNav from "./components/MobileNav";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [bodyOverflow, setbodyOverflow] = useState("initial");
  const [navSlidePosition, setnavSlidePosition] = useState("-100%");
  const [topSlideDelay, settopSlideDelay] = useState("0s");
  const [bottomSlideDelay, setbottomSlideDelay] = useState("0s");
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
  return (
    <html lang="en">
      <body className={inter.className} style={{ overflow: bodyOverflow }}>
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
      </body>
    </html>
  );
}
