"use client";
import React from "react";
import { RxCross1 } from "react-icons/rx";
import styles from "./CSS/MobileNav.module.css";
import Link from "next/link";
import { useState } from "react";

const MobileNav = (props) => {
  const [activeIndex, setactiveIndex] = useState(0);
  let navElem = [
    {
      href: "/",
      title: "Movies",
    },
    {
      href: "/tv-series",
      title: "TV SERIES",
    },
    {
      href: "/channels",
      title: "CHANNELS",
    },
    {
      href: "/our-apps",
      title: "Apps",
    },
    {
      href: "more-settings",
      title: "Settings",
    },
  ];
  function detect(index) {
    setactiveIndex(index);
  }
  return (
    <div>
      <div
        className={styles.navSlideTop}
        style={{
          left: props.topNavSlidePosition,
          transitionDelay: props.topNavSlideTransitionDelay,
        }}
      >
        <RxCross1 className={styles.cross} onClick={props.crossOnClick} />
        <ul className={styles.ul}>
          {navElem.map((e, index) => (
            <Link
              key={index}
              href={`${e.href}`}
              className={`${styles.li} ${
                activeIndex === index ? styles.active : ""
              }`}
              onClick={() => detect(index)}
            >
              {e.title}
            </Link>
          ))}
        </ul>
      </div>
      <div
        className={styles.navSlide}
        style={{
          left: props.bottomNavSlidePosition,
          transitionDelay: props.bottomNavSlideTransitionDelay,
        }}
      ></div>
    </div>
  );
};

export default MobileNav;
